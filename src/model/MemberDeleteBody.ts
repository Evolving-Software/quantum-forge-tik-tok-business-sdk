/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The MemberDeleteBody model module.
 * @module model/MemberDeleteBody
 * @version 0.1.4
 */
export class MemberDeleteBody {
  /** @property {string} bc_id - Business Center ID */
  bc_id: string;

  /** @property {string} user_id - User ID */
  user_id: string;

  /**
   * Constructs a new <code>MemberDeleteBody</code>.
   * @param bc_id {string} Business Center ID
   * @param user_id {string} User ID
   */
  constructor(bc_id: string, user_id: string) {
    this.bc_id = bc_id;
    this.user_id = user_id;
  }

  /**
   * Constructs a <code>MemberDeleteBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {MemberDeleteBody} [obj] Optional instance to populate
   * @return {MemberDeleteBody} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: MemberDeleteBody): MemberDeleteBody {
    if (!data) return obj || new MemberDeleteBody('', '');

    obj = obj || new MemberDeleteBody(
      data['bc_id'] || '',
      data['user_id'] || ''
    );

    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('user_id'))
      obj.user_id = ApiClient.convertToType(data['user_id'], 'String');

    return obj;
  }
}

