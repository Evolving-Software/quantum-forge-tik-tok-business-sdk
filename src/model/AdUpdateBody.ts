/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {AdupdateCreatives} from './AdupdateCreatives';

/**
 * The AdUpdateBody model module.
 * @module model/AdUpdateBody
 * @version 0.1.4
 */
export class AdUpdateBody {
    /** @type {string} */
    adgroup_id?: string;
    
    /** @type {string} */
    advertiser_id?: string;
    
    /** @type {AdupdateCreatives[]} */
    creatives?: AdupdateCreatives[];

    /**
     * Constructs a new <code>AdUpdateBody</code>.
     * @param adgroup_id {string}
     * @param advertiser_id {string}
     * @param creatives {AdupdateCreatives[]}
     */
    constructor(adgroup_id: string, advertiser_id: string, creatives: AdupdateCreatives[]) {
        this.adgroup_id = adgroup_id;
        this.advertiser_id = advertiser_id;
        this.creatives = creatives;
    }

    /**
     * Constructs a <code>AdUpdateBody</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdUpdateBody} obj Optional instance to populate.
     * @return {module:model/AdUpdateBody} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdUpdateBody): AdUpdateBody {
        if (!data) return new AdUpdateBody("", "", []);
        
        obj = obj || new AdUpdateBody("", "", []);
        
        if (data.hasOwnProperty('adgroup_id'))
            obj.adgroup_id = ApiClient.convertToType(data['adgroup_id'], 'String');
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('creatives'))
            obj.creatives = ApiClient.convertToType(data['creatives'], [AdupdateCreatives]);

        return obj;
    }
}

