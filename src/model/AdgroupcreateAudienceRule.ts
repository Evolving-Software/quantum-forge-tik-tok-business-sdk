import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";
import { AdgroupcreateAudienceRuleExclusions } from "./AdgroupcreateAudienceRuleExclusions";
import { AdgroupcreateAudienceRuleInclusions } from "./AdgroupcreateAudienceRuleInclusions";

/**
 * The AdgroupcreateAudienceRule model.
 */
export class AdgroupcreateAudienceRule implements ModelBase {
    'exclusions'?: AdgroupcreateAudienceRuleExclusions;
    'inclusions'?: AdgroupcreateAudienceRuleInclusions;
    'operator'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupcreateAudienceRule populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['exclusions'] !== undefined) {
            this['exclusions'] = ApiClient.convertToType(
                typedData['exclusions'],
                AdgroupcreateAudienceRuleExclusions
            ) as AdgroupcreateAudienceRuleExclusions;
        }
        if (typedData['inclusions'] !== undefined) {
            this['inclusions'] = ApiClient.convertToType(
                typedData['inclusions'],
                AdgroupcreateAudienceRuleInclusions
            ) as AdgroupcreateAudienceRuleInclusions;
        }
        if (typedData['operator'] !== undefined) {
            this['operator'] = ApiClient.convertToType(typedData['operator'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupcreateAudienceRule {
        const instance = new AdgroupcreateAudienceRule();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupcreateAudienceRule {
        return AdgroupcreateAudienceRule.fromObject(data);
    }
}
