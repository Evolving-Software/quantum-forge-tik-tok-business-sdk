/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { AdcreateCreatives } from './AdcreateCreatives';

/**
 * The AdCreateBody model module.
 * @module model/AdCreateBody
 * @version 0.1.4
 */
export class AdCreateBody {
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
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdCreateBody} obj Optional instance to populate.
     * @return {module:model/AdCreateBody} The populated <code>AdCreateBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: AdCreateBody): AdCreateBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const adgroup_id = ApiClient.convertToType(data['adgroup_id'], 'String');
        const advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        const creatives = AdcreateCreatives.constructFromObject(data['creatives'], new AdcreateCreatives());

        if (!obj) {
            obj = new AdCreateBody(adgroup_id, advertiser_id, creatives);
        } else {
            obj.adgroup_id = adgroup_id;
            obj.advertiser_id = advertiser_id;
            obj.creatives = creatives;
        }

        return obj;
    }
}

