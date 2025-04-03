import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyPageList model.
 */
export class AdAcoBodyPageList implements ModelBase {
    'pageId'?: string;
    'pageName'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyPageList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['pageId'] !== undefined) {
            this['pageId'] = ApiClient.convertToType(typedData['pageId'], 'String') as string;
        }
        if (typedData['pageName'] !== undefined) {
            this['pageName'] = ApiClient.convertToType(typedData['pageName'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyPageList {
        const instance = new AdAcoBodyPageList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyPageList {
        return AdAcoBodyPageList.fromObject(data);
    }
}
