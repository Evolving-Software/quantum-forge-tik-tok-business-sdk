/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters} from './DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters';

interface ExclusionRuleSetFilterSetProps {
  filters: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters[] | undefined;
  operator: string | undefined;
}

/**
 * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet implements ExclusionRuleSetFilterSetProps {
  filters: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters[] | undefined;
  operator: string | undefined;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet</code>.
   * Required when exclusion_rule_set is passed. The set of filters for the exclusion rule.
   * @param filters An array of filters on previous audience actions and optionally also on URL keywords or parameters. Max size: 1.
   * @param operator Operator between filters in the filters object array. Enum value: OR. Within each exclusion rule, you can only specify one object in filters.
   */
  constructor(filters?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters[], operator?: string) {
    this.filters = filters;
    this.operator = operator;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet): DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet {
    if (!data) return obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet();

    obj = obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet();
    
    if (data.hasOwnProperty('filters'))
      obj.filters = ApiClient.convertToType(data['filters'], [DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters]);
    if (data.hasOwnProperty('operator'))
      obj.operator = ApiClient.convertToType(data['operator'], 'String');

    return obj;
  }
}

