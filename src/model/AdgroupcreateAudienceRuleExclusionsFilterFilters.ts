import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdgroupcreateAudienceRuleExclusionsFilterFilters model.
 */
export class AdgroupcreateAudienceRuleExclusionsFilterFilters implements ModelBase {
    'field'?: string;
    'operator'?: string;
    'value'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupcreateAudienceRuleExclusionsFilterFilters populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['field'] !== undefined) {
            this['field'] = ApiClient.convertToType(typedData['field'], 'String') as string;
        }
        if (typedData['operator'] !== undefined) {
            this['operator'] = ApiClient.convertToType(typedData['operator'], 'String') as string;
        }
        if (typedData['value'] !== undefined) {
            this['value'] = ApiClient.convertToType(typedData['value'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupcreateAudienceRuleExclusionsFilterFilters {
        const instance = new AdgroupcreateAudienceRuleExclusionsFilterFilters();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupcreateAudienceRuleExclusionsFilterFilters {
        return AdgroupcreateAudienceRuleExclusionsFilterFilters.fromObject(data);
    }
}
