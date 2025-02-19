/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The ProductDeleteBody model module.
 * @module model/ProductDeleteBody
 * @version 0.1.4
 */
export class ProductDeleteBody {
    bc_id: string;
    catalog_id: string;
    destination_ids?: string[];
    feed_id?: string;
    flight_ids?: string[];
    hotel_ids?: string[];
    media_title_ids?: string[];
    sku_ids?: string[];
    vehicle_ids?: string[];

    /**
     * Constructs a new <code>ProductDeleteBody</code>.
     * @param bc_id {String} Business Center ID
     * @param catalog_id {String} Catalog ID
     */
    constructor(bc_id: string, catalog_id: string) {
        this.bc_id = bc_id;
        this.catalog_id = catalog_id;
    }

    /**
     * Constructs a <code>ProductDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDeleteBody} obj Optional instance to populate.
     * @return {module:model/ProductDeleteBody} The populated <code>ProductDeleteBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: ProductDeleteBody): ProductDeleteBody {
        if (!data) return obj || new ProductDeleteBody('', '');

        obj = obj || new ProductDeleteBody(
            data['bc_id'] || '',
            data['catalog_id'] || ''
        );
        
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('catalog_id'))
            obj.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
        if (data.hasOwnProperty('destination_ids'))
            obj.destination_ids = ApiClient.convertToType(data['destination_ids'], ['String']);
        if (data.hasOwnProperty('feed_id'))
            obj.feed_id = ApiClient.convertToType(data['feed_id'], 'String');
        if (data.hasOwnProperty('flight_ids'))
            obj.flight_ids = ApiClient.convertToType(data['flight_ids'], ['String']);
        if (data.hasOwnProperty('hotel_ids'))
            obj.hotel_ids = ApiClient.convertToType(data['hotel_ids'], ['String']);
        if (data.hasOwnProperty('media_title_ids'))
            obj.media_title_ids = ApiClient.convertToType(data['media_title_ids'], ['String']);
        if (data.hasOwnProperty('sku_ids'))
            obj.sku_ids = ApiClient.convertToType(data['sku_ids'], ['String']);
        if (data.hasOwnProperty('vehicle_ids'))
            obj.vehicle_ids = ApiClient.convertToType(data['vehicle_ids'], ['String']);
        
        return obj;
    }
}

