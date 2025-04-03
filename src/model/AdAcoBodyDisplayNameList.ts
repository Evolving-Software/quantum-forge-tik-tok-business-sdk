import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyDisplayNameList model.
 */
export class AdAcoBodyDisplayNameList implements ModelBase {
    'displayName'?: string;
    'language'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyDisplayNameList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['displayName'] !== undefined) {
            this['displayName'] = ApiClient.convertToType(typedData['displayName'], 'String') as string;
        }
        if (typedData['language'] !== undefined) {
            this['language'] = ApiClient.convertToType(typedData['language'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyDisplayNameList {
        const instance = new AdAcoBodyDisplayNameList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyDisplayNameList {
        return AdAcoBodyDisplayNameList.fromObject(data);
    }
}
