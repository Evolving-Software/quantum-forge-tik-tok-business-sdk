/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The PixelTransferBody model module.
 * @module model/PixelTransferBody
 * @version 0.1.4
 */
export class PixelTransferBody {
    bc_id: string;
    pixel_code: string;

    /**
     * Constructs a new <code>PixelTransferBody</code>.
     * @param bc_id {String} Business Center ID
     * @param pixel_code {String} Pixel ID
     */
    constructor(bc_id: string, pixel_code: string) {
        this.bc_id = bc_id;
        this.pixel_code = pixel_code;
    }

    /**
     * Constructs a <code>PixelTransferBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PixelTransferBody} obj Optional instance to populate.
     * @return {module:model/PixelTransferBody} The populated <code>PixelTransferBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: PixelTransferBody): PixelTransferBody {
        if (!data) return obj || new PixelTransferBody('', '');

        obj = obj || new PixelTransferBody(
            data['bc_id'] || '',
            data['pixel_code'] || ''
        );
        
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('pixel_code'))
            obj.pixel_code = ApiClient.convertToType(data['pixel_code'], 'String');
        
        return obj;
    }
}

