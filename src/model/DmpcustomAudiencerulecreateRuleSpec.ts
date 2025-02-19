/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet} from './DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet} from './DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet';

/**
 * The DmpcustomAudiencerulecreateRuleSpec model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpec
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpec {
  exclusion_rule_set?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet;
  inclusion_rule_set: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpec</code>.
   * Rule of the audience.
   * @alias module:model/DmpcustomAudiencerulecreateRuleSpec
   * @class
   * @param inclusion_rule_set {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet} 
   */
  constructor(inclusion_rule_set: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet) {
    this.inclusion_rule_set = inclusion_rule_set;
  }

  /**
   * Constructs a <code>DmpcustomAudiencerulecreateRuleSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmpcustomAudiencerulecreateRuleSpec} obj Optional instance to populate.
   * @return {module:model/DmpcustomAudiencerulecreateRuleSpec} The populated <code>DmpcustomAudiencerulecreateRuleSpec</code> instance.
   */
  static constructFromObject(data: any, obj?: DmpcustomAudiencerulecreateRuleSpec): DmpcustomAudiencerulecreateRuleSpec {
    if (!data) {
      return new DmpcustomAudiencerulecreateRuleSpec(new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet('', []));
    }

    const inclusion_rule_set = data.hasOwnProperty('inclusion_rule_set')
      ? DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet.constructFromObject(data['inclusion_rule_set'])
      : new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet('', []);

    obj = obj || new DmpcustomAudiencerulecreateRuleSpec(inclusion_rule_set);

    if (data.hasOwnProperty('exclusion_rule_set')) {
      obj.exclusion_rule_set = DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet.constructFromObject(data['exclusion_rule_set'], undefined);
    }

    return obj;
  }
}

