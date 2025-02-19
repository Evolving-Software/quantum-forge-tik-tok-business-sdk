/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The TargetingSearchBody class
 */
class TargetingSearchBody {
    advertiser_id: string;
    keywords: string[];
    objective_type: string;
    placements: string[];
    search_type: string;
    brand_safety_partner?: string;
    brand_safety_type?: string;
    geo_types?: string[];
    operating_system?: string;
    promotion_type?: string;
    region_codes?: string[];

    constructor(advertiser_id: string, keywords: string[], objective_type: string, placements: string[], search_type: string) {
        this.advertiser_id = advertiser_id;
        this.keywords = keywords;
        this.objective_type = objective_type;
        this.placements = placements;
        this.search_type = search_type;
    }

    static constructFromObject(data: any, obj?: TargetingSearchBody): TargetingSearchBody {
        if (!data) {
            return new TargetingSearchBody('', [], '', [], '');
        }

        obj = obj || new TargetingSearchBody(
            data.advertiser_id || '',
            data.keywords || [],
            data.objective_type || '',
            data.placements || [],
            data.search_type || ''
        );

        if (data.hasOwnProperty('brand_safety_partner'))
            obj.brand_safety_partner = data.brand_safety_partner;
        
        if (data.hasOwnProperty('brand_safety_type'))
            obj.brand_safety_type = data.brand_safety_type;
        
        if (data.hasOwnProperty('geo_types'))
            obj.geo_types = data.geo_types;
        
        if (data.hasOwnProperty('operating_system'))
            obj.operating_system = data.operating_system;
        
        if (data.hasOwnProperty('promotion_type'))
            obj.promotion_type = data.promotion_type;
        
        if (data.hasOwnProperty('region_codes'))
            obj.region_codes = data.region_codes;

        return obj;
    }
}

export default TargetingSearchBody;

