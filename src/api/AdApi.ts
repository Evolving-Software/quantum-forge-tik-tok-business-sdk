/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import { ApiClientInterface } from "@/types";
import DefaultApiClient, { ApiClient } from "../ApiClient"; // Import both default and named class
import type {AdCreateBody} from '../model/AdCreateBody';
import type {AdStatusUpdateBody} from '../model/AdStatusUpdateBody';
import type {AdUpdateBody} from '../model/AdUpdateBody';
import type {FilteringAdGet} from '../model/FilteringAdGet';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Ad service.
* @module api/AdApi
* @version 0.1.5
*/
export class AdApi {
  private apiClient: ApiClientInterface;

  /**
   * Constructs a new AdApi.
   * @alias module:api/AdApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: ApiClientInterface) {
    this.apiClient = apiClient || ApiClient.instance; // Use the imported ApiClient class here
  }
  /**
   * Callback function to receive the result of the adGet operation.
   * @callback moduleapi/AdApi~adGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the data of regular ads and ACO ads. [Ad get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1735735588640770)
   * @param {String} advertiser_id Advertiser ID
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringAdGet} opts.filtering Filters on the data. This parameter is an array of filter objects.
   * @param {Number} opts.page Current page number
   * @param {Number} opts.page_size Page size
   * @param {Array.<String>} opts.fields Fields that you want to get. For the list of fields that you can specify, see the fields under &#x60;list&#x60; in the response. If not set, all fields are returned by default.
   * @param {module:api/AdApi~adGetCallback} callback The callback function, accepting three arguments: error, data, response
   * Upload your ad creatives (pictures, videos, texts, call-to-action) and create an ad. For different placements, the creative formats and requirements are different. Upload your ad creatives according to the placement requirements. Each ad group can have up to 20 ads. See here to learn about how to create ads. [Ad create](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739953377508354)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdCreateBody} opts.body Ad create body parameters
   * @param {module:api/AdApi~adCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  adCreate(Access_Token: string, opts: { body?: AdCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) { // Correct callback signature
    const postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adCreate");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/ad/create/', 'POST', pathParams, queryParams, headerParams, formParams, postBody as any, // Cast postBody
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the adGet operation.
   * @callback moduleapi/AdApi~adGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the data of regular ads and ACO ads. [Ad get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1735735588640770)
   * @param {String} advertiser_id Advertiser ID
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringAdGet} opts.filtering Filters on the data. This parameter is an array of filter objects.
   * @param {Number} opts.page Current page number
   * @param {Number} opts.page_size Page size
   * @param {Array.<String>} opts.fields Fields that you want to get. For the list of fields that you can specify, see the fields under &#x60;list&#x60; in the response. If not set, all fields are returned by default.
   * @param {module:api/AdApi~adGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  adGet(advertiser_id: string, Access_Token: string, opts: {
    filtering?: FilteringAdGet,
    page?: number,
    page_size?: number,
    fields?: string[]
  } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) { // Correct callback signature
    if (advertiser_id === undefined || advertiser_id === null) {
      throw new Error("Missing the required parameter 'advertiser_id' when calling adGet");
    }
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adGet");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'filtering': opts['filtering'],
      'page': opts['page'],
      'page_size': opts['page_size']
    };
    if (opts.fields) {
      queryParams['fields'] = opts.fields; // Assign directly
    }

    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};
    const postBody = null;

    const authNames: string[] = [];
    const contentTypes: string[] = [];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/ad/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the adStatusUpdate operation.
   * @callback moduleapi/AdApi~adStatusUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * To enable, disable or delete an ad or ads [Ad status update](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739953422970882)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdStatusUpdateBody} opts.body Ad status update body parameters
   * @param {module:api/AdApi~adStatusUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  adStatusUpdate(Access_Token: string, opts: { body?: AdStatusUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) { // Correct callback signature
    const postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adStatusUpdate");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/ad/status/update/', 'POST', pathParams, queryParams, headerParams, formParams, postBody as any, // Cast postBody
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the adUpdate operation.
   * @callback moduleapi/AdApi~adUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Modify your custom ad creatives such as call-to-action, ad name, text image and video material. To update ACO ads, use the /ad/aco/update/ endpoint. [Ad update](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739953422970882)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdUpdateBody} opts.body Ad create body parameters
   * @param {module:api/AdApi~adUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  adUpdate(Access_Token: string, opts: { body?: AdUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) { // Correct callback signature
    const postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adUpdate");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/ad/update/', 'POST', pathParams, queryParams, headerParams, formParams, postBody as any, // Cast postBody
      authNames, contentTypes, accepts, returnType, callback
    );
  }
}