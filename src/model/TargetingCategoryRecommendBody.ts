/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

export class TargetingCategoryRecommendBody {
    advertiser_id: string;
    app_id?: string | undefined;
    region_codes?: string[] | undefined;

    constructor(advertiser_id: string) {
        this.advertiser_id = advertiser_id;
    }

    static constructFromObject(data: any, obj?: TargetingCategoryRecommendBody): TargetingCategoryRecommendBody {
        if (!data) {
            return new TargetingCategoryRecommendBody('');
        }

        obj = obj || new TargetingCategoryRecommendBody(data.advertiser_id || '');

        if (data.hasOwnProperty('app_id'))
            obj.app_id = ApiClient.convertToType(data.app_id, 'String');

        if (data.hasOwnProperty('region_codes'))
            obj.region_codes = ApiClient.convertToType(data.region_codes, ['String']);

        return obj;
    }
}

