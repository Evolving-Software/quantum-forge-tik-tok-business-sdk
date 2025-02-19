/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcadvertisercreateQualificationInfo model module.
 * @module model/BcadvertisercreateQualificationInfo
 * @version 0.1.4
 */
export class BcadvertisercreateQualificationInfo {
    /** 
     * Qualified Document picture ID, see [Upload a business certificate](https://ads.tiktok.com/marketing_api/docs?id=1739938996913218).
     * Note: This field is required for ad accounts that are registered in the Chinese mainland or Hong Kong
     */
    license_image_id?: string;

    /**
     * Business license number.
     * This field is required for ad accounts that are registered in the Chinese mainland, Hong Kong, or in countries Brazil and Mexico
     */
    license_no?: string;

    /**
     * Promotion link. Required when your Business Center type is `AGENCY`.
     * Length cannot exceed 255 characters
     */
    promotion_link?: string;

    /**
     * Other Qualified Documents picture ID. See [Upload a business certificate](https://ads.tiktok.com/marketing_api/docs?id=1739938996913218).
     * Note: This field is required if the ad account or the Business Center is registered in France, Brazil, or Mexico
     */
    qualification_image_ids?: string[];

    /**
     * Constructs a new <code>BcadvertisercreateQualificationInfo</code>.
     * Qualification information.
     * Required when your Business Center type is `AGENCY`.
     * Note: Do not specify this object when your Business Center type is `DIRECT`, or an error will occur.
     */
    constructor(init?: Partial<BcadvertisercreateQualificationInfo>) {
        Object.assign(this, init);
    }

    /**
     * Constructs a <code>BcadvertisercreateQualificationInfo</code> from a plain JavaScript object
     */
    static constructFromObject(data: any, obj?: BcadvertisercreateQualificationInfo): BcadvertisercreateQualificationInfo {
        if (!data) {
            return new BcadvertisercreateQualificationInfo();
        }
        
        obj = obj || new BcadvertisercreateQualificationInfo();
        
        if (data.hasOwnProperty('license_image_id'))
            obj.license_image_id = ApiClient.convertToType(data['license_image_id'], 'String');
        if (data.hasOwnProperty('license_no'))
            obj.license_no = ApiClient.convertToType(data['license_no'], 'String');
        if (data.hasOwnProperty('promotion_link'))
            obj.promotion_link = ApiClient.convertToType(data['promotion_link'], 'String');
        if (data.hasOwnProperty('qualification_image_ids'))
            obj.qualification_image_ids = ApiClient.convertToType(data['qualification_image_ids'], ['String']);
        
        return obj;
    }
}

