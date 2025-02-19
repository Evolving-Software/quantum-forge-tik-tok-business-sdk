/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet} from './DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet';

/**
 * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules {
  event_source_ids: string[] = [];
  filter_set?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet;
  retention_days: number;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules</code>.
   * @alias module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules
   * @class
   * @param retention_days {Number} Required when exclusion_rule_set is passed. Audience lookback window.
   */
  constructor(retention_days: number) {
    this.retention_days = retention_days;
  }

  /**
   * Constructs a <code>DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules</code> from a plain JavaScript object.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules} obj Optional instance to populate.
   * @return {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules} The populated instance.
   */
  static constructFromObject(data: any, obj?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules): DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules {
    const instance = obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules(0);
    
    if (data) {
      if (data.hasOwnProperty('event_source_ids')) {
        instance.event_source_ids = ApiClient.convertToType(data['event_source_ids'], ['String']);
      }
      
      if (data.hasOwnProperty('filter_set')) {
        instance.filter_set = DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet.constructFromObject(data['filter_set'], undefined);
      }
      
      if (data.hasOwnProperty('retention_days')) {
        instance.retention_days = ApiClient.convertToType(data['retention_days'], 'Number');
      }
    }
    return instance;
  }
}

