/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The LinkUpdateBody model module.
 * @module model/LinkUpdateBody
 * @version 0.1.4
 */
export class LinkUpdateBody {
  /** @property {string[]} advertiser_ids - List of advertiser IDs */
  advertiser_ids: string[];

  /** @property {string} bc_id - Business Center ID */
  bc_id: string;

  /** @property {string} pixel_code - Pixel code */
  pixel_code: string;

  /** @property {string} relation_status - Relation status */
  relation_status: string;

  /**
   * Constructs a new <code>LinkUpdateBody</code>.
   * @param advertiser_ids {string[]} List of advertiser IDs
   * @param bc_id {string} Business Center ID
   * @param pixel_code {string} Pixel code
   * @param relation_status {string} Relation status
   */
  constructor(advertiser_ids: string[], bc_id: string, pixel_code: string, relation_status: string) {
    this.advertiser_ids = advertiser_ids;
    this.bc_id = bc_id;
    this.pixel_code = pixel_code;
    this.relation_status = relation_status;
  }

  /**
   * Constructs a <code>LinkUpdateBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {LinkUpdateBody} [obj] Optional instance to populate
   * @return {LinkUpdateBody} The populated <code>LinkUpdateBody</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: LinkUpdateBody): LinkUpdateBody {
    if (!data) return obj || new LinkUpdateBody([], '', '', '');

    obj = obj || new LinkUpdateBody(
      data['advertiser_ids'] || [],
      data['bc_id'] || '',
      data['pixel_code'] || '',
      data['relation_status'] || ''
    );
    
    if (data.hasOwnProperty('advertiser_ids'))
      obj.advertiser_ids = ApiClient.convertToType(data['advertiser_ids'], ['String']);
    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('pixel_code'))
      obj.pixel_code = ApiClient.convertToType(data['pixel_code'], 'String');
    if (data.hasOwnProperty('relation_status'))
      obj.relation_status = ApiClient.convertToType(data['relation_status'], 'String');

    return obj;
  }
}

