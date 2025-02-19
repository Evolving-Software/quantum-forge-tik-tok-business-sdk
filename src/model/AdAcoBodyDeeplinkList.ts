/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyDeeplinkList model module.
 * @module model/AdAcoBodyDeeplinkList
 * @version 0.1.4
 */
export class AdAcoBodyDeeplinkList {
  /**
   * The specific location where you want your audience to land when they click or swipe up on your ad.
   */
  deeplink?: string | undefined;

  /**
   * Type of deeplink. Enum values: DEFERRED_DEEPLINK, CUSTOM_URL
   */
  deeplink_type?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyDeeplinkList</code>.
   * @alias module:model/AdAcoBodyDeeplinkList
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyDeeplinkList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyDeeplinkList} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyDeeplinkList} The populated <code>AdAcoBodyDeeplinkList</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyDeeplinkList): AdAcoBodyDeeplinkList {
    const instance = obj || new AdAcoBodyDeeplinkList();
    
    if (data) {
      if (data.hasOwnProperty('deeplink')) instance.deeplink = data['deeplink'];
      if (data.hasOwnProperty('deeplink_type')) instance.deeplink_type = data['deeplink_type'];
    }
    
    return instance;
  }
}

