import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyLandingPageUrls model.
 */
export class AdAcoBodyLandingPageUrls implements ModelBase {
    'landingPageUrl'?: string;
    'language'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyLandingPageUrls populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['landingPageUrl'] !== undefined) {
            this['landingPageUrl'] = ApiClient.convertToType(typedData['landingPageUrl'], 'String') as string;
        }
        if (typedData['language'] !== undefined) {
            this['language'] = ApiClient.convertToType(typedData['language'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyLandingPageUrls {
        const instance = new AdAcoBodyLandingPageUrls();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyLandingPageUrls {
        return AdAcoBodyLandingPageUrls.fromObject(data);
    }
}
