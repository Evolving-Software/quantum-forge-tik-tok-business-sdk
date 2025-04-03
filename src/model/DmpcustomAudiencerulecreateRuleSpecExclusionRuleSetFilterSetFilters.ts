/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters} from './DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters';

interface FilterSetFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  value: string | undefined;
  parameter_filters?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters[] | undefined;
}

/**
 * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters implements FilterSetFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  value: string | undefined;
  parameter_filters: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters[] | undefined;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters</code>.
   * @param field Filter field. Enum value: EVENT: To exclude the people who've carried out a certain action
   * @param operator Filter operator between filter field and filter value. Enum value: EQ: equals.
   * @param value Filter value. For enum values, see Enumeration - Filter Value.
   */
  constructor(field?: string, operator?: string, value?: string) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters): DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters {
    if (!data) return obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters();

    obj = obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters();
    
    if (data.hasOwnProperty('field'))
      obj.field = ApiClient.convertToType(data['field'], 'String');
    if (data.hasOwnProperty('operator'))
      obj.operator = ApiClient.convertToType(data['operator'], 'String');
    if (data.hasOwnProperty('parameter_filters'))
      // Manual array mapping using the model's static method
      obj.parameter_filters = Array.isArray(data['parameter_filters']) 
        ? data['parameter_filters'].map((item: any) => DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters.constructFromObject(item)) 
        : undefined;
    if (data.hasOwnProperty('value'))
      obj.value = ApiClient.convertToType(data['value'], 'String');

    return obj;
  }
}

