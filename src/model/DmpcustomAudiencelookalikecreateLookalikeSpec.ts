/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The DmpcustomAudiencelookalikecreateLookalikeSpec model module.
 * @module model/DmpcustomAudiencelookalikecreateLookalikeSpec
 * @version 0.1.4
 */
export class DmpcustomAudiencelookalikecreateLookalikeSpec {
  /** 
   * Size of lookalike audience. Enum values: NARROW, BALANCED and BROAD.
   * @property {string} audience_size 
   */
  audience_size?: string;

  /**
   * Whether to include the source audience in the new lookalike audience.
   * @property {boolean} include_source
   */
  include_source?: boolean;

  /**
   * IDs of the locations that you want to target
   * @property {string[]} location_ids
   */
  location_ids?: string[];

  /**
   * Device operating systems. Enum values support ALL for both ANDROID and IOS.
   * @property {string} mobile_os
   */
  mobile_os?: string;

  /**
   * The apps where you want to deliver your ads
   * @property {string[]} placements
   */
  placements?: string[];

  /**
   * Source (seed) audience ID. Source audience cannot be an existing lookalike audience.
   * @property {string} source_audience_id
   */
  source_audience_id?: string;

  /**
   * Constructs a new <code>DmpcustomAudiencelookalikecreateLookalikeSpec</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>DmpcustomAudiencelookalikecreateLookalikeSpec</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {DmpcustomAudiencelookalikecreateLookalikeSpec} [obj] Optional instance to populate
   * @return {DmpcustomAudiencelookalikecreateLookalikeSpec} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencelookalikecreateLookalikeSpec): DmpcustomAudiencelookalikecreateLookalikeSpec {
    if (!data) return obj || new DmpcustomAudiencelookalikecreateLookalikeSpec();

    obj = obj || new DmpcustomAudiencelookalikecreateLookalikeSpec();
    
    if (data.hasOwnProperty('audience_size'))
      obj.audience_size = ApiClient.convertToType(data['audience_size'], 'String');
    if (data.hasOwnProperty('include_source'))
      obj.include_source = ApiClient.convertToType(data['include_source'], 'Boolean');
    if (data.hasOwnProperty('location_ids'))
      obj.location_ids = ApiClient.convertToType(data['location_ids'], ['String']);
    if (data.hasOwnProperty('mobile_os'))
      obj.mobile_os = ApiClient.convertToType(data['mobile_os'], 'String');
    if (data.hasOwnProperty('placements'))
      obj.placements = ApiClient.convertToType(data['placements'], ['String']);
    if (data.hasOwnProperty('source_audience_id'))
      obj.source_audience_id = ApiClient.convertToType(data['source_audience_id'], 'String');

    return obj;
  }
}

