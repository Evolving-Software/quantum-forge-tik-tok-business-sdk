import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdgroupcreateAudienceRuleExclusionsFilter } from "./AdgroupcreateAudienceRuleExclusionsFilter";

/**
 * The AdgroupcreateAudienceRuleExclusionsRules model.
 */
export class AdgroupcreateAudienceRuleExclusionsRules implements ModelBase {
    'operator'?: string;
    'filters'?: string[];
    'filter'?: AdgroupcreateAudienceRuleExclusionsFilter;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupcreateAudienceRuleExclusionsRules populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['operator'] !== undefined) {
            this['operator'] = ApiClient.convertToType(typedData['operator'], 'String') as string;
        }
        if (typedData['filters'] !== undefined) {
            this['filters'] = ApiClient.convertToType(
                typedData['filters'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['filter'] !== undefined) {
            this['filter'] = ApiClient.convertToType(
                typedData['filter'],
                AdgroupcreateAudienceRuleExclusionsFilter
            ) as AdgroupcreateAudienceRuleExclusionsFilter;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupcreateAudienceRuleExclusionsRules {
        const instance = new AdgroupcreateAudienceRuleExclusionsRules();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupcreateAudienceRuleExclusionsRules {
        return AdgroupcreateAudienceRuleExclusionsRules.fromObject(data);
    }
}
