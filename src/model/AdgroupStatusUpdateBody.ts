/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import type { ModelBase } from '../types';

/**
 * The AdgroupStatusUpdateBody model module.
 * @module model/AdgroupStatusUpdateBody
 * @version 0.1.4
 */
export class AdgroupStatusUpdateBody implements ModelBase {
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
     * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
     * @return {module:model/AdgroupStatusUpdateBody} The populated instance.
     */
    static fromObject(data: Record<string, any>): AdgroupStatusUpdateBody {
        const adgroup_ids = data.hasOwnProperty('adgroup_ids') ? 
            ApiClient.convertToType(data['adgroup_ids'], ['String']) as string[] : [];
        const advertiser_id = data.hasOwnProperty('advertiser_id') ? 
            ApiClient.convertToType(data['advertiser_id'], 'String') as string : "";
        const operation_status = data.hasOwnProperty('operation_status') ? 
            ApiClient.convertToType(data['operation_status'], 'String') as string : "";
        
        return new AdgroupStatusUpdateBody(adgroup_ids, advertiser_id, operation_status);
    }

    /**
     * Static method to construct an instance from object
     */
    static constructFromObject(data: unknown): AdgroupStatusUpdateBody {
        return AdgroupStatusUpdateBody.fromObject(data as Record<string, any>);
    }

    /**
     * Instance method to construct from object
     */
    constructFromObject(data: unknown): this {
        const result = AdgroupStatusUpdateBody.fromObject(data as Record<string, any>);
        Object.assign(this, result);
        return this;
    }
}

