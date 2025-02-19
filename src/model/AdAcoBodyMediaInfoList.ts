/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdAcoBodyMediaInfoList model module.
 * @module model/AdAcoBodyMediaInfoList
 * @version 0.1.1
 */
export class AdAcoBodyMediaInfoList {
    /** @type {Object} */
    media_info?: object;

    /**
     * Constructs a <code>AdAcoBodyMediaInfoList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdAcoBodyMediaInfoList} obj Optional instance to populate.
     * @return {module:model/AdAcoBodyMediaInfoList} The populated <code>AdAcoBodyMediaInfoList</code> instance.
     */
    static constructFromObject(data: any, obj?: AdAcoBodyMediaInfoList): AdAcoBodyMediaInfoList {
        if (!data) return new AdAcoBodyMediaInfoList();
        
        obj = obj || new AdAcoBodyMediaInfoList();
        
        if (data.hasOwnProperty('media_info')) {
            obj.media_info = ApiClient.convertToType(data['media_info'], Object);
        }

        return obj;
    }
}

