/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet {
  filters?: any[];
  operator?: string;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet</code>.
   * @alias module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet
   * @class
   * @param filters {Array} Filter conditions.Optionally configure up to 10 filter conditions.
   * @param operator {String} Filter logic. Enum values- OR means to meet any of the filter conditions; AND means to meet all filter conditions. Currently, only AND is supported.
   */
  constructor(filters: any[], operator: string) {
    this.filters = filters;
    this.operator = operator;
  }

  /**
   * Constructs a <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet} obj Optional instance to populate.
   * @return {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet} The populated <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet</code> instance.
   */
  static constructFromObject(data: any, obj?: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet): DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet {
    if (data) {
      obj = obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet(data.filters, data.operator);
      obj.filters = data['filters'] || [];
      obj.operator = data['operator'];
    }
    return obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet(data.filters, data.operator);
  }
}

