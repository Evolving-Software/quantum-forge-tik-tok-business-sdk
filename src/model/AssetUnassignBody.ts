/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AssetUnassignBody model module.
 * @module model/AssetUnassignBody
 * @version 0.1.4
 */
export class AssetUnassignBody {
    /** @type {string} */
    asset_id?: string;
    
    /** @type {string} */
    asset_type?: string;
    
    /** @type {string} */
    bc_id?: string;
    
    /** @type {string} */
    user_id?: string;

    /**
     * Constructs a new <code>AssetUnassignBody</code>.
     * @param asset_id {string} 
     * @param asset_type {string} 
     * @param bc_id {string} 
     * @param user_id {string} 
     */
    constructor(asset_id: string, asset_type: string, bc_id: string, user_id: string) {
        this.asset_id = asset_id;
        this.asset_type = asset_type;
        this.bc_id = bc_id;
        this.user_id = user_id;
    }

    /**
     * Constructs a <code>AssetUnassignBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetUnassignBody} obj Optional instance to populate.
     * @return {module:model/AssetUnassignBody} The populated <code>AssetUnassignBody</code> instance.
     */
    static constructFromObject(data: any, obj?: AssetUnassignBody): AssetUnassignBody {
        if (!data) return new AssetUnassignBody("", "", "", "");
        
        obj = obj || new AssetUnassignBody("", "", "", "");
        
        if (data.hasOwnProperty('asset_id'))
            obj.asset_id = ApiClient.convertToType(data['asset_id'], 'String');
        if (data.hasOwnProperty('asset_type'))
            obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('user_id'))
            obj.user_id = ApiClient.convertToType(data['user_id'], 'String');

        return obj;
    }
}

