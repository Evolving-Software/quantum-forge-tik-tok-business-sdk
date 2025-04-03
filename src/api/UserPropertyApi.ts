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
* UserProperty service.
* @module api/UserPropertyApi
* @version 0.1.4
*/
export class UserPropertyApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new UserPropertyApi. 
    * @alias module:api/UserPropertyApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Set properties and values for your TikTok app users. [User properties](https://ads.tiktok.com/marketing_api/docs?id=1739585700402177)
     * @param {String} Access_Token 
     * @param {Object} opts 
     * @param {String} opts.app_id 
     * @param {String} opts.external_user_id 
     * @param {Record<string, any>} opts.properties 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    userProperties(Access_Token: string, opts: {
        app_id?: string;
        external_user_id?: string;
        properties?: Record<string, any>;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling userProperties");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {}; // Empty for POST with form data
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue | undefined> = { // Use FormValue
            'app_id': opts.app_id,
            'external_user_id': opts.external_user_id,
            'properties': opts.properties ? JSON.stringify(opts.properties) : undefined // Stringify complex properties object
        };

        // Remove undefined keys from formParams
        Object.keys(formParams).forEach(key => formParams[key] === undefined && delete formParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = ['multipart/form-data'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/app/user_properties/update/', 'POST',
            pathParams, queryParams, headerParams, formParams as Record<string, FormValue>, postBody, // Cast formParams
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }
}