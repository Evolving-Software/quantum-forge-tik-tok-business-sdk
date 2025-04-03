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
import type {BidRecommendBody} from '../model/BidRecommendBody';
import {InlineResponse200} from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* Recommend service.
* @module api/RecommendApi
* @version 0.1.4
*/
export class RecommendApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new RecommendApi. 
    * @alias module:api/RecommendApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Get recommended bid within specified bid range. [Bid recommend](https://ads.tiktok.com/marketing_api/docs?id=1739473063234626)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/BidRecommendBody} opts.body Bid recommend body parameters
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    bidRecommend(Access_Token: string, opts: { body?: BidRecommendBody } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling bidRecommend");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {}; // Empty for POST with JSON body
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for JSON body

        const authNames: string[] = [];
        const contentTypes: string[] = ['application/json'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/bid/recommend/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }
}