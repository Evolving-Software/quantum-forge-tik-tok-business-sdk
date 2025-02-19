/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules} from './DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules';

/**
 * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet {
  operator: string;
  rules: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules[];

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet</code>.
   * Details of the inclusion rule set.
   * @alias module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet
   * @class
   * @param operator {String} Operator between the inclusion rules within the inclusion rule set. Enum value: OR. If you provide more than one inclusion rule, the inclusion rules will be combined using OR logic to broaden the audience.
   * @param rules {Array.<module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules>} A list of inclusion rules within the inclusion rule set.
   */
  constructor(operator: string, rules: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules[]) {
    this.operator = operator;
    this.rules = rules;
  }

  /**
   * Constructs a <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet} obj Optional instance to populate.
   * @return {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet} The populated <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet</code> instance.
   */
  static constructFromObject(data: any, obj?: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet): DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet {
    if (data) {
      const operator = data.hasOwnProperty('operator') ? ApiClient.convertToType(data['operator'], 'String') : '';
      const rules = data.hasOwnProperty('rules') 
        ? ApiClient.convertToType(data['rules'], [DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules])
        : [];
      
      obj = obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet(operator, rules);
    }
    return obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet('', []);
  }
}

