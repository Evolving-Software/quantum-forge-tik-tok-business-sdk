/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdgroupcreateAudienceRuleExclusionsFilterFilters model module.
 * @module model/AdgroupcreateAudienceRuleExclusionsFilterFilters
 * @version 0.1.4
 */
export class AdgroupcreateAudienceRuleExclusionsFilterFilters {
    /** @type {string} */
    field?: string;
    /** @type {string} */
    operator?: string;
    /** @type {any} */
    value?: any;

    /**
     * Constructs a new <code>AdgroupcreateAudienceRuleExclusionsFilterFilters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupcreateAudienceRuleExclusionsFilterFilters} obj Optional instance to populate.
     * @return {module:model/AdgroupcreateAudienceRuleExclusionsFilterFilters} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdgroupcreateAudienceRuleExclusionsFilterFilters): AdgroupcreateAudienceRuleExclusionsFilterFilters {
        if (!data) return new AdgroupcreateAudienceRuleExclusionsFilterFilters();
        
        obj = obj || new AdgroupcreateAudienceRuleExclusionsFilterFilters();
        
        if (data.hasOwnProperty('field')) {
            obj.field = ApiClient.convertToType(data['field'], 'String');
        }
        if (data.hasOwnProperty('operator')) {
            obj.operator = ApiClient.convertToType(data['operator'], 'String');
        }
        if (data.hasOwnProperty('value')) {
            obj.value = data['value'];
        }

        return obj;
    }
}

