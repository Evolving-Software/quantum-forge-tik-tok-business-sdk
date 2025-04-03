/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import type { ModelBase } from '../types';

/**
 * The BcassetGroupcreateAssets model module.
 * @module model/BcassetGroupcreateAssets
 * @version 0.1.4
 */
export class BcassetGroupcreateAssets implements ModelBase {
    /** Asset ID */
    asset_id: string;

    /** Asset type */
    asset_type: string = 'ADVERTISER';

    /**
     * Constructs a new <code>BcassetGroupcreateAssets</code>.
     * @param asset_id The asset ID
     */
    constructor(asset_id: string) {
        this.asset_id = asset_id;
    }

    /**
     * Constructs a <code>BcassetGroupcreateAssets</code> from a plain JavaScript object
     * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
     * @return {BcassetGroupcreateAssets} The populated instance.
     */
    static fromObject(data: Record<string, any>): BcassetGroupcreateAssets {
        if (!data || !data.asset_id) {
            throw new Error('Asset ID is required');
        }

        const instance = new BcassetGroupcreateAssets(data.asset_id);

        if (data.hasOwnProperty('asset_type'))
            instance.asset_type = ApiClient.convertToType(data['asset_type'], 'String') as string;
        
        return instance;
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): BcassetGroupcreateAssets {
        return BcassetGroupcreateAssets.fromObject(data as Record<string, any>);
    }

    constructFromObject(data: unknown): this {
        const result = BcassetGroupcreateAssets.fromObject(data as Record<string, any>);
        Object.assign(this, result);
        return this;
    }
}

