/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient";
import {AdAcoBody} from '../model/AdAcoBody';
import {AdAcoUpdateBody} from '../model/AdAcoUpdateBody';
import {InlineResponse200} from '../model/InlineResponse200';
import {MaterialStatusUpdateBody} from '../model/MaterialStatusUpdateBody';

/**
* AdAco service.
* @module api/AdAcoApi
* @version 0.1.4
*/
export class AdAcoApi {
  private apiClient: ApiClient;

  /**
   * Constructs a new AdAcoApi.
   * @alias module:api/AdAcoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create an ACO ad. An ACO ad is made up of multiple creative materials for combination and is suitable for A/B testing. To learn more about ACO, see [ACO introduction](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739361169485825). [Ad Aco Create](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739498176618498)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdAcoBody} opts.body AdAco parameters
   */
  adAcoCreate(Access_Token: string, opts: { body?: AdAcoBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adAcoCreate");
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
      '/open_api/v1.3/ad/aco/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get creative materials for an ACO ad, including call-to-actions, texts, ad names, images, or video materials. [Ad Aco Get](https://ads.tiktok.com/marketing_api/docs?id=1739473020978177)
   * @param {String} advertiser_id Advertiser ID.
   * @param {Array.<String>} adgroup_ids A list of ad group IDs. Quantity- 1-100.
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.exclude_field_types_in_response The type of fields that you want to remove from the response.
   * @param {module:api/AdAcoApi~adAcoGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  adAcoGet(advertiser_id: string, adgroup_ids: string[], Access_Token: string, opts: { exclude_field_types_in_response?: string[] } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = null;
    if (advertiser_id === undefined || advertiser_id === null) {
      throw new Error("Missing the required parameter 'advertiser_id' when calling adAcoGet");
    }
    if (adgroup_ids === undefined || adgroup_ids === null) {
      throw new Error("Missing the required parameter 'adgroup_ids' when calling adAcoGet");
    }
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adAcoGet");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'adgroup_ids': this.apiClient.buildCollectionParam(adgroup_ids, 'multi')
    };

    if (opts.exclude_field_types_in_response) {
      queryParams['exclude_field_types_in_response'] = this.apiClient.buildCollectionParam(opts.exclude_field_types_in_response, 'multi');
    }

    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = [];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/ad/aco/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Update the status of creative materials for an ACO ad, including ad texts, images, and video materials [Update materials](https://ads.tiktok.com/marketing_api/docs?id=1739506701165570)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/MaterialStatusUpdateBody} opts.body Ad Aco material status body
   * @param {module:api/AdAcoApi~adAcoMaterialStatusUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  adAcoMaterialStatusUpdate(Access_Token: string, opts: { body?: MaterialStatusUpdateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adAcoMaterialStatusUpdate");
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
      '/open_api/v1.3/ad/aco/material_status/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Modify ACO ad creatives. [Ad Aco Update](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739498037881858)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdAcoUpdateBody} opts.body AdAco parameters.
   */
  adAcoUpdate(Access_Token: string, opts: { body?: AdAcoUpdateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling adAcoUpdate");
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
      '/open_api/v1.3/ad/aco/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
}