/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Measurement service.
* @module api/MeasurementApi
* @version 0.1.4
*/
export class MeasurementApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new MeasurementApi. 
    * @alias module:api/MeasurementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Get the app list [App list](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1740859313270786)
     */
    appList(advertiser_id: string, Access_Token: string, opts: {
        app_platform_ids?: string[];
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;
        
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling appList");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling appList");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'advertiser_id': advertiser_id,
            'app_platform_ids': opts.app_platform_ids ? this.apiClient.buildCollectionParam(opts.app_platform_ids, 'multi') : undefined
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
            '/open_api/v1.3/app/list/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Get App Events [App events](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1740859338750977)
     */
    appOptimizationEvent(app_id: string, advertiser_id: string, placement: string[], optimization_goal: string, 
    Access_Token: string, opts: {
        objective?: string;
        available_only?: boolean;
        is_skan?: boolean;
        app_promotion_type?: string;
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;

        // Verify required parameters
        const requiredParams = {
            app_id,
            advertiser_id,
            placement,
            optimization_goal,
            Access_Token
        };

        Object.entries(requiredParams).forEach(([name, value]) => {
            if (value === undefined || value === null) {
                throw new Error(`Missing the required parameter '${name}' when calling appOptimizationEvent`);
            }
        });

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'app_id': app_id,
            'advertiser_id': advertiser_id,
            'placement': this.apiClient.buildCollectionParam(placement, 'multi'),
            'optimization_goal': optimization_goal,
            'objective': opts['objective'],
            'available_only': opts['available_only'],
            'is_skan': opts['is_skan'],
            'app_promotion_type': opts['app_promotion_type']
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
            '/open_api/v1.3/app/optimization_event/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}