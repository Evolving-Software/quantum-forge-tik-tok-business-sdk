/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import {AdAcoBodyMediaInfoImageInfo} from './AdAcoBodyMediaInfoImageInfo';
import {AdAcoBodyMediaInfoVideoInfo} from './AdAcoBodyMediaInfoVideoInfo';

/**
 * The AdAcoBodyMediaInfo model module.
 * Material information.
 * @module model/AdAcoBodyMediaInfo
 * @version 0.1.4
 */
export class AdAcoBodyMediaInfo {
  /**
   * Identity ID. Required when you are not using Spark Ads (`tiktok_item_id`).
   */
  identity_id?: string | undefined;

  /**
   * Identity type. Required when you are not using Spark Ads (`tiktok_item_id`). The only supported value is `CUSTOMIZED_USER`.
   */
  identity_type?: string | undefined;

  /**
   * Image information. When you want to upload image materials (`video_info` is NOT included in the request), 
   * this field will be used as image materials. When you want to upload video materials (`video_info` is included in the request), 
   * this field will be used as the video cover. Only 1 picture can be submitted in each `image_info` object.
   */
  image_info?: AdAcoBodyMediaInfoImageInfo[] | undefined;

  /**
   * The ID of the TikTok post to be used as an ad (Spark Ad).
   */
  tiktok_item_id?: string | undefined;

  /**
   * Video information
   */
  video_info?: AdAcoBodyMediaInfoVideoInfo | undefined;

  /**
   * Constructs a new <code>AdAcoBodyMediaInfo</code>.
   * @alias module:model/AdAcoBodyMediaInfo
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyMediaInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyMediaInfo} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyMediaInfo} The populated <code>AdAcoBodyMediaInfo</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyMediaInfo): AdAcoBodyMediaInfo {
    const instance = obj || new AdAcoBodyMediaInfo();
    
    if (data) {
      if (data.hasOwnProperty('identity_id')) instance.identity_id = data['identity_id'];
      if (data.hasOwnProperty('identity_type')) instance.identity_type = data['identity_type'];
      if (data.hasOwnProperty('image_info')) {
        instance.image_info = data['image_info'].map((item: any) => 
          AdAcoBodyMediaInfoImageInfo.constructFromObject(item, undefined)
        );
      }
      if (data.hasOwnProperty('tiktok_item_id')) instance.tiktok_item_id = data['tiktok_item_id'];
      if (data.hasOwnProperty('video_info')) {
        instance.video_info = AdAcoBodyMediaInfoVideoInfo.constructFromObject(data['video_info'], undefined);
      }
    }
    
    return instance;
  }
}

