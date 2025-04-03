import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdupdateCreatives } from "./AdupdateCreatives";

/**
 * The AdUpdateBody model.
 */
export class AdUpdateBody implements ModelBase {
    'adIds'?: string[];
    'advertiserId'?: string;
    'creatives'?: AdupdateCreatives[];

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdUpdateBody populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['adIds'] !== undefined) {
            this['adIds'] = ApiClient.convertToType(
                typedData['adIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['advertiserId'] !== undefined) {
            this['advertiserId'] = ApiClient.convertToType(typedData['advertiserId'], 'String') as string;
        }
        if (typedData['creatives'] !== undefined) {
            this['creatives'] = ApiClient.convertToType(
                typedData['creatives'],
                createArraySpec(AdupdateCreatives)
            ) as AdupdateCreatives[];
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdUpdateBody {
        const instance = new AdUpdateBody();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdUpdateBody {
        return AdUpdateBody.fromObject(data);
    }
}
