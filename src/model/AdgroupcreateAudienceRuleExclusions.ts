import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdgroupcreateAudienceRuleExclusionsRules } from "./AdgroupcreateAudienceRuleExclusionsRules";

/**
 * The AdgroupcreateAudienceRuleExclusions model.
 */
export class AdgroupcreateAudienceRuleExclusions implements ModelBase {
    'operator'?: string;
    'rules'?: AdgroupcreateAudienceRuleExclusionsRules[];

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupcreateAudienceRuleExclusions populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['operator'] !== undefined) {
            this['operator'] = ApiClient.convertToType(typedData['operator'], 'String') as string;
        }
        if (typedData['rules'] !== undefined) {
            this['rules'] = ApiClient.convertToType(
                typedData['rules'],
                createArraySpec(AdgroupcreateAudienceRuleExclusionsRules)
            ) as AdgroupcreateAudienceRuleExclusionsRules[];
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupcreateAudienceRuleExclusions {
        const instance = new AdgroupcreateAudienceRuleExclusions();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupcreateAudienceRuleExclusions {
        return AdgroupcreateAudienceRuleExclusions.fromObject(data);
    }
}
