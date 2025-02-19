/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdgroupStatusUpdateBody model module.
 * @module model/AdgroupStatusUpdateBody
 * @version 0.1.4
 */
export class AdgroupStatusUpdateBody {
    /**
     * The ID of the ad group(s) to be operated. The allowed quantity range is `1-20`.
     * @type {string[]}
     */
    adgroup_ids?: string[];

    /**
     * Advertiser ID
     * @type {string}
     */
    advertiser_id?: string;

    /**
     * The operation being made. Enum values: `DELETE` (delete), `DISABLE` (pause), `ENABLE` (enable).
     * The status of deleted ads cannot be modified.
     * @type {string}
     */
    operation_status?: string;

    /**
     * Constructs a new <code>AdgroupStatusUpdateBody</code>.
     * @param adgroup_ids {string[]} The ID of the ad group(s) to be operated. The allowed quantity range is `1-20`.
     * @param advertiser_id {string} Advertiser ID
     * @param operation_status {string} The operation being made.
     */
    constructor(adgroup_ids: string[], advertiser_id: string, operation_status: string) {
        this.adgroup_ids = adgroup_ids;
        this.advertiser_id = advertiser_id;
        this.operation_status = operation_status;
    }

    /**
     * Constructs a <code>AdgroupStatusUpdateBody</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupStatusUpdateBody} obj Optional instance to populate.
     * @return {module:model/AdgroupStatusUpdateBody} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdgroupStatusUpdateBody): AdgroupStatusUpdateBody {
        if (!data) return new AdgroupStatusUpdateBody([], "", "");
        
        obj = obj || new AdgroupStatusUpdateBody([], "", "");
        
        if (data.hasOwnProperty('adgroup_ids'))
            obj.adgroup_ids = ApiClient.convertToType(data['adgroup_ids'], ['String']);
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('operation_status'))
            obj.operation_status = ApiClient.convertToType(data['operation_status'], 'String');

        return obj;
    }
}

