/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The TargetingInfoBody model module.
 * @module model/TargetingInfoBody
 * @version 0.1.4
 */

/**
 * The TargetingInfoBody class
 */
class TargetingInfoBody {
    advertiser_id: string;
    targeting_ids: string[];
    brand_safety_partner?: string | null | undefined;
    brand_safety_type?: string | null | undefined;
    objective_type?: string | null | undefined;
    operating_system?: string | null | undefined;
    placements?: string[] | null | undefined;
    promotion_type?: string | null | undefined;
    scene: string = 'GEO';

    constructor(advertiser_id: string, targeting_ids: string[]) {
        this.advertiser_id = advertiser_id;
        this.targeting_ids = targeting_ids;
    }

    /**
     * Constructs a TargetingInfoBody from an object
     * @param {Object} data The object to construct from
     * @param {TargetingInfoBody} obj Optional instance to populate
     * @returns {TargetingInfoBody} The populated TargetingInfoBody instance
     */
    static constructFromObject(data: any, obj?: TargetingInfoBody): TargetingInfoBody {
        if (!data) {
            return new TargetingInfoBody('', []);
        }

        obj = obj || new TargetingInfoBody(data.advertiser_id || '', data.targeting_ids || []);
            
        if (data.hasOwnProperty('brand_safety_partner'))
            obj.brand_safety_partner = data.brand_safety_partner;
        
        if (data.hasOwnProperty('brand_safety_type'))
            obj.brand_safety_type = data.brand_safety_type;
        
        if (data.hasOwnProperty('objective_type'))
            obj.objective_type = data.objective_type;
        
        if (data.hasOwnProperty('operating_system'))
            obj.operating_system = data.operating_system;
        
        if (data.hasOwnProperty('placements'))
            obj.placements = data.placements;
        
        if (data.hasOwnProperty('promotion_type'))
            obj.promotion_type = data.promotion_type;
        
        if (data.hasOwnProperty('scene'))
            obj.scene = data.scene;

        return obj;
    }
}

export default TargetingInfoBody;

