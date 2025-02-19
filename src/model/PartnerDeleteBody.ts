/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The PartnerDeleteBody model module.
 * @module model/PartnerDeleteBody
 * @version 0.1.4
 */
export class PartnerDeleteBody {
  /** @property {string} bc_id - Business Center ID */
  bc_id: string;

  /** @property {string} partner_id - Partner ID */
  partner_id: string;

  /**
   * Constructs a new <code>PartnerDeleteBody</code>.
   * @param bc_id {string} Business Center ID
   * @param partner_id {string} Partner ID
   */
  constructor(bc_id: string, partner_id: string) {
    this.bc_id = bc_id;
    this.partner_id = partner_id;
  }

  /**
   * Constructs a <code>PartnerDeleteBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {PartnerDeleteBody} [obj] Optional instance to populate
   * @return {PartnerDeleteBody} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: PartnerDeleteBody): PartnerDeleteBody {
    if (!data) return obj || new PartnerDeleteBody('', '');

    obj = obj || new PartnerDeleteBody(
      data['bc_id'] || '',
      data['partner_id'] || ''
    );

    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('partner_id'))
      obj.partner_id = ApiClient.convertToType(data['partner_id'], 'String');

    return obj;
  }
}

