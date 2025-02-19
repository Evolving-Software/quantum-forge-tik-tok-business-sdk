/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcMemberGet model module.
 * @module model/FilteringBcMemberGet
 * @version 0.1.4
 */
export class FilteringBcMemberGet {
  /** @property {string} role - Role filter */
  role?: string;

  /** @property {string} status - Status filter */
  status?: string;

  /** @property {string} user_id - User ID filter */
  user_id?: string;

  /**
   * Constructs a new <code>FilteringBcMemberGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcMemberGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcMemberGet} [obj] Optional instance to populate
   * @return {FilteringBcMemberGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcMemberGet): FilteringBcMemberGet {
    if (!data) return obj || new FilteringBcMemberGet();

    obj = obj || new FilteringBcMemberGet();
    
    if (data.hasOwnProperty('role'))
      obj.role = ApiClient.convertToType(data['role'], 'String');
    if (data.hasOwnProperty('status'))
      obj.status = ApiClient.convertToType(data['status'], 'String');
    if (data.hasOwnProperty('user_id'))
      obj.user_id = ApiClient.convertToType(data['user_id'], 'String');

    return obj;
  }
}

