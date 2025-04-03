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
// Import required model types (though InlineResponse200 is the only one used here)
import { InlineResponse200 } from '../model/InlineResponse200';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* Catalog service.
* @module api/CatalogApi
* @version 0.1.4
*/
export class CatalogApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new CatalogApi. 
    * @alias module:api/CatalogApi
    * @class
    * @param {ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Callback function to receive the result of the catalogAvailableCountryGet operation.
     * @callback moduleapi/CatalogApi~catalogAvailableCountryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the countries and regions that ads for a catalog can be delivered to. [Catalog Available Country Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740491257516034)
     * @param {String} bc_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {module:api/CatalogApi~catalogAvailableCountryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogAvailableCountryGet(bc_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogAvailableCountryGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogAvailableCountryGet");
        }

        const pathParams = {};
        const queryParams = {
            'bc_id': bc_id
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/available_country/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogCapitalize operation.
     * @callback moduleapi/CatalogApi~catalogCapitalizeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Migrate catalogs under your ad account to your Business Center. [Catalog Capitalize](https://business-api.tiktok.com/portal/docs?id&#x3D;1740490222539778)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogCapitalizeBody} opts.body 
     * @param {module:api/CatalogApi~catalogCapitalizeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogCapitalize(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogCapitalize");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/capitalize/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogCreate operation.
     * @callback moduleapi/CatalogApi~catalogCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a catalog by specifying information such as name, targeted locations, and currency. [Catalog Create](https://business-api.tiktok.com/portal/docs?id&#x3D;1740306481704961)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogCreateBody} opts.body 
     * @param {module:api/CatalogApi~catalogCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogCreate(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogCreate");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/create/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogDelete operation.
     * @callback moduleapi/CatalogApi~catalogDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a catalog. [Catalog Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1740310064588801)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogDeleteBody} opts.body 
     * @param {module:api/CatalogApi~catalogDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogDelete(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogDelete");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/delete/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogEventsourceBind operation.
     * @callback moduleapi/CatalogApi~catalogEventsourceBindCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bind app or website event sources to a catalog in a Business Center. [Catalog Eventsource Bind](https://business-api.tiktok.com/portal/docs?id&#x3D;1740492491200513)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/EventsourceBindBody} opts.body 
     * @param {module:api/CatalogApi~catalogEventsourceBindCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogEventsourceBind(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogEventsourceBind");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/eventsource/bind/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogEventsourceBindGet operation.
     * @callback moduleapi/CatalogApi~catalogEventsourceBindGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get event source binding information. [Catalog Eventsource Bind Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740492531343362)
     * @param {String} catalog_id 
     * @param {String} bc_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {module:api/CatalogApi~catalogEventsourceBindGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogEventsourceBindGet(catalog_id: string, bc_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (catalog_id === undefined || catalog_id === null) {
            throw new Error("Missing the required parameter 'catalog_id' when calling catalogEventsourceBindGet");
        }
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogEventsourceBindGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogEventsourceBindGet");
        }

        const pathParams = {};
        const queryParams = {
            'catalog_id': catalog_id,
            'bc_id': bc_id
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/eventsource_bind/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogEventsourceUnbind operation.
     * @callback moduleapi/CatalogApi~catalogEventsourceUnbindCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unbind event sources from a catalog. [Catalog Eventsource Unbind](https://business-api.tiktok.com/portal/docs?id&#x3D;1740492512449538)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/EventsourceUnbindBody} opts.body 
     * @param {module:api/CatalogApi~catalogEventsourceUnbindCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogEventsourceUnbind(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogEventsourceUnbind");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/eventsource/unbind/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogFeedDelete operation.
     * @callback moduleapi/CatalogApi~catalogFeedDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a feed. [Catalog Feed Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1740665210863617)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/FeedDeleteBody} opts.body 
     * @param {module:api/CatalogApi~catalogFeedDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogFeedDelete(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogFeedDelete");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/feed/delete/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogFeedGet operation.
     * @callback moduleapi/CatalogApi~catalogFeedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all feeds or a particular feed. [Catalog Feed Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740665183073281)
     * @param {String} catalog_id 
     * @param {String} bc_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {String} opts.feed_id 
     * @param {module:api/CatalogApi~catalogFeedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogFeedGet(catalog_id: string, bc_id: string, Access_Token: string, opts: { feed_id?: string } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (catalog_id === undefined || catalog_id === null) {
            throw new Error("Missing the required parameter 'catalog_id' when calling catalogFeedGet");
        }
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogFeedGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogFeedGet");
        }

        const pathParams = {};
        const queryParams = {
            'catalog_id': catalog_id,
            'feed_id': opts['feed_id'],
            'bc_id': bc_id
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/feed/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogGet operation.
     * @callback moduleapi/CatalogApi~catalogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all catalogs or a particular catalog. [Catalog Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740315452868610)
     * @param {String} bc_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalog_id 
     * @param {Number} opts.page  (default to <.>)
     * @param {Number} opts.page_size  (default to <.>)
     * @param {module:api/CatalogApi~catalogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogGet(bc_id: string, Access_Token: string, opts: { catalog_id?: string, page?: number, page_size?: number } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogGet");
        }

        const pathParams = {};
        const queryParams = {
            'catalog_id': opts['catalog_id'],
            'bc_id': bc_id,
            'page': opts['page'],
            'page_size': opts['page_size']
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogLexiconGet operation.
     * @callback moduleapi/CatalogApi~catalogLexiconGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the lexicon for your catalog for use in ad texts. [Catalog Lexicon Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740488375815169)
     * @param {String} catalog_id 
     * @param {String} bc_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {module:api/CatalogApi~catalogLexiconGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogLexiconGet(catalog_id: string, bc_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (catalog_id === undefined || catalog_id === null) {
            throw new Error("Missing the required parameter 'catalog_id' when calling catalogLexiconGet");
        }
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogLexiconGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogLexiconGet");
        }

        const pathParams = {};
        const queryParams = {
            'catalog_id': catalog_id,
            'bc_id': bc_id
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/lexicon/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogLocationCurrencyGet operation.
     * @callback moduleapi/CatalogApi~catalogLocationCurrencyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get supported locations and corresponding currencies for Catalog API. [Catalog Location Currency Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740491571747841)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {module:api/CatalogApi~catalogLocationCurrencyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogLocationCurrencyGet(Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogLocationCurrencyGet");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/location_currency/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogOverview operation.
     * @callback moduleapi/CatalogApi~catalogOverviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the number of products in different audit statuses in a catalog. [Catalog Overview](https://business-api.tiktok.com/portal/docs?id&#x3D;1740492470201345)
     * @param {String} catalog_id 
     * @param {String} bc_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {module:api/CatalogApi~catalogOverviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogOverview(catalog_id: string, bc_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (catalog_id === undefined || catalog_id === null) {
            throw new Error("Missing the required parameter 'catalog_id' when calling catalogOverview");
        }
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogOverview");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogOverview");
        }

        const pathParams = {};
        const queryParams = {
            'catalog_id': catalog_id,
            'bc_id': bc_id
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/overview/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogProductDelete operation.
     * @callback moduleapi/CatalogApi~catalogProductDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete products in bulk. [Catalog Product Delete](https://business-api.tiktok.com/portal/docs?id&#x3D;1740562489236481)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductDeleteBody} opts.body 
     * @param {module:api/CatalogApi~catalogProductDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogProductDelete(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogProductDelete");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/product/delete/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogProductFile operation.
     * @callback moduleapi/CatalogApi~catalogProductFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload products via file URL. [Catalog Product File](https://business-api.tiktok.com/portal/docs?id&#x3D;1740496787164161)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductFileBody} opts.body 
     * @param {module:api/CatalogApi~catalogProductFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogProductFile(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogProductFile");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/product/file/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogSetProductGet operation.
     * @callback moduleapi/CatalogApi~catalogSetProductGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get products in a product set. [Catalog Set Product Get](https://business-api.tiktok.com/portal/docs?id&#x3D;1740571478441986)
     * @param {String} bc_id 
     * @param {String} catalog_id 
     * @param {String} product_set_id 
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page  (default to <.>)
     * @param {Number} opts.page_size  (default to <.>)
     * @param {module:api/CatalogApi~catalogSetProductGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogSetProductGet(bc_id: string, catalog_id: string, product_set_id: string, Access_Token: string, opts: { page?: number, page_size?: number } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        
        if (bc_id === undefined || bc_id === null) {
            throw new Error("Missing the required parameter 'bc_id' when calling catalogSetProductGet");
        }
        if (catalog_id === undefined || catalog_id === null) {
            throw new Error("Missing the required parameter 'catalog_id' when calling catalogSetProductGet");
        }
        if (product_set_id === undefined || product_set_id === null) {
            throw new Error("Missing the required parameter 'product_set_id' when calling catalogSetProductGet");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogSetProductGet");
        }

        const pathParams = {};
        const queryParams = {
            'bc_id': bc_id,
            'catalog_id': catalog_id,
            'product_set_id': product_set_id,
            'page': opts['page'],
            'page_size': opts['page_size']
        };
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes: string[] = [];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/set/product/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody, // No body for GET
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Callback function to receive the result of the catalogUpdate operation.
     * @callback moduleapi/CatalogApi~catalogUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use this endpoint to update the name of a catalog. The catalog must be under a Business Center. [Catalog Update](https://business-api.tiktok.com/portal/docs?id&#x3D;1740306544966657)
     * @param {String} Access_Token Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id&#x3D;1738373164380162).
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogUpdateBody} opts.body 
     * @param {module:api/CatalogApi~catalogUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    catalogUpdate(Access_Token: string, opts: { body?: any } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts['body'];
        
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling catalogUpdate");
        }

        const pathParams = {};
        const queryParams = {};
        const headerParams = {
            'Access-Token': Access_Token
        };
        const formParams = {};

        const authNames: string[] = [];
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        const returnType = InlineResponse200;

        return this.apiClient.callApi(
            '/open_api/v1.3/catalog/update/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

}