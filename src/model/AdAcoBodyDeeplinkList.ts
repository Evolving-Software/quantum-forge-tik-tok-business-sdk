import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyDeeplinkList model.
 */
export class AdAcoBodyDeeplinkList implements ModelBase {
    'deeplink'?: string;
    'deepLinkType'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyDeeplinkList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['deeplink'] !== undefined) {
            this['deeplink'] = ApiClient.convertToType(typedData['deeplink'], 'String') as string;
        }
        if (typedData['deepLinkType'] !== undefined) {
            this['deepLinkType'] = ApiClient.convertToType(typedData['deepLinkType'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyDeeplinkList {
        const instance = new AdAcoBodyDeeplinkList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyDeeplinkList {
        return AdAcoBodyDeeplinkList.fromObject(data);
    }
}
