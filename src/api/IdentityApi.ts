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
import type {IdentityCreateBody} from '../model/IdentityCreateBody';
import {InlineResponse200} from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* Identity service.
* @module api/IdentityApi
* @version 0.1.4
*/
export class IdentityApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new IdentityApi. 
    * @alias module:api/IdentityApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Callback function to receive the result of the identityCreate operation.
     * @callback moduleapi/IdentityApi~identityCreateCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * Create a customized user identity. [Identity Create](https://ads.tiktok.com/marketing_api/docs?rid=uraumvplog&id=1740654203526146)
     * https://ads.tiktok.com/marketing_api/search?s=identity%2Fcreate%2F&type=0&version=1.3
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/IdentityCreateBody} opts.body Identity create body parameters.
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    identityCreate(Access_Token: string, opts: { body?: IdentityCreateBody } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling identityCreate");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {};
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for JSON body

        const authNames: string[] = [];
        const contentTypes: string[] = ['application/json'];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/identity/create/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the identityGet operation.
     * @callback moduleapi/IdentityApi~identityGetCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * Get a list of identities under an ad account. You can filter results by identity type. [Identity Get](https://ads.tiktok.com/marketing_api/docs?rid=uraumvplog&id=1740218420781057)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {String} opts.identity_type Identity type. Enum values: CUSTOMIZED_USER, AUTH_CODE, TT_USER, BC_AUTH_TT. If not specified, all identities will be returned. See Identities for details.
     * @param {String} opts.identity_authorized_bc_id Identity ID of a TikTok account that a Business Center is authorized to access. Required when identity_type is BC_AUTH_TT.
     * @param {Number} opts.page Page number.
     * @param {Number} opts.page_size Number of results on each page.
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    identityGet(advertiser_id: string, Access_Token: string, opts: {
        identity_type?: string;
        identity_authorized_bc_id?: string;
        page?: number;
        page_size?: number;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling identityGet");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling identityGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'identity_type': opts.identity_type,
            'identity_authorized_bc_id': opts.identity_authorized_bc_id,
            'page': opts.page,
            'page_size': opts.page_size
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for GET

        // Remove undefined keys from queryParams
        Object.keys(queryParams).forEach(key => queryParams[key] === undefined && delete queryParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/identity/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the identityVideoInfo operation.
     * @callback moduleapi/IdentityApi~identityVideoInfoCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * Get the information about a TikTok post that you own, if your identity is AUTH_CODE, TT_USER or BC_AUTH_TT. [Identity Video Info](https://ads.tiktok.com/marketing_api/docs?id=1738958351620097)
     * https://ads.tiktok.com/marketing_api/docs?id=1738958351620097
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {String} advertiser_id Advertiser ID
     * @param {String} identity_type Identity type. Enum: `AUTH_CODE`, `TT_USER`, `BC_AUTH_TT`. See [Identities](https://ads.tiktok.com/marketing_api/docs?id=1738958351620097) for details.
     * @param {String} identity_id Identity ID
     * @param {String} item_id TikTok post ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.identity_authorized_bc_id The identity ID of a TikTok account that a Business Center is authorized to access. Required when` identity_type` is `BC_AUTH_TT`. 
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    identityVideoInfo(Access_Token: string, advertiser_id: string, identity_type: string, identity_id: string, item_id: string, opts: {
        identity_authorized_bc_id?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling identityVideoInfo");
        }
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling identityVideoInfo");
        }
        // verify the required parameter 'identity_type' is set
        if (identity_type === undefined || identity_type === null) {
            throw new Error("Missing the required parameter 'identity_type' when calling identityVideoInfo");
        }
        // verify the required parameter 'identity_id' is set
        if (identity_id === undefined || identity_id === null) {
            throw new Error("Missing the required parameter 'identity_id' when calling identityVideoInfo");
        }
        // verify the required parameter 'item_id' is set
        if (item_id === undefined || item_id === null) {
            throw new Error("Missing the required parameter 'item_id' when calling identityVideoInfo");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'identity_type': identity_type,
            'identity_id': identity_id,
            'identity_authorized_bc_id': opts.identity_authorized_bc_id,
            'item_id': item_id
        };
        const headerParams: Record<string, string> = {
            'Access-Token': Access_Token
        };
        const formParams: Record<string, FormValue> = {}; // Empty for GET

        // Remove undefined keys from queryParams
        Object.keys(queryParams).forEach(key => queryParams[key] === undefined && delete queryParams[key]);

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts: string[] = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/identity/video/info/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
}