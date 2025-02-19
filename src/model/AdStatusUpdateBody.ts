/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdStatusUpdateBody model module.
 * @module model/AdStatusUpdateBody
 * @version 0.1.4
 */
export class AdStatusUpdateBody {
    /**
     * A list of ACO ad IDs. Only support `ENABLE` and `DISABLE` for ACO ads.
     * Allowed quantity- `1-20`. Either `ad_ids` or `aco_ad_ids` has to be set.
     * @type {string[]}
     */
    aco_ad_ids?: string[];

    /**
     * A list of ad IDs. Allowed quantity- `1-20`. Either `ad_ids` or `aco_ad_ids` has to be set.
     * @type {string[]}
     */
    ad_ids?: string[];

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
     * Constructs a new <code>AdStatusUpdateBody</code>.
     * @param advertiser_id {string} Advertiser ID
     * @param operation_status {string} The operation being made.
     */
    constructor(advertiser_id: string, operation_status: string) {
        this.advertiser_id = advertiser_id;
        this.operation_status = operation_status;
    }

    /**
     * Constructs a <code>AdStatusUpdateBody</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdStatusUpdateBody} obj Optional instance to populate.
     * @return {module:model/AdStatusUpdateBody} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdStatusUpdateBody): AdStatusUpdateBody {
        if (!data) return new AdStatusUpdateBody("", "");
        
        obj = obj || new AdStatusUpdateBody("", "");
        
        if (data.hasOwnProperty('aco_ad_ids'))
            obj.aco_ad_ids = ApiClient.convertToType(data['aco_ad_ids'], ['String']);
        if (data.hasOwnProperty('ad_ids'))
            obj.ad_ids = ApiClient.convertToType(data['ad_ids'], ['String']);
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('operation_status'))
            obj.operation_status = ApiClient.convertToType(data['operation_status'], 'String');

        return obj;
    }
}

