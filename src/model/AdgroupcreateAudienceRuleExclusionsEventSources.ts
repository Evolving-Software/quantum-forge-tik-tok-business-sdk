/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdgroupcreateAudienceRuleExclusionsEventSources model module.
 * @module model/AdgroupcreateAudienceRuleExclusionsEventSources
 * @version 0.1.1
 */
export class AdgroupcreateAudienceRuleExclusionsEventSources {
    /** @type {string} */
    id?: string;
    /** @type {string} */
    type?: string;

    /**
     * Constructs a new <code>AdgroupcreateAudienceRuleExclusionsEventSources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupcreateAudienceRuleExclusionsEventSources} obj Optional instance to populate.
     * @return {module:model/AdgroupcreateAudienceRuleExclusionsEventSources} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdgroupcreateAudienceRuleExclusionsEventSources): AdgroupcreateAudienceRuleExclusionsEventSources {
        if (!data) return new AdgroupcreateAudienceRuleExclusionsEventSources();
        
        obj = obj || new AdgroupcreateAudienceRuleExclusionsEventSources();
        
        if (data.hasOwnProperty('id')) {
            obj.id = ApiClient.convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('type')) {
            obj.type = ApiClient.convertToType(data['type'], 'String');
        }

        return obj;
    }
}

