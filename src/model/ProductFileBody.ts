/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The ProductFileBody model module.
 * @module model/ProductFileBody
 * @version 0.1.4
 */
export class ProductFileBody {
    bc_id: string;
    catalog_id: string;
    file_url: string;
    feed_id?: string;
    update_mode: string = 'INCREMENTAL';

    /**
     * Constructs a new <code>ProductFileBody</code>.
     * @param bc_id {String} 
     * @param catalog_id {String} 
     * @param file_url {String} 
     */
    constructor(bc_id: string, catalog_id: string, file_url: string) {
        this.bc_id = bc_id;
        this.catalog_id = catalog_id;
        this.file_url = file_url;
    }

    /**
     * Constructs a <code>ProductFileBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductFileBody} obj Optional instance to populate.
     * @return {module:model/ProductFileBody} The populated <code>ProductFileBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: ProductFileBody): ProductFileBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        const catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
        const file_url = ApiClient.convertToType(data['file_url'], 'String');

        if (!obj) {
            obj = new ProductFileBody(bc_id, catalog_id, file_url);
        }

        if (data.hasOwnProperty('feed_id')) {
            obj.feed_id = ApiClient.convertToType(data['feed_id'], 'String');
        }
        if (data.hasOwnProperty('update_mode')) {
            obj.update_mode = ApiClient.convertToType(data['update_mode'], 'String');
        }

        return obj;
    }
}

