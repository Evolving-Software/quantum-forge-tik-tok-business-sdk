import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";

/**
 * The AdgroupcreateActions model.
 */
export class AdgroupcreateActions implements ModelBase {
    'actionCategory'?: string[];
    'actionDays'?: string;
    'actionWords'?: string;
    'deepBidType'?: string;
    'externalAction'?: string;
    'secondaryOptimizationEvent'?: string[];

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupcreateActions populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['actionCategory'] !== undefined) {
            this['actionCategory'] = ApiClient.convertToType(
                typedData['actionCategory'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['actionDays'] !== undefined) {
            this['actionDays'] = ApiClient.convertToType(typedData['actionDays'], 'String') as string;
        }
        if (typedData['actionWords'] !== undefined) {
            this['actionWords'] = ApiClient.convertToType(typedData['actionWords'], 'String') as string;
        }
        if (typedData['deepBidType'] !== undefined) {
            this['deepBidType'] = ApiClient.convertToType(typedData['deepBidType'], 'String') as string;
        }
        if (typedData['externalAction'] !== undefined) {
            this['externalAction'] = ApiClient.convertToType(typedData['externalAction'], 'String') as string;
        }
        if (typedData['secondaryOptimizationEvent'] !== undefined) {
            this['secondaryOptimizationEvent'] = ApiClient.convertToType(
                typedData['secondaryOptimizationEvent'],
                createArraySpec('String')
            ) as string[];
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupcreateActions {
        const instance = new AdgroupcreateActions();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupcreateActions {
        return AdgroupcreateActions.fromObject(data);
    }
}
