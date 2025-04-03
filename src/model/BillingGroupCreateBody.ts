/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BillingGroupCreateBody model module.
 * @module model/BillingGroupCreateBody
 * @version 0.1.4
 */
export class BillingGroupCreateBody {
    advertiser_ids: Array<string>;
    bc_id: string;
    billing_group_name: string;
    billing_group_emails?: Array<string>;
    billing_group_type: string = 'AUCTION';
    is_primary: boolean = false;

    /**
     * Constructs a new <code>BillingGroupCreateBody</code>.
     * @param advertiser_ids {Array<String>} List of advertiser IDs
     * @param bc_id {String} Business Center ID
     * @param billing_group_name {String} Billing group name
     */
    constructor(advertiser_ids: Array<string>, bc_id: string, billing_group_name: string) {
        this.advertiser_ids = advertiser_ids;
        this.bc_id = bc_id;
        this.billing_group_name = billing_group_name;
    }

    /**
     * Constructs a <code>BillingGroupCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingGroupCreateBody} obj Optional instance to populate.
     * @return {module:model/BillingGroupCreateBody} The populated <code>BillingGroupCreateBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: BillingGroupCreateBody): BillingGroupCreateBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const advertiser_ids = ApiClient.convertToType(data['advertiser_ids'], ['String']) as string[];
        const bc_id = ApiClient.convertToType(data['bc_id'], 'String') as string;
        const billing_group_name = ApiClient.convertToType(data['billing_group_name'], 'String') as string;

        if (!obj) {
            obj = new BillingGroupCreateBody(advertiser_ids, bc_id, billing_group_name);
        }

        if (data.hasOwnProperty('billing_group_emails')) {
            obj.billing_group_emails = ApiClient.convertToType(data['billing_group_emails'], ['String']);
        }
        if (data.hasOwnProperty('billing_group_type')) {
            obj.billing_group_type = ApiClient.convertToType(data['billing_group_type'], 'String');
        }
        if (data.hasOwnProperty('is_primary')) {
            obj.is_primary = ApiClient.convertToType(data['is_primary'], 'Boolean');
        }

        return obj;
    }
}

