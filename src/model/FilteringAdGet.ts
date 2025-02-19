/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringAdGet model module.
 * @module model/FilteringAdGet
 * @version 0.1.4
 */
export class FilteringAdGet {
  /** @property {string[]} adgroup_ids - List of ad group IDs */
  adgroup_ids?: string[];

  /** @property {string[]} ad_ids - List of ad IDs */
  ad_ids?: string[];

  /** @property {string} creative_type - Creative type */
  creative_type?: string;

  /** @property {string} creation_filter_end_time - Creation filter end time */
  creation_filter_end_time?: string;

  /** @property {string} creation_filter_start_time - Creation filter start time */
  creation_filter_start_time?: string;

  /** @property {string} order_field - Field to order by */
  order_field?: string;

  /** @property {string} order_type - Order type (ASC or DESC) */
  order_type?: string;

  /** @property {string} primary_status - Primary status */
  primary_status?: string;

  /** @property {string} secondary_status - Secondary status */
  secondary_status?: string;

  /**
   * Constructs a new <code>FilteringAdGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringAdGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringAdGet} [obj] Optional instance to populate
   * @return {FilteringAdGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringAdGet): FilteringAdGet {
    if (!data) return obj || new FilteringAdGet();

    obj = obj || new FilteringAdGet();
    
    if (data.hasOwnProperty('adgroup_ids'))
      obj.adgroup_ids = ApiClient.convertToType(data['adgroup_ids'], ['String']);
    if (data.hasOwnProperty('ad_ids'))
      obj.ad_ids = ApiClient.convertToType(data['ad_ids'], ['String']);
    if (data.hasOwnProperty('creative_type'))
      obj.creative_type = ApiClient.convertToType(data['creative_type'], 'String');
    if (data.hasOwnProperty('creation_filter_end_time'))
      obj.creation_filter_end_time = ApiClient.convertToType(data['creation_filter_end_time'], 'String');
    if (data.hasOwnProperty('creation_filter_start_time'))
      obj.creation_filter_start_time = ApiClient.convertToType(data['creation_filter_start_time'], 'String');
    if (data.hasOwnProperty('order_field'))
      obj.order_field = ApiClient.convertToType(data['order_field'], 'String');
    if (data.hasOwnProperty('order_type'))
      obj.order_type = ApiClient.convertToType(data['order_type'], 'String');
    if (data.hasOwnProperty('primary_status'))
      obj.primary_status = ApiClient.convertToType(data['primary_status'], 'String');
    if (data.hasOwnProperty('secondary_status'))
      obj.secondary_status = ApiClient.convertToType(data['secondary_status'], 'String');

    return obj;
  }
}

