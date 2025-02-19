/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {AdAcoBodyAvatarIconList} from './AdAcoBodyAvatarIconList';
import {AdAcoBodyCallToActionList} from './AdAcoBodyCallToActionList';
import {AdAcoBodyCardList} from './AdAcoBodyCardList';
import {AdAcoBodyCommonMaterial} from './AdAcoBodyCommonMaterial';
import {AdAcoBodyDeeplinkList} from './AdAcoBodyDeeplinkList';
import {AdAcoBodyDisplayNameList} from './AdAcoBodyDisplayNameList';
import {AdAcoBodyLandingPageUrls} from './AdAcoBodyLandingPageUrls';
import {AdAcoBodyMediaInfoList} from './AdAcoBodyMediaInfoList';
import {AdAcoBodyPageList} from './AdAcoBodyPageList';
import {AdAcoBodyTitleList} from './AdAcoBodyTitleList';

/**
 * The AdAcoUpdateBody model module.
 * @module model/AdAcoUpdateBody
 * @version 0.1.4
 */
export class AdAcoUpdateBody {
  /**
   * Ad group ID. The ID should be of the ad group that you will enable Automated Creative Optimization for, and `creative_material_mode` for the ad group must be set as `DYNAMIC`.
   */
  adgroup_id?: string;

  /**
   * Advertiser ID. 
   */
  advertiser_id: string;

  /**
   * Avatar image list.
   */
  avatar_icon_list?: AdAcoBodyAvatarIconList[];

  /**
   * Call-to-action list. For TikTok ads, either this field or `call_to_action_id` must be specified. If both are specified, this field will be ignored.
   */
  call_to_action_list?: AdAcoBodyCallToActionList[];

  /**
   * Card ID list. Length range- [0,1].
   */
  card_list?: AdAcoBodyCardList[];

  /**
   * Common material
   */
  common_material?: AdAcoBodyCommonMaterial;

  /**
   * List of open URLs. Length range- [0,1]
   */
  deeplink_list?: AdAcoBodyDeeplinkList[];

  /**
   * Display names.
   */
  display_name_list?: AdAcoBodyDisplayNameList[];

  /**
   * Multiple landing page URLs.
   */
  landing_page_urls?: AdAcoBodyLandingPageUrls[];

  /**
   * List of media information.
   */
  media_info_list?: AdAcoBodyMediaInfoList[];

  /**
   * Page ID list.
   */
  page_list?: AdAcoBodyPageList[];

  /**
   * List of ad titles (also called ad texts).
   */
  title_list?: AdAcoBodyTitleList[];

  /**
   * Constructs a new AdAcoUpdateBody.
   * @param advertiser_id Advertiser ID. 
   */
  constructor(advertiser_id: string) {
    this.advertiser_id = advertiser_id;
  }

  /**
   * Constructs a AdAcoUpdateBody from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from data to obj if supplied or a new instance if not.
   */
  static constructFromObject(data: any, obj?: AdAcoUpdateBody): AdAcoUpdateBody {
    if (!data) {
      throw new Error('Data must be provided to construct AdAcoUpdateBody');
    }
    
    obj = obj || new AdAcoUpdateBody(data['advertiser_id']);
    
    if (data.hasOwnProperty('adgroup_id'))
      obj.adgroup_id = ApiClient.convertToType(data['adgroup_id'], 'String');
    if (data.hasOwnProperty('avatar_icon_list'))
      obj.avatar_icon_list = ApiClient.convertToType(data['avatar_icon_list'], [AdAcoBodyAvatarIconList]);
    if (data.hasOwnProperty('call_to_action_list'))
      obj.call_to_action_list = ApiClient.convertToType(data['call_to_action_list'], [AdAcoBodyCallToActionList]);
    if (data.hasOwnProperty('card_list'))
      obj.card_list = ApiClient.convertToType(data['card_list'], [AdAcoBodyCardList]);
    if (data.hasOwnProperty('common_material'))
      obj.common_material = AdAcoBodyCommonMaterial.constructFromObject(data['common_material']);
    if (data.hasOwnProperty('deeplink_list'))
      obj.deeplink_list = ApiClient.convertToType(data['deeplink_list'], [AdAcoBodyDeeplinkList]);
    if (data.hasOwnProperty('display_name_list'))
      obj.display_name_list = ApiClient.convertToType(data['display_name_list'], [AdAcoBodyDisplayNameList]);
    if (data.hasOwnProperty('landing_page_urls'))
      obj.landing_page_urls = ApiClient.convertToType(data['landing_page_urls'], [AdAcoBodyLandingPageUrls]);
    if (data.hasOwnProperty('media_info_list'))
      obj.media_info_list = ApiClient.convertToType(data['media_info_list'], [AdAcoBodyMediaInfoList]);
    if (data.hasOwnProperty('page_list'))
      obj.page_list = ApiClient.convertToType(data['page_list'], [AdAcoBodyPageList]);
    if (data.hasOwnProperty('title_list'))
      obj.title_list = ApiClient.convertToType(data['title_list'], [AdAcoBodyTitleList]);

    return obj;
  }
}

