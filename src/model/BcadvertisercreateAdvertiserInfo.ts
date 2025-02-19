/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcadvertisercreateAdvertiserInfo model module.
 * @module model/BcadvertisercreateAdvertiserInfo
 * @version 0.1.4
 */
export class BcadvertisercreateAdvertiserInfo {
    /** 
     * Ad Account currency, note: need to be consistent with the Business Center 
     * @type {string} 
     */
    currency?: string;

    /** 
     * Ad Account name, length cannot exceed 100 characters
     * @type {string} 
     */
    name?: string;

    /** 
     * Ad Account time zone code
     * @type {string} 
     */
    timezone?: string;

    /** 
     * Type of ad account that you want to create. Enum values: `RESERVATION`, `AUCTION` (default)
     * @type {string} 
     */
    type?: string;

    /**
     * Constructs a new <code>BcadvertisercreateAdvertiserInfo</code>.
     * Ad Account information
     */
    constructor() {}

    /**
     * Constructs a <code>BcadvertisercreateAdvertiserInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BcadvertisercreateAdvertiserInfo} obj Optional instance to populate.
     * @return {module:model/BcadvertisercreateAdvertiserInfo} The populated <code>BcadvertisercreateAdvertiserInfo</code> instance.
     */
    static constructFromObject(data: any, obj?: BcadvertisercreateAdvertiserInfo): BcadvertisercreateAdvertiserInfo {
        if (!data) return new BcadvertisercreateAdvertiserInfo();
        
        obj = obj || new BcadvertisercreateAdvertiserInfo();
        
        if (data.hasOwnProperty('currency'))
            obj.currency = ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('name'))
            obj.name = ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('timezone'))
            obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
        if (data.hasOwnProperty('type'))
            obj.type = ApiClient.convertToType(data['type'], 'String');

        return obj;
    }
}

