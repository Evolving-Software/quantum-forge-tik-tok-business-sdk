import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The AdAcoBodyCardList model.
 */
export class AdAcoBodyCardList implements ModelBase {
    'cardId'?: string;
    'status'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdAcoBodyCardList populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['cardId'] !== undefined) {
            this['cardId'] = ApiClient.convertToType(typedData['cardId'], 'String') as string;
        }
        if (typedData['status'] !== undefined) {
            this['status'] = ApiClient.convertToType(typedData['status'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBodyCardList {
        const instance = new AdAcoBodyCardList();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBodyCardList {
        return AdAcoBodyCardList.fromObject(data);
    }
}
