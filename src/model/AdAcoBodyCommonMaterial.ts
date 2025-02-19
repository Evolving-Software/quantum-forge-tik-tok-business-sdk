/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import {AdAcoBodyCommonMaterialTrackingInfo} from './AdAcoBodyCommonMaterialTrackingInfo';

/**
* Function to dynamically import modules when needed.
*/
function dynamicallyImportTrackingInfoModules() {
   return import('./AdAcoBodyCommonMaterialTrackingInfo');
}

/**
 * The AdAcoBodyCommonMaterial model module.
 * @module model/AdAcoBodyCommonMaterial
 * @version 0.1.4
 */
export class AdAcoBodyCommonMaterial {
  ad_name?: string;
  call_to_action_id?: string;
  creative_authorized?: boolean;
  fallback_type?: string;
  identity_id?: string;
  identity_type?: string;
  is_smart_creative?: boolean;
  playable_url?: string;
  tracking_info?: AdAcoBodyCommonMaterialTrackingInfo;

  /**
   * Constructs a new <code>AdAcoBodyCommonMaterial</code>.
   * @alias module:model/AdAcoBodyCommonMaterial
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyCommonMaterial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyCommonMaterial} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyCommonMaterial} The populated <code>AdAcoBodyCommonMaterial</code> instance.
   */
  static constructFromObject(data: Record<string, any>, obj?: AdAcoBodyCommonMaterial): AdAcoBodyCommonMaterial {
    const instance = obj || new AdAcoBodyCommonMaterial();
    
    if (data) {
      if (data.hasOwnProperty('ad_name')) instance.ad_name = data['ad_name'];
      if (data.hasOwnProperty('call_to_action_id')) instance.call_to_action_id = data['call_to_action_id'];
      if (data.hasOwnProperty('creative_authorized')) instance.creative_authorized = data['creative_authorized'];
      if (data.hasOwnProperty('fallback_type')) instance.fallback_type = data['fallback_type'];
      if (data.hasOwnProperty('identity_id')) instance.identity_id = data['identity_id'];
      if (data.hasOwnProperty('identity_type')) instance.identity_type = data['identity_type'];
      if (data.hasOwnProperty('is_smart_creative')) instance.is_smart_creative = data['is_smart_creative'];
      if (data.hasOwnProperty('playable_url')) instance.playable_url = data['playable_url'];
      if (data.hasOwnProperty('tracking_info')) {
        instance.tracking_info = AdAcoBodyCommonMaterialTrackingInfo.constructFromObject(data['tracking_info'], undefined);
      }
    }
    
    return instance;
  }
}

