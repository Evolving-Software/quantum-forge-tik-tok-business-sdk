/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {AdcreateDisclaimerClickableTexts} from './AdcreateDisclaimerClickableTexts';
import {AdcreateDisclaimerText} from './AdcreateDisclaimerText';

/**
 * The AdupdateCreatives model module.
 * @module model/AdupdateCreatives
 * @version 0.1.4
 */
export class AdupdateCreatives {
  ad_format?: string;
  ad_id?: string;
  ad_name?: string;
  ad_text?: string;
  app_name?: string;
  avatar_icon_web_uri?: string;
  brand_safety_postbid_partner?: string;
  brand_safety_vast_url?: string;
  call_to_action?: string;
  call_to_action_id?: string;
  card_id?: string;
  card_image_id?: string;
  card_image_index?: number;
  card_show_price?: boolean;
  card_tags?: string[];
  card_type?: string;
  catalog_id?: string;
  click_tracking_url?: string;
  creative_authorized?: boolean;
  creative_type?: string;
  dark_post_status?: string;
  deeplink?: string;
  deeplink_type?: string;
  disclaimer_clickable_texts?: AdcreateDisclaimerClickableTexts[];
  disclaimer_text?: AdcreateDisclaimerText;
  disclaimer_type?: string;
  display_name?: string;
  dynamic_destination?: string;
  dynamic_format?: string;
  fallback_type?: string;
  identity_authorized_bc_id?: string;
  identity_id?: string;
  identity_type?: string;
  image_ids?: string[];
  impression_tracking_url?: string;
  instant_product_page_used?: boolean;
  interactive_motion_id?: string;
  item_duet_status?: string;
  item_group_ids?: string[];
  item_stitch_status?: string;
  landing_page_url?: string;
  operation_status?: string;
  page_id?: number;
  page_image_index?: number;
  playable_url?: string;
  product_set_id?: string;
  product_specific_type?: string;
  promotional_music_disabled?: boolean;
  shopping_ads_deeplink_type?: string;
  shopping_ads_fallback_type?: string;
  shopping_ads_video_package_id?: string;
  sku_ids?: string[];
  tiktok_item_id?: string;
  tracking_pixel_id?: number;
  vast_moat_enabled?: boolean;
  vertical_video_strategy?: string;
  video_id?: string;
  video_view_tracking_url?: string;
  viewability_postbid_partner?: string;
  viewability_vast_url?: string;

  /**
   * Constructs a new <code>AdupdateCreatives</code>.
   * @alias module:model/AdupdateCreatives
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdupdateCreatives</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdupdateCreatives} obj Optional instance to populate.
   * @return {module:model/AdupdateCreatives} The populated <code>AdupdateCreatives</code> instance.
   */
  static constructFromObject(data: any, obj?: AdupdateCreatives): AdupdateCreatives {
    const result = obj || new AdupdateCreatives();

    if (data) {
      if (data.hasOwnProperty('ad_format'))
        result.ad_format = ApiClient.convertToType(data['ad_format'], 'String');
      if (data.hasOwnProperty('ad_id'))
        result.ad_id = ApiClient.convertToType(data['ad_id'], 'String');
      if (data.hasOwnProperty('ad_name'))
        result.ad_name = ApiClient.convertToType(data['ad_name'], 'String');
      if (data.hasOwnProperty('ad_text'))
        result.ad_text = ApiClient.convertToType(data['ad_text'], 'String');
      if (data.hasOwnProperty('app_name'))
        result.app_name = ApiClient.convertToType(data['app_name'], 'String');
      if (data.hasOwnProperty('avatar_icon_web_uri'))
        result.avatar_icon_web_uri = ApiClient.convertToType(data['avatar_icon_web_uri'], 'String');
      if (data.hasOwnProperty('brand_safety_postbid_partner'))
        result.brand_safety_postbid_partner = ApiClient.convertToType(data['brand_safety_postbid_partner'], 'String');
      if (data.hasOwnProperty('brand_safety_vast_url'))
        result.brand_safety_vast_url = ApiClient.convertToType(data['brand_safety_vast_url'], 'String');
      if (data.hasOwnProperty('call_to_action'))
        result.call_to_action = ApiClient.convertToType(data['call_to_action'], 'String');
      if (data.hasOwnProperty('call_to_action_id'))
        result.call_to_action_id = ApiClient.convertToType(data['call_to_action_id'], 'String');
      if (data.hasOwnProperty('card_id'))
        result.card_id = ApiClient.convertToType(data['card_id'], 'String');
      if (data.hasOwnProperty('card_image_id'))
        result.card_image_id = ApiClient.convertToType(data['card_image_id'], 'String');
      if (data.hasOwnProperty('card_image_index'))
        result.card_image_index = ApiClient.convertToType(data['card_image_index'], 'Number');
      if (data.hasOwnProperty('card_show_price'))
        result.card_show_price = ApiClient.convertToType(data['card_show_price'], 'Boolean');
      if (data.hasOwnProperty('card_tags'))
        result.card_tags = ApiClient.convertToType(data['card_tags'], ['String']);
      if (data.hasOwnProperty('card_type'))
        result.card_type = ApiClient.convertToType(data['card_type'], 'String');
      if (data.hasOwnProperty('catalog_id'))
        result.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
      if (data.hasOwnProperty('click_tracking_url'))
        result.click_tracking_url = ApiClient.convertToType(data['click_tracking_url'], 'String');
      if (data.hasOwnProperty('creative_authorized'))
        result.creative_authorized = ApiClient.convertToType(data['creative_authorized'], 'Boolean');
      if (data.hasOwnProperty('creative_type'))
        result.creative_type = ApiClient.convertToType(data['creative_type'], 'String');
      if (data.hasOwnProperty('dark_post_status'))
        result.dark_post_status = ApiClient.convertToType(data['dark_post_status'], 'String');
      if (data.hasOwnProperty('deeplink'))
        result.deeplink = ApiClient.convertToType(data['deeplink'], 'String');
      if (data.hasOwnProperty('deeplink_type'))
        result.deeplink_type = ApiClient.convertToType(data['deeplink_type'], 'String');
      if (data.hasOwnProperty('disclaimer_clickable_texts'))
        result.disclaimer_clickable_texts = ApiClient.convertToType(data['disclaimer_clickable_texts'], [AdcreateDisclaimerClickableTexts]);
      if (data.hasOwnProperty('disclaimer_text'))
        result.disclaimer_text = AdcreateDisclaimerText.constructFromObject(data['disclaimer_text'], undefined);
      if (data.hasOwnProperty('disclaimer_type'))
        result.disclaimer_type = ApiClient.convertToType(data['disclaimer_type'], 'String');
      if (data.hasOwnProperty('display_name'))
        result.display_name = ApiClient.convertToType(data['display_name'], 'String');
      if (data.hasOwnProperty('dynamic_destination'))
        result.dynamic_destination = ApiClient.convertToType(data['dynamic_destination'], 'String');
      if (data.hasOwnProperty('dynamic_format'))
        result.dynamic_format = ApiClient.convertToType(data['dynamic_format'], 'String');
      if (data.hasOwnProperty('fallback_type'))
        result.fallback_type = ApiClient.convertToType(data['fallback_type'], 'String');
      if (data.hasOwnProperty('identity_authorized_bc_id'))
        result.identity_authorized_bc_id = ApiClient.convertToType(data['identity_authorized_bc_id'], 'String');
      if (data.hasOwnProperty('identity_id'))
        result.identity_id = ApiClient.convertToType(data['identity_id'], 'String');
      if (data.hasOwnProperty('identity_type'))
        result.identity_type = ApiClient.convertToType(data['identity_type'], 'String');
      if (data.hasOwnProperty('image_ids'))
        result.image_ids = ApiClient.convertToType(data['image_ids'], ['String']);
      if (data.hasOwnProperty('impression_tracking_url'))
        result.impression_tracking_url = ApiClient.convertToType(data['impression_tracking_url'], 'String');
      if (data.hasOwnProperty('instant_product_page_used'))
        result.instant_product_page_used = ApiClient.convertToType(data['instant_product_page_used'], 'Boolean');
      if (data.hasOwnProperty('interactive_motion_id'))
        result.interactive_motion_id = ApiClient.convertToType(data['interactive_motion_id'], 'String');
      if (data.hasOwnProperty('item_duet_status'))
        result.item_duet_status = ApiClient.convertToType(data['item_duet_status'], 'String');
      if (data.hasOwnProperty('item_group_ids'))
        result.item_group_ids = ApiClient.convertToType(data['item_group_ids'], ['String']);
      if (data.hasOwnProperty('item_stitch_status'))
        result.item_stitch_status = ApiClient.convertToType(data['item_stitch_status'], 'String');
      if (data.hasOwnProperty('landing_page_url'))
        result.landing_page_url = ApiClient.convertToType(data['landing_page_url'], 'String');
      if (data.hasOwnProperty('operation_status'))
        result.operation_status = ApiClient.convertToType(data['operation_status'], 'String');
      if (data.hasOwnProperty('page_id'))
        result.page_id = ApiClient.convertToType(data['page_id'], 'Number');
      if (data.hasOwnProperty('page_image_index'))
        result.page_image_index = ApiClient.convertToType(data['page_image_index'], 'Number');
      if (data.hasOwnProperty('playable_url'))
        result.playable_url = ApiClient.convertToType(data['playable_url'], 'String');
      if (data.hasOwnProperty('product_set_id'))
        result.product_set_id = ApiClient.convertToType(data['product_set_id'], 'String');
      if (data.hasOwnProperty('product_specific_type'))
        result.product_specific_type = ApiClient.convertToType(data['product_specific_type'], 'String');
      if (data.hasOwnProperty('promotional_music_disabled'))
        result.promotional_music_disabled = ApiClient.convertToType(data['promotional_music_disabled'], 'Boolean');
      if (data.hasOwnProperty('shopping_ads_deeplink_type'))
        result.shopping_ads_deeplink_type = ApiClient.convertToType(data['shopping_ads_deeplink_type'], 'String');
      if (data.hasOwnProperty('shopping_ads_fallback_type'))
        result.shopping_ads_fallback_type = ApiClient.convertToType(data['shopping_ads_fallback_type'], 'String');
      if (data.hasOwnProperty('shopping_ads_video_package_id'))
        result.shopping_ads_video_package_id = ApiClient.convertToType(data['shopping_ads_video_package_id'], 'String');
      if (data.hasOwnProperty('sku_ids'))
        result.sku_ids = ApiClient.convertToType(data['sku_ids'], ['String']);
      if (data.hasOwnProperty('tiktok_item_id'))
        result.tiktok_item_id = ApiClient.convertToType(data['tiktok_item_id'], 'String');
      if (data.hasOwnProperty('tracking_pixel_id'))
        result.tracking_pixel_id = ApiClient.convertToType(data['tracking_pixel_id'], 'Number');
      if (data.hasOwnProperty('vast_moat_enabled'))
        result.vast_moat_enabled = ApiClient.convertToType(data['vast_moat_enabled'], 'Boolean');
      if (data.hasOwnProperty('vertical_video_strategy'))
        result.vertical_video_strategy = ApiClient.convertToType(data['vertical_video_strategy'], 'String');
      if (data.hasOwnProperty('video_id'))
        result.video_id = ApiClient.convertToType(data['video_id'], 'String');
      if (data.hasOwnProperty('video_view_tracking_url'))
        result.video_view_tracking_url = ApiClient.convertToType(data['video_view_tracking_url'], 'String');
      if (data.hasOwnProperty('viewability_postbid_partner'))
        result.viewability_postbid_partner = ApiClient.convertToType(data['viewability_postbid_partner'], 'String');
      if (data.hasOwnProperty('viewability_vast_url'))
        result.viewability_vast_url = ApiClient.convertToType(data['viewability_vast_url'], 'String');
    }
    return result;
  }
}

