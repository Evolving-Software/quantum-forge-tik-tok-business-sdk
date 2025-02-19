/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {AdvertiserupdateQualificationImages} from './AdvertiserupdateQualificationImages';

/**
 * The AdvertiserUpdateBody model module.
 * @module model/AdvertiserUpdateBody
 * @version 0.1.4
 */
export class AdvertiserUpdateBody {
  // Required property
  advertiser_id: string;

  // Optional properties
  address?: string;
  advertiser_name?: string;
  company?: string;
  contact_email?: string;
  contact_name?: string;
  contact_number?: string;
  license_image_id?: string;
  license_no?: string;
  need_submit_certificate?: boolean;
  promotion_link?: string;
  qualification_images?: AdvertiserupdateQualificationImages;
  tax_map?: string;

  /**
   * Constructs a new <code>AdvertiserUpdateBody</code>.
   * @alias module:model/AdvertiserUpdateBody
   * @class
   * @param advertiser_id {String} Ad account ID
   */
  constructor(advertiser_id: string) {
    this.advertiser_id = advertiser_id;
  }

  /**
   * Constructs a <code>AdvertiserUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvertiserUpdateBody} obj Optional instance to populate.
   * @return {module:model/AdvertiserUpdateBody} The populated <code>AdvertiserUpdateBody</code> instance.
   */
  static constructFromObject(data: any, obj?: AdvertiserUpdateBody): AdvertiserUpdateBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    const defaultAdvertiserId = data.advertiser_id || '';
    const instance = obj || new AdvertiserUpdateBody(defaultAdvertiserId);

    if (data.hasOwnProperty('address'))
      instance.address = ApiClient.convertToType(data['address'], 'String');
    if (data.hasOwnProperty('advertiser_id'))
      instance.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('advertiser_name'))
      instance.advertiser_name = ApiClient.convertToType(data['advertiser_name'], 'String');
    if (data.hasOwnProperty('company'))
      instance.company = ApiClient.convertToType(data['company'], 'String');
    if (data.hasOwnProperty('contact_email'))
      instance.contact_email = ApiClient.convertToType(data['contact_email'], 'String');
    if (data.hasOwnProperty('contact_name'))
      instance.contact_name = ApiClient.convertToType(data['contact_name'], 'String');
    if (data.hasOwnProperty('contact_number'))
      instance.contact_number = ApiClient.convertToType(data['contact_number'], 'String');
    if (data.hasOwnProperty('license_image_id'))
      instance.license_image_id = ApiClient.convertToType(data['license_image_id'], 'String');
    if (data.hasOwnProperty('license_no'))
      instance.license_no = ApiClient.convertToType(data['license_no'], 'String');
    if (data.hasOwnProperty('need_submit_certificate'))
      instance.need_submit_certificate = ApiClient.convertToType(data['need_submit_certificate'], 'Boolean');
    if (data.hasOwnProperty('promotion_link'))
      instance.promotion_link = ApiClient.convertToType(data['promotion_link'], 'String');
    if (data.hasOwnProperty('qualification_images'))
      instance.qualification_images = AdvertiserupdateQualificationImages.constructFromObject(data['qualification_images'], undefined);
    if (data.hasOwnProperty('tax_map'))
      instance.tax_map = ApiClient.convertToType(data['tax_map'], 'String');

    return instance;
  }
}

