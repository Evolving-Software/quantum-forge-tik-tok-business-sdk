/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcmemberinviteExtUserRole model module.
 * @module model/BcmemberinviteExtUserRole
 * @version 0.1.4
 */
export class BcmemberinviteExtUserRole {
    /** @type {string} */
    finance_role?: string;

    /**
     * Constructs a new <code>BcmemberinviteExtUserRole</code>.
     */
    constructor() {}

    /**
     * Constructs a <code>BcmemberinviteExtUserRole</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BcmemberinviteExtUserRole} obj Optional instance to populate.
     * @return {module:model/BcmemberinviteExtUserRole} The populated instance.
     */
    static constructFromObject(data: any, obj?: BcmemberinviteExtUserRole): BcmemberinviteExtUserRole {
        if (!data) return new BcmemberinviteExtUserRole();
        
        obj = obj || new BcmemberinviteExtUserRole();
        
        if (data.hasOwnProperty('finance_role'))
            obj.finance_role = ApiClient.convertToType(data['finance_role'], 'String');

        return obj;
    }
}

