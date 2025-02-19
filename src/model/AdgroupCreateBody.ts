/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { AdgroupcreateActions } from './AdgroupcreateActions';
import { AdgroupcreateAudienceRule } from './AdgroupcreateAudienceRule';
import { AdgroupcreateExcludedCustomActions } from './AdgroupcreateExcludedCustomActions';
import { AdgroupcreateIncludedCustomActions } from './AdgroupcreateIncludedCustomActions';
import { AdgroupcreateTargetingExpansion } from './AdgroupcreateTargetingExpansion';

/**
 * The AdgroupCreateBody model module.
 * @module model/AdgroupCreateBody
 * @version 0.1.4
 */
export class AdgroupCreateBody {
    [key: string]: any;  // Index signature for dynamic properties

    adgroup_name: string;
    advertiser_id: string;
    billing_event: string;
    campaign_id: string;
    location_ids: Array<string>;
    schedule_start_time: string;
    schedule_type: string;

    // Optional properties
    actions?: AdgroupcreateActions;
    adgroup_app_profile_page_state?: string;
    age_groups?: Array<string>;
    app_id?: string;
    audience_ids?: Array<string>;
    audience_rule?: AdgroupcreateAudienceRule;
    audience_type?: string;
    auto_targeting_enabled?: boolean;
    bid_display_mode?: string;
    bid_price?: number;
    bid_type?: string;
    blocked_pangle_app_ids?: Array<string>;
    brand_safety_partner?: string;
    brand_safety_type?: string;
    budget?: number;
    budget_mode?: string;
    budget_optmize_on?: boolean;
    carrier_ids?: Array<string>;
    catalog_authorized_bc_id?: string;
    catalog_id?: string;
    comment_disabled?: boolean;
    contextual_tag_ids?: Array<string>;
    conversion_bid_price?: number;
    conversion_id?: string;
    creative_material_mode?: string;
    dayparting?: string;
    deep_bid_type?: string;
    deep_cpa_bid?: number;
    device_model_ids?: Array<string>;
    device_price_ranges?: Array<string>;
    excluded_audience_ids?: Array<string>;
    excluded_custom_actions?: AdgroupcreateExcludedCustomActions;
    excluded_pangle_audience_package_ids?: Array<string>;
    frequency?: number;
    frequency_schedule?: number;
    gender?: string;
    household_income?: Array<string>;
    identity_authorized_bc_id?: string;
    identity_id?: string;
    identity_type?: string;
    included_custom_actions?: AdgroupcreateIncludedCustomActions;
    included_pangle_audience_package_ids?: Array<string>;
    interest_category_ids?: Array<string>;
    interest_keyword_ids?: Array<string>;
    interest_keywords?: Array<string>;
    ios14_targeting?: string;
    is_hfss?: boolean;
    languages?: Array<string>;
    min_android_version?: string;
    min_ios_version?: string;
    network_types?: Array<string>;
    next_day_retention?: number;
    operating_systems?: Array<string>;
    operation_status?: string;
    optimization_event?: string;
    optimization_goal?: string;
    pacing?: string;
    pixel_id?: string;
    placement_type?: string;
    placements?: Array<string>;
    product_set_id?: string;
    product_source?: string;
    promotion_type?: string;
    promotion_website_type?: string;
    purchase_intention_keyword_ids?: Array<string>;
    request_id?: string;
    roas_bid?: number;
    schedule_end_time?: string;
    secondary_optimization_event?: string;
    shopping_ads_retargeting_actions_days?: number;
    shopping_ads_retargeting_type?: string;
    shopping_ads_type?: string;
    skip_learning_phase?: boolean;
    spending_power?: Array<string>;
    statistic_type?: string;
    store_authorized_bc_id?: string;
    store_id?: string;
    targeting_expansion?: AdgroupcreateTargetingExpansion;
    video_download_disabled?: boolean;

    /**
     * Constructs a new <code>AdgroupCreateBody</code>.
     * @param adgroup_name {String} 
     * @param advertiser_id {String} 
     * @param billing_event {String} 
     * @param campaign_id {String} 
     * @param location_ids {Array<String>} 
     * @param schedule_start_time {String} 
     * @param schedule_type {String} 
     */
    constructor(adgroup_name: string, advertiser_id: string, billing_event: string, campaign_id: string, location_ids: Array<string>, schedule_start_time: string, schedule_type: string) {
        this.adgroup_name = adgroup_name;
        this.advertiser_id = advertiser_id;
        this.billing_event = billing_event;
        this.campaign_id = campaign_id;
        this.location_ids = location_ids;
        this.schedule_start_time = schedule_start_time;
        this.schedule_type = schedule_type;
    }

    /**
     * Constructs a <code>AdgroupCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdgroupCreateBody} obj Optional instance to populate.
     * @return {module:model/AdgroupCreateBody} The populated <code>AdgroupCreateBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: AdgroupCreateBody): AdgroupCreateBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const adgroup_name = ApiClient.convertToType(data['adgroup_name'], 'String');
        const advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        const billing_event = ApiClient.convertToType(data['billing_event'], 'String');
        const campaign_id = ApiClient.convertToType(data['campaign_id'], 'String');
        const location_ids = ApiClient.convertToType(data['location_ids'], ['String']);
        const schedule_start_time = ApiClient.convertToType(data['schedule_start_time'], 'String');
        const schedule_type = ApiClient.convertToType(data['schedule_type'], 'String');

        if (!obj) {
            obj = new AdgroupCreateBody(
                adgroup_name,
                advertiser_id,
                billing_event,
                campaign_id,
                location_ids,
                schedule_start_time,
                schedule_type
            );
        }

        if (data.hasOwnProperty('actions')) {
            obj.actions = AdgroupcreateActions.constructFromObject(data['actions'], new AdgroupcreateActions());
        }
        if (data.hasOwnProperty('audience_rule')) {
            obj.audience_rule = AdgroupcreateAudienceRule.constructFromObject(data['audience_rule'], new AdgroupcreateAudienceRule());
        }
        if (data.hasOwnProperty('excluded_custom_actions')) {
            obj.excluded_custom_actions = AdgroupcreateExcludedCustomActions.constructFromObject(data['excluded_custom_actions'], new AdgroupcreateExcludedCustomActions());
        }
        if (data.hasOwnProperty('included_custom_actions')) {
            obj.included_custom_actions = AdgroupcreateIncludedCustomActions.constructFromObject(data['included_custom_actions'], new AdgroupcreateIncludedCustomActions());
        }
        if (data.hasOwnProperty('targeting_expansion')) {
            obj.targeting_expansion = AdgroupcreateTargetingExpansion.constructFromObject(data['targeting_expansion'], new AdgroupcreateTargetingExpansion());
        }

        // Copy all other primitive type properties
        const primitiveProps = [
            'adgroup_app_profile_page_state', 'age_groups', 'app_id', 'audience_ids',
            'audience_type', 'auto_targeting_enabled', 'bid_display_mode', 'bid_price',
            'bid_type', 'blocked_pangle_app_ids', 'brand_safety_partner', 'brand_safety_type',
            'budget', 'budget_mode', 'budget_optmize_on', 'carrier_ids',
            'catalog_authorized_bc_id', 'catalog_id', 'comment_disabled', 'contextual_tag_ids',
            'conversion_bid_price', 'conversion_id', 'creative_material_mode', 'dayparting',
            'deep_bid_type', 'deep_cpa_bid', 'device_model_ids', 'device_price_ranges',
            'excluded_audience_ids', 'excluded_pangle_audience_package_ids', 'frequency',
            'frequency_schedule', 'gender', 'household_income', 'identity_authorized_bc_id',
            'identity_id', 'identity_type', 'included_pangle_audience_package_ids',
            'interest_category_ids', 'interest_keyword_ids', 'interest_keywords',
            'ios14_targeting', 'is_hfss', 'languages', 'min_android_version',
            'min_ios_version', 'network_types', 'next_day_retention', 'operating_systems',
            'operation_status', 'optimization_event', 'optimization_goal', 'pacing',
            'pixel_id', 'placement_type', 'placements', 'product_set_id', 'product_source',
            'promotion_type', 'promotion_website_type', 'purchase_intention_keyword_ids',
            'request_id', 'roas_bid', 'schedule_end_time', 'secondary_optimization_event',
            'shopping_ads_retargeting_actions_days', 'shopping_ads_retargeting_type',
            'shopping_ads_type', 'skip_learning_phase', 'spending_power', 'statistic_type',
            'store_authorized_bc_id', 'store_id', 'video_download_disabled'
        ];

        for (const prop of primitiveProps) {
            if (data.hasOwnProperty(prop)) {
                obj[prop] = ApiClient.convertToType(data[prop], typeof data[prop]);
            }
        }

        return obj;
    }
}

