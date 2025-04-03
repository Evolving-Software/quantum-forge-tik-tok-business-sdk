import { type ApiClientInterface, type ApiConfig, type ApiResponse, type Authentication, type FileParam, type FormValue, type HttpMethod, type JsonValue, type QueryValue, type RequestOptions, type TypeInfo, type ArraySpec, isModelConstructor, isBlobConstructor, isPrimitiveConstructor, isTypeLiteral, parseArrayTypeLiteral, isArraySpec, type HeaderValue } from "./types";

class ApiClient implements ApiClientInterface {
    basePath: string;
    authentications: Record<string, Authentication>;
    defaultHeaders: Record<string, string>;
    timeout: number;
    private cache: boolean;
    static instance: ApiClient;

    constructor(config?: ApiConfig) {
        this.basePath = config?.basePath ?? 'https://business-api.tiktok.com';
        this.authentications = config?.authentication ?? {};
        this.defaultHeaders = {
            "Business-SDK": "1",
            "SDK-Language": "Deno",
            "SDK-Version": "0.1.4",
            ...config?.headers
        };
        this.timeout = config?.timeout ?? 60000;
        this.cache = true;
    }

    /**
    * Returns a string representation for a parameter.
    */
    paramToString(param: unknown): string {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return String(param);
    }

    /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    */
    buildUrl(path: string, pathParams: Record<string, string> = {}): string {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }

        let url = this.basePath + path;
        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            let value;
            if (Object.prototype.hasOwnProperty.call(pathParams, key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });

        return url;
    }

    /**
    * Checks whether the given content type represents JSON.
    */
    isJsonMime(mime: string): boolean {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json';
    }

    /**
    * Chooses a content type from the given array, with JSON preferred.
    */
    jsonPreferredMime(contentTypes: string[]): string {
        for (const contentType of contentTypes) {
            if (contentType && this.isJsonMime(contentType)) {
                return contentType;
            }
        }
        return '';
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    */
    isFileParam(param: unknown): param is Blob | File {
        return param instanceof Blob || param instanceof File;
    }

    /**
    * Normalizes parameter values.
    */
    normalizeParams(params: Record<string, unknown>): Record<string, string> {
        const newParams: Record<string, string> = {};
        for (const [key, value] of Object.entries(params)) {
            if (value != null) {
                if (Array.isArray(value) || typeof value === 'object') {
                    newParams[key] = JSON.stringify(value);
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }
        return newParams;
    }

    /**
    * Collection format separator strategies.
    */
    static CollectionFormatEnum = {
        CSV: ',',
        SSV: ' ',
        TSV: '\t',
        PIPES: '|',
        MULTI: 'multi'
    } as const;

    /**
    * Applies authentication headers to the request.
    */
    applyAuthToHeaders(headers: Headers, authNames: string[]): void {
        authNames.forEach((authName) => {
            const auth = this.authentications[authName];
            if (!auth) return;

            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        const encoded = btoa(`${auth.username || ''}:${auth.password || ''}`);
                        headers.set('Authorization', `Basic ${encoded}`);
                    }
                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        if (auth.apiKeyPrefix && auth.name) {
                            headers.set(auth.name, `${auth.apiKeyPrefix} ${auth.apiKey}`);
                        } else if (auth.name) {
                            headers.set(auth.name, auth.apiKey);
                        }
                    }
                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        headers.set('Authorization', `Bearer ${auth.accessToken}`);
                    }
                    break;
            }
        });
    }

    /**
    * Invokes the REST service using fetch.
    */
    async callApi(
        path: string,
        httpMethod: HttpMethod,
        pathParams: Record<string, string> = {},
        queryParams: Record<string, QueryValue> = {},
        headerParams: Record<string, HeaderValue> = {},
        formParams: Record<string, FormValue> = {},
        bodyParam?: JsonValue,
        authNames: string[] = [],
        contentTypes: string[] = [],
        accepts: string[] = [],
        returnType?: TypeInfo,
        _callback?: (error: Error | null, data?: unknown, response?: Response) => void
    ): Promise<unknown> {
        const url = new URL(this.buildUrl(path, pathParams));
        const method = httpMethod;

        // Add query parameters
        if (method === 'GET' && this.cache === false) {
            url.searchParams.append('_', String(Date.now()));
        }
        Object.entries(this.normalizeParams(queryParams)).forEach(([key, value]) => {
            if (value != null) {
                url.searchParams.append(key, value);
            }
        });

        // Prepare headers
        const headers = new Headers({
            ...this.defaultHeaders,
            ...this.normalizeParams(headerParams)
        });

        // Set content type and accept headers
        const contentType = this.jsonPreferredMime(contentTypes) || 'application/json';
        headers.set('Content-Type', contentType);

        const acceptType = this.jsonPreferredMime(accepts);
        if (acceptType) {
            headers.set('Accept', acceptType);
        }

        // Apply authentication
        this.applyAuthToHeaders(headers, authNames);

        // Prepare request body
        let body: RequestOptions['body'] = undefined;
        if (contentType === 'application/x-www-form-urlencoded') {
            body = new URLSearchParams(this.normalizeParams(formParams)).toString();
        } else if (contentType === 'multipart/form-data') {
            const formData = new FormData();
            for (const [key, value] of Object.entries(formParams)) {
                if (this.isFileParam(value)) {
                    formData.append(key, value);
                } else {
                    formData.append(key, this.paramToString(value));
                }
            }
            body = formData;
        } else if (bodyParam !== undefined) {
            body = JSON.stringify(bodyParam);
        }

        // Handle request timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await fetch(url.toString(), {
                method,
                headers,
                body,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data: unknown;
            if (isBlobConstructor(returnType)) {
                data = await response.blob();
            } else if (returnType === String) {
                data = await response.text();
            } else {
                const text = await response.text();
                try {
                    data = text ? JSON.parse(text) : null;
                } catch {
                    data = text;
                }
            }

            return returnType ? ApiClient.convertToType(data, returnType) : data;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    /**
     * Parses an ISO-8601 string representation of a date value.
     */
    static parseDate(str: string): Date {
        return new Date(str);
    }

    /**
     * Converts a value to the specified type.
     */
    static convertToType(data: unknown, type: TypeInfo): unknown {
        if (data === null || data === undefined) {
            return data;
        }

        // Handle string array type
        if (Array.isArray(type) && type.every(t => typeof t === 'string')) {
            return type;
        }

        // Handle array specifications
        if (isArraySpec(type)) {
            if (!Array.isArray(data)) {
                return [ApiClient.convertToType(data, type.itemType)];
            }
            return data.map(item => ApiClient.convertToType(item, type.itemType));
        }

        // Handle array type literals
        if (isTypeLiteral(type)) {
            const innerType = parseArrayTypeLiteral(type);
            if (innerType) {
                if (!Array.isArray(data)) {
                    return [ApiClient.convertToType(data, innerType)];
                }
                return data.map(item => ApiClient.convertToType(item, innerType));
            }
            
            switch (type) {
                case 'String': return String(data);
                case 'Number': return Number(data);
                case 'Boolean': return Boolean(data);
                case 'Integer': return parseInt(String(data), 10);
                case 'Date': return ApiClient.parseDate(String(data));
                case 'Blob': return data;
                case 'Object': return data;
                default: return data;
            }
        }

        // Handle primitive types
        if (isPrimitiveConstructor(type)) {
            switch (type) {
                case String: return String(data);
                case Number: return Number(data);
                case Boolean: return Boolean(data);
                case Date: return new Date(data as string);
                case Object: return data;
                default: return data;
            }
        }

        // Handle model types
        if (isModelConstructor(type)) {
            return type.fromObject(data);
        }

        // Handle blob type
        if (isBlobConstructor(type)) {
            return data;
        }

        return data;
    }

    /**
     * Helper method to convert a value using the static method
     */
    convertToType<T>(data: unknown, type: TypeInfo): T {
        return ApiClient.convertToType(data, type) as T;
    }
}

// Create the default instance
const defaultInstance = new ApiClient();
ApiClient.instance = defaultInstance;

// Export both the class and the default instance
export { ApiClient };
export default defaultInstance;
