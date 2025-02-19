/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyPageList model module.
 * @module model/AdAcoBodyPageList
 * @version 0.1.4
 */
export class AdAcoBodyPageList {
  /**
   * TikTok Page ID
   */
  page_id?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyPageList</code>.
   * @alias module:model/AdAcoBodyPageList
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyPageList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyPageList} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyPageList} The populated <code>AdAcoBodyPageList</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyPageList): AdAcoBodyPageList {
    const instance = obj || new AdAcoBodyPageList();
    
    if (data && data.hasOwnProperty('page_id')) {
      instance.page_id = data['page_id'];
    }
    
    return instance;
  }
}

