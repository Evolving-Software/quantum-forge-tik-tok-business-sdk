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
import {InlineResponse200} from '../model/InlineResponse200';
import type PortfolioCreateBody from '../model/PortfolioCreateBody';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* CreativeAsset service.
* @module api/CreativeAssetApi
* @version 0.1.4
*/
export class CreativeAssetApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new CreativeAssetApi. 
    * @alias module:api/CreativeAssetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Callback function to receive the result of the creativePortfolioCreate operation.
     * @callback moduleapi/CreativeAssetApi~creativePortfolioCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a portfolio [Portfolio create](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739091950439426)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/PortfolioCreateBody} opts.body Creative portfolio create body parameters
     * @param {Function} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    creativePortfolioCreate(Access_Token: string, opts: { body?: PortfolioCreateBody } = {}, callback?: Callback): Promise<InlineResponse200> {
      const postBody = opts.body;
      // verify the required parameter 'Access_Token' is set
      if (Access_Token === undefined || Access_Token === null) {
        throw new Error("Missing the required parameter 'Access_Token' when calling creativePortfolioCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Access-Token': Access_Token
      };
      let formParams = {
      };

      const authNames: string[] = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/open_api/v1.3/creative/portfolio/create/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
        authNames, contentTypes, accepts, returnType, callback as any // Cast callback
      ) as Promise<InlineResponse200>; // Cast return type
    }
}