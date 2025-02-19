/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcAssetGet model module.
 * @module model/FilteringBcAssetGet
 * @version 0.1.4
 */
export class FilteringBcAssetGet {
  /** @property {string} keyword - Keyword filter for asset search */
  keyword?: string;

  /** @property {string} user_email - User email filter */
  user_email?: string;

  /** @property {string} user_id - User ID filter */
  user_id?: string;

  /**
   * Constructs a new <code>FilteringBcAssetGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcAssetGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcAssetGet} [obj] Optional instance to populate
   * @return {FilteringBcAssetGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcAssetGet): FilteringBcAssetGet {
    if (!data) return obj || new FilteringBcAssetGet();

    obj = obj || new FilteringBcAssetGet();
    
    if (data.hasOwnProperty('keyword'))
      obj.keyword = ApiClient.convertToType(data['keyword'], 'String');
    if (data.hasOwnProperty('user_email'))
      obj.user_email = ApiClient.convertToType(data['user_email'], 'String');
    if (data.hasOwnProperty('user_id'))
      obj.user_id = ApiClient.convertToType(data['user_id'], 'String');

    return obj;
  }
}

