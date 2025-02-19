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
 * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters implements FilterSetParameterFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  values: string[] | undefined;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters</code>.
   * @param field Filter condition. Use this field to specify whether to filter URL keywords, or Web Event parameters reported via the Pixel.
   * @param operator Filter operator between filter condition and filter value.
   * @param values A list of filter values. Max size: 10. Length limit for each value: 100 characters.
   */
  constructor(field?: string, operator?: string, values?: string[]) {
    this.field = field;
    this.operator = operator;
    this.values = values;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters): DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters {
    if (!data) return obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters();

    obj = obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters();
    
    if (data.hasOwnProperty('field'))
      obj.field = ApiClient.convertToType(data['field'], 'String');
    if (data.hasOwnProperty('operator'))
      obj.operator = ApiClient.convertToType(data['operator'], 'String');
    if (data.hasOwnProperty('values'))
      obj.values = ApiClient.convertToType(data['values'], ['String']);

    return obj;
  }
}

