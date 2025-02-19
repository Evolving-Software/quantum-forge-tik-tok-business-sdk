/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { AdgroupcreateAudienceRuleExclusionsFilter } from './AdgroupcreateAudienceRuleExclusionsFilter';

/**
 * The AdgroupcreateAudienceRuleExclusionsRules model module.
 * @module model/AdgroupcreateAudienceRuleExclusionsRules
 * @version 0.1.4
 */
export class AdgroupcreateAudienceRuleExclusionsRules {
  /** @type {Array.<string>} */
  event_sources?: string[];
  /** @type {AdgroupcreateAudienceRuleExclusionsFilter} */
  filter?: AdgroupcreateAudienceRuleExclusionsFilter;
  /** @type {number} */
  retention?: number;

  /**
   * Constructs a new <code>AdgroupcreateAudienceRuleExclusionsRules</code>.
   * @alias module:model/AdgroupcreateAudienceRuleExclusionsRules
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdgroupcreateAudienceRuleExclusionsRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdgroupcreateAudienceRuleExclusionsRules} obj Optional instance to populate.
   * @return {module:model/AdgroupcreateAudienceRuleExclusionsRules} The populated <code>AdgroupcreateAudienceRuleExclusionsRules</code> instance.
   */
  static constructFromObject(data: any, obj?: AdgroupcreateAudienceRuleExclusionsRules): AdgroupcreateAudienceRuleExclusionsRules {
    if (data) {
      obj = obj || new AdgroupcreateAudienceRuleExclusionsRules();
      if (data.hasOwnProperty('event_sources')) obj.event_sources = ApiClient.convertToType(data['event_sources'], ['String']);
      if (data.hasOwnProperty('filter')) obj.filter = ApiClient.convertToType(data['filter'], AdgroupcreateAudienceRuleExclusionsFilter);
      if (data.hasOwnProperty('retention')) obj.retention = ApiClient.convertToType(data['retention'], 'Number');
    }
    return obj!;
  }
}

