/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BillingGroupUpdateBody model module.
 * @module model/BillingGroupUpdateBody
 * @version 0.1.4
 */
export class BillingGroupUpdateBody {
    add_advertiser_ids?: string[];
    bc_id: string;
    billing_group_id: string;
    delete_advertiser_ids?: string[];
    is_primary?: boolean;
    new_billing_group_emails?: string[];
    new_billing_group_name?: string;

    /**
     * Constructs a new <code>BillingGroupUpdateBody</code>.
     * @param bc_id Business Center ID
     * @param billing_group_id Billing Group ID
     */
    constructor(bc_id: string, billing_group_id: string) {
        this.bc_id = bc_id;
        this.billing_group_id = billing_group_id;
    }

    /**
     * Constructs a <code>BillingGroupUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     */
    static constructFromObject(data: any, obj?: BillingGroupUpdateBody): BillingGroupUpdateBody {
        if (!data) {
            throw new Error('Data required');
        }
        if (!data.bc_id || !data.billing_group_id) {
            throw new Error('Required parameters missing');
        }
        
        obj = obj || new BillingGroupUpdateBody(data.bc_id, data.billing_group_id);
        
        if (data.hasOwnProperty('add_advertiser_ids'))
            obj.add_advertiser_ids = ApiClient.convertToType(data['add_advertiser_ids'], ['String']);
        if (data.hasOwnProperty('delete_advertiser_ids'))
            obj.delete_advertiser_ids = ApiClient.convertToType(data['delete_advertiser_ids'], ['String']);
        if (data.hasOwnProperty('is_primary'))
            obj.is_primary = ApiClient.convertToType(data['is_primary'], 'Boolean');
        if (data.hasOwnProperty('new_billing_group_emails'))
            obj.new_billing_group_emails = ApiClient.convertToType(data['new_billing_group_emails'], ['String']);
        if (data.hasOwnProperty('new_billing_group_name'))
            obj.new_billing_group_name = ApiClient.convertToType(data['new_billing_group_name'], 'String');
        
        return obj;
    }
}

