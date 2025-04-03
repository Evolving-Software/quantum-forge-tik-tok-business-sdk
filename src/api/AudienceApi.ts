/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClientInstance from "../ApiClient"; // Import the default instance
import { type ApiClientInterface, type JsonValue, type QueryValue } from "../types"; // Import interface, JsonValue, and QueryValue
import type {CustomAudienceApplyBody} from '../model/CustomAudienceApplyBody';
import type {CustomAudienceCreateBody} from '../model/CustomAudienceCreateBody';
import type {CustomAudienceDeleteBody} from '../model/CustomAudienceDeleteBody';
import type {CustomAudienceShareBody} from '../model/CustomAudienceShareBody';
import type {CustomAudienceUpdateBody} from '../model/CustomAudienceUpdateBody';
import type {DmpcustomAudiencefileuploadContextInfo} from '../model/DmpcustomAudiencefileuploadContextInfo';
import {InlineResponse200} from '../model/InlineResponse200';
import type {LookalikeCreateBody} from '../model/LookalikeCreateBody';
import type {LookalikeUpdateBody} from '../model/LookalikeUpdateBody';
import type {RuleCreateBody} from '../model/RuleCreateBody';
import type {SavedAudienceCreateBody} from '../model/SavedAudienceCreateBody';
import type {SavedAudienceDeleteBody} from '../model/SavedAudienceDeleteBody';
import type {ShareCancelBody} from '../model/ShareCancelBody';

/**
* Audience service.
* @module api/AudienceApi
* @version 0.1.4
*/
export class AudienceApi {
  private apiClient: ApiClientInterface; // Use interface type

  constructor(apiClient?: ApiClientInterface) {
    this.apiClient = apiClient || ApiClientInstance;
  }

  /**
   * Apply a shared custom audience
   */
  dmpCustomAudienceApply(Access_Token: string, opts: { body?: CustomAudienceApplyBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/apply/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get the latest application log of custom audiences
   */
  dmpCustomAudienceApplyLog(advertiser_id: string, custom_audience_ids: string[], Access_Token: string, opts: {
    page?: number,
    page_size?: number,
    timezone?: string,
    context_info?: any // Consider defining a stricter type if possible
  } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    if (!advertiser_id || !custom_audience_ids || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {
      'advertiser_id': advertiser_id,
      // Cast string[] via unknown to QueryValue
      'custom_audience_ids': custom_audience_ids as unknown as QueryValue,
      'page': opts.page,
      'page_size': opts.page_size,
      'timezone': opts.timezone,
      'context_info': opts.context_info as QueryValue // Cast context_info as well
    };

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
      '/open_api/v1.3/dmp/custom_audience/apply/log/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Create an audience by file
   */
  dmpCustomAudienceCreate(Access_Token: string, opts: { body?: CustomAudienceCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};
    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];

    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Delete audiences
   */
  dmpCustomAudienceDelete(Access_Token: string, opts: { body?: CustomAudienceDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Upload a data file
   */
  dmpCustomAudienceFileUpload(Access_Token: string, opts: {
    advertiser_id?: string,
    calculate_type?: string,
    context_info?: DmpcustomAudiencefileuploadContextInfo,
    file?: Blob,
    file_name?: string,
    file_signature?: string
  } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = null;
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, any> = {
      'advertiser_id': opts['advertiser_id'],
      'calculate_type': opts['calculate_type'],
      'context_info': typeof opts['context_info'] === 'object' ? JSON.stringify(opts['context_info']) : opts['context_info'],
      'file': opts['file'],
      'file_name': opts['file_name'],
      'file_signature': opts['file_signature']
    };

    const authNames: string[] = [];
    const contentTypes: string[] = ['multipart/form-data'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/file/upload/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Obtain the details of specified audiences
   */
  dmpCustomAudienceGet(advertiser_id: string, custom_audience_ids: string[], Access_Token: string, opts: { history_size?: number } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    if (!advertiser_id || !custom_audience_ids || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {
      'advertiser_id': advertiser_id,
      // Cast string[] via unknown to QueryValue
      'custom_audience_ids': custom_audience_ids as unknown as QueryValue,
      'history_size': opts.history_size
    };

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
      '/open_api/v1.3/dmp/custom_audience/get/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get all audiences
   */
  dmpCustomAudienceList(advertiser_id: string, Access_Token: string, opts: {
    custom_audience_ids?: string[],
    page?: number,
    page_size?: number
  } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    if (!advertiser_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {
      'advertiser_id': advertiser_id,
      'page': opts.page,
      'page_size': opts.page_size
    };

    if (opts.custom_audience_ids) {
      // Cast string[] via unknown to QueryValue
      queryParams['custom_audience_ids'] = opts.custom_audience_ids as unknown as QueryValue;
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
      '/open_api/v1.3/dmp/custom_audience/list/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Create a lookalike audience
   */
  dmpCustomAudienceLookalikeCreate(Access_Token: string, opts: { body?: LookalikeCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/lookalike/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Manually refresh a Lookalike Audience
   */
  dmpCustomAudienceLookalikeUpdate(Access_Token: string, opts: { body?: LookalikeUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/lookalike/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Create an audience by rules
   */
  dmpCustomAudienceRuleCreate(Access_Token: string, opts: { body?: RuleCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/rule/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Share custom audiences with other advertisers
   */
  dmpCustomAudienceShare(Access_Token: string, opts: { body?: CustomAudienceShareBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/share/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Stop sharing custom audiences with other advertisers
   */
  dmpCustomAudienceShareCancel(Access_Token: string, opts: { body?: ShareCancelBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/share/cancel/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get the sharing log of a custom audience
   */
  dmpCustomAudienceShareLog(advertiser_id: string, custom_audience_id: string, Access_Token: string, opts: { context_info?: any } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    if (!advertiser_id || !custom_audience_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {
      'advertiser_id': advertiser_id,
      'custom_audience_id': custom_audience_id,
      'context_info': opts.context_info as QueryValue // Cast context_info
    };

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
      '/open_api/v1.3/dmp/custom_audience/share/log/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Update the details of an audience
   */
  dmpCustomAudienceUpdate(Access_Token: string, opts: { body?: CustomAudienceUpdateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/custom_audience/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Create a Saved Audience
   */
  dmpSavedAudienceCreate(Access_Token: string, opts: { body?: SavedAudienceCreateBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/saved_audience/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Delete Saved Audience
   */
  dmpSavedAudienceDelete(Access_Token: string, opts: { body?: SavedAudienceDeleteBody } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, string> = {};

    const authNames: string[] = [];
    const contentTypes: string[] = ['application/json'];
    const accepts: string[] = ['application/json'];
    const returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/open_api/v1.3/dmp/saved_audience/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody as unknown as JsonValue,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get Saved Audience
   */
  dmpSavedAudienceList(advertiser_id: string, Access_Token: string, opts: {
    saved_audience_ids?: string[],
    page?: number,
    page_size?: number
  } = {}, callback?: (error: Error | null, data?: unknown, response?: Response) => void) {
    if (!advertiser_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, QueryValue> = {
      'advertiser_id': advertiser_id,
      'page': opts.page,
      'page_size': opts.page_size
    };

    if (opts.saved_audience_ids) {
      // Cast string[] via unknown to QueryValue
      queryParams['saved_audience_ids'] = opts.saved_audience_ids as unknown as QueryValue;
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
      '/open_api/v1.3/dmp/saved_audience/list/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
}