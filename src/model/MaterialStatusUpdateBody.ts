/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The MaterialStatusUpdateBody model module.
 * @module model/MaterialStatusUpdateBody
 * @version 0.1.4
 */
export class MaterialStatusUpdateBody {
  /** @property {string} advertiser_id - Advertiser ID */
  advertiser_id: string;

  /** @property {string} material_id - Material ID */
  material_id: string;

  /** @property {string} operation_status - Operation status */
  operation_status: string;

  /**
   * Constructs a new <code>MaterialStatusUpdateBody</code>.
   * @param advertiser_id {string} Advertiser ID
   * @param material_id {string} Material ID
   * @param operation_status {string} Operation status
   */
  constructor(advertiser_id: string, material_id: string, operation_status: string) {
    this.advertiser_id = advertiser_id;
    this.material_id = material_id;
    this.operation_status = operation_status;
  }

  /**
   * Constructs a <code>MaterialStatusUpdateBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {MaterialStatusUpdateBody} [obj] Optional instance to populate
   * @return {MaterialStatusUpdateBody} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: MaterialStatusUpdateBody): MaterialStatusUpdateBody {
    if (!data) return obj || new MaterialStatusUpdateBody('', '', '');

    obj = obj || new MaterialStatusUpdateBody(
      data['advertiser_id'] || '',
      data['material_id'] || '',
      data['operation_status'] || ''
    );

    if (data.hasOwnProperty('advertiser_id'))
      obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('material_id'))
      obj.material_id = ApiClient.convertToType(data['material_id'], 'String');
    if (data.hasOwnProperty('operation_status'))
      obj.operation_status = ApiClient.convertToType(data['operation_status'], 'String');

    return obj;
  }
}

