/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

export class PixelContent {
    content_category?: string;
    content_id?: string;
    content_name?: string;
    content_type?: string;
    price?: number;
    quantity?: number;
    status?: string;

    constructor() {
        // Initialize empty object
    }

    static constructFromObject(data: any, obj?: PixelContent): PixelContent {
        if (data) {
            obj = obj || new PixelContent();
            
            if (data.hasOwnProperty('content_category'))
                obj.content_category = ApiClient.convertToType(data.content_category, 'String');
            
            if (data.hasOwnProperty('content_id'))
                obj.content_id = ApiClient.convertToType(data.content_id, 'String');
            
            if (data.hasOwnProperty('content_name'))
                obj.content_name = ApiClient.convertToType(data.content_name, 'String');
            
            if (data.hasOwnProperty('content_type'))
                obj.content_type = ApiClient.convertToType(data.content_type, 'String');
            
            if (data.hasOwnProperty('price'))
                obj.price = ApiClient.convertToType(data.price, 'Number');
            
            if (data.hasOwnProperty('quantity'))
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number');
            
            if (data.hasOwnProperty('status'))
                obj.status = ApiClient.convertToType(data.status, 'String');
        }
        return obj || new PixelContent();
    }
}

