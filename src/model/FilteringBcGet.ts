/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcGet model module.
 * @module model/FilteringBcGet
 * @version 0.1.4
 */
export class FilteringBcGet {
  /** @property {string} bc_id - Business Center ID */
  bc_id?: string;

  /** @property {string} bc_name - Business Center name */
  bc_name?: string;

  /** @property {string} status - Status filter */
  status?: string;

  /**
   * Constructs a new <code>FilteringBcGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcGet} [obj] Optional instance to populate
   * @return {FilteringBcGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcGet): FilteringBcGet {
    if (!data) return obj || new FilteringBcGet();

    obj = obj || new FilteringBcGet();
    
    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('bc_name'))
      obj.bc_name = ApiClient.convertToType(data['bc_name'], 'String');
    if (data.hasOwnProperty('status'))
      obj.status = ApiClient.convertToType(data['status'], 'String');

    return obj;
  }
}

