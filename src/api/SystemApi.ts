/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* System service.
* @module api/SystemApi
* @version 0.1.4
*/
export class SystemApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new SystemApi. 
    * @alias module:api/SystemApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Submit user feedback [System feedback](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1737168013095937)
     */
    systemFeedback(Access_Token: string, advertiser_id: string, opts: {
        app_name?: string;
        feedback_type?: string;
        feedback_content?: string;
        questionnaire_id?: string;
        options?: any;
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;

        // verify required parameters
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling systemFeedback");
        }
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling systemFeedback");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {};
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, any> = {
            'advertiser_id': advertiser_id,
            'app_name': opts['app_name'],
            'feedback_type': opts['feedback_type'],
            'feedback_content': opts['feedback_content'],
            'questionnaire_id': opts['questionnaire_id'],
            'options': opts['options']
        };

        const authNames: string[] = [];
        const contentTypes: string[] = ['multipart/form-data'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/system/feedback/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}