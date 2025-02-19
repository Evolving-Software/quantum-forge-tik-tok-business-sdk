/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { AdgroupcreateAudienceRuleExclusionsFilterFilters } from './AdgroupcreateAudienceRuleExclusionsFilterFilters';

/**
 * The AdgroupcreateAudienceRuleExclusionsFilter model module.
 * @module model/AdgroupcreateAudienceRuleExclusionsFilter
 * @version 0.1.1
 */
export class AdgroupcreateAudienceRuleExclusionsFilter {
    /** @type {Array<AdgroupcreateAudienceRuleExclusionsFilterFilters>} */
    filters?: AdgroupcreateAudienceRuleExclusionsFilterFilters[];
    /** @type {string} */
    operator?: string;

    /**
     * Constructs a new <code>AdgroupcreateAudienceRuleExclusionsFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupcreateAudienceRuleExclusionsFilter} obj Optional instance to populate.
     * @return {module:model/AdgroupcreateAudienceRuleExclusionsFilter} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdgroupcreateAudienceRuleExclusionsFilter): AdgroupcreateAudienceRuleExclusionsFilter {
        if (!data) return new AdgroupcreateAudienceRuleExclusionsFilter();
        
        obj = obj || new AdgroupcreateAudienceRuleExclusionsFilter();
        
        if (data.hasOwnProperty('filters')) {
            obj.filters = ApiClient.convertToType(data['filters'], [AdgroupcreateAudienceRuleExclusionsFilterFilters]);
        }
        if (data.hasOwnProperty('operator')) {
            obj.operator = ApiClient.convertToType(data['operator'], 'String');
        }

        return obj;
    }
}

