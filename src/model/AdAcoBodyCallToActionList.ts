/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyCallToActionList model module.
 * @module model/AdAcoBodyCallToActionList
 * @version 0.1.4
 */
export class AdAcoBodyCallToActionList {
  /**
   * Call-to-action text
   */
  call_to_action?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyCallToActionList</code>.
   * @alias module:model/AdAcoBodyCallToActionList
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyCallToActionList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyCallToActionList} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyCallToActionList} The populated <code>AdAcoBodyCallToActionList</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyCallToActionList): AdAcoBodyCallToActionList {
    const instance = obj || new AdAcoBodyCallToActionList();
    
    if (data && data.hasOwnProperty('call_to_action')) {
      instance.call_to_action = data['call_to_action'];
    }
    
    return instance;
  }
}

