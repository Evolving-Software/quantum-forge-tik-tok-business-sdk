/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The AdAcoBodyMediaInfoVideoInfo model module.
 * @module model/AdAcoBodyMediaInfoVideoInfo
 * @version 0.1.4
 */
export class AdAcoBodyMediaInfoVideoInfo {
  /**
   * Video file name
   */
  file_name?: string | undefined;

  /**
   * Video ID
   */
  video_id?: string | undefined;

  /**
   * Constructs a new <code>AdAcoBodyMediaInfoVideoInfo</code>.
   * @alias module:model/AdAcoBodyMediaInfoVideoInfo
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyMediaInfoVideoInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyMediaInfoVideoInfo} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyMediaInfoVideoInfo} The populated <code>AdAcoBodyMediaInfoVideoInfo</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyMediaInfoVideoInfo): AdAcoBodyMediaInfoVideoInfo {
    const instance = obj || new AdAcoBodyMediaInfoVideoInfo();
    
    if (data) {
      if (data.hasOwnProperty('file_name')) instance.file_name = data['file_name'];
      if (data.hasOwnProperty('video_id')) instance.video_id = data['video_id'];
    }
    
    return instance;
  }
}

