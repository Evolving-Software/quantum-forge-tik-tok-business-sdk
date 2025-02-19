/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringCampaignGet model module.
 * @module model/FilteringCampaignGet
 * @version 0.1.4
 */
export class FilteringCampaignGet {
  /** @property {string[]} campaign_ids - List of Campaign IDs */
  campaign_ids?: string[];

  /** @property {string} creation_filter_end_time - Creation filter end time */
  creation_filter_end_time?: string;

  /** @property {string} creation_filter_start_time - Creation filter start time */
  creation_filter_start_time?: string;

  /** @property {string} objective_type - Objective type */
  objective_type?: string;

  /** @property {string} primary_status - Primary status */
  primary_status?: string;

  /** @property {string} secondary_status - Secondary status */
  secondary_status?: string;

  /** @property {boolean} targeting_broaden_required - Whether targeting broaden is required */
  targeting_broaden_required?: boolean;

  /**
   * Constructs a new <code>FilteringCampaignGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringCampaignGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringCampaignGet} [obj] Optional instance to populate
   * @return {FilteringCampaignGet} The populated <code>FilteringCampaignGet</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringCampaignGet): FilteringCampaignGet {
    if (!data) return obj || new FilteringCampaignGet();

    obj = obj || new FilteringCampaignGet();

    if (data.hasOwnProperty('campaign_ids'))
      obj.campaign_ids = ApiClient.convertToType(data['campaign_ids'], ['String']);
    if (data.hasOwnProperty('creation_filter_end_time'))
      obj.creation_filter_end_time = ApiClient.convertToType(data['creation_filter_end_time'], 'String');
    if (data.hasOwnProperty('creation_filter_start_time'))
      obj.creation_filter_start_time = ApiClient.convertToType(data['creation_filter_start_time'], 'String');
    if (data.hasOwnProperty('objective_type'))
      obj.objective_type = ApiClient.convertToType(data['objective_type'], 'String');
    if (data.hasOwnProperty('primary_status'))
      obj.primary_status = ApiClient.convertToType(data['primary_status'], 'String');
    if (data.hasOwnProperty('secondary_status'))
      obj.secondary_status = ApiClient.convertToType(data['secondary_status'], 'String');
    if (data.hasOwnProperty('targeting_broaden_required'))
      obj.targeting_broaden_required = ApiClient.convertToType(data['targeting_broaden_required'], 'Boolean');

    return obj;
  }
}

