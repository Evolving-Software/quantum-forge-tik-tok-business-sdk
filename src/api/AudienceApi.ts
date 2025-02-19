/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {CustomAudienceApplyBody} from '../model/CustomAudienceApplyBody';
import {CustomAudienceCreateBody} from '../model/CustomAudienceCreateBody';
import {CustomAudienceDeleteBody} from '../model/CustomAudienceDeleteBody';
import {CustomAudienceShareBody} from '../model/CustomAudienceShareBody';
import {CustomAudienceUpdateBody} from '../model/CustomAudienceUpdateBody';
import {DmpcustomAudiencefileuploadContextInfo} from '../model/DmpcustomAudiencefileuploadContextInfo';
import {InlineResponse200} from '../model/InlineResponse200';
import {LookalikeCreateBody} from '../model/LookalikeCreateBody';
import {LookalikeUpdateBody} from '../model/LookalikeUpdateBody';
import {RuleCreateBody} from '../model/RuleCreateBody';
import {SavedAudienceCreateBody} from '../model/SavedAudienceCreateBody';
import {SavedAudienceDeleteBody} from '../model/SavedAudienceDeleteBody';
import {ShareCancelBody} from '../model/ShareCancelBody';

interface QueryParams {
  [key: string]: string | number | boolean | any[] | undefined;
}

/**
* Audience service.
* @module api/AudienceApi
* @version 0.1.4
*/
export class AudienceApi {
  private apiClient: ApiClient = {} as ApiClient;

  constructor(apiClient?: ApiClient) {
    if (apiClient) {
      this.apiClient = apiClient;
    } else {
      import("../ApiClient").then(module => {
        this.apiClient = module.default.instance;
      }).catch(() => {
        throw new Error("Failed to load ApiClient module");
      });
    }
  }

  /**
   * Apply a shared custom audience
   */
  dmpCustomAudienceApply(Access_Token: string, opts: { body?: CustomAudienceApplyBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: QueryParams = {};
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
      pathParams, queryParams, headerParams, formParams, postBody,
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
    context_info?: any
  } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!advertiser_id || !custom_audience_ids || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: QueryParams = {
      'advertiser_id': advertiser_id,
      'custom_audience_ids': this.apiClient.buildCollectionParam(custom_audience_ids, 'multi'),
      'page': opts.page,
      'page_size': opts.page_size,
      'timezone': opts.timezone,
      'context_info': opts.context_info
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
  dmpCustomAudienceCreate(Access_Token: string, opts: { body?: CustomAudienceCreateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = opts['body'];
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: QueryParams = {};
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
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Delete audiences
   */
  dmpCustomAudienceDelete(Access_Token: string, opts: { body?: CustomAudienceDeleteBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
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
  } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    const postBody = null;
    if (!Access_Token) {
      throw new Error("Missing required parameter 'Access_Token'");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {};
    const headerParams: Record<string, string> = {
      'Access-Token': Access_Token
    };
    const formParams: Record<string, any> = {
      'advertiser_id': opts['advertiser_id'],
      'calculate_type': opts['calculate_type'],
      'context_info': opts['context_info'],
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
  dmpCustomAudienceGet(advertiser_id: string, custom_audience_ids: string[], Access_Token: string, opts: { history_size?: number } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!advertiser_id || !custom_audience_ids || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'custom_audience_ids': this.apiClient.buildCollectionParam(custom_audience_ids, 'multi'),
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
  } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!advertiser_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'page': opts.page,
      'page_size': opts.page_size
    };

    if (opts.custom_audience_ids) {
      queryParams['custom_audience_ids'] = this.apiClient.buildCollectionParam(opts.custom_audience_ids, 'multi');
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
  dmpCustomAudienceLookalikeCreate(Access_Token: string, opts: { body?: LookalikeCreateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/lookalike/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Manually refresh a Lookalike Audience
   */
  dmpCustomAudienceLookalikeUpdate(Access_Token: string, opts: { body?: LookalikeUpdateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/lookalike/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Create an audience by rules
   */
  dmpCustomAudienceRuleCreate(Access_Token: string, opts: { body?: RuleCreateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/rule/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Share custom audiences with other advertisers
   */
  dmpCustomAudienceShare(Access_Token: string, opts: { body?: CustomAudienceShareBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/share/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Stop sharing custom audiences with other advertisers
   */
  dmpCustomAudienceShareCancel(Access_Token: string, opts: { body?: ShareCancelBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/share/cancel/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get the sharing log of a custom audience
   */
  dmpCustomAudienceShareLog(advertiser_id: string, custom_audience_id: string, Access_Token: string, opts: { context_info?: any } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!advertiser_id || !custom_audience_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'custom_audience_id': custom_audience_id,
      'context_info': opts.context_info
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
  dmpCustomAudienceUpdate(Access_Token: string, opts: { body?: CustomAudienceUpdateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/custom_audience/update/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Create a Saved Audience
   */
  dmpSavedAudienceCreate(Access_Token: string, opts: { body?: SavedAudienceCreateBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/saved_audience/create/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Delete Saved Audiences
   */
  dmpSavedAudienceDelete(Access_Token: string, opts: { body?: SavedAudienceDeleteBody } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
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
      '/open_api/v1.3/dmp/saved_audience/delete/', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Get the details of Saved Audiences
   */
  dmpSavedAudienceList(advertiser_id: string, Access_Token: string, opts: {
    saved_audience_ids?: string[],
    page?: number,
    page_size?: number
  } = {}, callback?: (error: string | null, data?: InlineResponse200, response?: string) => void) {
    if (!advertiser_id || !Access_Token) {
      throw new Error("Missing required parameters");
    }

    const pathParams: Record<string, string> = {};
    const queryParams: Record<string, any> = {
      'advertiser_id': advertiser_id,
      'page': opts.page,
      'page_size': opts.page_size
    };

    if (opts.saved_audience_ids) {
      queryParams['saved_audience_ids'] = this.apiClient.buildCollectionParam(opts.saved_audience_ids, 'multi');
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