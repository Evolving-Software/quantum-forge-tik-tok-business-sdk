/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { DmpcustomAudiencerulecreateRuleSpec } from './DmpcustomAudiencerulecreateRuleSpec';

/**
 * The RuleCreateBody model module.
 * @module model/RuleCreateBody
 * @version 0.1.4
 */
export class RuleCreateBody {
    advertiser_id: string;
    audience_type: string;
    custom_audience_name: string;
    rule_spec: DmpcustomAudiencerulecreateRuleSpec;
    audience_sub_type?: string | undefined;
    identity_authorized_bc_id?: string | undefined;
    identity_id?: string | undefined;
    identity_type?: string | undefined;
    is_auto_refresh?: boolean | undefined;
    retention_in_days?: number | undefined;

    constructor(
        advertiser_id: string,
        audience_type: string,
        custom_audience_name: string,
        rule_spec: DmpcustomAudiencerulecreateRuleSpec
    ) {
        this.advertiser_id = advertiser_id;
        this.audience_type = audience_type;
        this.custom_audience_name = custom_audience_name;
        this.rule_spec = rule_spec;
    }

    static constructFromObject(data: any, obj?: RuleCreateBody): RuleCreateBody {
        if (!data) {
            throw new Error('No data provided to construct RuleCreateBody');
        }

        if (!data.rule_spec) {
            throw new Error('rule_spec is required for RuleCreateBody');
        }

        const ruleSpec = DmpcustomAudiencerulecreateRuleSpec.constructFromObject(
            data.rule_spec,
            new DmpcustomAudiencerulecreateRuleSpec(data.rule_spec.inclusion_rule_set)
        );

        obj = obj || new RuleCreateBody(
            data.advertiser_id || '',
            data.audience_type || '',
            data.custom_audience_name || '',
            ruleSpec
        );

        if (data.hasOwnProperty('audience_sub_type'))
            obj.audience_sub_type = ApiClient.convertToType(data.audience_sub_type, 'String');

        if (data.hasOwnProperty('identity_authorized_bc_id'))
            obj.identity_authorized_bc_id = ApiClient.convertToType(data.identity_authorized_bc_id, 'String');

        if (data.hasOwnProperty('identity_id'))
            obj.identity_id = ApiClient.convertToType(data.identity_id, 'String');

        if (data.hasOwnProperty('identity_type'))
            obj.identity_type = ApiClient.convertToType(data.identity_type, 'String');

        if (data.hasOwnProperty('is_auto_refresh'))
            obj.is_auto_refresh = ApiClient.convertToType(data.is_auto_refresh, 'Boolean');

        if (data.hasOwnProperty('retention_in_days'))
            obj.retention_in_days = ApiClient.convertToType(data.retention_in_days, 'Number');

        return obj;
    }
}

