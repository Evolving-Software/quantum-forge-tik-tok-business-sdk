/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

interface FilterSetFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  value: string | undefined;
  parameter_filters: any[] | undefined;
}

/**
 * The FilterSetFilters model module.
 * @module model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters
 * @version 0.1.4
 */
export class DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters implements FilterSetFiltersProps {
  field: string | undefined;
  operator: string | undefined;
  value: string | undefined;
  parameter_filters: any[] | undefined;

  /**
   * Constructs a new <code>DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters</code>.
   * @param {string} field Filter condition field
   * @param {string} operator Filter operator
   * @param {string} value Filter value
   */
  constructor(field?: string, operator?: string, value?: string) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters): DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters {
    if (!data) return obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters();

    obj = obj || new DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters();
    
    if (data.hasOwnProperty('field'))
      obj.field = ApiClient.convertToType(data['field'], 'String');
    if (data.hasOwnProperty('operator'))
      obj.operator = ApiClient.convertToType(data['operator'], 'String');
    if (data.hasOwnProperty('value'))
      obj.value = ApiClient.convertToType(data['value'], 'String');
    if (data.hasOwnProperty('parameter_filters'))
      obj.parameter_filters = ApiClient.convertToType(data['parameter_filters'], [Object]);

    return obj;
  }
}

