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
import type {TargetingCategoryRecommendBody} from '../model/TargetingCategoryRecommendBody';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* RecommendTool service.
* @module api/RecommendToolApi
* @version 0.1.4
*/
export class RecommendToolApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new RecommendToolApi. 
    * @alias module:api/RecommendToolApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
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
    ): Promise<InlineResponse200> { // Add return type Promise<InlineResponse200>
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolTargetingCategoryRecommend");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {};
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for JSON body

        const authNames: string[] = [];
        const contentTypes: string[] = ['application/json'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/tool/targeting_category/recommend/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
}