/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {InlineResponse200} from '../model/InlineResponse200';
import {TargetingCategoryRecommendBody} from '../model/TargetingCategoryRecommendBody';

/**
* RecommendTool service.
* @module api/RecommendToolApi
* @version 0.1.4
*/
export class RecommendToolApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new RecommendToolApi. 
    * @alias module:api/RecommendToolApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the toolTargetingCategoryRecommend operation.
     * @callback moduleapi/RecommendToolApi~toolTargetingCategoryRecommendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get recommended interest and action categories [Tool targeting category](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1736275204260866)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/TargetingCategoryRecommendBody} opts.body Tool recommend body parameters
     * @param {module:api/RecommendToolApi~toolTargetingCategoryRecommendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    toolTargetingCategoryRecommend(
        Access_Token: string, 
        opts: {
            body?: TargetingCategoryRecommendBody;
        } = {}, 
        callback?: (error: string | null, data?: InlineResponse200, response?: any) => void
    ) {
        let postBody = opts['body'];
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolTargetingCategoryRecommend");
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
            '/open_api/v1.3/tool/targeting_category/recommend/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}