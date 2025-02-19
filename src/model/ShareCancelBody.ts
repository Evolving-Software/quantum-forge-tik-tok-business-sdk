/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { DmpcustomAudiencefileuploadContextInfo } from './DmpcustomAudiencefileuploadContextInfo';

/**
 * The ShareCancelBody model module.
 * @module model/ShareCancelBody
 * @version 0.1.4
 */
export class ShareCancelBody {
    advertiser_id: string;
    custom_audience_id: string;
    shared_advertiser_id: string;
    context_info?: DmpcustomAudiencefileuploadContextInfo;

    /**
     * Constructs a new <code>ShareCancelBody</code>.
     * @param advertiser_id {String} 
     * @param custom_audience_id {String} 
     * @param shared_advertiser_id {String}
     */
    constructor(advertiser_id: string, custom_audience_id: string, shared_advertiser_id: string) {
        this.advertiser_id = advertiser_id;
        this.custom_audience_id = custom_audience_id;
        this.shared_advertiser_id = shared_advertiser_id;
    }

    /**
     * Constructs a <code>ShareCancelBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareCancelBody} obj Optional instance to populate.
     * @return {module:model/ShareCancelBody} The populated <code>ShareCancelBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: ShareCancelBody): ShareCancelBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        const custom_audience_id = ApiClient.convertToType(data['custom_audience_id'], 'String');
        const shared_advertiser_id = ApiClient.convertToType(data['shared_advertiser_id'], 'String');

        if (!obj) {
            obj = new ShareCancelBody(advertiser_id, custom_audience_id, shared_advertiser_id);
        }

        if (data.hasOwnProperty('context_info')) {
            obj.context_info = DmpcustomAudiencefileuploadContextInfo.constructFromObject(
                data['context_info'],
                new DmpcustomAudiencefileuploadContextInfo()
            );
        }

        return obj;
    }
}

