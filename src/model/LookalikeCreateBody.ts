/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import { DmpcustomAudiencelookalikecreateContextInfo } from './DmpcustomAudiencelookalikecreateContextInfo';
import { DmpcustomAudiencelookalikecreateLookalikeSpec } from './DmpcustomAudiencelookalikecreateLookalikeSpec';

/**
 * The LookalikeCreateBody model module.
 * @module model/LookalikeCreateBody
 * @version 0.1.4
 */
export class LookalikeCreateBody {
    /** @property {string} advertiser_id - Advertiser ID */
    advertiser_id: string;

    /** @property {string} custom_audience_name - Custom audience name */
    custom_audience_name: string;

    /** @property {DmpcustomAudiencelookalikecreateLookalikeSpec} lookalike_spec - Lookalike spec */
    lookalike_spec: DmpcustomAudiencelookalikecreateLookalikeSpec;

    /** @property {DmpcustomAudiencelookalikecreateContextInfo} [context_info] - Context info */
    context_info?: DmpcustomAudiencelookalikecreateContextInfo;

    /**
     * Constructs a new <code>LookalikeCreateBody</code>.
     * @param advertiser_id {string} Advertiser ID
     * @param custom_audience_name {string} Custom audience name
     * @param lookalike_spec {DmpcustomAudiencelookalikecreateLookalikeSpec} Lookalike spec
     */
    constructor(advertiser_id: string, custom_audience_name: string, lookalike_spec: DmpcustomAudiencelookalikecreateLookalikeSpec) {
        this.advertiser_id = advertiser_id;
        this.custom_audience_name = custom_audience_name;
        this.lookalike_spec = lookalike_spec;
    }

    /**
     * Constructs a <code>LookalikeCreateBody</code> from a plain JavaScript object
     * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
     * @param {LookalikeCreateBody} [obj] Optional instance to populate
     * @return {LookalikeCreateBody} The populated <code>LookalikeCreateBody</code> instance
     */
    static constructFromObject(data: Record<string, any>, obj?: LookalikeCreateBody): LookalikeCreateBody {
        if (!data) {
            return obj || new LookalikeCreateBody('', '', new DmpcustomAudiencelookalikecreateLookalikeSpec());
        }

        obj = obj || new LookalikeCreateBody(
            data['advertiser_id'] || '',
            data['custom_audience_name'] || '',
            data['lookalike_spec'] ? DmpcustomAudiencelookalikecreateLookalikeSpec.constructFromObject(data['lookalike_spec'], new DmpcustomAudiencelookalikecreateLookalikeSpec()) : new DmpcustomAudiencelookalikecreateLookalikeSpec()
        );
        
        if (data.hasOwnProperty('advertiser_id'))
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        if (data.hasOwnProperty('context_info'))
            obj.context_info = DmpcustomAudiencelookalikecreateContextInfo.constructFromObject(data['context_info'], new DmpcustomAudiencelookalikecreateContextInfo());
        if (data.hasOwnProperty('custom_audience_name'))
            obj.custom_audience_name = ApiClient.convertToType(data['custom_audience_name'], 'String');
        if (data.hasOwnProperty('lookalike_spec'))
            obj.lookalike_spec = DmpcustomAudiencelookalikecreateLookalikeSpec.constructFromObject(data['lookalike_spec'], new DmpcustomAudiencelookalikecreateLookalikeSpec());

        return obj;
    }
}

