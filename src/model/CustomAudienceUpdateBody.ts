/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {DmpcustomAudienceapplyContextInfo} from './DmpcustomAudienceapplyContextInfo';

interface CustomAudienceUpdateProps {
  action?: string;
  advertiser_id: string | undefined;
  audience_enhancement?: boolean | undefined;
  audience_sub_type?: string | undefined;
  context_info?: DmpcustomAudienceapplyContextInfo | undefined;
  custom_audience_id: string | undefined;
  custom_audience_name?: string | undefined;
  file_paths?: string[] | undefined;
}

/**
 * The CustomAudienceUpdateBody model module.
 * @module model/CustomAudienceUpdateBody
 * @version 0.1.4
 */
export class CustomAudienceUpdateBody implements CustomAudienceUpdateProps {
  action: string;
  advertiser_id: string | undefined;
  audience_enhancement: boolean | undefined;
  audience_sub_type: string | undefined;
  context_info: DmpcustomAudienceapplyContextInfo | undefined;
  custom_audience_id: string | undefined;
  custom_audience_name: string | undefined;
  file_paths: string[] | undefined;

  /**
   * Constructs a new <code>CustomAudienceUpdateBody</code>.
   * @param {String} advertiser_id Advertiser ID.
   * @param {String} custom_audience_id Custom audience ID.
   */
  constructor(advertiser_id: string, custom_audience_id: string) {
    this.action = 'REPLACE';
    this.advertiser_id = advertiser_id;
    this.custom_audience_id = custom_audience_id;
  }

  /**
   * Constructs a <code>CustomAudienceUpdateBody</code> from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: CustomAudienceUpdateBody): CustomAudienceUpdateBody {
    if (!data) return obj || new CustomAudienceUpdateBody('', '');

    obj = obj || new CustomAudienceUpdateBody('', '');
    
    if (data.hasOwnProperty('action'))
      obj.action = ApiClient.convertToType(data['action'], 'String');
    if (data.hasOwnProperty('advertiser_id'))
      obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('audience_enhancement'))
      obj.audience_enhancement = ApiClient.convertToType(data['audience_enhancement'], 'Boolean');
    if (data.hasOwnProperty('audience_sub_type'))
      obj.audience_sub_type = ApiClient.convertToType(data['audience_sub_type'], 'String');
    if (data.hasOwnProperty('context_info'))
      obj.context_info = DmpcustomAudienceapplyContextInfo.constructFromObject(data['context_info']);
    if (data.hasOwnProperty('custom_audience_id'))
      obj.custom_audience_id = ApiClient.convertToType(data['custom_audience_id'], 'String');
    if (data.hasOwnProperty('custom_audience_name'))
      obj.custom_audience_name = ApiClient.convertToType(data['custom_audience_name'], 'String');
    if (data.hasOwnProperty('file_paths'))
      obj.file_paths = ApiClient.convertToType(data['file_paths'], ['String']);

    return obj;
  }
}

