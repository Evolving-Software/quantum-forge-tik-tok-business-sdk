/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyMediaInfoImageInfo model module.
 * @module model/AdAcoBodyMediaInfoImageInfo
 * @version 0.1.4
 */
export class AdAcoBodyMediaInfoImageInfo {
  /**
   * Image file name
   */
  file_name?: string | undefined;

  /**
   * Image web URI
   */
  web_uri?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyMediaInfoImageInfo</code>.
   * @alias module:model/AdAcoBodyMediaInfoImageInfo
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyMediaInfoImageInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyMediaInfoImageInfo} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyMediaInfoImageInfo} The populated <code>AdAcoBodyMediaInfoImageInfo</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyMediaInfoImageInfo): AdAcoBodyMediaInfoImageInfo {
    const instance = obj || new AdAcoBodyMediaInfoImageInfo();
    
    if (data) {
      if (data.hasOwnProperty('file_name')) instance.file_name = data['file_name'];
      if (data.hasOwnProperty('web_uri')) instance.web_uri = data['web_uri'];
    }
    
    return instance;
  }
}

