/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {CreativeportfoliocreateAdvancedAudioInfo} from './CreativeportfoliocreateAdvancedAudioInfo';
import {CreativeportfoliocreateAdvancedGestureIcon} from './CreativeportfoliocreateAdvancedGestureIcon';
import {CreativeportfoliocreateBadgeImageInfo} from './CreativeportfoliocreateBadgeImageInfo';
import {CreativeportfoliocreateBadgePosition} from './CreativeportfoliocreateBadgePosition';
import {CreativeportfoliocreateStickerParam} from './CreativeportfoliocreateStickerParam';

/**
 * The CreativeportfoliocreatePortfolioContent model module.
 * @module model/CreativeportfoliocreatePortfolioContent
 * @version 0.1.4
 */
export class CreativeportfoliocreatePortfolioContent {
  ad_text?: string;
  advanced_audio_info?: CreativeportfoliocreateAdvancedAudioInfo;
  advanced_gesture_icon?: CreativeportfoliocreateAdvancedGestureIcon;
  advanced_gesture_image?: CreativeportfoliocreateAdvancedGestureIcon;
  advanced_interact_shape?: string;
  advanced_interact_type?: string;
  app_id?: string;
  asset_content?: string;
  asset_ids?: string[];
  badge_image_info?: CreativeportfoliocreateBadgeImageInfo;
  badge_position?: CreativeportfoliocreateBadgePosition;
  badge_show_time?: number;
  call_to_action?: string;
  call_to_action_text?: string;
  card_image_index?: number;
  card_show_price?: boolean;
  card_tags?: string[];
  card_type?: string;
  catalog_authorized_bc_id?: string;
  catalog_id?: string;
  category_label?: string;
  country_code?: string[];
  description?: string;
  dynamic_format?: string;
  identity_authorized_bc_id?: string;
  identity_id?: string;
  identity_type?: string;
  image_id?: string;
  item_group_ids?: string[];
  layouts?: string[];
  mobile_app_id?: string;
  product_set_id?: string;
  product_source?: string;
  product_specific_type?: string;
  profile_image?: string;
  sku_ids?: string[];
  sticker_param?: CreativeportfoliocreateStickerParam;
  store_authorized_bc_id?: string;
  store_id?: string;
  tags?: string[];
  vertical_video_strategy?: string;

  constructor() {
    // Empty constructor
  }

  /**
   * Constructs a CreativeportfoliocreatePortfolioContent from a plain JavaScript object.
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
   * @param {CreativeportfoliocreatePortfolioContent} [obj] Optional instance to populate.
   * @return {CreativeportfoliocreatePortfolioContent} The populated CreativeportfoliocreatePortfolioContent instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: CreativeportfoliocreatePortfolioContent): CreativeportfoliocreatePortfolioContent {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    obj = obj || new CreativeportfoliocreatePortfolioContent();

    if (data.hasOwnProperty('ad_text'))
      obj.ad_text = ApiClient.convertToType(data['ad_text'], 'String');
    if (data.hasOwnProperty('advanced_audio_info'))
      obj.advanced_audio_info = CreativeportfoliocreateAdvancedAudioInfo.constructFromObject(data['advanced_audio_info'], undefined);
    if (data.hasOwnProperty('advanced_gesture_icon'))
      obj.advanced_gesture_icon = CreativeportfoliocreateAdvancedGestureIcon.constructFromObject(data['advanced_gesture_icon'], undefined);
    if (data.hasOwnProperty('advanced_gesture_image'))
      obj.advanced_gesture_image = CreativeportfoliocreateAdvancedGestureIcon.constructFromObject(data['advanced_gesture_image'], undefined);
    if (data.hasOwnProperty('advanced_interact_shape'))
      obj.advanced_interact_shape = ApiClient.convertToType(data['advanced_interact_shape'], 'String');
    if (data.hasOwnProperty('advanced_interact_type'))
      obj.advanced_interact_type = ApiClient.convertToType(data['advanced_interact_type'], 'String');
    if (data.hasOwnProperty('app_id'))
      obj.app_id = ApiClient.convertToType(data['app_id'], 'String');
    if (data.hasOwnProperty('asset_content'))
      obj.asset_content = ApiClient.convertToType(data['asset_content'], 'String');
    if (data.hasOwnProperty('asset_ids'))
      obj.asset_ids = ApiClient.convertToType(data['asset_ids'], ['String']);
    if (data.hasOwnProperty('badge_image_info'))
      obj.badge_image_info = CreativeportfoliocreateBadgeImageInfo.constructFromObject(data['badge_image_info'], undefined);
    if (data.hasOwnProperty('badge_position'))
      obj.badge_position = CreativeportfoliocreateBadgePosition.constructFromObject(data['badge_position'], undefined);
    if (data.hasOwnProperty('badge_show_time'))
      obj.badge_show_time = ApiClient.convertToType(data['badge_show_time'], 'Number');
    if (data.hasOwnProperty('call_to_action'))
      obj.call_to_action = ApiClient.convertToType(data['call_to_action'], 'String');
    if (data.hasOwnProperty('call_to_action_text'))
      obj.call_to_action_text = ApiClient.convertToType(data['call_to_action_text'], 'String');
    if (data.hasOwnProperty('card_image_index'))
      obj.card_image_index = ApiClient.convertToType(data['card_image_index'], 'Number');
    if (data.hasOwnProperty('card_show_price'))
      obj.card_show_price = ApiClient.convertToType(data['card_show_price'], 'Boolean');
    if (data.hasOwnProperty('card_tags'))
      obj.card_tags = ApiClient.convertToType(data['card_tags'], ['String']);
    if (data.hasOwnProperty('card_type'))
      obj.card_type = ApiClient.convertToType(data['card_type'], 'String');
    if (data.hasOwnProperty('catalog_authorized_bc_id'))
      obj.catalog_authorized_bc_id = ApiClient.convertToType(data['catalog_authorized_bc_id'], 'String');
    if (data.hasOwnProperty('catalog_id'))
      obj.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
    if (data.hasOwnProperty('category_label'))
      obj.category_label = ApiClient.convertToType(data['category_label'], 'String');
    if (data.hasOwnProperty('country_code'))
      obj.country_code = ApiClient.convertToType(data['country_code'], ['String']);
    if (data.hasOwnProperty('description'))
      obj.description = ApiClient.convertToType(data['description'], 'String');
    if (data.hasOwnProperty('dynamic_format'))
      obj.dynamic_format = ApiClient.convertToType(data['dynamic_format'], 'String');
    if (data.hasOwnProperty('identity_authorized_bc_id'))
      obj.identity_authorized_bc_id = ApiClient.convertToType(data['identity_authorized_bc_id'], 'String');
    if (data.hasOwnProperty('identity_id'))
      obj.identity_id = ApiClient.convertToType(data['identity_id'], 'String');
    if (data.hasOwnProperty('identity_type'))
      obj.identity_type = ApiClient.convertToType(data['identity_type'], 'String');
    if (data.hasOwnProperty('image_id'))
      obj.image_id = ApiClient.convertToType(data['image_id'], 'String');
    if (data.hasOwnProperty('item_group_ids'))
      obj.item_group_ids = ApiClient.convertToType(data['item_group_ids'], ['String']);
    if (data.hasOwnProperty('layouts'))
      obj.layouts = ApiClient.convertToType(data['layouts'], ['String']);
    if (data.hasOwnProperty('mobile_app_id'))
      obj.mobile_app_id = ApiClient.convertToType(data['mobile_app_id'], 'String');
    if (data.hasOwnProperty('product_set_id'))
      obj.product_set_id = ApiClient.convertToType(data['product_set_id'], 'String');
    if (data.hasOwnProperty('product_source'))
      obj.product_source = ApiClient.convertToType(data['product_source'], 'String');
    if (data.hasOwnProperty('product_specific_type'))
      obj.product_specific_type = ApiClient.convertToType(data['product_specific_type'], 'String');
    if (data.hasOwnProperty('profile_image'))
      obj.profile_image = ApiClient.convertToType(data['profile_image'], 'String');
    if (data.hasOwnProperty('sku_ids'))
      obj.sku_ids = ApiClient.convertToType(data['sku_ids'], ['String']);
    if (data.hasOwnProperty('sticker_param'))
      obj.sticker_param = CreativeportfoliocreateStickerParam.constructFromObject(data['sticker_param'], undefined);
    if (data.hasOwnProperty('store_authorized_bc_id'))
      obj.store_authorized_bc_id = ApiClient.convertToType(data['store_authorized_bc_id'], 'String');
    if (data.hasOwnProperty('store_id'))
      obj.store_id = ApiClient.convertToType(data['store_id'], 'String');
    if (data.hasOwnProperty('tags'))
      obj.tags = ApiClient.convertToType(data['tags'], ['String']);
    if (data.hasOwnProperty('vertical_video_strategy'))
      obj.vertical_video_strategy = ApiClient.convertToType(data['vertical_video_strategy'], 'String');

    return obj;
  }
}

