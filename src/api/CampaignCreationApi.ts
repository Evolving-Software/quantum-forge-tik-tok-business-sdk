/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
// Import the default instance and rename it for clarity
import ApiClientInstance from "../ApiClient";
// Import the interface type
import { ApiClientInterface } from "@/types";
// Import required model types
import type { CampaignCreateBody } from '../model/CampaignCreateBody';
import type { CampaignStatusUpdateBody } from '../model/CampaignStatusUpdateBody';
import type { CampaignUpdateBody } from '../model/CampaignUpdateBody';
import type { FilteringCampaignGet } from '../model/FilteringCampaignGet';
import { InlineResponse200 } from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* CampaignCreation service.
* @module api/CampaignCreationApi
* @version 0.1.4
*/
export class CampaignCreationApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new CampaignCreationApi. 
    * @alias module:api/CampaignCreationApi
    * @class
    * @param {ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Callback function to receive the result of the campaignCreate operation.
     * @callback moduleapi/CampaignCreationApi~campaignCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To create a campaign. To advertise on TikTok Ads, you need to create a campaign and set the Advertising objectives and budget. A regular campaign can contain one or more ad groups. [Campaign Create](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739318962329602)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignCreateBody} opts.body Campaign create body parameters
     * @param {module:api/CampaignCreationApi~campaignCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    campaignCreate(Access_Token: string, opts: { body?: CampaignCreateBody } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling campaignCreate");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/campaign/create/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any,
            authNames, contentTypes, accepts, returnType, callback as any
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the campaignGet operation.
     * @callback moduleapi/CampaignCreationApi~campaignGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all campaigns for an ad account. Optionally, you can use filters in your request to return only certain campaigns. [Campaign get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739315828649986)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/FilteringCampaignGet} opts.filtering Filtering Parameters
     * @param {Number} opts.page Current page
     * @param {Number} opts.page_size Page size
     * @param {Array.<String>} opts.fields Supported values include&#x60;campaign_id &#x60;, &#x60; campaign_name &#x60;, &#x60; advertiser_id &#x60;, &#x60;budget &#x60;, &#x60;budget_mode &#x60;, &#x60;status &#x60;, &#x60;operation_status&#x60;, &#x60;objective &#x60;, &#x60;objective_type &#x60;, &#x60;create_time &#x60;, &#x60;modify_time&#x60;, &#x60;is_new_structure&#x60;, &#x60;campaign_app_profile_page_state&#x60; , &#x60;special_industries&#x60;, &#x60;secondary_status&#x60;.For the exhaustive of the fields, see the Response section. When not specified, all fields are returned by default.
     * @param {module:api/CampaignCreationApi~campaignGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    campaignGet(advertiser_id: string, Access_Token: string, opts: {
        filtering?: FilteringCampaignGet;
        page?: number;
        page_size?: number;
        fields?: string[];
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling campaignGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling campaignGet");
        }

        const pathParams = {};
        const queryParams = {
            'advertiser_id': advertiser_id,
            'filtering': opts.filtering ? JSON.stringify(opts.filtering) : undefined, // Stringify complex objects for query
            'page': opts['page'],
            'page_size': opts['page_size'],
            'fields': opts.fields ? opts.fields.join(',') : undefined // Replace buildCollectionParam
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/campaign/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the campaignStatusUpdate operation.
     * @callback moduleapi/CampaignCreationApi~campaignStatusUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable, disable or delete a campaign. [Campaign status update](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739320994354178)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignStatusUpdateBody} opts.body Campaign status update body parameters
     * @param {module:api/CampaignCreationApi~campaignStatusUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    campaignStatusUpdate(Access_Token: string, opts: { body?: CampaignStatusUpdateBody } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts.body;
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling campaignStatusUpdate");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/campaign/status/update/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any,
            authNames, contentTypes, accepts, returnType, callback as any
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the campaignUpdate operation.
     * @callback moduleapi/CampaignCreationApi~campaignUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To modify a campaign after it has been created. Information like campaign name, budget, and budget type can be updated. [Campaign Update](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739320422086657)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignUpdateBody} opts.body Campaign update body parameters
     * @param {module:api/CampaignCreationApi~campaignUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    campaignUpdate(Access_Token: string, opts: { body?: CampaignUpdateBody } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts.body;
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling campaignUpdate");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/campaign/update/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any,
            authNames, contentTypes, accepts, returnType, callback as any
        ) as Promise<InlineResponse200>; // Cast return type
    }
}