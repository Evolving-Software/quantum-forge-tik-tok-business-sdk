/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcassetGroupcreateMembers model module.
 * @module model/BcassetGroupcreateMembers
 * @version 0.1.4
 */
export class BcassetGroupcreateMembers {
    /** Map of asset roles */
    asset_roles?: { [key: string]: string };

    /** Member ID */
    member_id: string;

    /**
     * Constructs a new <code>BcassetGroupcreateMembers</code>.
     * @param member_id The member ID
     */
    constructor(member_id: string) {
        this.member_id = member_id;
    }

    /**
     * Constructs a <code>BcassetGroupcreateMembers</code> from a plain JavaScript object
     */
    static constructFromObject(data: any, obj?: BcassetGroupcreateMembers): BcassetGroupcreateMembers {
        if (!data || !data.member_id) {
            throw new Error('Member ID is required');
        }
        
        obj = obj || new BcassetGroupcreateMembers(data.member_id);
        
        if (data.hasOwnProperty('asset_roles'))
            obj.asset_roles = ApiClient.convertToType(data['asset_roles'], {'String': 'String'});
        
        return obj;
    }
}

