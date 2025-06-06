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
import type {FilteringReportIntegratedGet} from '../model/FilteringReportIntegratedGet';
import {InlineResponse200} from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* Reporting service.
* @module api/ReportingApi
* @version 0.1.4
*/
export class ReportingApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new ReportingApi. 
    * @alias module:api/ReportingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Callback function to receive the result of the reportIntegratedGet operation.
     * @callback moduleapi/ReportingApi~reportIntegratedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a synchronous report task.  This endpoint can currently return the reporting data of up to 10,000 advertisements. If your number of advertisements exceeds 10,000, please use campaign_ids / adgroup_ids / ad_ids as a filter to obtain the reporting data of all advertisements in batches. Additionally, with CHUNK mode on, up to 20,000 advertisements can be returned. If you use campaign_ids / adgroup_ids / ad_ids as a filter, you can pass in up to 100 IDs at a time. [Reporting Get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1740302848100353)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} report_type Report type. Enum values- &#x60;BASIC&#x60; (basic report), &#x60;AUDIENCE&#x60; (audience report), &#x60;PLAYABLE_MATERIAL&#x60;  (playable ads report), &#x60;CATALOG&#x60; (DSA report). When &#x60;service_type&#x60; is &#x60;RESERVATION&#x60;, only &#x60;BASIC&#x60; report is supported. When &#x60;service_type&#x60; is &#x60;AUCTION&#x60;, &#x60;BASIC&#x60;, &#x60;AUDIENCE&#x60;, &#x60;PLAYABLE_MATERIAL&#x60;, and &#x60;CATALOG&#x60; reports are all supported.
     * @param {Array.<String>} dimensions Grouping conditions. For example- &#x60;［\&quot;campaign_id\&quot;, \&quot;stat_time_day\&quot;］&#x60; indicates that both &#x60;campaign_id&#x60; and &#x60;stat_time_day&#x60; (days) are grouped. For supported dimensions for each report type, see the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738864835805186).
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {String} opts.service_type Ad service type. Enum values:&#x60;AUCTION&#x60;(Auction Ads), &#x60;RESERVATION&#x60;(Reservation Ads). Default value &#x60;AUCTION&#x60;.
     * @param {String} opts.data_level The data level that you&#x27;d like to query in reports. Required when &#x60;report_type&#x60; is &#x60;BASIC&#x60;,&#x60;AUDIENCE&#x60; or &#x60;CATALOG&#x60;. Enum values &#x60;AUCTION_AD&#x60; Auction Ads, Ad level. &#x60;AUCTION_ADGROUP&#x60; Auction Ads, Ad Group level. &#x60;AUCTION_CAMPAIGN&#x60; Auction Ads, Campaign level. &#x60;AUCTION_ADVERTISER&#x60; Auction Ads, Advertiser level. &#x60;RESERVATION_AD&#x60; Reservation Ads, Ad level. &#x60;RESERVATION_ADGROUP&#x60; Reservation Ads, Ad Group level. RESERVATION_CAMPAIGN&#x60; Reservation Ads, Campaign level. &#x60;RESERVATION_ADVERTISER&#x60; Reservation Ads, Advertiser level.
     * @param {Array.<String>} opts.metrics Metrics to query. Different report types support different metrics.  For supported metrics for each report type, see the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738864835805186).
     * @param {String} opts.order_field Sorting field. All supported metrics (excluding attribute metrics) support sorting. Not sorting by default.
     * @param {String} opts.order_type Sorting order. Enum values- &#x60;ASC&#x60;, &#x60;DESC&#x60;. Default value- &#x60;DESC&#x60;.
     * @param {String} opts.start_date Query start date (closed interval) in the format of &#x60;YYYY-MM-DD&#x60;. The date is based on the ad account time zone. This field is required when &#x60;query_lifetime&#x60; is &#x60;False&#x60;.
     * @param {String} opts.end_date Query end date (closed interval) in the format of &#x60;YYYY-MM-DD&#x60;. The date is based on the ad account time zone. This field is required when &#x60;query_lifetime&#x60; is &#x60;False&#x60;.
     * @param {Array.<module:model/FilteringReportIntegratedGet>} opts.filtering Filtering conditions. Supported filtering conditions vary based on &#x60;service_type&#x60; and &#x60;data_level&#x60;. For filters supported in different report types, refer to the articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738864835805186).
     * @param {Boolean} opts.query_lifetime Whether to request the lifetime metrics.  Default value- &#x60;False&#x60;. If &#x60;query_lifetime&#x60; &#x3D; &#x60;True&#x60;, the &#x60;start_date&#x60; and &#x60;end_date&#x60; parameters will be ignored. The lifetime metric name is the same as the normal one.
     * @param {Number} opts.page Current page number. Default value- &#x60;1&#x60;
     * @param {Number} opts.page_size Pagination size. Value range- 1-1000. Default value- &#x60;10&#x60;.
     * @param {String} opts.query_mode The way data is queried. Enum values- &#x60;REGULAR&#x60;, &#x60;CHUNK&#x60;. Default value- &#x60;REGULAR&#x60;.  With &#x60;CHUNK&#x60; mode on, data can be returned much faster in a more stable way. Meanwhile, pagination will not be working with &#x60;CHUNK&#x60;.
     * @param {module:api/ReportingApi~reportIntegratedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    reportIntegratedGet(
        advertiser_id: string,
        report_type: string,
        dimensions: string[],
        Access_Token: string,
        opts: {
            service_type?: string;
            data_level?: string;
            metrics?: string[];
            order_field?: string;
            order_type?: string;
            start_date?: string;
            end_date?: string;
            filtering?: FilteringReportIntegratedGet[];
            query_lifetime?: boolean;
            page?: number;
            page_size?: number;
            query_mode?: string;
        } = {},
        callback?: (error: string | null, data?: InlineResponse200, response?: any) => void
    ): Promise<InlineResponse200> { // Add return type Promise<InlineResponse200>
        const postBody = null;
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling reportIntegratedGet");
        }
        if (report_type === undefined || report_type === null) {
            throw new Error("Missing the required parameter 'report_type' when calling reportIntegratedGet");
        }
        if (dimensions === undefined || dimensions === null) {
            throw new Error("Missing the required parameter 'dimensions' when calling reportIntegratedGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling reportIntegratedGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'service_type': opts.service_type,
            'data_level': opts.data_level,
            'report_type': report_type,
            'dimensions': dimensions.join(','), // Replace buildCollectionParam
            'metrics': opts.metrics ? opts.metrics.join(',') : undefined, // Replace buildCollectionParam
            'order_field': opts.order_field,
            'order_type': opts.order_type,
            'start_date': opts.start_date,
            'end_date': opts.end_date,
            // Stringify complex filter array for query params
            'filtering': opts.filtering ? JSON.stringify(opts.filtering) : undefined, 
            'query_lifetime': opts.query_lifetime,
            'page': opts.page,
            'page_size': opts.page_size,
            'query_mode': opts.query_mode
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for GET

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        // Remove undefined keys from queryParams
        Object.keys(queryParams).forEach(key => queryParams[key] === undefined && delete queryParams[key]);

        return this.apiClient.callApi(
            '/open_api/v1.3/report/integrated/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
}