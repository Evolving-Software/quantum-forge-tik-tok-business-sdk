import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyTitleList model.
 */
export class AdAcoBodyTitleList implements ModelBase {
    'title'?: string;
    'language'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyTitleList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['title'] !== undefined) {
            this['title'] = ApiClient.convertToType(typedData['title'], 'String') as string;
        }
        if (typedData['language'] !== undefined) {
            this['language'] = ApiClient.convertToType(typedData['language'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyTitleList {
        const instance = new AdAcoBodyTitleList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyTitleList {
        return AdAcoBodyTitleList.fromObject(data);
    }
}
