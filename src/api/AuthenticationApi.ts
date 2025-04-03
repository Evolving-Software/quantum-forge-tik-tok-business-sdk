/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import { ApiClientInterface } from "@/types";
import ApiClient from "../ApiClient";
import { InlineResponse200 } from '../model/InlineResponse200';
import ApiClientInstance from "../ApiClient"; // Renamed default import for clarity

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 0.1.4
*/
export class AuthenticationApi {
  private apiClient: ApiClientInterface;

  constructor(apiClient?: ApiClientInterface) {
    this.apiClient = apiClient || ApiClientInstance;
  }


  /**
   * Get the access token by auth code. [Access token](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162)
   */
  getAccessToken(app_id: string, secret: string, auth_code: string, callback?: (error: Error | null, data?: InlineResponse200, response?: Response) => void) {
    if (!app_id || !secret || !auth_code) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {};
    const formParams: Record<string, any> = {
      'app_id': app_id,
      'auth_code': auth_code,
      'secret': secret
    };
    const postBody = null;

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/oauth2/access_token/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody, // Cast callback type for compatibility
      authNames, contentTypes, accepts, returnType, callback as any // TODO: Improve ApiClient type to avoid cast
    );
  }

  /**
   * Callback function to receive the result of the oauth2AdvertiserGet operation.
   * @callback moduleapi/AuthenticationApi~oauth2AdvertiserGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a list of advertisers that have granted you permission to manage their accounts. [Authentication Oauth2 Advertiser Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1738455508553729)
   * @param {String} app_id 
   * @param {String} secret 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {module:api/AuthenticationApi~oauth2AdvertiserGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */ // TODO: This JSDoc seems outdated or incorrect based on the TS signature
  oauth2AdvertiserGet(app_id: string, secret: string, Access_Token: string, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {

    const postBody = null;
    // verify the required parameter 'app_id' is set
    if (app_id === undefined || app_id === null) {
      throw new Error("Missing the required parameter 'app_id' when calling oauth2AdvertiserGet");
    }
    // verify the required parameter 'secret' is set
    if (secret === undefined || secret === null) {
      throw new Error("Missing the required parameter 'secret' when calling oauth2AdvertiserGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling oauth2AdvertiserGet");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'app_id': app_id, 'secret': secret
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
      '/open_api/v1.3/oauth2/advertiser/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback as any // Cast maintained here as well
    );
  }

}
// Removed extra closing brace