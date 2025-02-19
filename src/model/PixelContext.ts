/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { PixelContextAd } from './PixelContextAd';
import { PixelContextPage } from './PixelContextPage';
import { PixelContextUser } from './PixelContextUser';

/**
 * The PixelContext model module.
 * @module model/PixelContext
 * @version 0.1.4
 */
export class PixelContext {
    ad?: PixelContextAd;
    ip?: string;
    page?: PixelContextPage;
    user?: PixelContextUser;
    user_agent?: string;

    constructor() {
        // Initialize empty object
    }

    /**
     * Constructs a <code>PixelContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PixelContext} obj Optional instance to populate.
     * @return {module:model/PixelContext} The populated <code>PixelContext</code> instance.
     */
    static constructFromObject(data: any, obj?: PixelContext): PixelContext {
        if (data) {
            obj = obj || new PixelContext();

            if (data.hasOwnProperty('ad'))
                obj.ad = PixelContextAd.constructFromObject(data.ad, new PixelContextAd());
            
            if (data.hasOwnProperty('ip'))
                obj.ip = ApiClient.convertToType(data.ip, 'String');
            
            if (data.hasOwnProperty('page'))
                obj.page = PixelContextPage.constructFromObject(data.page, new PixelContextPage());
            
            if (data.hasOwnProperty('user'))
                obj.user = PixelContextUser.constructFromObject(data.user, new PixelContextUser());
            
            if (data.hasOwnProperty('user_agent'))
                obj.user_agent = ApiClient.convertToType(data.user_agent, 'String');
        }
        return obj || new PixelContext();
    }
}

