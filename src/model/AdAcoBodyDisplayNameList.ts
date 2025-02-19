/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyDisplayNameList model module.
 * @module model/AdAcoBodyDisplayNameList
 * @version 0.1.4
 */
export class AdAcoBodyDisplayNameList {
  /**
   * Display name for App promotion
   */
  app_name?: string | undefined;

  /**
   * Display name for landing page
   */
  landing_page_name?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyDisplayNameList</code>.
   * @alias module:model/AdAcoBodyDisplayNameList
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyDisplayNameList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyDisplayNameList} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyDisplayNameList} The populated <code>AdAcoBodyDisplayNameList</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyDisplayNameList): AdAcoBodyDisplayNameList {
    const instance = obj || new AdAcoBodyDisplayNameList();
    
    if (data) {
      if (data.hasOwnProperty('app_name')) instance.app_name = data['app_name'];
      if (data.hasOwnProperty('landing_page_name')) instance.landing_page_name = data['landing_page_name'];
    }
    
    return instance;
  }
}

