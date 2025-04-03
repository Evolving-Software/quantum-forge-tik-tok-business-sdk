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
* Measurement service.
* @module api/MeasurementApi
* @version 0.1.4
*/
export class MeasurementApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new MeasurementApi. 
    * @alias module:api/MeasurementApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Get the app list [App list](https://ads.tiktok.com/marketing_api/docs?id=1740859313270786)
     * @param {String} advertiser_id 
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.app_platform_ids 
     * @param {Callback} callback The callback function
     * @returns {Promise<InlineResponse200>}
     */
    appList(advertiser_id: string, Access_Token: string, opts: {
        app_platform_ids?: string[];
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling appList");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling appList");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'app_platform_ids': opts.app_platform_ids ? opts.app_platform_ids.join(',') : undefined // Replace buildCollectionParam
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
            '/open_api/v1.3/app/list/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Get App Events [App events](https://ads.tiktok.com/marketing_api/docs?id=1740859338750977)
     * @param {String} app_id 
     * @param {String} advertiser_id 
     * @param {Array.<String>} placement 
     * @param {String} optimization_goal 
     * @param {String} Access_Token 
     * @param {Object} opts 
     * @param {String} opts.objective 
     * @param {Boolean} opts.available_only 
     * @param {Boolean} opts.is_skan 
     * @param {String} opts.app_promotion_type 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    appOptimizationEvent(app_id: string, advertiser_id: string, placement: string[], optimization_goal: string, 
    Access_Token: string, opts: {
        objective?: string;
        available_only?: boolean;
        is_skan?: boolean;
        app_promotion_type?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // Verify required parameters
        const requiredParams = {
            app_id,
            advertiser_id,
            placement,
            optimization_goal,
            Access_Token
        };

        for (const [name, value] of Object.entries(requiredParams)) {
            if (value === undefined || value === null) {
                 throw new Error(`Missing the required parameter '${name}' when calling appOptimizationEvent`);
            }
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'app_id': app_id,
            'advertiser_id': advertiser_id,
            'placement': placement.join(','), // Replace buildCollectionParam
            'optimization_goal': optimization_goal,
            'objective': opts.objective,
            'available_only': opts.available_only,
            'is_skan': opts.is_skan,
            'app_promotion_type': opts.app_promotion_type
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
            '/open_api/v1.3/app/optimization_event/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
}