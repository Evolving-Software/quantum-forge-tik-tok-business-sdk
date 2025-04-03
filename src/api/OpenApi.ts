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
* Open service.
* @module api/OpenApi
* @version 0.1.4
*/
export class OpenApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new OpenApi. 
    * @alias module:api/OpenApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Get the authorized scopes and corresponding permissions of the access token. [OAuth capability](https://ads.tiktok.com/marketing_api/docs?id=1738373141733378)
     * @param {String} Access_Token 
     * @param {String} app_id 
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    oauthCapability(Access_Token: string, app_id: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // Verify required parameters
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling oauthCapability");
        }
        if (app_id === undefined || app_id === null) {
            throw new Error("Missing the required parameter 'app_id' when calling oauthCapability");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'app_id': app_id
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
            '/open_api/v1.3/oauth2/capability/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Ensure cast is inline
        ) as Promise<InlineResponse200>; // Cast return type
    }
}