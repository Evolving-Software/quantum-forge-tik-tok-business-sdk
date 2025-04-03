/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {BcassetGroupcreateAssets} from './BcassetGroupcreateAssets';
import {BcassetGroupcreateMembers} from './BcassetGroupcreateMembers';
import { ModelBase, createArraySpec } from '../types';

/**
 * The AssetGroupCreateBody model module.
 * @module model/AssetGroupCreateBody
 * @version 0.1.4
 */
export class AssetGroupCreateBody implements ModelBase {
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
     * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
     * @return {module:model/AssetGroupCreateBody} The populated <code>AssetGroupCreateBody</code> instance.
     */
    static fromObject(data: Record<string, any>): AssetGroupCreateBody {
        if (!data) {
            return new AssetGroupCreateBody("", [], "", []);
        }

        const asset_group_name = data.hasOwnProperty('asset_group_name') ? 
            ApiClient.convertToType(data['asset_group_name'], 'String') as string : "";
        
        const assets = data.hasOwnProperty('assets') ? 
            (data['assets'] as any[]).map(item => BcassetGroupcreateAssets.fromObject(item)) : [];
        
        const bc_id = data.hasOwnProperty('bc_id') ? 
            ApiClient.convertToType(data['bc_id'], 'String') as string : "";
        
        const members = data.hasOwnProperty('members') ? 
            (data['members'] as any[]).map(item => BcassetGroupcreateMembers.fromObject(item)) : [];

        return new AssetGroupCreateBody(asset_group_name, assets, bc_id, members);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AssetGroupCreateBody {
        return AssetGroupCreateBody.fromObject(data as Record<string, any>);
    }

    /**
     * Instance method to construct from object
     */
    constructFromObject(data: unknown): this {
        const result = AssetGroupCreateBody.fromObject(data as Record<string, any>);
        Object.assign(this, result);
        return this;
    }
}

