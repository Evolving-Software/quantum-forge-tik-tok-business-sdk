/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringAdgroupGet model module.
 * @module model/FilteringAdgroupGet
 * @version 0.1.4
 */
export class FilteringAdgroupGet {
  /** @property {string[]} adgroup_ids - List of ad group IDs */
  adgroup_ids?: string[];

  /** @property {string[]} campaign_ids - List of campaign IDs */
  campaign_ids?: string[];

  /** @property {string} creation_filter_end_time - Creation filter end time */
  creation_filter_end_time?: string;

  /** @property {string} creation_filter_start_time - Creation filter start time */
  creation_filter_start_time?: string;

  /** @property {string} operation_status - Operation status */
  operation_status?: string;

  /** @property {string} primary_status - Primary status */
  primary_status?: string;

  /** @property {string} secondary_status - Secondary status */
  secondary_status?: string;

  /**
   * Constructs a new <code>FilteringAdgroupGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringAdgroupGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringAdgroupGet} [obj] Optional instance to populate
   * @return {FilteringAdgroupGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringAdgroupGet): FilteringAdgroupGet {
    if (!data) return obj || new FilteringAdgroupGet();

    obj = obj || new FilteringAdgroupGet();
    
    if (data.hasOwnProperty('adgroup_ids'))
      obj.adgroup_ids = ApiClient.convertToType(data['adgroup_ids'], ['String']);
    if (data.hasOwnProperty('campaign_ids'))
      obj.campaign_ids = ApiClient.convertToType(data['campaign_ids'], ['String']);
    if (data.hasOwnProperty('creation_filter_end_time'))
      obj.creation_filter_end_time = ApiClient.convertToType(data['creation_filter_end_time'], 'String');
    if (data.hasOwnProperty('creation_filter_start_time'))
      obj.creation_filter_start_time = ApiClient.convertToType(data['creation_filter_start_time'], 'String');
    if (data.hasOwnProperty('operation_status'))
      obj.operation_status = ApiClient.convertToType(data['operation_status'], 'String');
    if (data.hasOwnProperty('primary_status'))
      obj.primary_status = ApiClient.convertToType(data['primary_status'], 'String');
    if (data.hasOwnProperty('secondary_status'))
      obj.secondary_status = ApiClient.convertToType(data['secondary_status'], 'String');

    return obj;
  }
}

