/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* UserProperty service.
* @module api/UserPropertyApi
* @version 0.1.4
*/
export class UserPropertyApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new UserPropertyApi. 
    * @alias module:api/UserPropertyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Set properties and values for your TikTok app users. [User properties](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739585700402177)
     */
    userProperties(Access_Token: string, opts: {
        app_id?: string;
        external_user_id?: string;
        properties?: Record<string, any>;
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling userProperties");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {};
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, any> = {
            'app_id': opts['app_id'],
            'external_user_id': opts['external_user_id'],
            'properties': opts['properties']
        };

        const authNames: string[] = [];
        const contentTypes: string[] = ['multipart/form-data'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/app/user_properties/update/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}