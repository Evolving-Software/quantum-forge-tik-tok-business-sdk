/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The PartnerAddBody model module.
 * @module model/PartnerAddBody
 * @version 0.1.4
 */
export class PartnerAddBody {
    asset_type: string;
    bc_id: string;
    advertiser_role?: string = 'ANALYST';
    asset_ids?: string[];
    catalog_role?: string = 'AD_PROMOTE';
    partner_id?: string;
    source_child_bc_id?: string;
    target_child_bc_id?: string;

    /**
     * Constructs a new <code>PartnerAddBody</code>.
     * @param asset_type {String} Type of asset. Valid values: ADVERTISER, CATALOG
     * @param bc_id {String} Business Center ID
     */
    constructor(asset_type: string, bc_id: string) {
        this.asset_type = asset_type;
        this.bc_id = bc_id;
    }

    /**
     * Constructs a <code>PartnerAddBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartnerAddBody} obj Optional instance to populate.
     * @return {module:model/PartnerAddBody} The populated <code>PartnerAddBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: PartnerAddBody): PartnerAddBody {
        if (!data) return obj || new PartnerAddBody('', '');

        obj = obj || new PartnerAddBody(
            data['asset_type'] || '',
            data['bc_id'] || ''
        );
        
        if (data.hasOwnProperty('advertiser_role'))
            obj.advertiser_role = ApiClient.convertToType(data['advertiser_role'], 'String');
        if (data.hasOwnProperty('asset_ids'))
            obj.asset_ids = ApiClient.convertToType(data['asset_ids'], ['String']);
        if (data.hasOwnProperty('asset_type'))
            obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('catalog_role'))
            obj.catalog_role = ApiClient.convertToType(data['catalog_role'], 'String');
        if (data.hasOwnProperty('partner_id'))
            obj.partner_id = ApiClient.convertToType(data['partner_id'], 'String');
        if (data.hasOwnProperty('source_child_bc_id'))
            obj.source_child_bc_id = ApiClient.convertToType(data['source_child_bc_id'], 'String');
        if (data.hasOwnProperty('target_child_bc_id'))
            obj.target_child_bc_id = ApiClient.convertToType(data['target_child_bc_id'], 'String');

        return obj;
    }
}

