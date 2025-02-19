/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CampaignStatusUpdateBody model module.
 * @module model/CampaignStatusUpdateBody
 * @version 0.1.4
 */
export class CampaignStatusUpdateBody {
    /** Advertiser ID */
    advertiser_id!: string;
    
    /** A list of campaign IDs, with an allowed quantity range `1-20`. */
    campaign_ids!: string[];
    
    /** The operation being made. */
    operation_status!: 'DELETE' | 'DISABLE' | 'ENABLE';

    constructor(init?: Partial<CampaignStatusUpdateBody>) {
        Object.assign(this, init);
    }

    /**
     * Constructs a <code>CampaignStatusUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     */
    static constructFromObject(data: any, obj?: CampaignStatusUpdateBody): CampaignStatusUpdateBody {
        if (!data) {
            throw new Error('Data required');
        }
        
        obj = obj || new CampaignStatusUpdateBody();
        
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('campaign_ids'))
            obj.campaign_ids = ApiClient.convertToType(data['campaign_ids'], ['String']);
        if (data.hasOwnProperty('operation_status'))
            obj.operation_status = ApiClient.convertToType(data['operation_status'], 'String');

        if (!obj.advertiser_id || !obj.campaign_ids || !obj.operation_status) {
            throw new Error('Required parameters missing');
        }
            
        return obj;
    }
}

