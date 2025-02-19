/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CampaignUpdateBody model module.
 * @module model/CampaignUpdateBody
 * @version 0.1.4
 */
export class CampaignUpdateBody {
  advertiser_id: string;
  budget?: number;
  budget_mode?: string;
  campaign_id: string;
  campaign_name?: string;
  roas_bid?: number;
  special_industries?: string[];

  /**
   * Constructs a new <code>CampaignUpdateBody</code>.
   * @alias module:model/CampaignUpdateBody
   * @class
   * @param advertiser_id {String} Advertiser ID
   * @param campaign_id {String} Campaign name. It can contain up to 512 characters. Emoji is not supported. Note: Each word in Chinese or Japanese counts as two characters, while each letter in English counts as one character.
   */
  constructor(advertiser_id: string, campaign_id: string) {
    this.advertiser_id = advertiser_id;
    this.campaign_id = campaign_id;
  }

  /**
   * Constructs a <code>CampaignUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignUpdateBody} obj Optional instance to populate.
   * @return {module:model/CampaignUpdateBody} The populated <code>CampaignUpdateBody</code> instance.
   */
  static constructFromObject(data: any, obj?: CampaignUpdateBody): CampaignUpdateBody {
    if (data) {
      obj = obj || new CampaignUpdateBody(data['advertiser_id'], data['campaign_id']);
      if (data.hasOwnProperty('advertiser_id'))
        obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
      if (data.hasOwnProperty('budget'))
        obj.budget = ApiClient.convertToType(data['budget'], 'Number');
      if (data.hasOwnProperty('budget_mode'))
        obj.budget_mode = ApiClient.convertToType(data['budget_mode'], 'String');
      if (data.hasOwnProperty('campaign_id'))
        obj.campaign_id = ApiClient.convertToType(data['campaign_id'], 'String');
      if (data.hasOwnProperty('campaign_name'))
        obj.campaign_name = ApiClient.convertToType(data['campaign_name'], 'String');
      if (data.hasOwnProperty('roas_bid'))
        obj.roas_bid = ApiClient.convertToType(data['roas_bid'], 'Number');
      if (data.hasOwnProperty('special_industries'))
        obj.special_industries = ApiClient.convertToType(data['special_industries'], ['String']);
    }
    return obj as CampaignUpdateBody;
  }
}

