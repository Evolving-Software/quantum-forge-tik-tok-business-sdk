/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {BcassetGroupcreateAssets} from './BcassetGroupcreateAssets';
import {BcassetGroupcreateMembers} from './BcassetGroupcreateMembers';

/**
 * The AssetGroupCreateBody model module.
 * @module model/AssetGroupCreateBody
 * @version 0.1.4
 */
export class AssetGroupCreateBody {
    /** @type {string} */
    asset_group_name?: string;
    
    /** @type {Array<BcassetGroupcreateAssets>} */
    assets?: BcassetGroupcreateAssets[];
    
    /** @type {string} */
    bc_id?: string;
    
    /** @type {Array<BcassetGroupcreateMembers>} */
    members?: BcassetGroupcreateMembers[];

    /**
     * Constructs a new <code>AssetGroupCreateBody</code>.
     * @param asset_group_name {string} 
     * @param assets {Array<BcassetGroupcreateAssets>} 
     * @param bc_id {string} 
     * @param members {Array<BcassetGroupcreateMembers>} 
     */
    constructor(
        asset_group_name: string,
        assets: BcassetGroupcreateAssets[],
        bc_id: string,
        members: BcassetGroupcreateMembers[]
    ) {
        this.asset_group_name = asset_group_name;
        this.assets = assets;
        this.bc_id = bc_id;
        this.members = members;
    }

    /**
     * Constructs a <code>AssetGroupCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetGroupCreateBody} obj Optional instance to populate.
     * @return {module:model/AssetGroupCreateBody} The populated <code>AssetGroupCreateBody</code> instance.
     */
    static constructFromObject(data: any, obj?: AssetGroupCreateBody): AssetGroupCreateBody {
        if (!data) return new AssetGroupCreateBody("", [], "", []);
        
        obj = obj || new AssetGroupCreateBody("", [], "", []);
        
        if (data.hasOwnProperty('asset_group_name'))
            obj.asset_group_name = ApiClient.convertToType(data['asset_group_name'], 'String');
        if (data.hasOwnProperty('assets'))
            obj.assets = ApiClient.convertToType(data['assets'], [BcassetGroupcreateAssets]);
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('members'))
            obj.members = ApiClient.convertToType(data['members'], [BcassetGroupcreateMembers]);

        return obj;
    }
}

