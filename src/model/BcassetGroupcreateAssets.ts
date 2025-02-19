/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcassetGroupcreateAssets model module.
 * @module model/BcassetGroupcreateAssets
 * @version 0.1.4
 */
export class BcassetGroupcreateAssets {
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
     */
    static constructFromObject(data: any, obj?: BcassetGroupcreateAssets): BcassetGroupcreateAssets {
        if (!data || !data.asset_id) {
            throw new Error('Asset ID is required');
        }
        
        obj = obj || new BcassetGroupcreateAssets(data.asset_id);
        
        if (data.hasOwnProperty('asset_type'))
            obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');
        
        return obj;
    }
}

