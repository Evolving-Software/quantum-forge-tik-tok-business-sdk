/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The CatalogcreateCatalogConf model module.
 * @module model/CatalogcreateCatalogConf
 * @version 0.1.4
 */
export class CatalogcreateCatalogConf {
    currency: string;
    region_code: string;

    /**
     * Constructs a new <code>CatalogcreateCatalogConf</code>.
     * @param currency The currency code
     * @param region_code The region code
     */
    constructor(currency: string, region_code: string) {
        this.currency = currency;
        this.region_code = region_code;
    }

    /**
     * Constructs a <code>CatalogcreateCatalogConf</code> from a plain JavaScript object.
     * @param data The plain JavaScript object bearing properties of interest.
     * @param obj Optional instance to populate.
     */
    static constructFromObject(data: any, obj?: CatalogcreateCatalogConf): CatalogcreateCatalogConf {
        if (!data) {
            throw new Error('Data required');
        }
        if (!data.currency || !data.region_code) {
            throw new Error('Required parameters missing');
        }

        obj = obj || new CatalogcreateCatalogConf(data.currency, data.region_code);
        return obj;
    }
}

