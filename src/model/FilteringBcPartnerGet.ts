/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcPartnerGet model module.
 * @module model/FilteringBcPartnerGet
 * @version 0.1.4
 */
export class FilteringBcPartnerGet {
  /** @property {string} relationship_status - Relationship status */
  relationship_status?: string;

  /** @property {string} role - Role */
  role?: string;

  /**
   * Constructs a new <code>FilteringBcPartnerGet</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>FilteringBcPartnerGet</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {FilteringBcPartnerGet} [obj] Optional instance to populate
   * @return {FilteringBcPartnerGet} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcPartnerGet): FilteringBcPartnerGet {
    if (!data) return obj || new FilteringBcPartnerGet();

    obj = obj || new FilteringBcPartnerGet();
    
    if (data.hasOwnProperty('relationship_status'))
      obj.relationship_status = ApiClient.convertToType(data['relationship_status'], 'String');
    if (data.hasOwnProperty('role'))
      obj.role = ApiClient.convertToType(data['role'], 'String');

    return obj;
  }
}

