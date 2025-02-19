/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { PixelContent } from './PixelContent';

/**
 * The PixelProperties model module.
 * @module model/PixelProperties
 * @version 0.1.4
 */
export class PixelProperties {
    contents?: PixelContent[];
    currency?: string;
    description?: string;
    query?: string;
    value?: number;

    /**
     * Constructs a new <code>PixelProperties</code>.
     * Properties associated with the event
     * @alias module:model/PixelProperties
     * @class
     */
    constructor() {
        // Initialize empty object
    }

    /**
     * Constructs a <code>PixelProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PixelProperties} obj Optional instance to populate.
     * @return {module:model/PixelProperties} The populated <code>PixelProperties</code> instance.
     */
    static constructFromObject(data: any, obj?: PixelProperties): PixelProperties {
        if (data) {
            obj = obj || new PixelProperties();
            
            if (data.hasOwnProperty('contents'))
                obj.contents = data.contents?.map((item: any) => PixelContent.constructFromObject(item, new PixelContent()));
            
            if (data.hasOwnProperty('currency'))
                obj.currency = ApiClient.convertToType(data.currency, 'String');
            
            if (data.hasOwnProperty('description'))
                obj.description = ApiClient.convertToType(data.description, 'String');
            
            if (data.hasOwnProperty('query'))
                obj.query = ApiClient.convertToType(data.query, 'String');
            
            if (data.hasOwnProperty('value'))
                obj.value = ApiClient.convertToType(data.value, 'Number');
        }
        return obj || new PixelProperties();
    }
}

