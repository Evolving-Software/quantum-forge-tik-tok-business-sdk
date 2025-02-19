/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcTransactionGet model module.
 * @module model/FilteringBcTransactionGet
 * @version 0.1.4
 */
export class FilteringBcTransactionGet {
  /** @property {string} funds_type - Type of funds */
  funds_type?: string;

  /**
   * Constructs a new <code>FilteringBcTransactionGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcTransactionGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcTransactionGet} [obj] Optional instance to populate
   * @return {FilteringBcTransactionGet} The populated <code>FilteringBcTransactionGet</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcTransactionGet): FilteringBcTransactionGet {
    if (!data) return obj || new FilteringBcTransactionGet();

    obj = obj || new FilteringBcTransactionGet();
    
    if (data.hasOwnProperty('funds_type')) {
      obj.funds_type = ApiClient.convertToType(data['funds_type'], 'String');
    }

    return obj;
  }
}

