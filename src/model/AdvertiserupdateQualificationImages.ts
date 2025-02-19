/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdvertiserupdateQualificationImages model module.
 * @module model/AdvertiserupdateQualificationImages
 * @version 0.1.4
 */
export class AdvertiserupdateQualificationImages {
    /**
     * Image ID of the business certificate
     * @type {string}
     */
    image_id?: string;

    /**
     * Constructs a new <code>AdvertiserupdateQualificationImages</code>.
     * Additional business certificates
     */
    constructor() {}

    /**
     * Constructs a <code>AdvertiserupdateQualificationImages</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdvertiserupdateQualificationImages} obj Optional instance to populate.
     * @return {module:model/AdvertiserupdateQualificationImages} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdvertiserupdateQualificationImages): AdvertiserupdateQualificationImages {
        if (!data) return new AdvertiserupdateQualificationImages();
        
        obj = obj || new AdvertiserupdateQualificationImages();
        
        if (data.hasOwnProperty('image_id'))
            obj.image_id = ApiClient.convertToType(data['image_id'], 'String');

        return obj;
    }
}

