/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AssetGroupDeleteBody model module.
 * @module model/AssetGroupDeleteBody
 * @version 0.1.4
 */
export class AssetGroupDeleteBody {
    /** @type {string[]} */
    asset_group_ids?: string[];
    
    /** @type {string} */
    bc_id?: string;

    /**
     * Constructs a new <code>AssetGroupDeleteBody</code>.
     * @param asset_group_ids {string[]} 
     * @param bc_id {string} 
     */
    constructor(asset_group_ids: string[], bc_id: string) {
        this.asset_group_ids = asset_group_ids;
        this.bc_id = bc_id;
    }

    /**
     * Constructs a <code>AssetGroupDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetGroupDeleteBody} obj Optional instance to populate.
     * @return {module:model/AssetGroupDeleteBody} The populated <code>AssetGroupDeleteBody</code> instance.
     */
    static constructFromObject(data: any, obj?: AssetGroupDeleteBody): AssetGroupDeleteBody {
        if (!data) return new AssetGroupDeleteBody([], "");
        
        obj = obj || new AssetGroupDeleteBody([], "");
        
        if (data.hasOwnProperty('asset_group_ids'))
            obj.asset_group_ids = ApiClient.convertToType(data['asset_group_ids'], ['String']);
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');

        return obj;
    }
}

