/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The SavedAudienceDeleteBody model module.
 * @module model/SavedAudienceDeleteBody
 * @version 0.1.4
 */
export class SavedAudienceDeleteBody {
    advertiser_id: string;
    saved_audience_ids: string[];

    /**
     * Constructs a new <code>SavedAudienceDeleteBody</code>.
     * @param advertiser_id {String} Advertiser ID
     * @param saved_audience_ids {Array.<String>} A list of saved audience IDs
     */
    constructor(advertiser_id: string, saved_audience_ids: string[]) {
        this.advertiser_id = advertiser_id;
        this.saved_audience_ids = saved_audience_ids;
    }

    /**
     * Constructs a <code>SavedAudienceDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SavedAudienceDeleteBody} obj Optional instance to populate.
     * @return {module:model/SavedAudienceDeleteBody} The populated <code>SavedAudienceDeleteBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: SavedAudienceDeleteBody): SavedAudienceDeleteBody {
        if (!data) return obj || new SavedAudienceDeleteBody('', []);

        obj = obj || new SavedAudienceDeleteBody(
            data['advertiser_id'] || '',
            data['saved_audience_ids'] || []
        );
        
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('saved_audience_ids'))
            obj.saved_audience_ids = ApiClient.convertToType(data['saved_audience_ids'], ['String']);
        
        return obj;
    }
}

