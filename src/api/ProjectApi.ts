/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Project service.
* @module api/ProjectApi
* @version 0.1.4
*/
export class ProjectApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new ProjectApi. 
    * @alias module:api/ProjectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Get detailed information of projects. [Project get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;100937)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.project_ids Project IDs. The list can contain up to 100 IDs
     * @param {Number} opts.page Current page number. Default value: 1. Value range: ≥ 1
     * @param {Number} opts.page_size Page size. Default value: 10. Value range: 1-100
     * @param {Function} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    projectGet(advertiser_id: string, Access_Token: string, opts: {
        project_ids?: string[];
        page?: number;
        page_size?: number;
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling projectGet");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling projectGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'advertiser_id': advertiser_id,
            'project_ids': opts.project_ids ? this.apiClient.buildCollectionParam(opts.project_ids, 'multi') : undefined,
            'page': opts['page'],
            'page_size': opts['page_size']
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
            '/open_api/v1.3/project/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}