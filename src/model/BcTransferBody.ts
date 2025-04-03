/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The BcTransferBody model module.
 * @module model/BcTransferBody
 * @version 0.1.4
 */
export class BcTransferBody {
    bc_id: string;
    transfer_type: string;
    advertiser_id?: string;
    cash_amount?: number;
    child_bc_id?: string;
    grant_amount?: number;
    request_id?: string;
    transfer_level?: string;

    /**
     * Constructs a new <code>BcTransferBody</code>.
     * @param bc_id {String} Business Center ID
     * @param transfer_type {String} Transfer type
     */
    constructor(bc_id: string, transfer_type: string) {
        this.bc_id = bc_id;
        this.transfer_type = transfer_type;
    }

    /**
     * Constructs a <code>BcTransferBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BcTransferBody} obj Optional instance to populate.
     * @return {module:model/BcTransferBody} The populated <code>BcTransferBody</code> instance.
     */
    static constructFromObject(data: Record<string, any>, obj?: BcTransferBody): BcTransferBody {
        if (!data) {
            throw new Error("Data cannot be null");
        }

        const bc_id = ApiClient.convertToType(data['bc_id'], 'String') as string;
        const transfer_type = ApiClient.convertToType(data['transfer_type'], 'String') as string;

        if (!obj) {
            obj = new BcTransferBody(bc_id, transfer_type);
        }

        if (data.hasOwnProperty('advertiser_id')) {
            obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
        }
        if (data.hasOwnProperty('cash_amount')) {
            obj.cash_amount = ApiClient.convertToType(data['cash_amount'], 'Number');
        }
        if (data.hasOwnProperty('child_bc_id')) {
            obj.child_bc_id = ApiClient.convertToType(data['child_bc_id'], 'String');
        }
        if (data.hasOwnProperty('grant_amount')) {
            obj.grant_amount = ApiClient.convertToType(data['grant_amount'], 'Number');
        }
        if (data.hasOwnProperty('request_id')) {
            obj.request_id = ApiClient.convertToType(data['request_id'], 'String');
        }
        if (data.hasOwnProperty('transfer_level')) {
            obj.transfer_level = ApiClient.convertToType(data['transfer_level'], 'String');
        }

        return obj;
    }
}

