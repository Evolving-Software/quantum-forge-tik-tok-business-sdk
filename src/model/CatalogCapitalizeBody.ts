/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CatalogCapitalizeBody model module.
 * @module model/CatalogCapitalizeBody
 * @version 0.1.4
 */
export class CatalogCapitalizeBody {
    /** @type {string} */
    advertiser_id?: string;
    
    /** @type {string} */
    bc_id?: string;
    
    /** @type {string} */
    catalog_id?: string;

    /**
     * Constructs a new <code>CatalogCapitalizeBody</code>.
     * @param advertiser_id {string} 
     * @param bc_id {string} 
     * @param catalog_id {string} 
     */
    constructor(advertiser_id: string, bc_id: string, catalog_id: string) {
        this.advertiser_id = advertiser_id;
        this.bc_id = bc_id;
        this.catalog_id = catalog_id;
    }

    /**
     * Constructs a <code>CatalogCapitalizeBody</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogCapitalizeBody} obj Optional instance to populate.
     * @return {module:model/CatalogCapitalizeBody} The populated instance.
     */
    static constructFromObject(data: any, obj?: CatalogCapitalizeBody): CatalogCapitalizeBody {
        if (!data) return new CatalogCapitalizeBody("", "", "");
        
        obj = obj || new CatalogCapitalizeBody("", "", "");
        
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('catalog_id'))
            obj.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');

        return obj;
    }
}

