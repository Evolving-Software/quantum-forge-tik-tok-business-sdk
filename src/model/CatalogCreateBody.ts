/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {CatalogcreateCatalogConf} from './CatalogcreateCatalogConf';

/**
 * The CatalogCreateBody model module.
 * @module model/CatalogCreateBody
 * @version 0.1.4
 */
export class CatalogCreateBody {
    bc_id: string;
    catalog_conf: CatalogcreateCatalogConf;
    catalog_type: string;
    creative_asset_type?: string;
    name: string;

    /**
     * Constructs a new <code>CatalogCreateBody</code>.
     * @param bc_id Business Center ID
     * @param catalog_conf Catalog configuration
     * @param catalog_type Type of catalog
     * @param name Name of the catalog
     */
    constructor(bc_id: string, catalog_conf: CatalogcreateCatalogConf, catalog_type: string, name: string) {
        this.bc_id = bc_id;
        this.catalog_conf = catalog_conf;
        this.catalog_type = catalog_type;
        this.name = name;
    }

    /**
     * Constructs a <code>CatalogCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     */
    static constructFromObject(data: any, obj?: CatalogCreateBody): CatalogCreateBody {
        if (!data) {
            throw new Error('Data required');
        }
        if (!data.bc_id || !data.catalog_conf || !data.catalog_type || !data.name) {
            throw new Error('Required parameters missing');
        }

        const catalogConf = CatalogcreateCatalogConf.constructFromObject(data.catalog_conf);
        if (!catalogConf) {
            throw new Error('Invalid catalog_conf');
        }

        obj = obj || new CatalogCreateBody(
            data.bc_id,
            catalogConf,
            data.catalog_type,
            data.name
        );

        if (data.hasOwnProperty('creative_asset_type'))
            obj.creative_asset_type = ApiClient.convertToType(data['creative_asset_type'], 'String');
        
        return obj;
    }
}

