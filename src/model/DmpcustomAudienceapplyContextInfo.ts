/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

interface ContextInfoProps {
  core_user_id: number | undefined;
}

/**
 * The DmpcustomAudienceapplyContextInfo model module.
 * @module model/DmpcustomAudienceapplyContextInfo
 * @version 0.1.4
 */
export class DmpcustomAudienceapplyContextInfo implements ContextInfoProps {
  core_user_id: number | undefined;

  /**
   * Constructs a new <code>DmpcustomAudienceapplyContextInfo</code>.
   */
  constructor() {}

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudienceapplyContextInfo): DmpcustomAudienceapplyContextInfo {
    if (!data) return obj || new DmpcustomAudienceapplyContextInfo();

    obj = obj || new DmpcustomAudienceapplyContextInfo();
    
    if (data.hasOwnProperty('core_user_id'))
      obj.core_user_id = ApiClient.convertToType(data['core_user_id'], 'Number');

    return obj;
  }
}

