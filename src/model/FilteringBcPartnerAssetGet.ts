/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcPartnerAssetGet model module.
 * @module model/FilteringBcPartnerAssetGet
 * @version 0.1.4
 */
export class FilteringBcPartnerAssetGet {
  /** @property {string} asset_type - Asset type */
  asset_type?: string;

  /**
   * Constructs a new <code>FilteringBcPartnerAssetGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcPartnerAssetGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcPartnerAssetGet} [obj] Optional instance to populate
   * @return {FilteringBcPartnerAssetGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcPartnerAssetGet): FilteringBcPartnerAssetGet {
    if (!data) return obj || new FilteringBcPartnerAssetGet();

    obj = obj || new FilteringBcPartnerAssetGet();
    
    if (data.hasOwnProperty('asset_type'))
      obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');

    return obj;
  }
}

