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
* Report service.
* @module api/ReportApi
* @version 0.1.4
*/
export class ReportApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new ReportApi. 
    * @alias module:api/ReportApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Create an async task to generate a report for an advertiser based on the conditions and dimensions you specify. [Integration Report Create Task](https://ads.tiktok.com/marketing_api/docs?id=1738864915188737)
     * @param {String} Access_Token 
     * @param {Object} opts 
     * @param {String} opts.advertiser_id 
     * @param {String} opts.report_type 
     * @param {Array.<String>} opts.dimensions 
     * @param {any} opts.filters 
     * @param {String} opts.start_date 
     * @param {String} opts.end_date 
     * @param {Array.<String>} opts.metrics 
     * @param {String} opts.data_level 
     * @param {String} opts.order_field 
     * @param {String} opts.order_type 
     * @param {Number} opts.page 
     * @param {Number} opts.page_size 
     * @param {String} opts.service_type 
     * @param {String} opts.report_name 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    integrationReportTaskCreate(Access_Token: string, opts: {
        advertiser_id?: string;
        report_type?: string;
        dimensions?: string[];
        filters?: any;
        start_date?: string;
        end_date?: string;
        metrics?: string[];
        data_level?: string;
        order_field?: string;
        order_type?: string;
        page?: number;
        page_size?: number;
        service_type?: string;
        report_name?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling integrationReportTaskCreate");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {}; // Empty for POST with form data
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue | undefined> = { // Use FormValue for potential complex data
            'advertiser_id': opts.advertiser_id,
            'report_type': opts.report_type,
            'dimensions': opts.dimensions ? opts.dimensions.join(',') : undefined, // Replace buildCollectionParam
            'filters': opts.filters ? JSON.stringify(opts.filters) : undefined, // Stringify complex filter object
            'start_date': opts.start_date,
            'end_date': opts.end_date,
            'metrics': opts.metrics ? opts.metrics.join(',') : undefined, // Replace buildCollectionParam
            'data_level': opts.data_level,
            'order_field': opts.order_field,
            'order_type': opts.order_type,
            'page': opts.page?.toString(), // Ensure numbers are strings for form data
            'page_size': opts.page_size?.toString(),
            'service_type': opts.service_type,
            'report_name': opts.report_name
        };

        // Remove undefined keys from formParams
        Object.keys(formParams).forEach(key => formParams[key] === undefined && delete formParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = ['multipart/form-data'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/report/integrated/task/create/', 'POST',
            pathParams, queryParams, headerParams, formParams as Record<string, FormValue>, postBody, // Cast formParams
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Download an integration report by task ID. [Integration Report Download](https://ads.tiktok.com/marketing_api/docs?id=1738864920856577)
     * @param {String} task_id 
     * @param {String} Access_Token 
     * @param {Object} opts 
     * @param {String} opts.advertiser_id 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    integrationReportTaskDownload(task_id: string, Access_Token: string, opts: {
        advertiser_id?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // verify the required parameters
        if (task_id === undefined || task_id === null) {
            throw new Error("Missing the required parameter 'task_id' when calling integrationReportTaskDownload");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling integrationReportTaskDownload");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'task_id': task_id,
            'advertiser_id': opts.advertiser_id
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
            '/open_api/v1.3/report/integrated/task/download/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Get the status of one or more specified report tasks. [Integration Report Status](https://ads.tiktok.com/marketing_api/docs?id=1738864918865922)
     * @param {String} advertiser_id 
     * @param {Array.<String>} task_id 
     * @param {String} Access_Token 
     * @param {Callback} callback 
     * @returns {Promise<InlineResponse200>}
     */
    integrationReportTaskStatus(advertiser_id: string, task_id: string[], Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;

        // verify the required parameters
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling integrationReportTaskStatus");
        }
        if (task_id === undefined || task_id === null) {
            throw new Error("Missing the required parameter 'task_id' when calling integrationReportTaskStatus");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling integrationReportTaskStatus");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'task_id': task_id.join(',') // Replace buildCollectionParam
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
            '/open_api/v1.3/report/integrated/task/status/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback inline
        ) as Promise<InlineResponse200>; // Cast return type
    }
}