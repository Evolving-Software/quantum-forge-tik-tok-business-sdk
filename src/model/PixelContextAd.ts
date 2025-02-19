/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

export class PixelContextAd {
    callback?: string | undefined;

    constructor() {
        // Initialize empty object
    }

    static constructFromObject(data: any, obj?: PixelContextAd): PixelContextAd {
        if (data) {
            obj = obj || new PixelContextAd();
            
            if (data.hasOwnProperty('callback'))
                obj.callback = ApiClient.convertToType(data.callback, 'String');
        }
        return obj || new PixelContextAd();
    }
}

/**
 * TikTok Click ID. TikTok Click ID (ttclid) is a tracking parameter appended to a landing page URL whenever a user clicks on an ad on TikTok. The ttcid valid period is the same as your CTA window setting in [Attribution Manager](https://ads.tiktok.com/help/article/attribution-manager?redirected=1). For details, see [Set up TikTok Click ID and Cookies](https://ads.tiktok.com/marketing_api/docs?id=1739584860883969)
 * @member {String} callback
 */
PixelContextAd.prototype.callback = undefined;

