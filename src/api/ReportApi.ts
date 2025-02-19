/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Report service.
* @module api/ReportApi
* @version 0.1.4
*/
export class ReportApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new ReportApi. 
    * @alias module:api/ReportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Create an async task to generate a report for an advertiser based on the conditions and dimensions you specify. [Integration Report Create Task](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738864915188737)
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
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling integrationReportTaskCreate");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {};
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, any> = {
            'advertiser_id': opts['advertiser_id'],
            'report_type': opts['report_type'],
            'dimensions': opts.dimensions ? this.apiClient.buildCollectionParam(opts.dimensions, 'multi') : undefined,
            'filters': opts['filters'],
            'start_date': opts['start_date'],
            'end_date': opts['end_date'],
            'metrics': opts.metrics ? this.apiClient.buildCollectionParam(opts.metrics, 'multi') : undefined,
            'data_level': opts['data_level'],
            'order_field': opts['order_field'],
            'order_type': opts['order_type'],
            'page': opts['page'],
            'page_size': opts['page_size'],
            'service_type': opts['service_type'],
            'report_name': opts['report_name']
        };

        const authNames: string[] = [];
        const contentTypes: string[] = ['multipart/form-data'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/report/integrated/task/create/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Download an integration report by task ID. [Integration Report Download](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738864920856577)
     */
    integrationReportTaskDownload(task_id: string, Access_Token: string, opts: {
        advertiser_id?: string;
    } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameters
        if (task_id === undefined || task_id === null) {
            throw new Error("Missing the required parameter 'task_id' when calling integrationReportTaskDownload");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling integrationReportTaskDownload");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, any> = {
            'task_id': task_id,
            'advertiser_id': opts['advertiser_id']
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
            '/open_api/v1.3/report/integrated/task/download/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Get the status of one or more specified report tasks. [Integration Report Status](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738864918865922)
     */
    integrationReportTaskStatus(advertiser_id: string, task_id: string[], Access_Token: string, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        let postBody = null;

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
        const queryParams: Record<string, any> = {
            'advertiser_id': advertiser_id,
            'task_id': this.apiClient.buildCollectionParam(task_id, 'multi')
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
            '/open_api/v1.3/report/integrated/task/status/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}