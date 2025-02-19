/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdminDeleteBody model module.
 * @module model/AdminDeleteBody
 * @version 0.1.4
 */
export class AdminDeleteBody {
    /** @type {string[]} */
    asset_ids?: string[];
    
    /** @type {string} */
    asset_type?: string;
    
    /** @type {string} */
    bc_id?: string;

    /** @type {string} */
    child_bc_id?: string;

    /**
     * Constructs a new <code>AdminDeleteBody</code>.
     * @param asset_ids {string[]} 
     * @param asset_type {string} 
     * @param bc_id {string} 
     */
    constructor(asset_ids: string[], asset_type: string, bc_id: string) {
        this.asset_ids = asset_ids;
        this.asset_type = asset_type;
        this.bc_id = bc_id;
    }

    /**
     * Constructs a <code>AdminDeleteBody</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdminDeleteBody} obj Optional instance to populate.
     * @return {module:model/AdminDeleteBody} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdminDeleteBody): AdminDeleteBody {
        if (!data) return new AdminDeleteBody([], "", "");
        
        obj = obj || new AdminDeleteBody([], "", "");
        
        if (data.hasOwnProperty('asset_ids'))
            obj.asset_ids = ApiClient.convertToType(data['asset_ids'], ['String']);
        if (data.hasOwnProperty('asset_type'))
            obj.asset_type = ApiClient.convertToType(data['asset_type'], 'String');
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('child_bc_id'))
            obj.child_bc_id = ApiClient.convertToType(data['child_bc_id'], 'String');

        return obj;
    }
}

