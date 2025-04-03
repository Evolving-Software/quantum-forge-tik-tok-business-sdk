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
* System service.
* @module api/SystemApi
* @version 0.1.4
*/
export class SystemApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new SystemApi. 
    * @alias module:api/SystemApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Submit user feedback [System feedback](https://ads.tiktok.com/marketing_api/docs?id=1737168013095937)
     * @param {String} Access_Token 
     * @param {String} advertiser_id 
     * @param {Object} opts 
     * @param {String} opts.app_name 
     * @param {String} opts.feedback_type 
     * @param {String} opts.feedback_content 
     * @param {String} opts.questionnaire_id 
     * @param {any} opts.options 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    systemFeedback(Access_Token: string, advertiser_id: string, opts: {
        app_name?: string;
        feedback_type?: string;
        feedback_content?: string;
        questionnaire_id?: string;
        options?: any;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // verify required parameters
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling systemFeedback");
        }
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling systemFeedback");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {}; // Empty for POST with form data
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue | undefined> = { // Use FormValue
            'advertiser_id': advertiser_id,
            'app_name': opts.app_name,
            'feedback_type': opts.feedback_type,
            'feedback_content': opts.feedback_content,
            'questionnaire_id': opts.questionnaire_id,
            'options': opts.options ? JSON.stringify(opts.options) : undefined // Stringify complex options
        };

        // Remove undefined keys from formParams
        Object.keys(formParams).forEach(key => formParams[key] === undefined && delete formParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = ['multipart/form-data'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/system/feedback/', 'POST',
            pathParams, queryParams, headerParams, formParams as Record<string, FormValue>, postBody, // Cast formParams
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }
}