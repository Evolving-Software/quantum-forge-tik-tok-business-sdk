import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdcreateDisclaimerClickableTexts model.
 */
export class AdcreateDisclaimerClickableTexts implements ModelBase {
    'clickableTexts'?: string;
    'disclaimer'?: string;
    'language'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdcreateDisclaimerClickableTexts populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['clickableTexts'] !== undefined) {
            this['clickableTexts'] = ApiClient.convertToType(typedData['clickableTexts'], 'String') as string;
        }
        if (typedData['disclaimer'] !== undefined) {
            this['disclaimer'] = ApiClient.convertToType(typedData['disclaimer'], 'String') as string;
        }
        if (typedData['language'] !== undefined) {
            this['language'] = ApiClient.convertToType(typedData['language'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdcreateDisclaimerClickableTexts {
        const instance = new AdcreateDisclaimerClickableTexts();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdcreateDisclaimerClickableTexts {
        return AdcreateDisclaimerClickableTexts.fromObject(data);
    }
}
