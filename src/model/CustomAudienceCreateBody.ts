/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CustomAudienceCreateBody model module.
 * @module model/CustomAudienceCreateBody
 * @version 0.1.4
 */
export class CustomAudienceCreateBody {
  // Required properties
  advertiser_id: string;
  calculate_type: string;
  custom_audience_name: string;
  file_paths: string[];

  // Optional properties with default values
  audience_enhancement: boolean = false;
  audience_sub_type: string = 'NORMAL';
  
  // Optional property
  retention_in_days?: number;

  /**
   * Constructs a new <code>CustomAudienceCreateBody</code>.
   * @alias module:model/CustomAudienceCreateBody
   * @class
   * @param advertiser_id {String} Advertiser ID.
   * @param calculate_type {String} Encryption type. calculate_type should be the same as all the files in the file_path, or you will not get a audience id or get an invalid audience id. For enum values, see Enumeration - Encryption Type.
   * @param custom_audience_name {String} Audience name. Maximum of 128 characters.
   * @param file_paths {Array.<String>} List of file paths. The recommended size is <50 to ensure a stable request. You can use /dmp/custom_audience/update/ to append more data files to the audience. You get the file_path in response after you upload your file calling Upload audience files endpoint.
   */
  constructor(
    advertiser_id: string,
    calculate_type: string,
    custom_audience_name: string,
    file_paths: string[]
  ) {
    this.advertiser_id = advertiser_id;
    this.calculate_type = calculate_type;
    this.custom_audience_name = custom_audience_name;
    this.file_paths = file_paths;
  }

  /**
   * Constructs a <code>CustomAudienceCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomAudienceCreateBody} obj Optional instance to populate.
   * @return {module:model/CustomAudienceCreateBody} The populated <code>CustomAudienceCreateBody</code> instance.
   */
  static constructFromObject(data: any, obj?: CustomAudienceCreateBody): CustomAudienceCreateBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    const defaultAdvertiserId = data.advertiser_id || '';
    const defaultCalculateType = data.calculate_type || '';
    const defaultCustomAudienceName = data.custom_audience_name || '';
    const defaultFilePaths = data.file_paths || [];
    
    const instance = obj || new CustomAudienceCreateBody(
      defaultAdvertiserId,
      defaultCalculateType,
      defaultCustomAudienceName,
      defaultFilePaths
    );

    if (data.hasOwnProperty('advertiser_id'))
      instance.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('audience_enhancement'))
      instance.audience_enhancement = ApiClient.convertToType(data['audience_enhancement'], 'Boolean');
    if (data.hasOwnProperty('audience_sub_type'))
      instance.audience_sub_type = ApiClient.convertToType(data['audience_sub_type'], 'String');
    if (data.hasOwnProperty('calculate_type'))
      instance.calculate_type = ApiClient.convertToType(data['calculate_type'], 'String');
    if (data.hasOwnProperty('custom_audience_name'))
      instance.custom_audience_name = ApiClient.convertToType(data['custom_audience_name'], 'String');
    if (data.hasOwnProperty('file_paths'))
      instance.file_paths = ApiClient.convertToType(data['file_paths'], ['String']);
    if (data.hasOwnProperty('retention_in_days'))
      instance.retention_in_days = ApiClient.convertToType(data['retention_in_days'], 'Number');

    return instance;
  }
}

