/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The FileImageAdUpload model module.
 * @module model/FileImageAdUpload
 * @version 0.1.4
 */
export class FileImageAdUpload {
  advertiser_id: string;
  file_id?: string;
  file_name?: string;
  image_file?: Blob;
  image_signature?: string;
  image_url?: string;
  upload_type?: string;

  /**
   * Constructs a new <code>FileImageAdUpload</code>.
   * @alias module:model/FileImageAdUpload
   * @class
   * @param advertiser_id {String} Advertiser ID
   */
  constructor(advertiser_id: string) {
    this.advertiser_id = advertiser_id;
  }

  /**
   * Constructs a <code>FileImageAdUpload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileImageAdUpload} obj Optional instance to populate.
   * @return {module:model/FileImageAdUpload} The populated <code>FileImageAdUpload</code> instance.
   */
  static constructFromObject(data: any, obj?: FileImageAdUpload): FileImageAdUpload {
    if (data) {
      obj = obj || new FileImageAdUpload(data['advertiser_id']);

      if (data.hasOwnProperty('file_id')) {
        obj.file_id = ApiClient.convertToType(data['file_id'], 'String');
      }
      if (data.hasOwnProperty('file_name')) {
        obj.file_name = ApiClient.convertToType(data['file_name'], 'String');
      }
      if (data.hasOwnProperty('image_file')) {
        obj.image_file = ApiClient.convertToType(data['image_file'], 'Blob');
      }
      if (data.hasOwnProperty('image_signature')) {
        obj.image_signature = ApiClient.convertToType(data['image_signature'], 'String');
      }
      if (data.hasOwnProperty('image_url')) {
        obj.image_url = ApiClient.convertToType(data['image_url'], 'String');
      }
      if (data.hasOwnProperty('upload_type')) {
        obj.upload_type = ApiClient.convertToType(data['upload_type'], 'String');
      }
    }
    return obj || new FileImageAdUpload(data?.advertiser_id);
  }
}

