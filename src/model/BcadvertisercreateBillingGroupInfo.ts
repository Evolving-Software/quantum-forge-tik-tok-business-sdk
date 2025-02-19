/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcadvertisercreateBillingGroupInfo model module.
 * @module model/BcadvertisercreateBillingGroupInfo
 * @version 0.1.4
 */
export class BcadvertisercreateBillingGroupInfo {
    /** Billing group ID. Valid when `invoice_group_by` is `ACCOUNT` */
    billing_group_id?: string;
    
    /** Invoicing mode. Enum values: `ACCOUNT`: Invoices in this billing groups are combined. `ADVERTISER`: Invoices in this billing group are handled separately. */
    invoice_group_by?: 'ACCOUNT' | 'ADVERTISER';
    
    /** Party who pays the invoices. Enum values: `AGENCY`, `ADVERTISER`. This field is required when the registrated area of the ad account is `FR` (France) */
    invoice_payer?: 'AGENCY' | 'ADVERTISER';

    /**
     * Constructs a new <code>BcadvertisercreateBillingGroupInfo</code>.
     * Billing group information
     */
    constructor(init?: Partial<BcadvertisercreateBillingGroupInfo>) {
        Object.assign(this, init);
    }

    /**
     * Constructs a <code>BcadvertisercreateBillingGroupInfo</code> from a plain JavaScript object
     */
    static constructFromObject(data: any, obj?: BcadvertisercreateBillingGroupInfo): BcadvertisercreateBillingGroupInfo {
        if (!data) {
            return new BcadvertisercreateBillingGroupInfo();
        }
        
        obj = obj || new BcadvertisercreateBillingGroupInfo();
        
        if (data.hasOwnProperty('billing_group_id'))
            obj.billing_group_id = ApiClient.convertToType(data['billing_group_id'], 'String');
        if (data.hasOwnProperty('invoice_group_by'))
            obj.invoice_group_by = ApiClient.convertToType(data['invoice_group_by'], 'String');
        if (data.hasOwnProperty('invoice_payer'))
            obj.invoice_payer = ApiClient.convertToType(data['invoice_payer'], 'String');
        
        return obj;
    }
}

