/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
// Import the default instance and rename it for clarity
import ApiClientInstance from "../ApiClient";
// Import the interface type and relevant types
import { ApiClientInterface, type FormValue, type QueryValue } from "@/types";
// Import required model types
import type {FilteringVideoAdSearch} from '../model/FilteringVideoAdSearch';
import {InlineResponse200} from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* File service.
* @module api/FileApi
* @version 0.1.4
*/
export class FileApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new FileApi. 
    * @alias module:api/FileApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Callback function to receive the result of the adImageUpload operation.
     * @callback moduleapi/FileApi~adImageUploadCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * The function is used to upload pictures to the Asset Library and use the obtained image ID for creating ads. [File image Upload](https://ads.tiktok.com/marketing_api/docs?id=1739067433456642)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {String} opts.advertiser_id 
     * @param {String} opts.file_id 
     * @param {String} opts.file_name 
     * @param {Blob} opts.image_file 
     * @param {String} opts.image_signature 
     * @param {String} opts.image_url 
     * @param {String} opts.upload_type 
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    adImageUpload(Access_Token: string, opts: {
        advertiser_id?: string;
        file_id?: string;
        file_name?: string; // Filename is important for Blob uploads
        image_file?: Blob;
        image_signature?: string;
        image_url?: string;
        upload_type?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
      const postBody = null;
      // verify the required parameter 'Access_Token' is set
      if (Access_Token === undefined || Access_Token === null) {
        throw new Error("Missing the required parameter 'Access_Token' when calling adImageUpload");
      }

      const pathParams: Record<string, string> = {};
      const queryParams: Record<string, QueryValue> = {};
      const headerParams: Record<string, string> = {
        'Access-Token': Access_Token
      };
      // Use FormValue type which includes Blob/File
      const formParams: Record<string, FormValue | undefined> = {
        'advertiser_id': opts.advertiser_id,
        'file_id': opts.file_id,
        'file_name': opts.file_name,
        'image_file': opts.image_file, // Pass Blob directly
        'image_signature': opts.image_signature,
        'image_url': opts.image_url,
        'upload_type': opts.upload_type
      };

      const authNames: string[] = [];
      const contentTypes: string[] = ['multipart/form-data'];
      const accepts: string[] = ['application/json'];
      const returnType = InlineResponse200;

      // Remove undefined keys from formParams
      Object.keys(formParams).forEach(key => formParams[key] === undefined && delete formParams[key]);

      return this.apiClient.callApi(
        '/open_api/v1.3/file/image/ad/upload/', 'POST',
        pathParams, queryParams, headerParams, formParams as Record<string, FormValue>, postBody, // Cast formParams after removing undefined
        authNames, contentTypes, accepts, returnType, callback as any // Cast callback
      ) as Promise<InlineResponse200>; // Cast return type
    }
    /**
     * Callback function to receive the result of the adVideoInfo operation.
     * @callback moduleapi/FileApi~adVideoInfoCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * The function is used to get the information about a list of videos [File Video Ad Info](https://ads.tiktok.com/marketing_api/docs?id=1740050161973250) from the Asset Library.
     * @param {String} advertiser_id Advertiser ID.
     * @param {Array.<String>} video_ids Video ID list. Up to 60 IDs per request.
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    adVideoInfo(advertiser_id: string, video_ids: string[], Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
      
      const postBody = null;
      // verify the required parameter 'advertiser_id' is set
      if (advertiser_id === undefined || advertiser_id === null) {
        throw new Error("Missing the required parameter 'advertiser_id' when calling adVideoInfo");
      }
      // verify the required parameter 'video_ids' is set
      if (video_ids === undefined || video_ids === null) {
        throw new Error("Missing the required parameter 'video_ids' when calling adVideoInfo");
      }
      // verify the required parameter 'Access_Token' is set
      if (Access_Token === undefined || Access_Token === null) {
        throw new Error("Missing the required parameter 'Access_Token' when calling adVideoInfo");
      }

      const pathParams: Record<string, string> = {};
      const queryParams: Record<string, QueryValue> = {
        'advertiser_id': advertiser_id,
        'video_ids': video_ids.join(',') // Replace buildCollectionParam
      };
      const headerParams: Record<string, string> = {
        'Access-Token': Access_Token
      };
      const formParams: Record<string, FormValue> = {}; // Empty for GET
      
      const authNames: string[] = [];
      const contentTypes: string[] = [];
      const accepts: string[] = ['application/json'];
      const returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/open_api/v1.3/file/video/ad/info/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
        authNames, contentTypes, accepts, returnType, callback as any // Cast callback
      ) as Promise<InlineResponse200>; // Cast return type
    }
    /**
     * Callback function to receive the result of the adVideoSearch operation.
     * @callback moduleapi/FileApi~adVideoSearchCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * The function is used to search for video creatives in the Asset Library of an ad account. [File Video Search](https://ads.tiktok.com/marketing_api/docs?id=1737587322856449)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/FilteringVideoAdSearch} opts.filtering Filters on the data. This parameter is an object.
     * @param {Number} opts.page Current page number. Default value: 1. Value range: ≥ 1.
     * @param {Number} opts.page_size Page size. Default value: 20. Value range: 1-100.
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    adVideoSearch(advertiser_id: string, Access_Token: string, opts: {
        filtering?: FilteringVideoAdSearch;
        page?: number;
        page_size?: number;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
      const postBody = null;
      // verify the required parameter 'advertiser_id' is set
      if (advertiser_id === undefined || advertiser_id === null) {
        throw new Error("Missing the required parameter 'advertiser_id' when calling adVideoSearch");
      }
      // verify the required parameter 'Access_Token' is set
      if (Access_Token === undefined || Access_Token === null) {
        throw new Error("Missing the required parameter 'Access_Token' when calling adVideoSearch");
      }

      const pathParams: Record<string, string> = {};
      const queryParams: Record<string, QueryValue> = {
        'advertiser_id': advertiser_id,
        // Stringify complex filter object for query params
        'filtering': opts.filtering ? JSON.stringify(opts.filtering) : undefined,
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
        '/open_api/v1.3/file/video/ad/search/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
        authNames, contentTypes, accepts, returnType, callback as any // Cast callback
      ) as Promise<InlineResponse200>; // Cast return type
    }
    /**
     * Callback function to receive the result of the adVideoUpload operation.
     * @callback moduleapi/FileApi~adVideoUploadCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * The function is used to upload a video to the Asset Library and use the obtained video ID for creating ads. [File Video Upload](https://ads.tiktok.com/marketing_api/docs?id=1737587322856449)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {String} opts.advertiser_id 
     * @param {Boolean} opts.auto_bind_enabled 
     * @param {Boolean} opts.auto_fix_enabled 
     * @param {String} opts.file_id 
     * @param {String} opts.file_name 
     * @param {Boolean} opts.flaw_detect 
     * @param {Boolean} opts.is_third_party 
     * @param {String} opts.upload_type 
     * @param {Blob} opts.video_file 
     * @param {String} opts.video_id 
     * @param {String} opts.video_signature 
     * @param {String} opts.video_url 
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    adVideoUpload(Access_Token: string, opts: {
        advertiser_id?: string;
        auto_bind_enabled?: boolean;
        auto_fix_enabled?: boolean;
        file_id?: string;
        file_name?: string; // Filename is important for Blob uploads
        flaw_detect?: boolean;
        is_third_party?: boolean;
        upload_type?: string;
        video_file?: Blob;
        video_id?: string;
        video_signature?: string;
        video_url?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
      const postBody = null;
      // verify the required parameter 'Access_Token' is set
      if (Access_Token === undefined || Access_Token === null) {
        throw new Error("Missing the required parameter 'Access_Token' when calling adVideoUpload");
      }

      const pathParams: Record<string, string> = {};
      const queryParams: Record<string, QueryValue> = {};
      const headerParams: Record<string, string> = {
        'Access-Token': Access_Token
      };
      // Use FormValue type which includes Blob/File, allow boolean for flags
      const formParams: Record<string, FormValue | boolean | undefined> = { 
        'advertiser_id': opts.advertiser_id,
        'auto_bind_enabled': opts.auto_bind_enabled,
        'auto_fix_enabled': opts.auto_fix_enabled,
        'file_id': opts.file_id,
        'file_name': opts.file_name,
        'flaw_detect': opts.flaw_detect,
        'is_third_party': opts.is_third_party,
        'upload_type': opts.upload_type,
        'video_file': opts.video_file, // Pass Blob directly
        'video_id': opts.video_id,
        'video_signature': opts.video_signature,
        'video_url': opts.video_url
      };

      const authNames: string[] = [];
      const contentTypes: string[] = ['multipart/form-data'];
      const accepts: string[] = ['application/json'];
      const returnType = InlineResponse200;

      // Remove undefined keys from formParams
      Object.keys(formParams).forEach(key => formParams[key] === undefined && delete formParams[key]);

      return this.apiClient.callApi(
        '/open_api/v1.3/file/video/ad/upload/', 'POST',
        pathParams, queryParams, headerParams, formParams as Record<string, FormValue>, postBody, // Cast formParams after removing undefined
        authNames, contentTypes, accepts, returnType, callback as any // Cast callback
      ) as Promise<InlineResponse200>; // Cast return type
    }
    /**
     * Callback function to receive the result of the fileImageAdInfo operation.
     * @callback moduleapi/FileApi~fileImageAdInfoCallback
     * @param {Error} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {Response} response The complete HTTP response.
     */

    /**
     * Get image information. [File Image Info](https://business-api.tiktok.com/portal/docs?id=1740051721711618)
     * @param {String} advertiser_id 
     * @param {Array.<String>} image_ids 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).
     * @param {Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    fileImageAdInfo(advertiser_id: string, image_ids: string[], Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
      
      const postBody = null;
      // verify the required parameter 'advertiser_id' is set
      if (advertiser_id === undefined || advertiser_id === null) {
        throw new Error("Missing the required parameter 'advertiser_id' when calling fileImageAdInfo");
      }
      // verify the required parameter 'image_ids' is set
      if (image_ids === undefined || image_ids === null) {
        throw new Error("Missing the required parameter 'image_ids' when calling fileImageAdInfo");
      }
      // verify the required parameter 'Access_Token' is set
      if (Access_Token === undefined || Access_Token === null) {
        throw new Error("Missing the required parameter 'Access_Token' when calling fileImageAdInfo");
      }

      const pathParams: Record<string, string> = {};
      const queryParams: Record<string, QueryValue> = {
        'advertiser_id': advertiser_id,
        'image_ids': image_ids.join(',') // Replace buildCollectionParam
      };
      const headerParams: Record<string, string> = {
        'Access-Token': Access_Token
      };
      const formParams: Record<string, FormValue> = {}; // Empty for GET

      const authNames: string[] = [];
      const contentTypes: string[] = [];
      const accepts: string[] = ['application/json'];
      const returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/open_api/v1.3/file/image/ad/info/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
        authNames, contentTypes, accepts, returnType, callback as any // Cast callback
      ) as Promise<InlineResponse200>; // Cast return type
    }

}