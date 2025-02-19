/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The AdAcoBodyAvatarIcon model module.
 * @module model/AdAcoBodyAvatarIcon
 * @version 0.1.4
 */
export class AdAcoBodyAvatarIcon {
  web_uri?: string;

  /**
   * Constructs a new <code>AdAcoBodyAvatarIcon</code>.
   * Avatar image.
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyAvatarIcon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param data The plain JavaScript object bearing properties of interest.
   * @param obj Optional instance to populate.
   * @return The populated <code>AdAcoBodyAvatarIcon</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyAvatarIcon): AdAcoBodyAvatarIcon {
    if (!data) {
      return new AdAcoBodyAvatarIcon();
    }
    
    obj = obj || new AdAcoBodyAvatarIcon();
    if (data.hasOwnProperty('web_uri'))
      obj.web_uri = ApiClient.convertToType(data['web_uri'], 'String');
    return obj;
  }
}

