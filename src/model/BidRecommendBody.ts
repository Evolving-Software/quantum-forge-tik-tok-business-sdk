/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BidRecommendBody model module.
 * @module model/BidRecommendBody
 * @version 0.1.4
 */
export class BidRecommendBody {
  advertiser_id: string;
  campaign_id: string;
  external_action?: string;
  location_ids: string[];
  objective_type: string;

  /**
   * Constructs a new <code>BidRecommendBody</code>.
   * @alias module:model/BidRecommendBody
   * @class
   * @param advertiser_id {String} Advertiser ID.
   * @param location_ids {Array.<String>} IDs of the locations that you want to target.
   * @param objective_type {String} Campaign objective. The current API endpoint only supports Traffic and Website conversions objectives.
   */
  constructor(advertiser_id: string = '', location_ids: string[] = [], objective_type: string = '') {
    this.advertiser_id = advertiser_id;
    this.campaign_id = '0';
    this.location_ids = location_ids;
    this.objective_type = objective_type;
  }

  /**
   * Constructs a <code>BidRecommendBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BidRecommendBody} obj Optional instance to populate.
   * @return {module:model/BidRecommendBody} The populated <code>BidRecommendBody</code> instance.
   */
  static constructFromObject(data: any, obj?: BidRecommendBody): BidRecommendBody {
    const instance = obj || new BidRecommendBody();
    
    if (data) {
      if (data.hasOwnProperty('advertiser_id')) {
        instance.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
      }
      
      if (data.hasOwnProperty('campaign_id')) {
        instance.campaign_id = ApiClient.convertToType(data['campaign_id'], 'String');
      }
      
      if (data.hasOwnProperty('external_action')) {
        instance.external_action = ApiClient.convertToType(data['external_action'], 'String');
      }
      
      if (data.hasOwnProperty('location_ids')) {
        instance.location_ids = ApiClient.convertToType(data['location_ids'], ['String']);
      }
      
      if (data.hasOwnProperty('objective_type')) {
        instance.objective_type = ApiClient.convertToType(data['objective_type'], 'String');
      }
    }
    return instance;
  }
}

