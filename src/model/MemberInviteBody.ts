/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { BcmemberinviteExtUserRole } from './BcmemberinviteExtUserRole';

/**
 * The MemberInviteBody model module.
 * @module model/MemberInviteBody
 * @version 0.1.4
 */
export class MemberInviteBody {
  /** @property {string} advertiser_ids - List of advertiser IDs, separated by commas */
  advertiser_ids?: string;

  /** @property {string} bc_id - Business Center ID */
  bc_id: string;

  /** @property {BcmemberinviteExtUserRole} ext_user_role - External user role */
  ext_user_role?: BcmemberinviteExtUserRole;

  /** @property {string} role - User role */
  role?: string;

  /** @property {string} user_email - User email */
  user_email: string;

  /**
   * Constructs a new <code>MemberInviteBody</code>.
   * @param bc_id {string} Business Center ID
   * @param user_email {string} User email
   */
  constructor(bc_id: string, user_email: string) {
    this.bc_id = bc_id;
    this.user_email = user_email;
  }

  /**
   * Constructs a <code>MemberInviteBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {MemberInviteBody} [obj] Optional instance to populate
   * @return {MemberInviteBody} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: MemberInviteBody): MemberInviteBody {
    if (!data) return obj || new MemberInviteBody('', '');

    obj = obj || new MemberInviteBody(
      data['bc_id'] || '',
      data['user_email'] || ''
    );
    
    if (data.hasOwnProperty('advertiser_ids'))
      obj.advertiser_ids = ApiClient.convertToType(data['advertiser_ids'], 'String');
    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('ext_user_role'))
      obj.ext_user_role = BcmemberinviteExtUserRole.constructFromObject(data['ext_user_role'], new BcmemberinviteExtUserRole());
    if (data.hasOwnProperty('role'))
      obj.role = ApiClient.convertToType(data['role'], 'String');
    if (data.hasOwnProperty('user_email'))
      obj.user_email = ApiClient.convertToType(data['user_email'], 'String');

    return obj;
  }
}

