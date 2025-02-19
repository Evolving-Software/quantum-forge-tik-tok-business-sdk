/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The CustomAudienceDeleteBody model module.
 * @module model/CustomAudienceDeleteBody
 * @version 0.1.4
 */
export class CustomAudienceDeleteBody {
    advertiser_id: string;
    custom_audience_ids: string[];

    constructor(advertiser_id: string, custom_audience_ids: string[]) {
        this.advertiser_id = advertiser_id;
        this.custom_audience_ids = custom_audience_ids;
    }

    static constructFromObject(data: any, obj?: CustomAudienceDeleteBody): CustomAudienceDeleteBody {
        if (data) {
            obj = obj || new CustomAudienceDeleteBody(
                data['advertiser_id'],
                data['custom_audience_ids']
            );
        }
        return obj!;
    }
}

