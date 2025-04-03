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
import {InlineResponse200} from '../model/InlineResponse200';
import type ToolActionBody from '../model/ToolActionBody';
import type {BidRecommendBody} from '../model/BidRecommendBody';
import type TargetingInfoBody from '../model/TargetingInfoBody';
import type TargetingSearchBody from '../model/TargetingSearchBody';

// Define the callback type matching ApiClientInterface
type Callback = (error: Error | null, data?: InlineResponse200, response?: Response) => void;

/**
* Tool service.
* @module api/ToolApi
* @version 0.1.4
*/
export class ToolApi {
    private apiClient: ApiClientInterface; // Use interface type

    /**
    * Constructs a new ToolApi. 
    * @alias module:api/ToolApi
    * @class
    * @param {ApiClientInterface} [apiClient] Optional API client implementation to use,
    * default to ApiClientInstance if unspecified.
    */
    constructor(apiClient?: ApiClientInterface) {
        this.apiClient = apiClient || ApiClientInstance;
    }

    /**
     * Get available locations by advertiser ID [Search Region](https://ads.tiktok.com/marketing_api/docs?id=1773644763581441)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Language for region names (e.g., 'en', 'zh'). Default: 'en'.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    searchRegion(advertiser_id: string, Access_Token: string, opts: {
        language?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling searchRegion");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling searchRegion");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'language': opts.language
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
            '/open_api/v1.3/search/region/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Get completion suggestions based on target advertising objectives. [Tool action](https://ads.tiktok.com/marketing_api/docs?id=1737168013094913)
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {ToolActionBody} opts.body Request body parameters.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolAction(Access_Token: string, opts: {
        body?: ToolActionBody;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolAction");
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
            '/open_api/v1.3/tool/action/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }

    /**
     * Get action categories [Tool action](https://ads.tiktok.com/marketing_api/docs?id=1737166752522241)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.special_industries Ad categories (e.g., HOUSING, EMPLOYMENT, CREDIT).
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolActionCategory(advertiser_id: string, Access_Token: string, opts: {
        special_industries?: Array<string>;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolActionCategory");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolActionCategory");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'special_industries': opts.special_industries ? opts.special_industries.join(',') : undefined // Replace buildCollectionParam
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
            '/open_api/v1.3/tool/action_category/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get a suggested bid [Tool Bid Recommend](https://ads.tiktok.com/marketing_api/docs?id=1737107845597186)
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {BidRecommendBody} opts.body Request body parameters.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolBidRecommend(Access_Token: string, opts: {
        body?: BidRecommendBody;
    } = {}, callback?: Callback): Promise<InlineResponse200> {
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolBidRecommend");
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
            '/open_api/v1.3/tool/bid/recommend/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get the authorization status of a Brand Safety partner [Tool Brand_safety Partner Authorize Status](https://ads.tiktok.com/marketing_api/docs?id=1738456743621634)
     * @param {String} partner Brand Safety partner (e.g., 'Zefr').
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolBrandSafetyPartnerAuthorizeStatus(partner: string, advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'partner' is set
        if (partner === undefined || partner === null) {
            throw new Error("Missing the required parameter 'partner' when calling toolBrandSafetyPartnerAuthorizeStatus");
        }
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolBrandSafetyPartnerAuthorizeStatus");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolBrandSafetyPartnerAuthorizeStatus");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'partner': partner,
            'advertiser_id': advertiser_id
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
            '/open_api/v1.3/tool/brand_safety/partner/authorize/status/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get carriers [Tool carrier](https://ads.tiktok.com/marketing_api/docs?id=1737168013095938)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolCarrier(advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> {
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolCarrier");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolCarrier");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id
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
            '/open_api/v1.3/tool/carrier/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get available contextual tags [Tool Contextual_tag Get](https://ads.tiktok.com/marketing_api/docs?id=1747747118654465)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} objective_type Advertising objective (e.g., REACH, VIDEO_VIEWS).
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.region_codes Country or region codes.
     * @param {String} opts.brand_safety_type Brand safety type (e.g., STANDARD_INVENTORY).
     * @param {String} opts.rf_campaign_type Reach & Frequency campaign type (STANDARD or PULSE).
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolContextualTagGet(advertiser_id: string, objective_type: string, Access_Token: string, opts: {
        region_codes?: Array<string>;
        brand_safety_type?: string;
        rf_campaign_type?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolContextualTagGet");
        }
        // verify the required parameter 'objective_type' is set
        if (objective_type === undefined || objective_type === null) {
            throw new Error("Missing the required parameter 'objective_type' when calling toolContextualTagGet");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolContextualTagGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'objective_type': objective_type,
            'region_codes': opts.region_codes ? opts.region_codes.join(',') : undefined, // Replace buildCollectionParam
            'brand_safety_type': opts.brand_safety_type,
            'rf_campaign_type': opts.rf_campaign_type
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
            '/open_api/v1.3/tool/contextual_tag/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get details of contextual tags [Tool Contextual_tag Info](https://ads.tiktok.com/marketing_api/docs?id=1747747180830722)
     * @param {String} advertiser_id Advertiser ID.
     * @param {Array.<String>} contextual_tag_ids Contextual tag IDs.
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolContextualTagInfo(advertiser_id: string, contextual_tag_ids: Array<string>, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolContextualTagInfo");
        }
        // verify the required parameter 'contextual_tag_ids' is set
        if (contextual_tag_ids === undefined || contextual_tag_ids === null) {
            throw new Error("Missing the required parameter 'contextual_tag_ids' when calling toolContextualTagInfo");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolContextualTagInfo");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'contextual_tag_ids': contextual_tag_ids.join(',') // Replace buildCollectionParam
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
            '/open_api/v1.3/tool/contextual_tag/info/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
   
    /**
     * Get device models [Tool device model](https://ads.tiktok.com/marketing_api/docs?id=1737172880570369)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolDeviceModel(advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolDeviceModel");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolDeviceModel");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id
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
            '/open_api/v1.3/tool/device_model/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get targeting hashtags by ID [Tool Hashtag Get](https://ads.tiktok.com/marketing_api/docs?id=1736280889167874)
     * @param {String} advertiser_id Advertiser ID
     * @param {Array.<String>} keyword_ids List of keyword IDs
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolHashtagGet(advertiser_id: string, keyword_ids: Array<string>, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolHashtagGet");
        }
        // verify the required parameter 'keyword_ids' is set
        if (keyword_ids === undefined || keyword_ids === null) {
            throw new Error("Missing the required parameter 'keyword_ids' when calling toolHashtagGet");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolHashtagGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'keyword_ids': keyword_ids.join(',') // Replace buildCollectionParam
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
            '/open_api/v1.3/tool/hashtag/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Search for targeting hashtags [Tool Hashtag Recommend](https://ads.tiktok.com/marketing_api/docs?id=1736271339521025)
     * @param {String} advertiser_id Advertiser ID.
     * @param {Array.<String>} keywords Keywords to get recommendations for (max 10).
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.operator Operator between keywords (AND or OR). Default: AND.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolHashtagRecommend(advertiser_id: string, keywords: Array<string>, Access_Token: string, opts: {
        operator?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolHashtagRecommend");
        }
        // verify the required parameter 'keywords' is set
        if (keywords === undefined || keywords === null) {
            throw new Error("Missing the required parameter 'keywords' when calling toolHashtagRecommend");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolHashtagRecommend");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'keywords': keywords.join(','), // Replace buildCollectionParam
            'operator': opts.operator
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
            '/open_api/v1.3/tool/hashtag/recommend/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get interest categories [Tool Interest category](https://ads.tiktok.com/marketing_api/docs?id=1737174348712961)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.version Version of interest category (1 or 2). Default: 2.
     * @param {Array.<String>} opts.placements Placements (e.g., PLACEMENT_TIKTOK).
     * @param {Array.<String>} opts.special_industries Ad categories (e.g., HOUSING).
     * @param {String} opts.language Language code (e.g., 'en', 'zh'). Default: 'en'.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolInterestCategory(advertiser_id: string, Access_Token: string, opts: {
        version?: number;
        placements?: Array<string>;
        special_industries?: Array<string>;
        language?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolInterestCategory");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolInterestCategory");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'version': opts.version,
            'placements': opts.placements ? opts.placements.join(',') : undefined, // Replace buildCollectionParam
            'special_industries': opts.special_industries ? opts.special_industries.join(',') : undefined, // Replace buildCollectionParam
            'language': opts.language
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
            '/open_api/v1.3/tool/interest_category/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get additional interest categories by ID [Tool Interest_keyword Get](https://ads.tiktok.com/marketing_api/docs?id=1763590894544897)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {any} opts.filtering Filtering conditions object.
     * @param {Array.<any>} opts.keyword_query Array of keyword query objects (max 50).
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolInterestKeywordGet(advertiser_id: string, Access_Token: string, opts: {
        filtering?: any;
        keyword_query?: Array<any>;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolInterestKeywordGet");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolInterestKeywordGet");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'filtering': opts.filtering ? JSON.stringify(opts.filtering) : undefined, // Stringify complex object
            'keyword_query': opts.keyword_query ? JSON.stringify(opts.keyword_query) : undefined // Stringify array of complex objects
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
            '/open_api/v1.3/tool/interest_keyword/get/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get interest keywords [Tool keyword recommend](https://ads.tiktok.com/marketing_api/docs?id=1737180852720642)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} keyword Seed keyword (only one).
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Keyword language (e.g., 'en', 'fr'). Default: 'en'.
     * @param {Number} opts.limit Number of recommendations (1-50). Default: 50.
     * @param {String} opts.mode Search mode (FUZZ_MATCH or SEMANTIC_RECOMMEND). Default: FUZZ_MATCH.
     * @param {String} opts.audience_type Audience type (GENERAL_INTEREST or PURCHASE_INTENTION). Default: GENERAL_INTEREST.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolInterestKeywordRecommend(advertiser_id: string, keyword: string, Access_Token: string, opts: {
        language?: string;
        limit?: number;
        mode?: string;
        audience_type?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolInterestKeywordRecommend");
        }
        // verify the required parameter 'keyword' is set
        if (keyword === undefined || keyword === null) {
            throw new Error("Missing the required parameter 'keyword' when calling toolInterestKeywordRecommend");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolInterestKeywordRecommend");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'keyword': keyword,
            'language': opts.language,
            'limit': opts.limit,
            'mode': opts.mode,
            'audience_type': opts.audience_type
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
            '/open_api/v1.3/tool/interest_keyword/recommend/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get languages [Tool Language](https://ads.tiktok.com/marketing_api/docs?id=1737188554152962)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolLanguage(advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolLanguage");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolLanguage");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id
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
            '/open_api/v1.3/tool/language/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get a TikTok in-app link [Tool Open_url](https://ads.tiktok.com/marketing_api/docs?id=1738457335681026)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} url Open URL.
     * @param {String} url_type Type of the open URL (e.g., USER_PROFILE, VIDEO).
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolOpenUrl(advertiser_id: string, url: string, url_type: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolOpenUrl");
        }
        // verify the required parameter 'url' is set
        if (url === undefined || url === null) {
            throw new Error("Missing the required parameter 'url' when calling toolOpenUrl");
        }
        // verify the required parameter 'url_type' is set
        if (url_type === undefined || url_type === null) {
            throw new Error("Missing the required parameter 'url_type' when calling toolOpenUrl");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolOpenUrl");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'url': url,
            'url_type': url_type
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
            '/open_api/v1.3/tool/open_url/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get OS versions [Tool Os_version](https://ads.tiktok.com/marketing_api/docs?id=1738308662898689)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} os_type OS type (ANDROID or IOS).
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolOsVersion(advertiser_id: string, os_type: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolOsVersion");
        }
        // verify the required parameter 'os_type' is set
        if (os_type === undefined || os_type === null) {
            throw new Error("Missing the required parameter 'os_type' when calling toolOsVersion");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolOsVersion");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'os_type': os_type
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
            '/open_api/v1.3/tool/os_version/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get region calling codes and region codes for phone numbers [Tool Phone_region_code](https://ads.tiktok.com/marketing_api/docs?id=1774488637039618)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolPhoneRegionCode(advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolPhoneRegionCode");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolPhoneRegionCode");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id
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
            '/open_api/v1.3/tool/phone_region_code/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get available locations [Tool Region](https://ads.tiktok.com/marketing_api/docs?id=1737189539571713)
     * @param {String} advertiser_id Advertiser ID
     * @param {Array.<String>} placements Placements (e.g., PLACEMENT_TIKTOK).
     * @param {String} objective_type Advertising objective.
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.promotion_target_type Promotion type for Lead Gen (INSTANT_PAGE or EXTERNAL_WEBSITE).
     * @param {String} opts.operating_system OS (ANDROID or IOS).
     * @param {String} opts.brand_safety_type Brand safety type (e.g., NO_BRAND_SAFETY).
     * @param {String} opts.brand_safety_partner Brand safety partner (IAS or OPEN_SLATE).
     * @param {String} opts.level_range Location level (e.g., ALL, TO_COUNTRY).
     * @param {String} opts.rf_campaign_type Reach & Frequency type (STANDARD or PULSE).
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolRegion(advertiser_id: string, placements: Array<string>, objective_type: string, Access_Token: string, opts: {
        promotion_target_type?: string;
        operating_system?: string;
        brand_safety_type?: string;
        brand_safety_partner?: string;
        level_range?: string;
        rf_campaign_type?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolRegion");
        }
        // verify the required parameter 'placements' is set
        if (placements === undefined || placements === null) {
            throw new Error("Missing the required parameter 'placements' when calling toolRegion");
        }
        // verify the required parameter 'objective_type' is set
        if (objective_type === undefined || objective_type === null) {
            throw new Error("Missing the required parameter 'objective_type' when calling toolRegion");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolRegion");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'placements': placements.join(','), // Replace buildCollectionParam
            'objective_type': objective_type,
            'promotion_target_type': opts.promotion_target_type,
            'operating_system': opts.operating_system,
            'brand_safety_type': opts.brand_safety_type,
            'brand_safety_partner': opts.brand_safety_partner,
            'level_range': opts.level_range,
            'rf_campaign_type': opts.rf_campaign_type
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
            '/open_api/v1.3/tool/region/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Obtain details about location targeting tags by ID [Tool Targeting Info](https://ads.tiktok.com/marketing_api/docs?id=1761237001980929)
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {TargetingInfoBody} opts.body Request body parameters.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolTargetingInfo(Access_Token: string, opts: {
        body?: TargetingInfoBody;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolTargetingInfo");
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
            '/open_api/v1.3/tool/targeting/info/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get internet service providers [Tool Targeting List](https://ads.tiktok.com/marketing_api/docs?id=1762962378261506)
     * @param {String} advertiser_id Advertiser ID.
     * @param {Array.<String>} location_ids Location IDs (country/region level, max 1000).
     * @param {String} scene Targeting type (ISP).
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolTargetingList(advertiser_id: string, location_ids: Array<string>, scene: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolTargetingList");
        }
        // verify the required parameter 'location_ids' is set
        if (location_ids === undefined || location_ids === null) {
            throw new Error("Missing the required parameter 'location_ids' when calling toolTargetingList");
        }
        // verify the required parameter 'scene' is set
        if (scene === undefined || scene === null) {
            throw new Error("Missing the required parameter 'scene' when calling toolTargetingList");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolTargetingList");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'location_ids': location_ids.join(','), // Replace buildCollectionParam
            'scene': scene
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
            '/open_api/v1.3/tool/targeting/list/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Search for location targeting tags [Tool Targeting Search](https://ads.tiktok.com/marketing_api/docs?id=1761236883355649)
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {TargetingSearchBody} opts.body Request body parameters.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolTargetingSearch(Access_Token: string, opts: {
        body?: TargetingSearchBody;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = opts.body;
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolTargetingSearch");
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
            '/open_api/v1.3/tool/targeting/search/', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody as any, // Cast body
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get time zones [Tool Timezone](https://ads.tiktok.com/marketing_api/docs?id=1738455961470977)
     * @param {String} advertiser_id Advertiser ID
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolTimezone(advertiser_id: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolTimezone");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolTimezone");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id
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
            '/open_api/v1.3/tool/timezone/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Get the verification results of a URL [Tool Url_validate](https://ads.tiktok.com/marketing_api/docs?id=1774487686007810)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} url The URL to validate.
     * @param {String} Access_Token Authorized access token.
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolUrlValidate(advertiser_id: string, url: string, Access_Token: string, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameter 'advertiser_id' is set
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolUrlValidate");
        }
        // verify the required parameter 'url' is set
        if (url === undefined || url === null) {
            throw new Error("Missing the required parameter 'url' when calling toolUrlValidate");
        }
        // verify the required parameter 'Access_Token' is set
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolUrlValidate");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'url': url
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
            '/open_api/v1.3/tool/url_validate/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
    
    /**
     * Check Value-Based Optimization eligibility [Tool Vbo_status](https://ads.tiktok.com/marketing_api/docs?id=1770016073586753)
     * @param {String} advertiser_id Advertiser ID.
     * @param {String} objective_type Advertising objective.
     * @param {String} promotion_type Promotion type.
     * @param {Array.<String>} placements Placements.
     * @param {String} Access_Token Authorized access token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.pixel_id Pixel ID.
     * @param {String} opts.app_id App ID.
     * @param {String} opts.optimization_event Optimization event.
     * @param {String} opts.ios14_quota_type iOS 14 quota type (OCCUPIED or UNOCCUPIED).
     * @param {String} opts.app_promotion_type App promotion type (APP_INSTALL or APP_RETARGETING).
     * @param {String} opts.store_id TikTok Shop ID.
     * @param {String} opts.campaign_app_profile_page_state Use App Profile Page (ON or OFF).
     * @param {Boolean} opts.is_smart_performance_campaign Is Smart+ Campaign?
     * @param {Boolean} opts.budget_optimize_on Is CBO enabled?
     * @param {String} opts.campaign_type Campaign type (REGULAR_CAMPAIGN or IOS14_CAMPAIGN).
     * @param {Callback} callback The callback function.
     * @returns {Promise<InlineResponse200>}
     */
    toolVboStatus(advertiser_id: string, objective_type: string, promotion_type: string, placements: Array<string>, Access_Token: string, opts: {
        pixel_id?: string;
        app_id?: string;
        optimization_event?: string;
        ios14_quota_type?: string;
        app_promotion_type?: string;
        store_id?: string;
        campaign_app_profile_page_state?: string;
        is_smart_performance_campaign?: boolean;
        budget_optimize_on?: boolean;
        campaign_type?: string;
    } = {}, callback?: Callback): Promise<InlineResponse200> { 
        const postBody = null;
        // verify the required parameters
        if (advertiser_id === undefined || advertiser_id === null) {
            throw new Error("Missing the required parameter 'advertiser_id' when calling toolVboStatus");
        }
        if (objective_type === undefined || objective_type === null) {
            throw new Error("Missing the required parameter 'objective_type' when calling toolVboStatus");
        }
        if (promotion_type === undefined || promotion_type === null) {
            throw new Error("Missing the required parameter 'promotion_type' when calling toolVboStatus");
        }
        if (placements === undefined || placements === null) {
            throw new Error("Missing the required parameter 'placements' when calling toolVboStatus");
        }
        if (Access_Token === undefined || Access_Token === null) {
            throw new Error("Missing the required parameter 'Access_Token' when calling toolVboStatus");
        }

        const pathParams: Record<string, string> = {};
        const queryParams: Record<string, QueryValue> = {
            'advertiser_id': advertiser_id,
            'objective_type': objective_type,
            'promotion_type': promotion_type,
            'placements': placements.join(','), // Replace buildCollectionParam
            'pixel_id': opts.pixel_id,
            'app_id': opts.app_id,
            'optimization_event': opts.optimization_event,
            'ios14_quota_type': opts.ios14_quota_type,
            'app_promotion_type': opts.app_promotion_type,
            'store_id': opts.store_id,
            'campaign_app_profile_page_state': opts.campaign_app_profile_page_state,
            'is_smart_performance_campaign': opts.is_smart_performance_campaign,
            'budget_optimize_on': opts.budget_optimize_on,
            'campaign_type': opts.campaign_type
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
            '/open_api/v1.3/tool/vbo_status/', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback as any // Cast callback
        ) as Promise<InlineResponse200>; // Cast return type
    }
}