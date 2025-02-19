/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import * as superagent from "superagent";
import qs from "qs";

interface Authentication {
    type?: string;
    apiKey?: string;
    apiKeyPrefix?: string;
    name?: string;
    username?: string;
    password?: string;
    accessToken?: string;
    in?: 'header' | 'query';
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

/**
* @module ApiClient
* @version 0.1.4
*/

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
class ApiClient {
    // Class property declarations
    private basePath: string;
    private authentications: { [key: string]: Authentication };
    private defaultHeaders: { [key: string]: any };
    private timeout: number;
    private cache: boolean;
    private enableCookies: boolean;
    private agent: superagent.SuperAgent<any> | null = null;
    private requestAgent: any;
    static instance: ApiClient;

    constructor() {
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://business-api.tiktok.com
         */
        this.basePath = 'https://business-api.tiktok.com'.replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        this.authentications = {
        }

        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
        this.defaultHeaders = {"Business-SDK":1, "SDK-Language": "Js", "SDK-Version": "0.1.4"};

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = 60000;

        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        this.cache = true;

        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        this.enableCookies = false;

        /*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
        if (typeof window === 'undefined') {
            this.agent = superagent.agent();
        }

        /*
         * Allow user to override superagent agent
         */
         this.requestAgent = null;

    }

    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */
    paramToString(param: any): string {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }

        return param.toString();
    }

    /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    * NOTE: query parameters are not handled here.
    * @param {String} path The path to append to the base URL.
    * @param {Object} pathParams The parameter values to append.
    * @returns {String} The encoded path with parameter values substituted.
    */
    buildUrl(path: string, pathParams: { [key: string]: string } = {}): string {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }

        var url = this.basePath + path;
        url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }

            return encodeURIComponent(value);
        });

        return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
    isJsonMime(mime: string): boolean {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json';
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
    jsonPreferredMime(contentTypes: string[]): string {
        for (const contentType of contentTypes) {
            if (contentType && this.isJsonMime(contentType)) {
                return contentType;
            }
        }
        return '';  // Return empty string instead of null
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
    isFileParam(param: any): boolean {
        // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
        if (typeof require === 'function') {
            let fs;
            try {
                fs = require('fs');
            } catch (err) {}
            if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                return true;
            }
        }

        // Buffer in Node.js
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }

        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }

        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }

        return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
    normalizeParams(params: { [key: string]: any }): { [key: string]: any } {
        const newParams: { [key: string]: any } = {};
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const value = params[key];
                if (Array.isArray(value)) {
                    newParams[key] = value;
                } else if (typeof value === 'object') {
                    newParams[key] = JSON.stringify(value)
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }
        return newParams;
    }

    /**
    * Enumeration of collection format separator strategies.
    * @enum {String}
    * @readonly
    */
    static CollectionFormatEnum = {
        /**
         * Comma-separated values. Value: <code>csv</code>
         * @const
         */
        CSV: ',',

        /**
         * Space-separated values. Value: <code>ssv</code>
         * @const
         */
        SSV: ' ',

        /**
         * Tab-separated values. Value: <code>tsv</code>
         * @const
         */
        TSV: '\t',

        /**
         * Pipe(|)-separated values. Value: <code>pipes</code>
         * @const
         */
        PIPES: '|',

        /**
         * Native array. Value: <code>multi</code>
         * @const
         */
        MULTI: 'multi'
    };

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
    buildCollectionParam(param: any[], collectionFormat: string): string {
        if (param == null) {
            return '';  // Return empty string instead of null
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                //return the array directly as SuperAgent will handle it as expected
                return JSON.stringify(param);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    }

    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    */
    applyAuthToRequest(request: superagent.SuperAgentRequest, authNames: string[]): void {
        authNames.forEach((authName) => {
            const auth = this.authentications[authName];
            if (!auth) return;

            const data: { [key: string]: string } = {};
            
            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        request.auth(auth.username || '', auth.password || '');
                    }
                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        if (auth.apiKeyPrefix && auth.name) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        } else if (auth.name) {
                            data[auth.name] = auth.apiKey;
                        }
                        if (auth.in === 'header') {
                            request.set(data);
                        }
                    }
                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }
                    break;
                default:
                    if (auth.type) {
                        throw new Error('Unknown authentication type: ' + auth.type);
                    }
            }
        });
    }

    /**
    * Deserializes an HTTP response body into a value of the specified type.
    * @param {Object} response A SuperAgent response object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns A value of the specified type.
    */
    deserialize(response: superagent.Response, returnType: any): any {
        if (response == null || returnType == null || response.status == 204) {
            return null;
        }

        // Rely on SuperAgent for parsing response body.
        // See http://visionmedia.github.io/superagent/#parsing-response-bodies
        var data = response.body;
        if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
            // SuperAgent does not always produce a body; use the unparsed response as a fallback
            data = response.text;
        }

        return ApiClient.convertToType(data, returnType);
    }

    /**
    * Callback function to receive the result of the operation.
    * @callback module:ApiClient~callApiCallback
    * @param {String} error Error message, if any.
    * @param data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

    /**
    * Invokes the REST service using the supplied settings and parameters.
    * @param {String} path The base URL to invoke.
    * @param {String} httpMethod The HTTP method to use.
    * @param {Object.<String, String>} pathParams A map of path parameters and their values.
    * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
    * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
    * @param {Object.<String, Object>} formParams A map of form parameters and their values.
    * @param {Object} bodyParam The value to pass as the request body.
    * @param {Array.<String>} authNames An array of authentication type names.
    * @param {Array.<String>} contentTypes An array of request MIME types.
    * @param {Array.<String>} accepts An array of acceptable response MIME types.
    * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
    * constructor for a complex type.
    * @param {module:ApiClient~callApiCallback} callback The callback function.
    * @returns {Object} The SuperAgent request object.
    */
    callApi(
        path: string,
        httpMethod: string,
        pathParams: { [key: string]: string } = {},
        queryParams: { [key: string]: any } = {},
        headerParams: { [key: string]: string } = {},
        formParams: { [key: string]: any } = {},
        bodyParam?: any,
        authNames: string[] = [],
        contentTypes: string[] = [],
        accepts: string[] = [],
        returnType?: any,
        callback?: (error: any, data?: any, response?: any) => void
    ): Promise<any> {
        const url = this.buildUrl(path, pathParams);
        const method = httpMethod.toLowerCase() as HttpMethod;
        let request: superagent.SuperAgentRequest;

        switch (method) {
            case 'get':
                request = superagent.get(url);
                break;
            case 'post':
                request = superagent.post(url);
                break;
            case 'put':
                request = superagent.put(url);
                break;
            case 'delete':
                request = superagent.delete(url);
                break;
            case 'patch':
                request = superagent.patch(url);
                break;
            default:
                throw new Error(`Invalid HTTP method: ${httpMethod}`);
        }

        // Apply cookies if enabled and agent exists
        const agent = this.agent;
        if (this.enableCookies && agent?.attachCookies) {
            agent.attachCookies(request);
        }

        // Check content type
        if (!request.get('Content-Type')) {
            const contentType = this.jsonPreferredMime(contentTypes);
            if (contentType) {
                request.set('Content-Type', contentType);
            }
        }

        // apply authentications
        this.applyAuthToRequest(request, authNames);

        // set query parameters
        if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
            queryParams['_'] = new Date().getTime();
        }

        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set requestAgent if it is set by user
        if (this.requestAgent) {
          request.agent(this.requestAgent);
        }

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType) {
            // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
            if(contentType != 'multipart/form-data') {
                request.type(contentType);
            }
        } else if (!request.get('Content-Type')) {  // Use get() instead of header access
            request.type('application/json');
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(qs.stringify(this.normalizeParams(formParams)));
        } else if (contentType == 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        request.attach(key, _formParams[key], formParams.file_name || 'default_file_name');
                    } else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        } else if (bodyParam) {
            request.send(bodyParam);
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'Blob') {
          request.responseType('blob');
        } else if (returnType === 'String') {
          request.responseType('string');
        }

        // Attach previously saved cookies, if enabled
        if (this.enableCookies && this.agent?.attachCookies){
            if (typeof window === 'undefined') {
                this.agent.attachCookies(request);
            }
            else {
                request.withCredentials();
            }
        }

        

        return new Promise((resolve, reject) => {
            request.end((error: any, response: superagent.Response) => {
                if (callback) {
                    callback(error, this.deserialize(response, returnType), response);
                }
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(this.deserialize(response, returnType));
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        });
    }

    /**
    * Parses an ISO-8601 string representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
    static parseDate(str: string): Date {
        return new Date(str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
    static convertToType(data: any, type: any): any {
        if (data === null || data === undefined)
            return data

        switch (type) {
            case 'Boolean':
                return Boolean(data);
            case 'Integer':
                return parseInt(data, 10);
            case 'Number':
                return parseFloat(data);
            case 'String':
                return String(data);
            case 'Date':
                return ApiClient.parseDate(data);
            case 'Blob':
                return data;
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type === 'function') {
                    // for model type like: User
                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    // for array type like: ['String']
                    const itemType = type[0];
                    return data.map((item: any) => ApiClient.convertToType(item, itemType));
                } else if (typeof type === 'object') {
                    const result: { [key: string]: any } = {};
                    for (const k in data) {
                        if (data.hasOwnProperty(k)) {
                            result[k] = data[k];
                        }
                    }
                    return result;
                }
        }
        return data;
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
    static constructFromObject(data: any, obj: any, itemType?: any): any {
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = ApiClient.convertToType(data[i], itemType);
            }
        } else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = ApiClient.convertToType(data[k], itemType);
            }
        }
    };
}

/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
export default ApiClient;
