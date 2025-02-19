/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringReportIntegratedGet model module.
 * @module model/FilteringReportIntegratedGet
 * @version 0.1.4
 */
export class FilteringReportIntegratedGet {
  /** @property {string} field_name - Field name */
  field_name?: string;

  /** @property {string} filter_type - Filter type */
  filter_type?: string;

  /** @property {string} filter_value - Filter value */
  filter_value?: string;

  /**
   * Constructs a new <code>FilteringReportIntegratedGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringReportIntegratedGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringReportIntegratedGet} [obj] Optional instance to populate
   * @return {FilteringReportIntegratedGet} The populated <code>FilteringReportIntegratedGet</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringReportIntegratedGet): FilteringReportIntegratedGet {
    if (!data) return obj || new FilteringReportIntegratedGet();

    obj = obj || new FilteringReportIntegratedGet();
    
    if (data.hasOwnProperty('field_name'))
      obj.field_name = ApiClient.convertToType(data['field_name'], 'String');
    if (data.hasOwnProperty('filter_type'))
      obj.filter_type = ApiClient.convertToType(data['filter_type'], 'String');
    if (data.hasOwnProperty('filter_value'))
      obj.filter_value = ApiClient.convertToType(data['filter_value'], 'String');

    return obj;
  }
}

