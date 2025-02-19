/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The LookalikeUpdateBody model module.
 * @module model/LookalikeUpdateBody
 * @version 0.1.4
 */
export class LookalikeUpdateBody {
  /** @property {string} advertiser_id - Advertiser ID */
  advertiser_id: string;

  /** @property {string} audience_ids - List of audience IDs, separated by commas */
  audience_ids: string;

  /** @property {string} operation - Operation type */
  operation: string;

  /**
   * Constructs a new <code>LookalikeUpdateBody</code>.
   * @param advertiser_id {string} Advertiser ID
   * @param audience_ids {string} List of audience IDs, separated by commas
   * @param operation {string} Operation type
   */
  constructor(advertiser_id: string, audience_ids: string, operation: string) {
    this.advertiser_id = advertiser_id;
    this.audience_ids = audience_ids;
    this.operation = operation;
  }

  /**
   * Constructs a <code>LookalikeUpdateBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {LookalikeUpdateBody} [obj] Optional instance to populate
   * @return {LookalikeUpdateBody} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: LookalikeUpdateBody): LookalikeUpdateBody {
    if (!data) return obj || new LookalikeUpdateBody('', '', '');

    obj = obj || new LookalikeUpdateBody(
      data['advertiser_id'] || '',
      data['audience_ids'] || '',
      data['operation'] || ''
    );

    if (data.hasOwnProperty('advertiser_id'))
      obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('audience_ids'))
      obj.audience_ids = ApiClient.convertToType(data['audience_ids'], 'String');
    if (data.hasOwnProperty('operation'))
      obj.operation = ApiClient.convertToType(data['operation'], 'String');

    return obj;
  }
}

