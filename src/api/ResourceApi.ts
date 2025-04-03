/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
// Import the default instance and rename it for clarity
import ApiClientInstance from "../ApiClient";
// Import the interface type and relevant types
import { ApiClientInterface, type QueryValue, type FormValue } from "@/types";
// Import required model types
import {InlineResponse200} from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* Resource service.
* @module api/ResourceApi
* @version 0.1.4
*/
export class ResourceApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new ResourceApi. 
    * @alias module:api/ResourceApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Get advertiser info for countries or regions, currencies, and timezone data. [Resource advertiser info](https://ads.tiktok.com/marketing_api/docs?id=100669)
     * @param {String} advertiser_id 
     * @param {String} Access_Token 
     * @param {Object} opts 
     * @param {Array.<String>} opts.advertiser_ids 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    advertiserInfo(advertiser_id: string, Access_Token: string, opts: {
        advertiser_ids?: string[];
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;

        // verify required parameters
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling advertiserInfo");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling advertiserInfo");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'advertiser_ids': opts.advertiser_ids ? opts.advertiser_ids.join(',') : undefined // Replace buildCollectionParam
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for GET

        // Remove undefined keys from queryParams
        Object.keys(queryParams).forEach(key => queryParams[key] === undefined && delete queryParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/resource/advertiser/info/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Get all metrics supported by TikTok Ads. [Resource metrics](https://ads.tiktok.com/marketing_api/docs?id=100650)
     * @param {String} advertiser_id 
     * @param {String} Access_Token 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    metrics(advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;

        // verify required parameters
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling metrics");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling metrics");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for GET

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/resource/metrics/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }
}