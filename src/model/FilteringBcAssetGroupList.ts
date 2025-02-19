/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcAssetGroupList model module.
 * @module model/FilteringBcAssetGroupList
 * @version 0.1.4
 */
export class FilteringBcAssetGroupList {
  /** @property {string[]} asset_group_ids - List of asset group IDs */
  asset_group_ids?: string[];

  /** @property {string} asset_type - Type of asset */
  asset_type?: string;

  /** @property {string} keyword - Search keyword */
  keyword?: string;

  /**
   * Constructs a new <code>FilteringBcAssetGroupList</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcAssetGroupList</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcAssetGroupList} [obj] Optional instance to populate
   * @return {FilteringBcAssetGroupList} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcAssetGroupList): FilteringBcAssetGroupList {
    if (!data) return obj || new FilteringBcAssetGroupList();

    obj = obj || new FilteringBcAssetGroupList();
    
    if (data.hasOwnProperty('asset_group_ids'))
      obj.asset_group_ids = ApiClient.convertToType(data['asset_group_ids'], ['String']);
    if (data.hasOwnProperty('asset_type'))
      obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');
    if (data.hasOwnProperty('keyword'))
      obj.keyword = ApiClient.convertToType(data['keyword'], 'String');

    return obj;
  }
}

