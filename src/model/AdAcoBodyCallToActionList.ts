import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyCallToActionList model.
 */
export class AdAcoBodyCallToActionList implements ModelBase {
    'callToAction'?: string;
    'language'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyCallToActionList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['callToAction'] !== undefined) {
            this['callToAction'] = ApiClient.convertToType(typedData['callToAction'], 'String') as string;
        }
        if (typedData['language'] !== undefined) {
            this['language'] = ApiClient.convertToType(typedData['language'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyCallToActionList {
        const instance = new AdAcoBodyCallToActionList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyCallToActionList {
        return AdAcoBodyCallToActionList.fromObject(data);
    }
}
