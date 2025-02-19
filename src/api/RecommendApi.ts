/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {BidRecommendBody} from '../model/BidRecommendBody';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Recommend service.
* @module api/RecommendApi
* @version 0.1.4
*/
export class RecommendApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new RecommendApi. 
    * @alias module:api/RecommendApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Get recommended bid within specified bid range. [Bid recommend](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739473063234626)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/BidRecommendBody} opts.body Bid recommend body parameters
     * @param {Function} callback The callback function, accepting three arguments: error, data, response
     */
    bidRecommend(Access_Token: string, opts: { body?: BidRecommendBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        let postBody = opts['body'];
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling bidRecommend");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {};
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, any> = {};

        const authNames: string[] = [];
        const contentTypes: string[] = ['application/json'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/bid/recommend/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}