/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

 /**
 * The PortfolioCreateBody model module.
 * @module model/PortfolioCreateBody
 * @version 0.1.4
 */
class PortfolioCreateBody {
    advertiser_id: string;
    creative_portfolio_type?: string;
    portfolio_content?: string;

    constructor(advertiser_id: string) {
        this.advertiser_id = advertiser_id;
    }

    static constructFromObject(data: any, obj?: PortfolioCreateBody): PortfolioCreateBody {
        if (!data) {
            return new PortfolioCreateBody('');
        }

        obj = obj || new PortfolioCreateBody(data.advertiser_id || '');
        
        if (data.hasOwnProperty('creative_portfolio_type'))
            obj.creative_portfolio_type = data.creative_portfolio_type;
        
        if (data.hasOwnProperty('portfolio_content'))
            obj.portfolio_content = data.portfolio_content;

        return obj;
    }
}

export default PortfolioCreateBody;

