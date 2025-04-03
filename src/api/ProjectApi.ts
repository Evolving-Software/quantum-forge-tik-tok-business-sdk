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
* Project service.
* @module api/ProjectApi
* @version 0.1.4
*/
export class ProjectApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new ProjectApi. 
    * @alias module:api/ProjectApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Get detailed information of projects. [Project get](https://ads.tiktok.com/marketing_api/docs?id=100937)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.project_ids Project IDs. The list can contain up to 100 IDs
     * @param {Number} opts.page Current page number. Default value: 1. Value range: ≥ 1
     * @param {Number} opts.page_size Page size. Default value: 10. Value range: 1-100
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    projectGet(advertiser_id: string, Access_Token: string, opts: {
        project_ids?: string[];
        page?: number;
        page_size?: number;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling projectGet");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling projectGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'project_ids': opts.project_ids ? opts.project_ids.join(',') : undefined, // Replace buildCollectionParam
            'page': opts.page,
            'page_size': opts.page_size
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for GET

        // Remove undefined keys from queryParams
        Object.keys(queryParams).forEach(key => queryParams[key] === undefined && delete queryParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/project/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
}