/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {AdgroupcreateAudienceRuleExclusionsRules} from './AdgroupcreateAudienceRuleExclusionsRules';

/**
 * The AdgroupcreateAudienceRuleInclusions model module.
 * @module model/AdgroupcreateAudienceRuleInclusions
 * @version 0.1.4
 */
export class AdgroupcreateAudienceRuleInclusions {
  operator?: string | undefined;
  rules?: AdgroupcreateAudienceRuleExclusionsRules[] | undefined;

  /**
   * Constructs a new <code>AdgroupcreateAudienceRuleInclusions</code>.
   * A set of inclusion rule object. Quantity range- 1 to 5, without repetition. For the format, see the \&quot;Rule set format\&quot; section below [Audience Rule]((https://ads.tiktok.com/marketing_api/docs?id&#x3D;1739566532187138)).
   * @alias module:model/AdgroupcreateAudienceRuleInclusions
   * @class
   */
  constructor() {
    this.operator = undefined;
    this.rules = undefined;
  }

  /**
   * Constructs a <code>AdgroupcreateAudienceRuleInclusions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdgroupcreateAudienceRuleInclusions} obj Optional instance to populate.
   * @return {module:model/AdgroupcreateAudienceRuleInclusions} The populated <code>AdgroupcreateAudienceRuleInclusions</code> instance.
   */
  static constructFromObject(data: any, obj?: AdgroupcreateAudienceRuleInclusions): AdgroupcreateAudienceRuleInclusions {
    if (data) {
      obj = obj || new AdgroupcreateAudienceRuleInclusions();
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('rules'))
        obj.rules = ApiClient.convertToType(data['rules'], [AdgroupcreateAudienceRuleExclusionsRules]);
    }
    return obj || new AdgroupcreateAudienceRuleInclusions();
  }
}

