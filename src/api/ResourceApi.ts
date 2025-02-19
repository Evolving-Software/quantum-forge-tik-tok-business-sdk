/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Resource service.
* @module api/ResourceApi
* @version 0.1.4
*/
export class ResourceApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new ResourceApi. 
    * @alias module:api/ResourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Get advertiser info for countries or regions, currencies, and timezone data. [Resource advertiser info](https://ads.tiktok.com/marketing_api/docs?id&#x3D;100669)
     */
    advertiserInfo(advertiser_id: string, Access_Token: string, opts: {
        advertiser_ids?: string[];
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;

        // verify required parameters
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling advertiserInfo");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling advertiserInfo");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'advertiser_id': advertiser_id,
            'advertiser_ids': opts.advertiser_ids ? this.apiClient.buildCollectionParam(opts.advertiser_ids, 'multi') : undefined
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, any> = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/resource/advertiser/info/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Get all metrics supported by TikTok Ads. [Resource metrics](https://ads.tiktok.com/marketing_api/docs?id&#x3D;100650)
     */
    metrics(advertiser_id: string, Access_Token: string, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        let postBody = null;

        // verify required parameters
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling metrics");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling metrics");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'advertiser_id': advertiser_id
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, any> = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/resource/metrics/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}