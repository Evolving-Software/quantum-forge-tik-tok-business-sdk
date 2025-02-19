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
 * The AdAcoBody model module.
 * @module model/AdAcoBody
 * @version 0.1.4
 */
export class AdAcoBody {
  adgroup_id?: string;
  advertiser_id: string;
  avatar_icon_list?: AdAcoBodyAvatarIconList[];
  call_to_action_list?: AdAcoBodyCallToActionList[];
  card_list?: AdAcoBodyCardList[];
  common_material?: AdAcoBodyCommonMaterial;
  deeplink_list?: AdAcoBodyDeeplinkList[];
  display_name_list?: AdAcoBodyDisplayNameList[];
  landing_page_urls?: AdAcoBodyLandingPageUrls[];
  media_info_list?: AdAcoBodyMediaInfoList[];
  page_list?: AdAcoBodyPageList[];
  title_list?: AdAcoBodyTitleList[];

  /**
   * Constructs a new <code>AdAcoBody</code>.
   * @param advertiser_id Advertiser ID. 
   */
  constructor(advertiser_id: string) {
    this.advertiser_id = advertiser_id;
  }

  /**
   * Constructs a <code>AdAcoBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param data The plain JavaScript object bearing properties of interest.
   * @param obj Optional instance to populate.
   * @return The populated <code>AdAcoBody</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBody): AdAcoBody {
    if (!data) {
      throw new Error('Data object cannot be null');
    }
    
    obj = obj || new AdAcoBody(data['advertiser_id']);

    if (data.hasOwnProperty('adgroup_id'))
      obj.adgroup_id = ApiClient.convertToType(data['adgroup_id'], 'String');
    if (data.hasOwnProperty('advertiser_id'))
      obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('avatar_icon_list'))
      obj.avatar_icon_list = ApiClient.convertToType(data['avatar_icon_list'], [AdAcoBodyAvatarIconList]);
    if (data.hasOwnProperty('call_to_action_list'))
      obj.call_to_action_list = ApiClient.convertToType(data['call_to_action_list'], [AdAcoBodyCallToActionList]);
    if (data.hasOwnProperty('card_list'))
      obj.card_list = ApiClient.convertToType(data['card_list'], [AdAcoBodyCardList]);
    if (data.hasOwnProperty('common_material'))
      obj.common_material = AdAcoBodyCommonMaterial.constructFromObject(data['common_material'], undefined);
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

