/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The MemberUpdateBody model module.
 * @module model/MemberUpdateBody
 * @version 0.1.4
 */
export class MemberUpdateBody {
  /** @property {string} child_bc_id - Child Business Center ID */
  child_bc_id?: string;

  /** @property {string} ext_user_role - External user role */
  ext_user_role?: string;

  /** @property {string} user_id - User ID */
  user_id?: string;

  /** @property {string} user_name - User name */
  user_name?: string;

  /** @property {string} user_role - User role */
  user_role?: string;

  /**
   * Constructs a new <code>MemberUpdateBody</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>MemberUpdateBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {MemberUpdateBody} [obj] Optional instance to populate
   * @return {MemberUpdateBody} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: MemberUpdateBody): MemberUpdateBody {
    if (!data) return obj || new MemberUpdateBody();

    obj = obj || new MemberUpdateBody();
    
    if (data.hasOwnProperty('child_bc_id'))
      obj.child_bc_id = ApiClient.convertToType(data['child_bc_id'], 'String');
    if (data.hasOwnProperty('ext_user_role'))
      obj.ext_user_role = ApiClient.convertToType(data['ext_user_role'], 'String');
    if (data.hasOwnProperty('user_id'))
      obj.user_id = ApiClient.convertToType(data['user_id'], 'String');
    if (data.hasOwnProperty('user_name'))
      obj.user_name = ApiClient.convertToType(data['user_name'], 'String');
    if (data.hasOwnProperty('user_role'))
      obj.user_role = ApiClient.convertToType(data['user_role'], 'String');

    return obj;
  }
}

