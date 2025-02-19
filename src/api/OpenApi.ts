/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Open service.
* @module api/OpenApi
* @version 0.1.4
*/
export class OpenApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new OpenApi. 
    * @alias module:api/OpenApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Get the authorized scopes and corresponding permissions of the access token. [OAuth capability](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373141733378)
     * @param {String} Access_Token 
     * @param {String} app_id 
     * @param {Function} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    oauthCapability(Access_Token: string, app_id: string, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        let postBody = null;

        // Verify required parameters
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling oauthCapability");
        }
        if (app_id === undefined || app_id === null) {
            throw new Error("Missing the required parameter 'app_id' when calling oauthCapability");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'app_id': app_id
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
            '/open_api/v1.3/oauth2/capability/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}