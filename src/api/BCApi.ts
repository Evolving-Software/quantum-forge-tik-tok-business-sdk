/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient";
import { ApiClientInterface, QueryValue } from "@/types"; // Added QueryValue
import DefaultApiClient, { ApiClient as ActualApiClient } from "../ApiClient"; // Use named import for class
import type {AdminDeleteBody} from '../model/AdminDeleteBody';
import type {AdvertiserCreateBody} from '../model/AdvertiserCreateBody';
import type {AssetAssignBody} from '../model/AssetAssignBody';
import type {AssetDeleteBody} from '../model/AssetDeleteBody';
import type {AssetGroupCreateBody} from '../model/AssetGroupCreateBody';
import type {AssetGroupDeleteBody} from '../model/AssetGroupDeleteBody';
import type {AssetGroupUpdateBody} from '../model/AssetGroupUpdateBody';
import type {AssetUnassignBody} from '../model/AssetUnassignBody';
import type {BcTransferBody} from '../model/BcTransferBody';
import type {BillingGroupCreateBody} from '../model/BillingGroupCreateBody';
import type {BillingGroupUpdateBody} from '../model/BillingGroupUpdateBody';
import type {FilteringAdvertiserBalanceGet} from '../model/FilteringAdvertiserBalanceGet';
import type {FilteringAdvertiserTransactionGet} from '../model/FilteringAdvertiserTransactionGet';
import type {FilteringBcAccountTransactionGet} from '../model/FilteringBcAccountTransactionGet';
import type {FilteringBcAssetAdminGet} from '../model/FilteringBcAssetAdminGet';
import type {FilteringBcAssetGet} from '../model/FilteringBcAssetGet';
import type {FilteringBcAssetGroupGet} from '../model/FilteringBcAssetGroupGet';
import type {FilteringBcAssetGroupList} from '../model/FilteringBcAssetGroupList';
import type {FilteringBcAssetMemberGet} from '../model/FilteringBcAssetMemberGet';
import type {FilteringBcBillingGroupGet} from '../model/FilteringBcBillingGroupGet';
import type {FilteringBcGet} from '../model/FilteringBcGet';
import type {FilteringBcMemberGet} from '../model/FilteringBcMemberGet';
import type {FilteringBcPartnerAssetGet} from '../model/FilteringBcPartnerAssetGet';
import type {FilteringBcPartnerGet} from '../model/FilteringBcPartnerGet';
import type {FilteringBcTransactionGet} from '../model/FilteringBcTransactionGet';
import {InlineResponse200} from '../model/InlineResponse200';
import type {LinkUpdateBody} from '../model/LinkUpdateBody';
import type {MemberDeleteBody} from '../model/MemberDeleteBody';
import type {MemberInviteBody} from '../model/MemberInviteBody';
import type {MemberUpdateBody} from '../model/MemberUpdateBody';
import type {PartnerAddBody} from '../model/PartnerAddBody';
import type {PartnerDeleteBody} from '../model/PartnerDeleteBody';
import type {PixelTransferBody} from '../model/PixelTransferBody';

interface QueryParams {
  [key: string]: string | number | boolean | any[] | undefined;
}

interface FormParams {
  [key: string]: string | number | boolean | any | undefined;
}

// Helper function to serialize filtering objects to string
function serializeFiltering(filtering: any): string | undefined {
  return filtering ? JSON.stringify(filtering) : undefined;
}

/**
* BC service.
* @module api/BCApi
* @version 0.1.4
*/
export class BCApi {
  private apiClient: ApiClientInterface; // Use interface for type

  constructor(apiClient?: ApiClientInterface) { // Use interface for type
    this.apiClient = apiClient || ActualApiClient.instance; // Use imported class for static member
  }
 
  /**
   * Callback function to receive the result of the advertiserBalanceGet operation.
   * @callback moduleapi/BCApi~advertiserBalanceGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get ad account balance and budget. [BC Advertiser Balance Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939106470913)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.child_bc_id 
   * @param {module:model/FilteringAdvertiserBalanceGet} opts.filtering 
   * @param {Number} opts.page 
   * @param {Number} opts.page_size 
   * @param {module:api/BCApi~advertiserBalanceGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  advertiserBalanceGet(bc_id: string, Access_Token: string, opts: { child_bc_id?: string, filtering?: FilteringAdvertiserBalanceGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling advertiserBalanceGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling advertiserBalanceGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'child_bc_id': opts['child_bc_id'], 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/advertiser/balance/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the advertiserTransactionGet operation.
   * @callback moduleapi/BCApi~advertiserTransactionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get transaction records of an ad account. [BC Advertiser Transaction Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939116353538)
   * @param {Number} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringAdvertiserTransactionGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~advertiserTransactionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  advertiserTransactionGet(bc_id: number, Access_Token: string, opts: { filtering?: FilteringAdvertiserTransactionGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling advertiserTransactionGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling advertiserTransactionGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/advertiser/transaction/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAccountTransactionGet operation.
   * @callback moduleapi/BCApi~bcAccountTransactionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the transaction records of a BC or ad accounts. [BC Account Transaction Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1792849810925569)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.bc_id 
   * @param {String} opts.child_bc_id 
   * @param {String} opts.transaction_level 
   * @param {module:model/FilteringBcAccountTransactionGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAccountTransactionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAccountTransactionGet(Access_Token: string, opts: { bc_id?: string, child_bc_id?: string, transaction_level?: string, filtering?: FilteringBcAccountTransactionGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAccountTransactionGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': opts['bc_id'], 'child_bc_id': opts['child_bc_id'], 'transaction_level': opts['transaction_level'], 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/account/transaction/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAdvertiserCreate operation.
   * @callback moduleapi/BCApi~bcAdvertiserCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an ad account [BC advertiser create](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739939020318721)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdvertiserCreateBody} opts.body BC advertiser create body parameters
   * @param {module:api/BCApi~bcAdvertiserCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAdvertiserCreate(Access_Token: string, opts: { body?: AdvertiserCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAdvertiserCreate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/advertiser/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetAdminDelete operation.
   * @callback moduleapi/BCApi~bcAssetAdminDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete assets. [BC Asset Admin Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1739657251102722)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AdminDeleteBody} opts.body 
   * @param {module:api/BCApi~bcAssetAdminDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetAdminDelete(Access_Token: string, opts: { body?: AdminDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetAdminDelete");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/admin/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetAdminGet operation.
   * @callback moduleapi/BCApi~bcAssetAdminGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get assets of a Business Center as admins. [BC Asset Admin Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739433007779841)
   * @param {String} bc_id 
   * @param {String} asset_type 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.child_bc_id 
   * @param {module:model/FilteringBcAssetAdminGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAssetAdminGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetAdminGet(bc_id: string, asset_type: string, Access_Token: string, opts: { child_bc_id?: string, filtering?: FilteringBcAssetAdminGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcAssetAdminGet");
    }
    // verify the required parameter 'asset_type' is set
    if (asset_type === undefined || asset_type === null) {
      throw new Error("Missing the required parameter 'asset_type' when calling bcAssetAdminGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetAdminGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'child_bc_id': opts['child_bc_id'], 'asset_type': asset_type, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/admin/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetAssign operation.
   * @callback moduleapi/BCApi~bcAssetAssignCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Assign assets to a user. [BC Asset Assign](https://business-api.tiktok.com/portal/docs?id&#x3D;1739438211077121)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AssetAssignBody} opts.body 
   * @param {module:api/BCApi~bcAssetAssignCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetAssign(Access_Token: string, opts: { body?: AssetAssignBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetAssign");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/assign/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetGet operation.
   * @callback moduleapi/BCApi~bcAssetGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get assets of a Business Center. [BC Asset Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739432717798401)
   * @param {String} bc_id 
   * @param {String} asset_type 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.child_bc_id 
   * @param {module:model/FilteringBcAssetGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAssetGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetGet(bc_id: string, asset_type: string, Access_Token: string, opts: { child_bc_id?: string, filtering?: FilteringBcAssetGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcAssetGet");
    }
    // verify the required parameter 'asset_type' is set
    if (asset_type === undefined || asset_type === null) {
      throw new Error("Missing the required parameter 'asset_type' when calling bcAssetGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'asset_type': asset_type, 'child_bc_id': opts['child_bc_id'], 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetGroupCreate operation.
   * @callback moduleapi/BCApi~bcAssetGroupCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an Asset Group in your Business Center. [BC Asset Group Create](https://business-api.tiktok.com/portal/docs?id&#x3D;1749001658583105)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AssetGroupCreateBody} opts.body 
   * @param {module:api/BCApi~bcAssetGroupCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetGroupCreate(Access_Token: string, opts: { body?: AssetGroupCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetGroupCreate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset_group/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetGroupDelete operation.
   * @callback moduleapi/BCApi~bcAssetGroupDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Remove members' access to an Asset Group. [BC Asset Group Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1749001673406466)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AssetGroupDeleteBody} opts.body 
   * @param {module:api/BCApi~bcAssetGroupDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetGroupDelete(Access_Token: string, opts: { body?: AssetGroupDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetGroupDelete");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset_group/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetGroupGet operation.
   * @callback moduleapi/BCApi~bcAssetGroupGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the assets or members of an Asset Group in a Business Center. [BC Asset Group Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1749001669670913)
   * @param {String} bc_id 
   * @param {String} asset_group_id 
   * @param {String} query_entity 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringBcAssetGroupGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAssetGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetGroupGet(bc_id: string, asset_group_id: string, query_entity: string, Access_Token: string, opts: { filtering?: FilteringBcAssetGroupGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcAssetGroupGet");
    }
    // verify the required parameter 'asset_group_id' is set
    if (asset_group_id === undefined || asset_group_id === null) {
      throw new Error("Missing the required parameter 'asset_group_id' when calling bcAssetGroupGet");
    }
    // verify the required parameter 'query_entity' is set
    if (query_entity === undefined || query_entity === null) {
      throw new Error("Missing the required parameter 'query_entity' when calling bcAssetGroupGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetGroupGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'asset_group_id': asset_group_id, 'query_entity': query_entity, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset_group/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetGroupList operation.
   * @callback moduleapi/BCApi~bcAssetGroupListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all Asset Groups in your Business Center. [BC Asset Group List](https://business-api.tiktok.com/portal/docs?id&#x3D;1749001665910786)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringBcAssetGroupList} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAssetGroupListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetGroupList(bc_id: string, Access_Token: string, opts: { filtering?: FilteringBcAssetGroupList, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcAssetGroupList");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetGroupList");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset_group/list/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetGroupUpdate operation.
   * @callback moduleapi/BCApi~bcAssetGroupUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update assets, members or the name of an Asset Group. [BC Asset Group Update](https://business-api.tiktok.com/portal/docs?id&#x3D;1749001662156801)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AssetGroupUpdateBody} opts.body 
   * @param {module:api/BCApi~bcAssetGroupUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetGroupUpdate(Access_Token: string, opts: { body?: AssetGroupUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetGroupUpdate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset_group/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetMemberGet operation.
   * @callback moduleapi/BCApi~bcAssetMemberGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get members by assets. [BC Asset Member Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739659558931458)
   * @param {String} bc_id 
   * @param {String} asset_type 
   * @param {String} asset_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringBcAssetMemberGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAssetMemberGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetMemberGet(bc_id: string, asset_type: string, asset_id: string, Access_Token: string, opts: { filtering?: FilteringBcAssetMemberGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcAssetMemberGet");
    }
    // verify the required parameter 'asset_type' is set
    if (asset_type === undefined || asset_type === null) {
      throw new Error("Missing the required parameter 'asset_type' when calling bcAssetMemberGet");
    }
    // verify the required parameter 'asset_id' is set
    if (asset_id === undefined || asset_id === null) {
      throw new Error("Missing the required parameter 'asset_id' when calling bcAssetMemberGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetMemberGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'asset_type': asset_type, 'asset_id': asset_id, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/member/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetPartnerGet operation.
   * @callback moduleapi/BCApi~bcAssetPartnerGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get partners by assets. [BC Asset Partner Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739663268166722)
   * @param {String} bc_id 
   * @param {String} asset_type 
   * @param {String} asset_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {Object} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcAssetPartnerGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetPartnerGet(bc_id: string, asset_type: string, asset_id: string, Access_Token: string, opts: { filtering?: any, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcAssetPartnerGet");
    }
    // verify the required parameter 'asset_type' is set
    if (asset_type === undefined || asset_type === null) {
      throw new Error("Missing the required parameter 'asset_type' when calling bcAssetPartnerGet");
    }
    // verify the required parameter 'asset_id' is set
    if (asset_id === undefined || asset_id === null) {
      throw new Error("Missing the required parameter 'asset_id' when calling bcAssetPartnerGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetPartnerGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'asset_type': asset_type, 'asset_id': asset_id, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/partner/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcAssetUnassign operation.
   * @callback moduleapi/BCApi~bcAssetUnassignCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Revoke the access to an asset from a user. [BC Asset Unassign](https://business-api.tiktok.com/portal/docs?id&#x3D;1739448126749698)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AssetUnassignBody} opts.body 
   * @param {module:api/BCApi~bcAssetUnassignCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcAssetUnassign(Access_Token: string, opts: { body?: AssetUnassignBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcAssetUnassign");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/asset/unassign/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcBalanceGet operation.
   * @callback moduleapi/BCApi~bcBalanceGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the balance of a Business Center. [BC Balance Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939128198145)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.child_bc_id 
   * @param {module:api/BCApi~bcBalanceGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcBalanceGet(bc_id: string, Access_Token: string, opts: { child_bc_id?: string } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcBalanceGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcBalanceGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'child_bc_id': opts['child_bc_id']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/balance/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcBillingGroupCreate operation.
   * @callback moduleapi/BCApi~bcBillingGroupCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a billing group in a Business Center. [BC Billing Group Create](https://business-api.tiktok.com/portal/docs?id&#x3D;1738947780033537)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/BillingGroupCreateBody} opts.body 
   * @param {module:api/BCApi~bcBillingGroupCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcBillingGroupCreate(Access_Token: string, opts: { body?: BillingGroupCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcBillingGroupCreate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/billing_group/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcBillingGroupGet operation.
   * @callback moduleapi/BCApi~bcBillingGroupGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all billing groups in a Business Center. [BC Billing Group Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1738944324279297)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringBcBillingGroupGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcBillingGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcBillingGroupGet(bc_id: string, Access_Token: string, opts: { filtering?: FilteringBcBillingGroupGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcBillingGroupGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcBillingGroupGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/billing_group/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcBillingGroupUpdate operation.
   * @callback moduleapi/BCApi~bcBillingGroupUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update settings of a billing group. [BC Billing Group Update](https://business-api.tiktok.com/portal/docs?id&#x3D;1738947843447809)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/BillingGroupUpdateBody} opts.body 
   * @param {module:api/BCApi~bcBillingGroupUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcBillingGroupUpdate(Access_Token: string, opts: { body?: BillingGroupUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcBillingGroupUpdate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/billing_group/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcGet operation.
   * @callback moduleapi/BCApi~bcGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Business Centers that you have access to. [BC Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1737115687501826)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.bc_id 
   * @param {String} opts.scene  (default to <.>)
   * @param {module:model/FilteringBcGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcGet(Access_Token: string, opts: { bc_id?: string, scene?: string, filtering?: FilteringBcGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': opts['bc_id'], 'scene': opts['scene'], 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcImageUpload operation.
   * @callback moduleapi/BCApi~bcImageUploadCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Upload certificate images for an ad account. [BC Image Upload](https://business-api.tiktok.com/portal/docs?id&#x3D;1739938996913218)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.bc_id 
   * @param {Blob} opts.image_file 
   * @param {module:api/BCApi~bcImageUploadCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcImageUpload(Access_Token: string, opts: { bc_id?: string, image_file?: Blob } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcImageUpload");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {
      'bc_id': opts['bc_id'], 'image_file': opts['image_file']
    };

    let authNames: string[] = [];
    let contentTypes: string[] = ['multipart/form-data'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/image/upload/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcMemberDelete operation.
   * @callback moduleapi/BCApi~bcMemberDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete member. [BC Member Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939482851329)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/MemberDeleteBody} opts.body 
   * @param {module:api/BCApi~bcMemberDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcMemberDelete(Access_Token: string, opts: { body?: MemberDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcMemberDelete");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/member/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcMemberGet operation.
   * @callback moduleapi/BCApi~bcMemberGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get BC members. [BC Member Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939404802049)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {String} opts.child_bc_id 
   * @param {module:model/FilteringBcMemberGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcMemberGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcMemberGet(bc_id: string, Access_Token: string, opts: { child_bc_id?: string, filtering?: FilteringBcMemberGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcMemberGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcMemberGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'child_bc_id': opts['child_bc_id'], 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/member/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcMemberInvite operation.
   * @callback moduleapi/BCApi~bcMemberInviteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Invite members to BC. [BC Member Invite](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939455765505)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/MemberInviteBody} opts.body 
   * @param {module:api/BCApi~bcMemberInviteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcMemberInvite(Access_Token: string, opts: { body?: MemberInviteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcMemberInvite");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/member/invite/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcMemberUpdate operation.
   * @callback moduleapi/BCApi~bcMemberUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update member information. [BC Member Update](https://business-api.tiktok.com/portal/docs?id&#x3D;1739696704424961)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/MemberUpdateBody} opts.body 
   * @param {module:api/BCApi~bcMemberUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcMemberUpdate(Access_Token: string, opts: { body?: MemberUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcMemberUpdate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/member/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPartnerAdd operation.
   * @callback moduleapi/BCApi~bcPartnerAddCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add partner to Business Center. [BC Partner Add](https://business-api.tiktok.com/portal/docs?id&#x3D;1739662756510721)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/PartnerAddBody} opts.body 
   * @param {module:api/BCApi~bcPartnerAddCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPartnerAdd(Access_Token: string, opts: { body?: PartnerAddBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPartnerAdd");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/partner/add/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPartnerAssetDelete operation.
   * @callback moduleapi/BCApi~bcPartnerAssetDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel asset sharing. [BC Partner Asset Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1739662800930817)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/AssetDeleteBody} opts.body 
   * @param {module:api/BCApi~bcPartnerAssetDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPartnerAssetDelete(Access_Token: string, opts: { body?: AssetDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPartnerAssetDelete");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/partner/asset/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPartnerAssetGet operation.
   * @callback moduleapi/BCApi~bcPartnerAssetGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get partner assets. [BC Partner Asset Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739662828320769)
   * @param {String} bc_id 
   * @param {String} partner_id 
   * @param {String} asset_type 
   * @param {String} share_type 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringBcPartnerAssetGet} opts.filtering 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcPartnerAssetGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPartnerAssetGet(bc_id: string, partner_id: string, asset_type: string, share_type: string, Access_Token: string, opts: { filtering?: FilteringBcPartnerAssetGet, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcPartnerAssetGet");
    }
    // verify the required parameter 'partner_id' is set
    if (partner_id === undefined || partner_id === null) {
      throw new Error("Missing the required parameter 'partner_id' when calling bcPartnerAssetGet");
    }
    // verify the required parameter 'asset_type' is set
    if (asset_type === undefined || asset_type === null) {
      throw new Error("Missing the required parameter 'asset_type' when calling bcPartnerAssetGet");
    }
    // verify the required parameter 'share_type' is set
    if (share_type === undefined || share_type === null) {
      throw new Error("Missing the required parameter 'share_type' when calling bcPartnerAssetGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPartnerAssetGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'partner_id': partner_id, 'asset_type': asset_type, 'share_type': share_type, 'filtering': serializeFiltering(opts['filtering']), 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/partner/asset/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPartnerDelete operation.
   * @callback moduleapi/BCApi~bcPartnerDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete partner. [BC Partner Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1739662779301890)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/PartnerDeleteBody} opts.body 
   * @param {module:api/BCApi~bcPartnerDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPartnerDelete(Access_Token: string, opts: { body?: PartnerDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPartnerDelete");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/partner/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPartnerGet operation.
   * @callback moduleapi/BCApi~bcPartnerGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get partners. [BC Partner Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739662727395330)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:model/FilteringBcPartnerGet} opts.filtering 
   * @param {module:api/BCApi~bcPartnerGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPartnerGet(bc_id: string, Access_Token: string, opts: { page?: number, page_size?: number, filtering?: FilteringBcPartnerGet } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcPartnerGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPartnerGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'page': opts['page'], 'page_size': opts['page_size'], 'filtering': serializeFiltering(opts['filtering'])
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/partner/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPixelLinkGet operation.
   * @callback moduleapi/BCApi~bcPixelLinkGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Use this endpoint to get a list of ad accounts that have been linked to the request pixel. [BC Pixel Link Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1753994966965249)
   * @param {String} bc_id 
   * @param {String} pixel_code 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcPixelLinkGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPixelLinkGet(bc_id: string, pixel_code: string, Access_Token: string, opts: { page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcPixelLinkGet");
    }
    // verify the required parameter 'pixel_code' is set
    if (pixel_code === undefined || pixel_code === null) {
      throw new Error("Missing the required parameter 'pixel_code' when calling bcPixelLinkGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPixelLinkGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'pixel_code': pixel_code, 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/pixel/link/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPixelLinkUpdate operation.
   * @callback moduleapi/BCApi~bcPixelLinkUpdateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Use this endpoint to link and unlink pixel to advertiser accounts. [BC Pixel Link Update](https://business-api.tiktok.com/portal/docs?id&#x3D;1753994950327297)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/LinkUpdateBody} opts.body 
   * @param {module:api/BCApi~bcPixelLinkUpdateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPixelLinkUpdate(Access_Token: string, opts: { body?: LinkUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPixelLinkUpdate");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/pixel/link/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcPixelTransfer operation.
   * @callback moduleapi/BCApi~bcPixelTransferCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Transfer Pixel from Advertiser to BC. [BC Pixel Transfer](https://business-api.tiktok.com/portal/docs?id&#x3D;1753994928261122)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/PixelTransferBody} opts.body 
   * @param {module:api/BCApi~bcPixelTransferCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcPixelTransfer(Access_Token: string, opts: { body?: PixelTransferBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcPixelTransfer");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/pixel/transfer/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcTransactionGet operation.
   * @callback moduleapi/BCApi~bcTransactionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get translaction records of a Business Center. [BC Transaction Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939140408322)
   * @param {String} bc_id 
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/FilteringBcTransactionGet} opts.filtering 
   * @param {String} opts.start_date 
   * @param {String} opts.end_date 
   * @param {Number} opts.page  (default to <.>)
   * @param {Number} opts.page_size  (default to <.>)
   * @param {module:api/BCApi~bcTransactionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcTransactionGet(bc_id: string, Access_Token: string, opts: { filtering?: FilteringBcTransactionGet, start_date?: string, end_date?: string, page?: number, page_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'bc_id' is set
    if (bc_id === undefined || bc_id === null) {
      throw new Error("Missing the required parameter 'bc_id' when calling bcTransactionGet");
    }
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcTransactionGet");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {
      'bc_id': bc_id, 'filtering': serializeFiltering(opts['filtering']), 'start_date': opts['start_date'], 'end_date': opts['end_date'], 'page': opts['page'], 'page_size': opts['page_size']
    };
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = [];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/transaction/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
  /**
   * Callback function to receive the result of the bcTransfer operation.
   * @callback moduleapi/BCApi~bcTransferCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Process payments (recharge money to or deduct money from an ad account in a Business Center. [BC Transfer](https://business-api.tiktok.com/portal/docs?id&#x3D;1739939095321601)
   * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
   * @param {Object} opts Optional parameters
   * @param {module:model/BcTransferBody} opts.body 
   * @param {module:api/BCApi~bcTransferCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  bcTransfer(Access_Token: string, opts: { body?: BcTransferBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    opts = opts || {};
    let postBody = opts['body'];
    // verify the required parameter 'Access_Token' is set
    if (Access_Token === undefined || Access_Token === null) {
      throw new Error("Missing the required parameter 'Access_Token' when calling bcTransfer");
    }

    let pathParams: Record<string, string> = {};
    let queryParams: Record<string, QueryValue> = {};
    let headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    let formParams: FormParams = {};

    let authNames: string[] = [];
    let contentTypes: string[] = ['application/json'];
    let accepts: string[] = ['application/json'];
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/bc/transfer/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as any,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

}