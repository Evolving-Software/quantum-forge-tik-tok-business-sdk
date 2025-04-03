import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdgroupcreateAudienceRuleExclusionsFilterFilters } from "./AdgroupcreateAudienceRuleExclusionsFilterFilters";

/**
 * The AdgroupcreateAudienceRuleExclusionsFilter model.
 */
export class AdgroupcreateAudienceRuleExclusionsFilter implements ModelBase {
    'operator'?: string;
    'filters'?: AdgroupcreateAudienceRuleExclusionsFilterFilters[];

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupcreateAudienceRuleExclusionsFilter populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['operator'] !== undefined) {
            this['operator'] = ApiClient.convertToType(typedData['operator'], 'String') as string;
        }
        if (typedData['filters'] !== undefined) {
            this['filters'] = ApiClient.convertToType(
                typedData['filters'],
                createArraySpec(AdgroupcreateAudienceRuleExclusionsFilterFilters)
            ) as AdgroupcreateAudienceRuleExclusionsFilterFilters[];
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupcreateAudienceRuleExclusionsFilter {
        const instance = new AdgroupcreateAudienceRuleExclusionsFilter();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupcreateAudienceRuleExclusionsFilter {
        return AdgroupcreateAudienceRuleExclusionsFilter.fromObject(data);
    }
}
