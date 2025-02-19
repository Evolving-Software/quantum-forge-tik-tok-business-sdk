/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AssetAssignBody model module.
 * @module model/AssetAssignBody
 * @version 0.1.4
 */
export class AssetAssignBody {
    asset_id: string;
    asset_type: string;
    bc_id: string;
    user_id: string;
    advertiser_role?: string;
    catalog_role?: string;
    form_library_role?: string;
    store_role?: string;
    tt_account_roles?: Array<string>;

    /**
     * Constructs a new <code>AssetAssignBody</code>.
     * @param asset_id {String} 
     * @param asset_type {String} 
     * @param bc_id {String} 
     * @param user_id {String} 
     */
    constructor(asset_id: string, asset_type: string, bc_id: string, user_id: string) {
        this.asset_id = asset_id;
        this.asset_type = asset_type;
        this.bc_id = bc_id;
        this.user_id = user_id;
    }

    /**
     * Constructs a <code>AssetAssignBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetAssignBody} obj Optional instance to populate.
     * @return {module:model/AssetAssignBody} The populated <code>AssetAssignBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: AssetAssignBody): AssetAssignBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const asset_id = ApiClient.convertToType(data['asset_id'], 'String');
        const asset_type = ApiClient.convertToType(data['asset_type'], 'String');
        const bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        const user_id = ApiClient.convertToType(data['user_id'], 'String');

        if (!obj) {
            obj = new AssetAssignBody(asset_id, asset_type, bc_id, user_id);
        }

        if (data.hasOwnProperty('advertiser_role')) {
            obj.advertiser_role = ApiClient.convertToType(data['advertiser_role'], 'String');
        }
        if (data.hasOwnProperty('catalog_role')) {
            obj.catalog_role = ApiClient.convertToType(data['catalog_role'], 'String');
        }
        if (data.hasOwnProperty('form_library_role')) {
            obj.form_library_role = ApiClient.convertToType(data['form_library_role'], 'String');
        }
        if (data.hasOwnProperty('store_role')) {
            obj.store_role = ApiClient.convertToType(data['store_role'], 'String');
        }
        if (data.hasOwnProperty('tt_account_roles')) {
            obj.tt_account_roles = ApiClient.convertToType(data['tt_account_roles'], ['String']);
        }

        return obj;
    }
}

