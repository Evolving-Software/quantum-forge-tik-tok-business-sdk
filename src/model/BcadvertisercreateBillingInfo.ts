/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcadvertisercreateBillingInfo model module.
 * @module model/BcadvertisercreateBillingInfo
 * @version 0.1.4
 */
export class BcadvertisercreateBillingInfo {
    /** Billing address, no more than 512 characters in length */
    address?: string;

    /**
     * Billing and invoicing tax number. Different countries use different tax number fields:
     * - vat: European countries (e.g., France)
     * - tax_id: Brazil (required), Mexico (required), UAE, Egypt, Saudi Arabia, Israel, Turkey, Canada, USA
     * - abn: Australia and New Zealand
     */
    tax_map?: string;

    /**
     * Constructs a new <code>BcadvertisercreateBillingInfo</code>.
     * Billing information. Required if the place of registration of the ad account or the agency that owns the Business Center is France, Brazil, or Mexico
     */
    constructor(init?: Partial<BcadvertisercreateBillingInfo>) {
        Object.assign(this, init);
    }

    /**
     * Constructs a <code>BcadvertisercreateBillingInfo</code> from a plain JavaScript object
     */
    static constructFromObject(data: any, obj?: BcadvertisercreateBillingInfo): BcadvertisercreateBillingInfo {
        if (!data) {
            return new BcadvertisercreateBillingInfo();
        }
        
        obj = obj || new BcadvertisercreateBillingInfo();
        
        if (data.hasOwnProperty('address'))
            obj.address = ApiClient.convertToType(data['address'], 'String');
        if (data.hasOwnProperty('tax_map'))
            obj.tax_map = ApiClient.convertToType(data['tax_map'], 'String');
        
        return obj;
    }
}

