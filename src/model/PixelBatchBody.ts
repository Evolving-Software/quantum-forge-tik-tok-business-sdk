/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The PixelBatchBody model module.
 * @module model/PixelBatchBody
 * @version 0.1.4
 */
export class PixelBatchBody {
    batch: Array<any>;
    pixel_code: string;

    /**
     * Constructs a new <code>PixelBatchBody</code>.
     * @param batch {Array} Array of events
     * @param pixel_code {String} Pixel ID
     */
    constructor(batch: Array<any>, pixel_code: string) {
        this.batch = batch;
        this.pixel_code = pixel_code;
    }

    /**
     * Constructs a <code>PixelBatchBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PixelBatchBody} obj Optional instance to populate.
     * @return {module:model/PixelBatchBody} The populated <code>PixelBatchBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: PixelBatchBody): PixelBatchBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const batch = ApiClient.convertToType(data['batch'], ['Object']);
        const pixel_code = ApiClient.convertToType(data['pixel_code'], 'String');

        if (!obj) {
            obj = new PixelBatchBody(batch, pixel_code);
        }

        return obj;
    }
}

