/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {AdgroupcreateActions} from './AdgroupcreateActions';
import {AdgroupcreateAudienceRule} from './AdgroupcreateAudienceRule';
import {AdgroupcreateExcludedCustomActions} from './AdgroupcreateExcludedCustomActions';
import {AdgroupcreateIncludedCustomActions} from './AdgroupcreateIncludedCustomActions';
import {AdgroupcreateTargetingExpansion} from './AdgroupcreateTargetingExpansion';

/**
 * The AdgroupUpdateBody model module.
 * @module model/AdgroupUpdateBody
 * @version 0.1.4
 */
export class AdgroupUpdateBody {
  actions?: AdgroupcreateActions[];
  adgroup_id: string;
  adgroup_name?: string;
  advertiser_id: string;
  age_groups?: string[];
  app_download_url?: string;
  app_id?: string;
  audience_ids?: string[];
  audience_rule?: AdgroupcreateAudienceRule;
  audience_type?: string;
  auto_targeting_enabled?: boolean;
  bid_price?: number;
  bid_type?: string;
  billing_event?: string;
  blocked_pangle_app_ids?: string[];
  brand_safety_type?: string;
  budget?: number;
  carrier_ids?: string[];
  catalog_authorized_bc_id?: string;
  comment_disabled?: string;
  contextual_tag_ids?: string[];
  conversion_bid_price?: number;
  conversion_id?: number;
  creative_material_mode?: string;
  dayparting?: string;
  deep_bid_type?: string;
  deep_cpa_bid?: number;
  device_model_ids?: string[];
  device_price_ranges?: number[];
  excluded_audience_ids?: string[];
  excluded_custom_actions?: AdgroupcreateExcludedCustomActions;
  excluded_pangle_audience_package_ids?: string[];
  frequency?: number;
  frequency_schedule?: number;
  gender?: string;
  household_income?: string[];
  identity_authorized_bc_id?: string;
  identity_id?: string;
  identity_type?: string;
  included_custom_actions?: AdgroupcreateIncludedCustomActions;
  included_pangle_audience_package_ids?: string[];
  interest_category_ids?: string[];
  interest_keyword_ids?: string[];
  interest_keywords?: string[];
  ios14_targeting?: string;
  is_hfss?: boolean;
  languages?: string[];
  location_ids?: string[];
  min_android_version?: string;
  min_ios_version?: string;
  network_types?: string[];
  next_day_retention?: number;
  operating_systems?: string[];
  pacing?: string;
  purchase_intention_keyword_ids?: string[];
  roas_bid?: number;
  schedule_end_time?: string;
  schedule_start_time?: string;
  schedule_type?: string;
  secondary_optimization_event?: string;
  shopping_ads_retargeting_actions_days?: number;
  shopping_ads_retargeting_type?: string;
  spending_power?: string;
  targeting_expansion?: AdgroupcreateTargetingExpansion;

  /**
   * Constructs a new <code>AdgroupUpdateBody</code>.
   * @param adgroup_id Ad group ID
   * @param advertiser_id Advertiser ID
   */
  constructor(adgroup_id: string, advertiser_id: string) {
    this.adgroup_id = adgroup_id;
    this.advertiser_id = advertiser_id;
  }

  /**
   * Constructs a <code>AdgroupUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * @param data The plain JavaScript object bearing properties of interest.
   * @param obj Optional instance to populate.
   * @return The populated <code>AdgroupUpdateBody</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdgroupUpdateBody): AdgroupUpdateBody {
    if (!data) {
      throw new Error('Data parameter is required');
    }

    obj = obj || new AdgroupUpdateBody(
      ApiClient.convertToType(data['adgroup_id'], 'String'),
      ApiClient.convertToType(data['advertiser_id'], 'String')
    );

    if (data.hasOwnProperty('actions'))
      obj.actions = ApiClient.convertToType(data['actions'], [AdgroupcreateActions]);
    if (data.hasOwnProperty('adgroup_name'))
      obj.adgroup_name = ApiClient.convertToType(data['adgroup_name'], 'String');
    if (data.hasOwnProperty('age_groups'))
      obj.age_groups = ApiClient.convertToType(data['age_groups'], ['String']);
    if (data.hasOwnProperty('app_download_url'))
      obj.app_download_url = ApiClient.convertToType(data['app_download_url'], 'String');
    if (data.hasOwnProperty('app_id'))
      obj.app_id = ApiClient.convertToType(data['app_id'], 'String');
    if (data.hasOwnProperty('audience_ids'))
      obj.audience_ids = ApiClient.convertToType(data['audience_ids'], ['String']);
    if (data.hasOwnProperty('audience_rule'))
      obj.audience_rule = AdgroupcreateAudienceRule.constructFromObject(data['audience_rule'], undefined);
    if (data.hasOwnProperty('audience_type'))
      obj.audience_type = ApiClient.convertToType(data['audience_type'], 'String');
    if (data.hasOwnProperty('auto_targeting_enabled'))
      obj.auto_targeting_enabled = ApiClient.convertToType(data['auto_targeting_enabled'], 'Boolean');
    if (data.hasOwnProperty('bid_price'))
      obj.bid_price = ApiClient.convertToType(data['bid_price'], 'Number');
    if (data.hasOwnProperty('bid_type'))
      obj.bid_type = ApiClient.convertToType(data['bid_type'], 'String');
    if (data.hasOwnProperty('billing_event'))
      obj.billing_event = ApiClient.convertToType(data['billing_event'], 'String');
    if (data.hasOwnProperty('blocked_pangle_app_ids'))
      obj.blocked_pangle_app_ids = ApiClient.convertToType(data['blocked_pangle_app_ids'], ['String']);
    if (data.hasOwnProperty('brand_safety_type'))
      obj.brand_safety_type = ApiClient.convertToType(data['brand_safety_type'], 'String');
    if (data.hasOwnProperty('budget'))
      obj.budget = ApiClient.convertToType(data['budget'], 'Number');
    if (data.hasOwnProperty('carrier_ids'))
      obj.carrier_ids = ApiClient.convertToType(data['carrier_ids'], ['String']);
    if (data.hasOwnProperty('catalog_authorized_bc_id'))
      obj.catalog_authorized_bc_id = ApiClient.convertToType(data['catalog_authorized_bc_id'], 'String');
    if (data.hasOwnProperty('comment_disabled'))
      obj.comment_disabled = ApiClient.convertToType(data['comment_disabled'], 'String');
    if (data.hasOwnProperty('contextual_tag_ids'))
      obj.contextual_tag_ids = ApiClient.convertToType(data['contextual_tag_ids'], ['String']);
    if (data.hasOwnProperty('conversion_bid_price'))
      obj.conversion_bid_price = ApiClient.convertToType(data['conversion_bid_price'], 'Number');
    if (data.hasOwnProperty('conversion_id'))
      obj.conversion_id = ApiClient.convertToType(data['conversion_id'], 'Number');
    if (data.hasOwnProperty('creative_material_mode'))
      obj.creative_material_mode = ApiClient.convertToType(data['creative_material_mode'], 'String');
    if (data.hasOwnProperty('dayparting'))
      obj.dayparting = ApiClient.convertToType(data['dayparting'], 'String');
    if (data.hasOwnProperty('deep_bid_type'))
      obj.deep_bid_type = ApiClient.convertToType(data['deep_bid_type'], 'String');
    if (data.hasOwnProperty('deep_cpa_bid'))
      obj.deep_cpa_bid = ApiClient.convertToType(data['deep_cpa_bid'], 'Number');
    if (data.hasOwnProperty('device_model_ids'))
      obj.device_model_ids = ApiClient.convertToType(data['device_model_ids'], ['String']);
    if (data.hasOwnProperty('device_price_ranges'))
      obj.device_price_ranges = ApiClient.convertToType(data['device_price_ranges'], ['Number']);
    if (data.hasOwnProperty('excluded_audience_ids'))
      obj.excluded_audience_ids = ApiClient.convertToType(data['excluded_audience_ids'], ['String']);
    if (data.hasOwnProperty('excluded_custom_actions'))
      obj.excluded_custom_actions = AdgroupcreateExcludedCustomActions.constructFromObject(data['excluded_custom_actions'], undefined);
    if (data.hasOwnProperty('excluded_pangle_audience_package_ids'))
      obj.excluded_pangle_audience_package_ids = ApiClient.convertToType(data['excluded_pangle_audience_package_ids'], ['String']);
    if (data.hasOwnProperty('frequency'))
      obj.frequency = ApiClient.convertToType(data['frequency'], 'Number');
    if (data.hasOwnProperty('frequency_schedule'))
      obj.frequency_schedule = ApiClient.convertToType(data['frequency_schedule'], 'Number');
    if (data.hasOwnProperty('gender'))
      obj.gender = ApiClient.convertToType(data['gender'], 'String');
    if (data.hasOwnProperty('household_income'))
      obj.household_income = ApiClient.convertToType(data['household_income'], ['String']);
    if (data.hasOwnProperty('identity_authorized_bc_id'))
      obj.identity_authorized_bc_id = ApiClient.convertToType(data['identity_authorized_bc_id'], 'String');
    if (data.hasOwnProperty('identity_id'))
      obj.identity_id = ApiClient.convertToType(data['identity_id'], 'String');
    if (data.hasOwnProperty('identity_type'))
      obj.identity_type = ApiClient.convertToType(data['identity_type'], 'String');
    if (data.hasOwnProperty('included_custom_actions'))
      obj.included_custom_actions = AdgroupcreateIncludedCustomActions.constructFromObject(data['included_custom_actions'], undefined);
    if (data.hasOwnProperty('included_pangle_audience_package_ids'))
      obj.included_pangle_audience_package_ids = ApiClient.convertToType(data['included_pangle_audience_package_ids'], ['String']);
    if (data.hasOwnProperty('interest_category_ids'))
      obj.interest_category_ids = ApiClient.convertToType(data['interest_category_ids'], ['String']);
    if (data.hasOwnProperty('interest_keyword_ids'))
      obj.interest_keyword_ids = ApiClient.convertToType(data['interest_keyword_ids'], ['String']);
    if (data.hasOwnProperty('interest_keywords'))
      obj.interest_keywords = ApiClient.convertToType(data['interest_keywords'], ['String']);
    if (data.hasOwnProperty('ios14_targeting'))
      obj.ios14_targeting = ApiClient.convertToType(data['ios14_targeting'], 'String');
    if (data.hasOwnProperty('is_hfss'))
      obj.is_hfss = ApiClient.convertToType(data['is_hfss'], 'Boolean');
    if (data.hasOwnProperty('languages'))
      obj.languages = ApiClient.convertToType(data['languages'], ['String']);
    if (data.hasOwnProperty('location_ids'))
      obj.location_ids = ApiClient.convertToType(data['location_ids'], ['String']);
    if (data.hasOwnProperty('min_android_version'))
      obj.min_android_version = ApiClient.convertToType(data['min_android_version'], 'String');
    if (data.hasOwnProperty('min_ios_version'))
      obj.min_ios_version = ApiClient.convertToType(data['min_ios_version'], 'String');
    if (data.hasOwnProperty('network_types'))
      obj.network_types = ApiClient.convertToType(data['network_types'], ['String']);
    if (data.hasOwnProperty('next_day_retention'))
      obj.next_day_retention = ApiClient.convertToType(data['next_day_retention'], 'Number');
    if (data.hasOwnProperty('operating_systems'))
      obj.operating_systems = ApiClient.convertToType(data['operating_systems'], ['String']);
    if (data.hasOwnProperty('pacing'))
      obj.pacing = ApiClient.convertToType(data['pacing'], 'String');
    if (data.hasOwnProperty('purchase_intention_keyword_ids'))
      obj.purchase_intention_keyword_ids = ApiClient.convertToType(data['purchase_intention_keyword_ids'], ['String']);
    if (data.hasOwnProperty('roas_bid'))
      obj.roas_bid = ApiClient.convertToType(data['roas_bid'], 'Number');
    if (data.hasOwnProperty('schedule_end_time'))
      obj.schedule_end_time = ApiClient.convertToType(data['schedule_end_time'], 'String');
    if (data.hasOwnProperty('schedule_start_time'))
      obj.schedule_start_time = ApiClient.convertToType(data['schedule_start_time'], 'String');
    if (data.hasOwnProperty('schedule_type'))
      obj.schedule_type = ApiClient.convertToType(data['schedule_type'], 'String');
    if (data.hasOwnProperty('secondary_optimization_event'))
      obj.secondary_optimization_event = ApiClient.convertToType(data['secondary_optimization_event'], 'String');
    if (data.hasOwnProperty('shopping_ads_retargeting_actions_days'))
      obj.shopping_ads_retargeting_actions_days = ApiClient.convertToType(data['shopping_ads_retargeting_actions_days'], 'Number');
    if (data.hasOwnProperty('shopping_ads_retargeting_type'))
      obj.shopping_ads_retargeting_type = ApiClient.convertToType(data['shopping_ads_retargeting_type'], 'String');
    if (data.hasOwnProperty('spending_power'))
      obj.spending_power = ApiClient.convertToType(data['spending_power'], 'String');
    if (data.hasOwnProperty('targeting_expansion'))
      obj.targeting_expansion = AdgroupcreateTargetingExpansion.constructFromObject(data['targeting_expansion'], undefined);

    return obj;
  }
}

