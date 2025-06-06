/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient, { type ApiClient as ApiClientType } from "../ApiClient";
import { type TypeInfo } from '../types';
import { InlineResponse200 } from '../model/InlineResponse200';

/**
* Account service.
* @module api/AccountApi
* @version 0.1.4
*/
export class AccountApi {
  private apiClient: ApiClientType;

  /**
   * Constructs a new AccountApi. 
   * @alias module:api/AccountApi
   * @class
   * @param {ApiClientType} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: ApiClientType) {
    this.apiClient = apiClient ?? ApiClient;
  }

  /**
   * Callback function to receive the result of the advertiserUpdate operation.
   * @callback moduleapi/AccountApi~advertiserUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update an ad account [Advertiser Update](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739939050770434)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdvertiserUpdateBody} opts.body Advertiser update body parameters
   * @param {module:api/AccountApi~advertiserUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  advertiserUpdate(Access_Token: string, opts: { body?: any } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling advertiserUpdate");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {
      'Access-Token': Access_Token
    };
    let formParams = {};

    let authNames: string[] = [];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType: TypeInfo = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/advertiser/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
}