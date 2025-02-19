/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcadvertisercreateContactInfo model module.
 * @module model/BcadvertisercreateContactInfo
 * @version 0.1.4
 */
export class BcadvertisercreateContactInfo {
    /** Contact email. Required if the place of registration of the ad account or the Business Center is France, Brazil, or Mexico */
    email?: string;

    /** Contact name. No more than 100 characters in length */
    name?: string;

    /** Contact phone */
    private _number: string | undefined;

    /**
     * Constructs a new <code>BcadvertisercreateContactInfo</code>.
     * Contact Information
     */
    constructor(init?: Partial<BcadvertisercreateContactInfo>) {
        this._number = undefined;
        Object.assign(this, init);
    }

    /** Get contact phone number */
    get number(): string | undefined {
        return this._number;
    }

    /** Set contact phone number */
    set number(value: string | undefined) {
        this._number = value;
    }

    /**
     * Constructs a <code>BcadvertisercreateContactInfo</code> from a plain JavaScript object
     */
    static constructFromObject(data: any, obj?: BcadvertisercreateContactInfo): BcadvertisercreateContactInfo {
        if (!data) {
            return new BcadvertisercreateContactInfo();
        }
        
        obj = obj || new BcadvertisercreateContactInfo();
        
        if (data.hasOwnProperty('email'))
            obj.email = ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('name'))
            obj.name = ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('number'))
            obj.number = ApiClient.convertToType(data['number'], 'String');
        
        return obj;
    }
}

