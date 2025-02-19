/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {DmpcustomAudiencefileuploadContextInfo} from './DmpcustomAudiencefileuploadContextInfo';

/**
 * The FileUploadBody model module.
 * @module model/FileUploadBody
 * @version 0.1.4
 */
export class FileUploadBody {
  /** Advertiser ID. */
  advertiser_id: string;

  /** Encryption type */
  calculate_type: string;

  /** Context info */
  context_info?: DmpcustomAudiencefileuploadContextInfo;

  /** Data files. Only supports CSV and TXT files */
  file: Blob;

  /** FileName */
  file_name?: string;

  /** The file's MD5 */
  file_signature: string;

  /**
   * Constructs a new <code>FileUploadBody</code>.
   * @param advertiser_id Advertiser ID.
   * @param calculate_type Encryption type. The value for this field must be consistent with the actual file data.
   * @param file Data files. Only supports CSV and TXT files. The file suffixes should exactly be .csv or .txt.
   * @param file_signature The file's MD5, which is used for server-side verification.
   */
  constructor(advertiser_id: string, calculate_type: string, file: Blob, file_signature: string) {
    this.advertiser_id = advertiser_id;
    this.calculate_type = calculate_type;
    this.file = file;
    this.file_signature = file_signature;
  }

  /**
   * Constructs a <code>FileUploadBody</code> from a plain JavaScript object, optionally creating a new instance.
   * @param data The plain JavaScript object bearing properties of interest.
   * @param obj Optional instance to populate.
   * @return The populated <code>FileUploadBody</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: FileUploadBody): FileUploadBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    obj = obj || new FileUploadBody(
      ApiClient.convertToType(data['advertiser_id'], 'String'),
      ApiClient.convertToType(data['calculate_type'], 'String'),
      ApiClient.convertToType(data['file'], 'Blob'),
      ApiClient.convertToType(data['file_signature'], 'String')
    );

    if (data.hasOwnProperty('context_info')) {
      obj.context_info = DmpcustomAudiencefileuploadContextInfo.constructFromObject(data['context_info'], undefined);
    }
    if (data.hasOwnProperty('file_name')) {
      obj.file_name = ApiClient.convertToType(data['file_name'], 'String');
    }
    
    return obj;
  }
}

