/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringAdvertiserBalanceGet model module.
 * @module model/FilteringAdvertiserBalanceGet
 * @version 0.1.4
 */
export class FilteringAdvertiserBalanceGet {
  /** @property {string[]} advertiser_ids - List of advertiser IDs */
  advertiser_ids?: string[];

  /**
   * Constructs a new <code>FilteringAdvertiserBalanceGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringAdvertiserBalanceGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringAdvertiserBalanceGet} [obj] Optional instance to populate
   * @return {FilteringAdvertiserBalanceGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringAdvertiserBalanceGet): FilteringAdvertiserBalanceGet {
    if (!data) return obj || new FilteringAdvertiserBalanceGet();

    obj = obj || new FilteringAdvertiserBalanceGet();
    
    if (data.hasOwnProperty('advertiser_ids'))
      obj.advertiser_ids = ApiClient.convertToType(data['advertiser_ids'], ['String']);

    return obj;
  }
}

