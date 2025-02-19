/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdgroupcreateTargetingExpansion model module.
 * @module model/AdgroupcreateTargetingExpansion
 * @version 0.1.4
 */
export class AdgroupcreateTargetingExpansion {
    /** 
     * Whether to enable targeting expansion
     * @type {boolean} 
     */
    expansion_enabled?: boolean;

    /**
     * The target audience types that you want to expand. Required when `expansion_enabled` is `true`.
     * Target audience types that are eligible for expanding must already have a value or selection.
     * @type {string[]}
     */
    expansion_types?: string[];

    /**
     * Constructs a new <code>AdgroupcreateTargetingExpansion</code>.
     * Settings about targeting expansion
     */
    constructor() {}

    /**
     * Constructs a <code>AdgroupcreateTargetingExpansion</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupcreateTargetingExpansion} obj Optional instance to populate.
     * @return {module:model/AdgroupcreateTargetingExpansion} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdgroupcreateTargetingExpansion): AdgroupcreateTargetingExpansion {
        if (!data) return new AdgroupcreateTargetingExpansion();
        
        obj = obj || new AdgroupcreateTargetingExpansion();
        
        if (data.hasOwnProperty('expansion_enabled'))
            obj.expansion_enabled = ApiClient.convertToType(data['expansion_enabled'], 'Boolean');
        if (data.hasOwnProperty('expansion_types'))
            obj.expansion_types = ApiClient.convertToType(data['expansion_types'], ['String']);

        return obj;
    }
}

