/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyTitleList model module.
 * @module model/AdAcoBodyTitleList
 * @version 0.1.4
 */
export class AdAcoBodyTitleList {
  /**
   * Ad title text
   */
  title?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyTitleList</code>.
   * @alias module:model/AdAcoBodyTitleList
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyTitleList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyTitleList} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyTitleList} The populated <code>AdAcoBodyTitleList</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyTitleList): AdAcoBodyTitleList {
    const instance = obj || new AdAcoBodyTitleList();
    
    if (data && data.hasOwnProperty('title')) {
      instance.title = data['title'];
    }
    
    return instance;
  }
}

