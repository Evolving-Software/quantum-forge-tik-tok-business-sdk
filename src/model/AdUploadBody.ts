/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdUploadBody model module.
 * @module model/AdUploadBody
 * @version 0.1.4
 */
export class AdUploadBody {
  // Required property
  advertiser_id: string;

  // Optional properties
  auto_bind_enabled?: boolean;
  auto_fix_enabled?: boolean;
  file_id?: string;
  file_name?: string;
  flaw_detect?: boolean;
  is_third_party?: boolean;
  upload_type?: string;
  video_file?: Blob;
  video_id?: string;
  video_signature?: string;
  video_url?: string;

  /**
   * Constructs a new <code>AdUploadBody</code>.
   * @alias module:model/AdUploadBody
   * @class
   * @param advertiser_id {String} Advertiser ID
   */
  constructor(advertiser_id: string) {
    this.advertiser_id = advertiser_id;
  }

  /**
   * Constructs a <code>AdUploadBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdUploadBody} obj Optional instance to populate.
   * @return {module:model/AdUploadBody} The populated <code>AdUploadBody</code> instance.
   */
  static constructFromObject(data: any, obj?: AdUploadBody): AdUploadBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    const defaultAdvertiserId = data.advertiser_id || '';
    const instance = obj || new AdUploadBody(defaultAdvertiserId);

    if (data.hasOwnProperty('advertiser_id'))
      instance.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('auto_bind_enabled'))
      instance.auto_bind_enabled = ApiClient.convertToType(data['auto_bind_enabled'], 'Boolean');
    if (data.hasOwnProperty('auto_fix_enabled'))
      instance.auto_fix_enabled = ApiClient.convertToType(data['auto_fix_enabled'], 'Boolean');
    if (data.hasOwnProperty('file_id'))
      instance.file_id = ApiClient.convertToType(data['file_id'], 'String');
    if (data.hasOwnProperty('file_name'))
      instance.file_name = ApiClient.convertToType(data['file_name'], 'String');
    if (data.hasOwnProperty('flaw_detect'))
      instance.flaw_detect = ApiClient.convertToType(data['flaw_detect'], 'Boolean');
    if (data.hasOwnProperty('is_third_party'))
      instance.is_third_party = ApiClient.convertToType(data['is_third_party'], 'Boolean');
    if (data.hasOwnProperty('upload_type'))
      instance.upload_type = ApiClient.convertToType(data['upload_type'], 'String');
    if (data.hasOwnProperty('video_file'))
      instance.video_file = ApiClient.convertToType(data['video_file'], 'Blob');
    if (data.hasOwnProperty('video_id'))
      instance.video_id = ApiClient.convertToType(data['video_id'], 'String');
    if (data.hasOwnProperty('video_signature'))
      instance.video_signature = ApiClient.convertToType(data['video_signature'], 'String');
    if (data.hasOwnProperty('video_url'))
      instance.video_url = ApiClient.convertToType(data['video_url'], 'String');

    return instance;
  }
}

