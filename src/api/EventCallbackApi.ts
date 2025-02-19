/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from "../ApiClient.js";
import {InlineResponse200} from '../model/InlineResponse200';
import {PixelBatchBody} from '../model/PixelBatchBody';
import PixelTrackBody from '../model/PixelTrackBody';

/**
* EventCallback service.
* @module api/EventCallbackApi
* @version 0.1.4
*/
export class EventCallbackApi {
    private apiClient: ApiClient;

    /**
    * Constructs a new EventCallbackApi. 
    * @alias module:api/EventCallbackApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the pixelBatch operation.
     * @callback moduleapi/EventCallbackApi~pixelBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pixel Track server-to-server batch api
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/PixelBatchBody} opts.body Pixel batch update body parameters
     * @param {Function} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    pixelBatch(Access_Token: string, opts: { body?: PixelBatchBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        let postBody = opts['body'];
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling pixelBatch");
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
            '/open_api/v1.3/pixel/batch/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Callback function to receive the result of the pixelTrack operation.
     * @callback moduleapi/EventCallbackApi~pixelTrackCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pixel Track server-to-server api
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/PixelTrackBody} opts.body Pixel track body parameters
     * @param {Function} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    pixelTrack(Access_Token: string, opts: { body?: PixelTrackBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: any) => void) {
        let postBody = opts['body'];
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling pixelTrack");
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
            '/open_api/v1.3/pixel/track/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
}