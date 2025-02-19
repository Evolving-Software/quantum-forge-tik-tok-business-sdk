/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdcreateDisclaimerClickableTexts model module.
 * @module model/AdcreateDisclaimerClickableTexts
 * @version 0.1.4
 */
export class AdcreateDisclaimerClickableTexts {
    /** @type {string} */
    text?: string;
    /** @type {string} */
    url?: string;

    /**
     * Constructs a new <code>AdcreateDisclaimerClickableTexts</code> from a plain JavaScript object
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdcreateDisclaimerClickableTexts} obj Optional instance to populate.
     * @return {module:model/AdcreateDisclaimerClickableTexts} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdcreateDisclaimerClickableTexts): AdcreateDisclaimerClickableTexts {
        if (!data) return new AdcreateDisclaimerClickableTexts();
        
        obj = obj || new AdcreateDisclaimerClickableTexts();
        
        if (data.hasOwnProperty('text')) {
            obj.text = ApiClient.convertToType(data['text'], 'String');
        }
        if (data.hasOwnProperty('url')) {
            obj.url = ApiClient.convertToType(data['url'], 'String');
        }

        return obj;
    }
}

