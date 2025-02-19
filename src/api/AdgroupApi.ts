/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {AdgroupCreateBody} from '../model/AdgroupCreateBody';
import {AdgroupStatusUpdateBody} from '../model/AdgroupStatusUpdateBody';
import {AdgroupUpdateBody} from '../model/AdgroupUpdateBody';
import {FilteringAdgroupGet} from '../model/FilteringAdgroupGet';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Adgroup service.
* @module api/AdgroupApi
* @version 0.1.4
*/
export class AdgroupApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create an ad group. Ad groups are where you configure your placements, targeting, bidding, and schedule settings. To create multiple ad groups at the same time, you can include up to 10 ad group objects in the `adgroup_list` field. Each ad group must belong to the same advertiser and campaign. [Ad group create](https://ads.tiktok.com/marketing_api/docs?id=1739499616346114)
   */
  adgroupCreate(Access_Token: string, opts: { body?: AdgroupCreateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
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
      '/open_api/v1.3/adgroup/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get all ad groups from the advertiser. [Ad group get](https://ads.tiktok.com/marketing_api/docs?id=1739314558673922)
   */
  adgroupGet(advertiser_id: string, Access_Token: string, opts: {
    filtering?: FilteringAdgroupGet,
    page?: number,
    page_size?: number,
    fields?: string[]
  } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!advertiser_id) {
      throw new Error("Missing required parameter 'advertiser_id'");
    }
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'filtering': opts['filtering'],
      'page': opts['page'],
      'page_size': opts['page_size']
    };
    
    if (opts.fields) {
      queryParams['fields'] = this.apiClient.buildCollectionParam(opts.fields, 'multi');
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
      '/open_api/v1.3/adgroup/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Enable, disable or delete an ad group. [Ad group status update](https://ads.tiktok.com/marketing_api/docs?id=1739591716326402)
   */
  adgroupStatusUpdate(Access_Token: string, opts: { body?: AdgroupStatusUpdateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
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
      '/open_api/v1.3/adgroup/status/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Modify an ad group's settings such as targeting, placements, scheduling, bidding optimization. [Ad group update](https://ads.tiktok.com/marketing_api/docs?id=1739591716326402)
   */
  adgroupUpdate(Access_Token: string, opts: { body?: AdgroupUpdateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
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
      '/open_api/v1.3/adgroup/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
}