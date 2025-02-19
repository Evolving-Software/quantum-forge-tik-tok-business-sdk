/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The IdentityCreateBody model module.
 * @module model/IdentityCreateBody
 * @version 0.1.4
 */
export class IdentityCreateBody {
    /** @property {string} advertiser_id - Advertiser ID */
    advertiser_id: string;
    
    /** @property {string} display_name - Display name */
    display_name: string;
    
    /** @property {string} image_uri - Image URI */
    image_uri: string;

    /**
     * Constructs a new <code>IdentityCreateBody</code>.
     * @param advertiser_id {string} Advertiser ID
     * @param display_name {string} Display name
     * @param image_uri {string} Image URI
     */
    constructor(advertiser_id: string, display_name: string, image_uri: string) {
        this.advertiser_id = advertiser_id;
        this.display_name = display_name;
        this.image_uri = image_uri;
    }

    /**
     * Constructs a <code>IdentityCreateBody</code> from a plain JavaScript object
     * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
     * @param {IdentityCreateBody} [obj] Optional instance to populate
     * @return {IdentityCreateBody} The populated <code>IdentityCreateBody</code> instance
     */
    static constructFromObject(data: Record<string, any>, obj?: IdentityCreateBody): IdentityCreateBody {
        if (!data) return obj || new IdentityCreateBody('', '', '');

        obj = obj || new IdentityCreateBody(
            data['advertiser_id'] || '',
            data['display_name'] || '',
            data['image_uri'] || ''
        );

        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('display_name'))
            obj.display_name = ApiClient.convertToType(data['display_name'], 'String');
        if (data.hasOwnProperty('image_uri'))
            obj.image_uri = ApiClient.convertToType(data['image_uri'], 'String');

        return obj;
    }
}

