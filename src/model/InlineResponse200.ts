/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 0.1.4
 */
export class InlineResponse200 {
  /** @property {number} code - Response code */
  code?: number;

  /** @property {Object} data - Response data */
  data?: Record<string, any>;

  /** @property {string} message - Response message */
  message?: string;

  /** @property {string} request_id - Request ID */
  request_id?: string;

  /**
   * Constructs a new <code>InlineResponse200</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {InlineResponse200} [obj] Optional instance to populate
   * @return {InlineResponse200} The populated <code>InlineResponse200</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: InlineResponse200): InlineResponse200 {
    if (!data) return obj || new InlineResponse200();

    obj = obj || new InlineResponse200();
    
    if (data.hasOwnProperty('code'))
      obj.code = ApiClient.convertToType(data['code'], 'Number');
    if (data.hasOwnProperty('data'))
      obj.data = ApiClient.convertToType(data['data'], Object);
    if (data.hasOwnProperty('message'))
      obj.message = ApiClient.convertToType(data['message'], 'String');
    if (data.hasOwnProperty('request_id'))
      obj.request_id = ApiClient.convertToType(data['request_id'], 'String');

    return obj;
  }
}

