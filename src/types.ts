/*
* Copyright 2023 TikTok Pte. Ltd.
*
* This source code is licensed under the MIT license found in
* the LICENSE file in the root directory of this source tree.
*/

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface Authentication {
    type?: 'basic' | 'oauth2' | 'apiKey';
    apiKey?: string;
    apiKeyPrefix?: string;
    name?: string;
    username?: string;
    password?: string;
    accessToken?: string;
    in?: 'header' | 'query';
}

export type JsonPrimitive = string | number | boolean | null;
export type JsonArray = JsonValue[];
export type JsonObject = { [key: string]: JsonValue };
export type JsonValue = JsonPrimitive | JsonArray | JsonObject;

export interface ApiResponse<T = unknown> {
    data?: T;
    code: number;
    message: string;
    request_id?: string;
}

export interface RequestOptions {
    method: HttpMethod;
    headers: Headers;
    body?: BodyInit;
    signal?: AbortSignal;
}

export interface ApiConfig {
    basePath?: string;
    timeout?: number;
    headers?: Record<string, string>;
    authentication?: Record<string, Authentication>;
}

export interface FileParam {
    data: Blob | File;
    name?: string;
    contentType?: string;
}

// Base interface for all models
export interface ModelBase {
    constructFromObject(data: unknown): this;
}

// Interface for model constructor functions
export interface ModelStatic<T extends ModelBase = ModelBase> {
    new (...args: any[]): T;
    fromObject(data: unknown): T;
    constructFromObject(data: unknown): T;
}

// Type literals for primitive types
export type PrimitiveTypeLiteral = 
    | 'String'
    | 'Number'
    | 'Boolean'
    | 'Integer'
    | 'Date'
    | 'Blob'
    | 'Object';

// Array type literals
export type ArrayTypeLiteral =
    | '[String]'
    | '[Number]'
    | '[Boolean]'
    | '[Integer]'
    | '[Date]'
    | '[Blob]'
    | '[Object]';

// Combined type literals
export type TypeLiteral = PrimitiveTypeLiteral | ArrayTypeLiteral;

// Primitive constructors
export type PrimitiveConstructor = 
    | StringConstructor
    | NumberConstructor
    | BooleanConstructor
    | DateConstructor
    | ObjectConstructor;

// Basic type constructors (excluding model constructors)
export type TypeConstructor = 
    | PrimitiveConstructor 
    | typeof Blob;

// Array specification for model types
export interface ModelArraySpec<T extends ModelBase = ModelBase> {
    type: 'array';
    itemType: ModelStatic<T>;
}

// Array specification for primitive types
export interface PrimitiveArraySpec {
    type: 'array';
    itemType: TypeConstructor | PrimitiveTypeLiteral;
}

// Combined array specifications
export type ArraySpec = ModelArraySpec | PrimitiveArraySpec;

// Combined type info
export type TypeInfo = 
    | TypeConstructor 
    | TypeLiteral
    | string[]
    | ModelStatic
    | ArraySpec;

// Basic value types
export type FormValue = string | Blob | File;
export type QueryValue = string | number | boolean | null | undefined;
export type HeaderValue = string;

export interface ApiClientInterface {
    basePath: string;
    timeout: number;
    authentications: Record<string, Authentication>;
    defaultHeaders: Record<string, string>;

    callApi(
        path: string,
        httpMethod: HttpMethod,
        pathParams?: Record<string, string>,
        queryParams?: Record<string, QueryValue>,
        headerParams?: Record<string, HeaderValue>,
        formParams?: Record<string, FormValue>,
        bodyParam?: JsonValue,
        authNames?: string[],
        contentTypes?: string[],
        accepts?: string[],
        returnType?: TypeInfo,
        callback?: (error: Error | null, data?: unknown, response?: Response) => void
    ): Promise<unknown>;
}

// Type guard to check if a type is a primitive constructor
export function isPrimitiveConstructor(type: unknown): type is PrimitiveConstructor {
    return type === String || 
           type === Number || 
           type === Boolean || 
           type === Date || 
           type === Object;
}

// Type guard to check if a type is a model constructor
export function isModelConstructor(type: unknown): type is ModelStatic {
    return typeof type === 'function' && 
           'fromObject' in type && 
           'constructFromObject' in type &&
           'prototype' in type && 
           'constructFromObject' in (type as any).prototype;
}

// Type guard to check if a type is Blob constructor
export function isBlobConstructor(type: unknown): boolean {
    return typeof Blob !== 'undefined' && type === Blob;
}

// Type guard to check if a type is a primitive array spec
export function isPrimitiveArraySpec(type: unknown): type is PrimitiveArraySpec {
    if (typeof type !== 'object' || type === null) return false;
    const spec = type as PrimitiveArraySpec;
    return spec.type === 'array' && 
           (isPrimitiveConstructor(spec.itemType) || 
            isBlobConstructor(spec.itemType) ||
            typeof spec.itemType === 'string');
}

// Type guard to check if a type is a model array spec
export function isModelArraySpec(type: unknown): type is ModelArraySpec {
    if (typeof type !== 'object' || type === null) return false;
    const spec = type as ModelArraySpec;
    return spec.type === 'array' && isModelConstructor(spec.itemType);
}

// Type guard to check if a type is an array specification
export function isArraySpec(type: unknown): type is ArraySpec {
    return isPrimitiveArraySpec(type) || isModelArraySpec(type);
}

// Type guard to check if a type is a type literal
export function isTypeLiteral(type: unknown): type is TypeLiteral {
    return typeof type === 'string' && [
        'String', 'Number', 'Boolean', 'Integer', 'Date', 'Blob', 'Object',
        '[String]', '[Number]', '[Boolean]', '[Integer]', '[Date]', '[Blob]', '[Object]'
    ].includes(type);
}

// Type guard to check if a type is a primitive type literal
export function isPrimitiveTypeLiteral(type: unknown): type is PrimitiveTypeLiteral {
    return typeof type === 'string' && [
        'String', 'Number', 'Boolean', 'Integer', 'Date', 'Blob', 'Object'
    ].includes(type);
}

// Type guard to check if a type is an array type literal
export function isArrayTypeLiteral(type: unknown): type is ArrayTypeLiteral {
    return typeof type === 'string' && [
        '[String]', '[Number]', '[Boolean]', '[Integer]', '[Date]', '[Blob]', '[Object]'
    ].includes(type);
}

// Parse array type literal
export function parseArrayTypeLiteral(literal: string): PrimitiveTypeLiteral | undefined {
    if (isArrayTypeLiteral(literal)) {
        const innerType = literal.slice(1, -1) as PrimitiveTypeLiteral;
        return innerType;
    }
    return undefined;
}

// Helper to create an array type specification
export function createArraySpec<T extends ModelBase>(itemType: ModelStatic<T>): ModelArraySpec<T>;
export function createArraySpec(itemType: TypeConstructor | PrimitiveTypeLiteral): PrimitiveArraySpec;
export function createArraySpec(itemType: any): ArraySpec {
    return { type: 'array', itemType };
}

// Export type aliases for backward compatibility
export type ModelConstructor<T extends ModelBase = ModelBase> = ModelStatic<T>;