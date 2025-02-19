/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CatalogUpdateBody model module.
 * @module model/CatalogUpdateBody
 * @version 0.1.4
 */
export class CatalogUpdateBody {
    /** @type {string} */
    bc_id?: string;
    
    /** @type {string} */
    catalog_id?: string;
    
    /** @type {string} */
    name?: string;

    /**
     * Constructs a new <code>CatalogUpdateBody</code>.
     * @param bc_id {string} 
     * @param catalog_id {string} 
     * @param name {string} 
     */
    constructor(bc_id: string, catalog_id: string, name: string) {
        this.bc_id = bc_id;
        this.catalog_id = catalog_id;
        this.name = name;
    }

    /**
     * Constructs a <code>CatalogUpdateBody</code> from a plain JavaScript object.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogUpdateBody} obj Optional instance to populate.
     * @return {module:model/CatalogUpdateBody} The populated instance.
     */
    static constructFromObject(data: any, obj?: CatalogUpdateBody): CatalogUpdateBody {
        if (!data) return new CatalogUpdateBody("", "", "");
        
        obj = obj || new CatalogUpdateBody("", "", "");
        
        if (data.hasOwnProperty('bc_id'))
            obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
        if (data.hasOwnProperty('catalog_id'))
            obj.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
        if (data.hasOwnProperty('name'))
            obj.name = ApiClient.convertToType(data['name'], 'String');

        return obj;
    }
}

