/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

export class PixelContextPage {
    referrer?: string;
    url?: string;

    constructor() {
        // Initialize empty object
    }

    static constructFromObject(data: any, obj?: PixelContextPage): PixelContextPage {
        if (data) {
            obj = obj || new PixelContextPage();
            
            if (data.hasOwnProperty('referrer'))
                obj.referrer = ApiClient.convertToType(data.referrer, 'String');
            
            if (data.hasOwnProperty('url'))
                obj.url = ApiClient.convertToType(data.url, 'String');
        }
        return obj || new PixelContextPage();
    }
}

