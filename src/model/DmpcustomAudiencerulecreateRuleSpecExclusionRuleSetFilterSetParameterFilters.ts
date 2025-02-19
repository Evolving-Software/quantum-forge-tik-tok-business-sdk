/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

interface FilterSetParameterFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  values: string[] | undefined;
}

/**
 * The FilterSetParameterFilters model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters implements FilterSetParameterFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  values: string[] | undefined;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters</code>.
   * @param {string} field Filter condition.
   * @param {string} operator Filter operator.
   * @param {string[]} values A list of filter values.
   */
  constructor(field?: string, operator?: string, values?: string[]) {
    this.field = field;
    this.operator = operator;
    this.values = values;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters): DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters {
    if (!data) return obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters();

    obj = obj || new DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters();
    
    if (data.hasOwnProperty('field')) 
      obj.field = ApiClient.convertToType(data['field'], 'String');
    if (data.hasOwnProperty('operator'))
      obj.operator = ApiClient.convertToType(data['operator'], 'String'); 
    if (data.hasOwnProperty('values'))
      obj.values = ApiClient.convertToType(data['values'], ['String']);

    return obj;
  }
}

