/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

interface FileUploadContextInfoProps {
  app_id: number | undefined;
  core_user_id: number | undefined;
  developer_id: number | undefined;
  x_forwarded_for: string | undefined;
  x_real_ip: string | undefined;
}

/**
 * The DmpcustomAudiencefileuploadContextInfo model module.
 * @module model/DmpcustomAudiencefileuploadContextInfo
 * @version 0.1.4
 */
export class DmpcustomAudiencefileuploadContextInfo implements FileUploadContextInfoProps {
  app_id: number | undefined;
  core_user_id: number | undefined;
  developer_id: number | undefined;
  x_forwarded_for: string | undefined;
  x_real_ip: string | undefined;

  /**
   * Constructs a new <code>DmpcustomAudiencefileuploadContextInfo</code>.
   */
  constructor() {}

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencefileuploadContextInfo): DmpcustomAudiencefileuploadContextInfo {
    if (!data) return obj || new DmpcustomAudiencefileuploadContextInfo();

    obj = obj || new DmpcustomAudiencefileuploadContextInfo();
    
    if (data.hasOwnProperty('app_id'))
      obj.app_id = ApiClient.convertToType(data['app_id'], 'Number');
    if (data.hasOwnProperty('core_user_id'))
      obj.core_user_id = ApiClient.convertToType(data['core_user_id'], 'Number');
    if (data.hasOwnProperty('developer_id'))
      obj.developer_id = ApiClient.convertToType(data['developer_id'], 'Number');
    if (data.hasOwnProperty('x_forwarded_for'))
      obj.x_forwarded_for = ApiClient.convertToType(data['x_forwarded_for'], 'String');
    if (data.hasOwnProperty('x_real_ip'))
      obj.x_real_ip = ApiClient.convertToType(data['x_real_ip'], 'String');

    return obj;
  }
}

