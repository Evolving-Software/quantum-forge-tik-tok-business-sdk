/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import { AdgroupcreateAudienceRuleExclusions } from './AdgroupcreateAudienceRuleExclusions';
import { AdgroupcreateAudienceRuleInclusions } from './AdgroupcreateAudienceRuleInclusions';

/**
 * The AdgroupcreateAudienceRule model module.
 * @module model/AdgroupcreateAudienceRule
 * @version 0.1.1
 */
export class AdgroupcreateAudienceRule {
    /** @type {AdgroupcreateAudienceRuleExclusions} */
    exclusions?: AdgroupcreateAudienceRuleExclusions;
    /** @type {AdgroupcreateAudienceRuleInclusions} */
    inclusions?: AdgroupcreateAudienceRuleInclusions;

    /**
     * Constructs a new <code>AdgroupcreateAudienceRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupcreateAudienceRule} obj Optional instance to populate.
     * @return {module:model/AdgroupcreateAudienceRule} The populated instance.
     */
    static constructFromObject(data: any, obj?: AdgroupcreateAudienceRule): AdgroupcreateAudienceRule {
        if (!data) return new AdgroupcreateAudienceRule();
        
        obj = obj || new AdgroupcreateAudienceRule();
        
        if (data.hasOwnProperty('exclusions')) {
            obj.exclusions = AdgroupcreateAudienceRuleExclusions.constructFromObject(data['exclusions'], new AdgroupcreateAudienceRuleExclusions());
        }
        if (data.hasOwnProperty('inclusions')) {
            obj.inclusions = AdgroupcreateAudienceRuleInclusions.constructFromObject(data['inclusions'], new AdgroupcreateAudienceRuleInclusions());
        }

        return obj;
    }
}

