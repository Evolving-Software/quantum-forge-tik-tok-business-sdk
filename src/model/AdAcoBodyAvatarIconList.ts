import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyAvatarIconList model.
 */
export class AdAcoBodyAvatarIconList implements ModelBase {
    'avatarIcon'?: string;
    'description'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyAvatarIconList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['avatarIcon'] !== undefined) {
            this['avatarIcon'] = ApiClient.convertToType(typedData['avatarIcon'], 'String') as string;
        }
        if (typedData['description'] !== undefined) {
            this['description'] = ApiClient.convertToType(typedData['description'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyAvatarIconList {
        const instance = new AdAcoBodyAvatarIconList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyAvatarIconList {
        return AdAcoBodyAvatarIconList.fromObject(data);
    }
}
