/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The DmpcustomAudiencelookalikecreateContextInfo model module.
 * @module model/DmpcustomAudiencelookalikecreateContextInfo
 * @version 0.1.4
 */
export class DmpcustomAudiencelookalikecreateContextInfo {
  /** @property {number} app_id - Application ID */
  app_id?: number;

  /** @property {number} core_user_id - Core user ID */
  core_user_id?: number;

  /** @property {number} developer_id - Developer ID */
  developer_id?: number;

  /**
   * Constructs a new <code>DmpcustomAudiencelookalikecreateContextInfo</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>DmpcustomAudiencelookalikecreateContextInfo</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {DmpcustomAudiencelookalikecreateContextInfo} [obj] Optional instance to populate
   * @return {DmpcustomAudiencelookalikecreateContextInfo} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencelookalikecreateContextInfo): DmpcustomAudiencelookalikecreateContextInfo {
    if (!data) return obj || new DmpcustomAudiencelookalikecreateContextInfo();

    obj = obj || new DmpcustomAudiencelookalikecreateContextInfo();
    
    if (data.hasOwnProperty('app_id'))
      obj.app_id = ApiClient.convertToType(data['app_id'], 'Number');
    if (data.hasOwnProperty('core_user_id'))
      obj.core_user_id = ApiClient.convertToType(data['core_user_id'], 'Number');
    if (data.hasOwnProperty('developer_id'))
      obj.developer_id = ApiClient.convertToType(data['developer_id'], 'Number');

    return obj;
  }
}

