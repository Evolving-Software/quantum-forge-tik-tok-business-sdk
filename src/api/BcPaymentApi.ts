/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient";
import {BcTransferBody} from '../model/BcTransferBody';
import {InlineResponse200} from '../model/InlineResponse200';

interface QueryParams {
  [key: string]: string | number | boolean | any[] | undefined;
}

interface FormParams {
  [key: string]: string | number | boolean | any | undefined;
}

/**
* BCPayment service.
* @module api/BCPaymentApi
* @version 0.1.4
*/
export class BCPaymentApi {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Get balance of ad accounts in a Business Center [Business Center Balance get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739939156300802)
   */
  bcBalanceGet(bc_id: string, advertiser_ids: string[], Access_Token: string, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!bc_id || !advertiser_ids || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: QueryParams = {
      'bc_id': bc_id
    };

    if (advertiser_ids.length > 0) {
      queryParams['advertiser_ids'] = this.apiClient.buildCollectionParam(advertiser_ids, 'multi');
    }

    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: FormParams = {};
    const postBody = null;

    const authNames: string[] = [];
    const contentTypes: string[] = [];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/balance/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get the transaction records of ad accounts in a Business Center [Business Center Transaction records get](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739939156300802)
   */
  bcTransactionGet(bc_id: string, Access_Token: string, opts: {
    start_date?: string,
    end_date?: string,
    page?: number,
    page_size?: number,
    trans_type?: string,
    advertiser_ids?: string[]
  } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!bc_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: QueryParams = {
      'bc_id': bc_id,
      'start_date': opts.start_date,
      'end_date': opts.end_date,
      'page': opts.page,
      'page_size': opts.page_size,
      'trans_type': opts.trans_type
    };

    if (opts.advertiser_ids && opts.advertiser_ids.length > 0) {
      queryParams['advertiser_ids'] = this.apiClient.buildCollectionParam(opts.advertiser_ids, 'multi');
    }

    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: FormParams = {};
    const postBody = null;

    const authNames: string[] = [];
    const contentTypes: string[] = [];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/transaction/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Transfer money between ad accounts in a Business Center [Business Center Transfer](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739939156300802)
   */
  bcTransfer(Access_Token: string, opts: { body?: BcTransferBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: QueryParams = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: FormParams = {};
    const postBody = opts['body'];

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/transfer/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
}