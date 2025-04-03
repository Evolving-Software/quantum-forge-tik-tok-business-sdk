/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import type { Campaign } from './Campaign';

/**
 * Properties for creating a campaign
 */
export interface CampaignCreateBodyProps {
    /**
     * Required. Advertising objective
     */
    objective: Campaign['objective'];
    
    /**
     * Required. Campaign name with max 100 characters
     */
    campaign_name: string;
    
    /**
     * Optional. Campaign budget in advertiser's currency
     */
    budget?: number;
    
    /**
     * Required if budget is set. Budget type
     */
    budget_mode?: Campaign['budget_mode'];
    
    /**
     * Optional. Budget optimization switch
     */
    budget_optimize_on?: boolean;
}

/**
 * The CampaignCreateBody model module.
 * @module model/CampaignCreateBody
 * @version 0.1.4
 */
export class CampaignCreateBody {
  // Required properties
  advertiser_id: string;
  campaign_name: string;
  objective_type: string;

  // Optional properties
  app_id?: string | undefined;
  app_promotion_type?: string | undefined;
  budget?: number | undefined;
  budget_mode?: string | undefined;
  budget_optimize_on?: boolean | undefined;
  campaign_type?: string | undefined;
  operation_status?: string | undefined;
  optimization_goal?: string | undefined;
  rf_campaign_type?: string | undefined;
  special_industries?: string[] | undefined;

  /**
   * Constructs a new <code>CampaignCreateBody</code>.
   * @alias module:model/CampaignCreateBody
   * @class
   * @param advertiser_id {String} Advertiser ID
   * @param campaign_name {String} Campaign name. It can contain up to 512 characters. Emoji is not supported. Note: Each word in Chinese or Japanese counts as two characters, while each letter in English counts as one character.
   * @param objective_type {String} Advertising objective. For enum values and descriptions, see Objectives.
   */
  constructor(advertiser_id: string, campaign_name: string, objective_type: string) {
    this.advertiser_id = advertiser_id;
    this.campaign_name = campaign_name;
    this.objective_type = objective_type;
  }

  /**
   * Constructs a <code>CampaignCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateBody} obj Optional instance to populate.
   * @return {module:model/CampaignCreateBody} The populated <code>CampaignCreateBody</code> instance.
   */
  static constructFromObject(data: any, obj?: CampaignCreateBody): CampaignCreateBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    // If no object provided, create a new one with required parameters
    const defaultAdvertiserId = data.advertiser_id || '';
    const defaultCampaignName = data.campaign_name || '';
    const defaultObjectiveType = data.objective_type || '';
    const instance = obj || new CampaignCreateBody(defaultAdvertiserId, defaultCampaignName, defaultObjectiveType);

    if (data.hasOwnProperty('advertiser_id'))
      instance.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('app_id'))
      instance.app_id = ApiClient.convertToType(data['app_id'], 'String');
    if (data.hasOwnProperty('app_promotion_type'))
      instance.app_promotion_type = ApiClient.convertToType(data['app_promotion_type'], 'String');
    if (data.hasOwnProperty('budget'))
      instance.budget = ApiClient.convertToType(data['budget'], 'Number');
    if (data.hasOwnProperty('budget_mode'))
      instance.budget_mode = ApiClient.convertToType(data['budget_mode'], 'String');
    if (data.hasOwnProperty('budget_optimize_on'))
      instance.budget_optimize_on = ApiClient.convertToType(data['budget_optimize_on'], 'Boolean');
    if (data.hasOwnProperty('campaign_name'))
      instance.campaign_name = ApiClient.convertToType(data['campaign_name'], 'String');
    if (data.hasOwnProperty('campaign_type'))
      instance.campaign_type = ApiClient.convertToType(data['campaign_type'], 'String');
    if (data.hasOwnProperty('objective_type'))
      instance.objective_type = ApiClient.convertToType(data['objective_type'], 'String');
    if (data.hasOwnProperty('operation_status'))
      instance.operation_status = ApiClient.convertToType(data['operation_status'], 'String');
    if (data.hasOwnProperty('optimization_goal'))
      instance.optimization_goal = ApiClient.convertToType(data['optimization_goal'], 'String');
    if (data.hasOwnProperty('rf_campaign_type'))
      instance.rf_campaign_type = ApiClient.convertToType(data['rf_campaign_type'], 'String');
    if (data.hasOwnProperty('special_industries'))
      instance.special_industries = ApiClient.convertToType(data['special_industries'], ['String']);

    return instance;
  }
}

