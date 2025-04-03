import { ApiClient } from "../ApiClient";
import type { ModelBase } from "../types";

/**
 * The BcassetGroupcreateMembers model.
 */
export class BcassetGroupcreateMembers implements ModelBase {
    'bcId'?: string;
    'memberType'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of BcassetGroupcreateMembers populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['bcId'] !== undefined) {
            this['bcId'] = ApiClient.convertToType(typedData['bcId'], 'String') as string;
        }
        if (typedData['memberType'] !== undefined) {
            this['memberType'] = ApiClient.convertToType(typedData['memberType'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): BcassetGroupcreateMembers {
        const instance = new BcassetGroupcreateMembers();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): BcassetGroupcreateMembers {
        return BcassetGroupcreateMembers.fromObject(data);
    }
}
