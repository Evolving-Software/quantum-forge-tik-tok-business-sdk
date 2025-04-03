import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyMediaInfoList model.
 */
export class AdAcoBodyMediaInfoList implements ModelBase {
    'imageInfo'?: Record<string, unknown>;
    'videoInfo'?: Record<string, unknown>;
    'mediaId'?: string;
    'mediaType'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyMediaInfoList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['imageInfo'] !== undefined) {
            this['imageInfo'] = ApiClient.convertToType(typedData['imageInfo'], 'Object') as Record<string, unknown>;
        }
        if (typedData['videoInfo'] !== undefined) {
            this['videoInfo'] = ApiClient.convertToType(typedData['videoInfo'], 'Object') as Record<string, unknown>;
        }
        if (typedData['mediaId'] !== undefined) {
            this['mediaId'] = ApiClient.convertToType(typedData['mediaId'], 'String') as string;
        }
        if (typedData['mediaType'] !== undefined) {
            this['mediaType'] = ApiClient.convertToType(typedData['mediaType'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyMediaInfoList {
        const instance = new AdAcoBodyMediaInfoList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyMediaInfoList {
        return AdAcoBodyMediaInfoList.fromObject(data);
    }
}
