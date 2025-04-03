/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { AdcreateCreatives } from './AdcreateCreatives';
import type { ModelBase } from '../types';

/**
 * The AdCreateBody model module.
 * @module model/AdCreateBody
 * @version 0.1.4
 */
export class AdCreateBody implements ModelBase {
    adgroup_id: string;
    advertiser_id: string;
    creatives: AdcreateCreatives;

    /**
     * Constructs a new <code>AdCreateBody</code>.
     * @alias module:model/AdCreateBody
     * @param adgroup_id {String} 
     * @param advertiser_id {String} 
     * @param creatives {module:model/AdcreateCreatives} 
     */
    constructor(adgroup_id: string, advertiser_id: string, creatives: AdcreateCreatives) {
        this.adgroup_id = adgroup_id;
        this.advertiser_id = advertiser_id;
        this.creatives = creatives;
    }

    /**
     * Constructs a <code>AdCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
     * @return {module:model/AdCreateBody} The populated <code>AdCreateBody</code> instance.
     */
    static fromObject(data: Record<string, any>): AdCreateBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const adgroup_id = ApiClient.convertToType(data['adgroup_id'], 'String') as string;
        const advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String') as string;
        const creatives = AdcreateCreatives.fromObject(data['creatives']);
        
        return new AdCreateBody(adgroup_id, advertiser_id, creatives);
    }

    static constructFromObject(data: unknown): AdCreateBody {
        return AdCreateBody.fromObject(data as Record<string, any>);
    }

    constructFromObject(data: unknown): this {
        const result = AdCreateBody.fromObject(data as Record<string, any>);
        Object.assign(this, result);
        return this;
    }
}

