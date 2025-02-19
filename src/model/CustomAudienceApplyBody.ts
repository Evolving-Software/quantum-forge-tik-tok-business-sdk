/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CustomAudienceApplyBody model module.
 * @module model/CustomAudienceApplyBody
 * @version 0.1.4
 */
export class CustomAudienceApplyBody {
  action_mode: string;
  adgroup_ids: string[];
  advertiser_id: string;
  custom_audience_id: string;
  /** @type {object | undefined} */
  context_info?: object | undefined;
  /** @type {string | undefined} */
  usage_mode?: string | undefined;

  /**
   * Constructs a new <code>CustomAudienceApplyBody</code>.
   * @alias module:model/CustomAudienceApplyBody
   * @class
   * @param action_mode {String} Specific operation to be performed on the audience. Enum values: Apply, Disconnect.
   * @param adgroup_ids {Array.<String>} A list of ad group IDs. Note: adgroup_ids and custom_audience_id should be under the same advertiser account. Otherwise, an error will occur. Lookalike Audience cannot be used in Reach & Frequency ads. Otherwise, an error will occur. See below for more details. 1. If the custom_audience_id is a Lookalike Audience and the adgroup_ids are Reach & Frequency ad groups, an error will occur. 2. If the custom_audience_id is a Lookalike Audience with the REACH_FREQUENCY audience subtype, an error will occur.
   * @param advertiser_id {String} Advertiser ID.
   * @param custom_audience_id {String} Custom audience ID. You can only pass one custom audience ID.
   */
  constructor(action_mode: string, adgroup_ids: string[], advertiser_id: string, custom_audience_id: string) {
    this.action_mode = action_mode;
    this.adgroup_ids = adgroup_ids;
    this.advertiser_id = advertiser_id;
    this.custom_audience_id = custom_audience_id;
  }

  /**
   * Constructs a <code>CustomAudienceApplyBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomAudienceApplyBody} obj Optional instance to populate.
   * @return {module:model/CustomAudienceApplyBody} The populated <code>CustomAudienceApplyBody</code> instance.
   */
  static constructFromObject(data: any, obj?: CustomAudienceApplyBody): CustomAudienceApplyBody {
    if (!data) return obj!;
    
    const instance = obj || new CustomAudienceApplyBody(
      ApiClient.convertToType(data['action_mode'], 'String'),
      ApiClient.convertToType(data['adgroup_ids'], ['String']),
      ApiClient.convertToType(data['advertiser_id'], 'String'),
      ApiClient.convertToType(data['custom_audience_id'], 'String')
    );
        
    if (data.hasOwnProperty('context_info')) instance.context_info = ApiClient.convertToType(data['context_info'], Object);
    if (data.hasOwnProperty('usage_mode')) instance.usage_mode = ApiClient.convertToType(data['usage_mode'], 'String');
    
    return instance;
  }
}

/**
 * Specific operation to be performed on the audience. Enum values: Apply, Disconnect.
 * @member {String} action_mode
 */

/**
 * A list of ad group IDs. Note: adgroup_ids and custom_audience_id should be under the same advertiser account. Otherwise, an error will occur. Lookalike Audience cannot be used in Reach & Frequency ads. Otherwise, an error will occur. See below for more details. 1. If the custom_audience_id is a Lookalike Audience and the adgroup_ids are Reach & Frequency ad groups, an error will occur. 2. If the custom_audience_id is a Lookalike Audience with the REACH_FREQUENCY audience subtype, an error will occur.
 * @member {Array.<String>} adgroup_ids
 */

/**
 * Advertiser ID.
 * @member {String} advertiser_id
 */

/**
 * @member {object | undefined} context_info
 */

/**
 * Custom audience ID. You can only pass one custom audience ID.
 * @member {String} custom_audience_id
 */

/**
 * Whether to include this audience in or exclude it from your ad groups. Required when action_mode is Apply. Enum values: Include, Exclude.
 * @member {String} usage_mode
 */

