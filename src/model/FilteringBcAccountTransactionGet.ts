/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcAccountTransactionGet model module.
 * @module model/FilteringBcAccountTransactionGet
 * @version 0.1.4
 */
export class FilteringBcAccountTransactionGet {
  account_ids?: string[];
  account_name?: string;
  billing_types?: string[];
  end_time?: string;
  owner_of_account?: string[];
  start_time?: string;
  transaction_types?: string[];

  /**
   * Constructs a new <code>FilteringBcAccountTransactionGet</code>.
   * @alias module:model/FilteringBcAccountTransactionGet
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FilteringBcAccountTransactionGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilteringBcAccountTransactionGet} obj Optional instance to populate.
   * @return {module:model/FilteringBcAccountTransactionGet} The populated <code>FilteringBcAccountTransactionGet</code> instance.
   */
  static constructFromObject(data: any, obj?: FilteringBcAccountTransactionGet): FilteringBcAccountTransactionGet {
    if (data) {
      obj = obj || new FilteringBcAccountTransactionGet();
      
      if (data.hasOwnProperty('account_ids')) {
        obj.account_ids = ApiClient.convertToType(data['account_ids'], ['String']);
      }
      if (data.hasOwnProperty('account_name')) {
        obj.account_name = ApiClient.convertToType(data['account_name'], 'String');
      }
      if (data.hasOwnProperty('billing_types')) {
        obj.billing_types = ApiClient.convertToType(data['billing_types'], ['String']);
      }
      if (data.hasOwnProperty('end_time')) {
        obj.end_time = ApiClient.convertToType(data['end_time'], 'String');
      }
      if (data.hasOwnProperty('owner_of_account')) {
        obj.owner_of_account = ApiClient.convertToType(data['owner_of_account'], ['String']);
      }
      if (data.hasOwnProperty('start_time')) {
        obj.start_time = ApiClient.convertToType(data['start_time'], 'String');
      }
      if (data.hasOwnProperty('transaction_types')) {
        obj.transaction_types = ApiClient.convertToType(data['transaction_types'], ['String']);
      }
    }
    return obj || new FilteringBcAccountTransactionGet();
  }
}

