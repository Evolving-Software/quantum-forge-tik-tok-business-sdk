/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {BcadvertisercreateAdvertiserInfo} from './BcadvertisercreateAdvertiserInfo';
import {BcadvertisercreateBillingGroupInfo} from './BcadvertisercreateBillingGroupInfo';
import {BcadvertisercreateBillingInfo} from './BcadvertisercreateBillingInfo';
import {BcadvertisercreateContactInfo} from './BcadvertisercreateContactInfo';
import {BcadvertisercreateCustomerInfo} from './BcadvertisercreateCustomerInfo';
import {BcadvertisercreateQualificationInfo} from './BcadvertisercreateQualificationInfo';

/**
 * The AdvertiserCreateBody model module.
 * @module model/AdvertiserCreateBody
 * @version 0.1.4
 */
export class AdvertiserCreateBody {
  advertiser_info: BcadvertisercreateAdvertiserInfo;
  bc_id: string;
  customer_info: BcadvertisercreateCustomerInfo;
  billing_group_info?: BcadvertisercreateBillingGroupInfo;
  billing_info?: BcadvertisercreateBillingInfo;
  contact_info?: BcadvertisercreateContactInfo;
  qualification_info?: BcadvertisercreateQualificationInfo;
  tied_to_billing_group?: boolean;

  /**
   * Constructs a new <code>AdvertiserCreateBody</code>.
   * @alias module:model/AdvertiserCreateBody
   * @class
   * @param advertiser_info {module:model/BcadvertisercreateAdvertiserInfo} 
   * @param bc_id {String} Business Center ID
   * @param customer_info {module:model/BcadvertisercreateCustomerInfo} 
   */
  constructor(
    advertiser_info: BcadvertisercreateAdvertiserInfo,
    bc_id: string,
    customer_info: BcadvertisercreateCustomerInfo
  ) {
    this.advertiser_info = advertiser_info;
    this.bc_id = bc_id;
    this.customer_info = customer_info;
  }

  /**
   * Constructs a <code>AdvertiserCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvertiserCreateBody} obj Optional instance to populate.
   * @return {module:model/AdvertiserCreateBody} The populated <code>AdvertiserCreateBody</code> instance.
   */
  static constructFromObject(data: any, obj?: AdvertiserCreateBody): AdvertiserCreateBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    const defaultAdvertiserInfo = data.advertiser_info ? BcadvertisercreateAdvertiserInfo.constructFromObject(data.advertiser_info, undefined) : new BcadvertisercreateAdvertiserInfo();
    const defaultBcId = data.bc_id || '';
    const defaultCustomerInfo = data.customer_info ? BcadvertisercreateCustomerInfo.constructFromObject(data.customer_info, undefined) : new BcadvertisercreateCustomerInfo();
    
    const instance = obj || new AdvertiserCreateBody(defaultAdvertiserInfo, defaultBcId, defaultCustomerInfo);

    if (data.hasOwnProperty('advertiser_info'))
      instance.advertiser_info = BcadvertisercreateAdvertiserInfo.constructFromObject(data['advertiser_info'], undefined);
    if (data.hasOwnProperty('bc_id'))
      instance.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('billing_group_info'))
      instance.billing_group_info = BcadvertisercreateBillingGroupInfo.constructFromObject(data['billing_group_info'], undefined);
    if (data.hasOwnProperty('billing_info'))
      instance.billing_info = BcadvertisercreateBillingInfo.constructFromObject(data['billing_info'], undefined);
    if (data.hasOwnProperty('contact_info'))
      instance.contact_info = BcadvertisercreateContactInfo.constructFromObject(data['contact_info'], undefined);
    if (data.hasOwnProperty('customer_info'))
      instance.customer_info = BcadvertisercreateCustomerInfo.constructFromObject(data['customer_info'], undefined);
    if (data.hasOwnProperty('qualification_info'))
      instance.qualification_info = BcadvertisercreateQualificationInfo.constructFromObject(data['qualification_info'], undefined);
    if (data.hasOwnProperty('tied_to_billing_group'))
      instance.tied_to_billing_group = ApiClient.convertToType(data['tied_to_billing_group'], 'Boolean');

    return instance;
  }
}

