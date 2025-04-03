import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";

/**
 * The AdStatusUpdateBody model.
 */
export class AdStatusUpdateBody implements ModelBase {
    'adIds'?: string[];
    'advertiserId'?: string;
    'operateStatus'?: string;
    'optionAdIds'?: string[];

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdStatusUpdateBody populated with the given data
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
        if (typedData['operateStatus'] !== undefined) {
            this['operateStatus'] = ApiClient.convertToType(typedData['operateStatus'], 'String') as string;
        }
        if (typedData['optionAdIds'] !== undefined) {
            this['optionAdIds'] = ApiClient.convertToType(
                typedData['optionAdIds'], 
                createArraySpec('String')
            ) as string[];
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdStatusUpdateBody {
        const instance = new AdStatusUpdateBody();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdStatusUpdateBody {
        return AdStatusUpdateBody.fromObject(data);
    }
}
