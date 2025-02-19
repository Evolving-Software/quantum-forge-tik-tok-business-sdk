/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The ImageUploadBody model module.
 * @module model/ImageUploadBody
 * @version 0.1.4
 */
export class ImageUploadBody {
  /** @property {string} bc_id - Business Center ID */
  bc_id: string;

  /** @property {File} image_file - Image file to upload */
  image_file?: File;

  /**
   * Constructs a new <code>ImageUploadBody</code>.
   * @param bc_id {string} Business Center ID
   */
  constructor(bc_id: string) {
    this.bc_id = bc_id;
  }

  /**
   * Constructs a <code>ImageUploadBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {ImageUploadBody} [obj] Optional instance to populate
   * @return {ImageUploadBody} The populated <code>ImageUploadBody</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: ImageUploadBody): ImageUploadBody {
    if (!data) return obj || new ImageUploadBody('');

    obj = obj || new ImageUploadBody(data['bc_id'] || '');
    
    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('image_file'))
      obj.image_file = ApiClient.convertToType(data['image_file'], 'File');

    return obj;
  }
}

