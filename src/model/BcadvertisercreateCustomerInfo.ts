/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcadvertisercreateCustomerInfo model module.
 * @module model/BcadvertisercreateCustomerInfo
 * @version 0.1.4
 */
export class BcadvertisercreateCustomerInfo {
    /** Ad Account company name. Length cannot exceed 255 characters */
    company?: string;

    /** Ad Account industry ID. The value range is shown in [Appendix-Industries](https://ads.tiktok.com/marketing_api/docs?id=1739357589575681) */
    industry?: number;

    /** Ad Account registration code. The value range is shown in [Appendix-Location code](https://ads.tiktok.com/marketing_api/docs?id=1737585867307010) */
    registered_area?: string;

    /**
     * Constructs a new <code>BcadvertisercreateCustomerInfo</code>.
     * Business Information
     */
    constructor(init?: Partial<BcadvertisercreateCustomerInfo>) {
        Object.assign(this, init);
    }

    /**
     * Constructs a <code>BcadvertisercreateCustomerInfo</code> from a plain JavaScript object
     */
    static constructFromObject(data: any, obj?: BcadvertisercreateCustomerInfo): BcadvertisercreateCustomerInfo {
        if (!data) {
            return new BcadvertisercreateCustomerInfo();
        }
        
        obj = obj || new BcadvertisercreateCustomerInfo();
        
        if (data.hasOwnProperty('company'))
            obj.company = ApiClient.convertToType(data['company'], 'String');
        if (data.hasOwnProperty('industry'))
            obj.industry = ApiClient.convertToType(data['industry'], 'Number');
        if (data.hasOwnProperty('registered_area'))
            obj.registered_area = ApiClient.convertToType(data['registered_area'], 'String');
        
        return obj;
    }
}

