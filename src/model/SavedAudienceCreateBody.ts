/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The SavedAudienceCreateBody model module.
 * @module model/SavedAudienceCreateBody
 * @version 0.1.4
 */
export class SavedAudienceCreateBody {
  advertiser_id: string;
  location_ids: string[];
  saved_audience_name: string;
  actions?: string[] | undefined;
  age_groups?: string[] | undefined;
  audience_ids?: string[] | undefined;
  carrier_ids?: string[] | undefined;
  device_model_ids?: string[] | undefined;
  device_price_ranges?: string[] | undefined;
  excluded_audience_ids?: string[] | undefined;
  gender?: string | undefined;
  interest_category_ids?: string[] | undefined;
  interest_keyword_ids?: string[] | undefined;
  languages?: string[] | undefined;
  min_android_version?: string | undefined;
  min_ios_version?: string | undefined;
  network_types?: string[] | undefined;
  operating_systems?: string[] | undefined;

  /**
   * Constructs a new <code>SavedAudienceCreateBody</code>.
   * @alias module:model/SavedAudienceCreateBody
   * @class
   * @param advertiser_id {String} Advertiser ID.
   * @param location_ids {Array.<String>} IDs of the locations that you want to target. To get the available locations and corresponding IDs, use the /tool/region/ or /tool/targeting/search/ endpoint. Note: Overlapping targeted locations are not supported. For instance, you cannot target the U.S. and the state of California at the same time. DMA-level and city-level (or lower) targeting is only available in certain countries, and the access is managed by allowlist. If you would like to access it, please contact your TikTok representative for allowlisting.
   * @param saved_audience_name {String} Saved Audience name. Character limit is 512 and cannot contain emoji.
   */
  constructor(advertiser_id: string, location_ids: string[], saved_audience_name: string) {
    this.advertiser_id = advertiser_id;
    this.location_ids = location_ids;
    this.saved_audience_name = saved_audience_name;
  }

  /**
   * Constructs a <code>SavedAudienceCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedAudienceCreateBody} obj Optional instance to populate.
   * @return {module:model/SavedAudienceCreateBody} The populated <code>SavedAudienceCreateBody</code> instance.
   */
  static constructFromObject(data: any, obj?: SavedAudienceCreateBody): SavedAudienceCreateBody {
    if (!data) {
      return new SavedAudienceCreateBody('', [], '');
    }

    obj = obj || new SavedAudienceCreateBody(
      data.advertiser_id || '',
      data.location_ids || [],
      data.saved_audience_name || ''
    );

    if (data.hasOwnProperty('actions'))
      obj.actions = ApiClient.convertToType(data.actions, ['String']);
    
    if (data.hasOwnProperty('age_groups'))
      obj.age_groups = ApiClient.convertToType(data.age_groups, ['String']);
    
    if (data.hasOwnProperty('audience_ids'))
      obj.audience_ids = ApiClient.convertToType(data.audience_ids, ['String']);
    
    if (data.hasOwnProperty('carrier_ids'))
      obj.carrier_ids = ApiClient.convertToType(data.carrier_ids, ['String']);
    
    if (data.hasOwnProperty('device_model_ids'))
      obj.device_model_ids = ApiClient.convertToType(data.device_model_ids, ['String']);
    
    if (data.hasOwnProperty('device_price_ranges'))
      obj.device_price_ranges = ApiClient.convertToType(data.device_price_ranges, ['String']);
    
    if (data.hasOwnProperty('excluded_audience_ids'))
      obj.excluded_audience_ids = ApiClient.convertToType(data.excluded_audience_ids, ['String']);
    
    if (data.hasOwnProperty('gender'))
      obj.gender = ApiClient.convertToType(data.gender, 'String');
    
    if (data.hasOwnProperty('interest_category_ids'))
      obj.interest_category_ids = ApiClient.convertToType(data.interest_category_ids, ['String']);
    
    if (data.hasOwnProperty('interest_keyword_ids'))
      obj.interest_keyword_ids = ApiClient.convertToType(data.interest_keyword_ids, ['String']);
    
    if (data.hasOwnProperty('languages'))
      obj.languages = ApiClient.convertToType(data.languages, ['String']);
    
    if (data.hasOwnProperty('min_android_version'))
      obj.min_android_version = ApiClient.convertToType(data.min_android_version, 'String');
    
    if (data.hasOwnProperty('min_ios_version'))
      obj.min_ios_version = ApiClient.convertToType(data.min_ios_version, 'String');
    
    if (data.hasOwnProperty('network_types'))
      obj.network_types = ApiClient.convertToType(data.network_types, ['String']);
    
    if (data.hasOwnProperty('operating_systems'))
      obj.operating_systems = ApiClient.convertToType(data.operating_systems, ['String']);

    return obj;
  }
}

