/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringAdvertiserTransactionGet model module.
 * @module model/FilteringAdvertiserTransactionGet
 * @version 0.1.4
 */
export class FilteringAdvertiserTransactionGet {
  end_date?: string;
  funds_type?: string[];
  keyword?: string;
  start_date?: string;
  summary_by_account: boolean = false;
  transfer_type?: string;

  /**
   * Constructs a new <code>FilteringAdvertiserTransactionGet</code>.
   * @alias module:model/FilteringAdvertiserTransactionGet
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FilteringAdvertiserTransactionGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilteringAdvertiserTransactionGet} obj Optional instance to populate.
   * @return {module:model/FilteringAdvertiserTransactionGet} The populated <code>FilteringAdvertiserTransactionGet</code> instance.
   */
  static constructFromObject(data: any, obj?: FilteringAdvertiserTransactionGet): FilteringAdvertiserTransactionGet {
    if (data) {
      obj = obj || new FilteringAdvertiserTransactionGet();
      
      if (data.hasOwnProperty('end_date')) {
        obj.end_date = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('funds_type')) {
        obj.funds_type = ApiClient.convertToType(data['funds_type'], ['String']);
      }
      if (data.hasOwnProperty('keyword')) {
        obj.keyword = ApiClient.convertToType(data['keyword'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj.start_date = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('summary_by_account')) {
        obj.summary_by_account = ApiClient.convertToType(data['summary_by_account'], 'Boolean');
      }
      if (data.hasOwnProperty('transfer_type')) {
        obj.transfer_type = ApiClient.convertToType(data['transfer_type'], 'String');
      }
    }
    return obj || new FilteringAdvertiserTransactionGet();
  }
}

