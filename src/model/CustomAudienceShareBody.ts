/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CustomAudienceShareBody model module.
 * @module model/CustomAudienceShareBody
 * @version 0.1.4
 */
export class CustomAudienceShareBody {
  advertiser_id?: string;
  context_info?: any;
  custom_audience_ids?: string[];
  shared_advertiser_ids?: string[];

  /**
   * Constructs a new <code>CustomAudienceShareBody</code>.
   * @alias module:model/CustomAudienceShareBody
   * @class
   * @param advertiser_id {String} Advertiser ID that the custom audience belongs to.
   * @param custom_audience_ids {Array.<String>} A list of custom audience IDs. For each custom audience, you can share it with up to 10 Business Centers or advertisers.
   * @param shared_advertiser_ids {Array.<String>} A list of advertiser IDs that you want to share the custom audience with.
   */
  constructor(advertiser_id: string, custom_audience_ids: string[], shared_advertiser_ids: string[]) {
    this.advertiser_id = advertiser_id;
    this.custom_audience_ids = custom_audience_ids;
    this.shared_advertiser_ids = shared_advertiser_ids;
    this.context_info = undefined;
  }

  /**
   * Constructs a <code>CustomAudienceShareBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomAudienceShareBody} obj Optional instance to populate.
   * @return {module:model/CustomAudienceShareBody} The populated <code>CustomAudienceShareBody</code> instance.
   */
  static constructFromObject(data: any, obj?: CustomAudienceShareBody): CustomAudienceShareBody {
    if (data) {
      obj = obj || new CustomAudienceShareBody(data['advertiser_id'], data['custom_audience_ids'], data['shared_advertiser_ids']);
      if (data.hasOwnProperty('context_info'))
        obj.context_info = ApiClient.convertToType(data['context_info'], Object);
    }
    return obj || new CustomAudienceShareBody(data['advertiser_id'], data['custom_audience_ids'], data['shared_advertiser_ids']);
  }
}

