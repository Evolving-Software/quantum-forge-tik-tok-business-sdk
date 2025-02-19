/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FilteringBcAssetAdminGet model module.
 * @module model/FilteringBcAssetAdminGet
 * @version 0.1.4
 */
export class FilteringBcAssetAdminGet {
  /** @property {string} advertiser_show_status - Advertiser show status */
  advertiser_show_status?: string;

  /** @property {string} asset_type - Type of asset */
  asset_type?: string;

  /** @property {string} keyword - Search keyword */
  keyword?: string;

  /** @property {string} member_role - Member role */
  member_role?: string;

  /** @property {string} relation_status - Relation status */
  relation_status?: string;

  /** @property {string} relation_type - Relation type */
  relation_type?: string;

  /**
   * Constructs a new <code>FilteringBcAssetAdminGet</code>.
   * @alias module:model/FilteringBcAssetAdminGet
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FilteringBcAssetAdminGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
   * @param {FilteringBcAssetAdminGet} [obj] Optional instance to populate.
   * @return {FilteringBcAssetAdminGet} The populated <code>FilteringBcAssetAdminGet</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: FilteringBcAssetAdminGet): FilteringBcAssetAdminGet {
    if (!data) return obj || new FilteringBcAssetAdminGet();

    obj = obj || new FilteringBcAssetAdminGet();
    
    if (data.hasOwnProperty('advertiser_show_status'))
      obj.advertiser_show_status = ApiClient.convertToType(data['advertiser_show_status'], 'String');
    if (data.hasOwnProperty('asset_type'))
      obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');
    if (data.hasOwnProperty('keyword'))
      obj.keyword = ApiClient.convertToType(data['keyword'], 'String');
    if (data.hasOwnProperty('member_role'))
      obj.member_role = ApiClient.convertToType(data['member_role'], 'String');
    if (data.hasOwnProperty('relation_status'))
      obj.relation_status = ApiClient.convertToType(data['relation_status'], 'String');
    if (data.hasOwnProperty('relation_type'))
      obj.relation_type = ApiClient.convertToType(data['relation_type'], 'String');

    return obj;
  }
}

