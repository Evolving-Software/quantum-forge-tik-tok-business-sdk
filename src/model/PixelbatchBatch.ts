/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {PixelContext} from './PixelContext';
import {PixelProperties} from './PixelProperties';

/**
 * The PixelbatchBatch model module.
 * @module model/PixelbatchBatch
 * @version 0.1.4
 */
export class PixelbatchBatch {
  /** @property {PixelContext} context - Pixel context information */
  context?: PixelContext;

  /**
   * Conversion event name. Please refer to the above `Supported web events` section for accepted event names.
   * @property {string} event
   */
  event?: string;

  /**
   * Hashed ID that can identify a unique user/session
   * @property {string} event_id
   */
  event_id?: string;

  /** @property {PixelProperties} properties - Pixel properties */
  properties?: PixelProperties;

  /**
   * Timestamp that the event took place. Timestamp with ISO 8601 format.
   * @property {string} timestamp
   */
  timestamp?: string;

  /**
   * Currently only accepting value track
   * @property {string} type
   */
  type?: string;

  /**
   * Constructs a new <code>PixelbatchBatch</code>.
   */
  constructor() {}

  /**
   * Constructs a <code>PixelbatchBatch</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {PixelbatchBatch} [obj] Optional instance to populate
   * @return {PixelbatchBatch} The populated instance
   */
  static constructFromObject(data: Record<string, any>, obj?: PixelbatchBatch): PixelbatchBatch {
    if (!data) return obj || new PixelbatchBatch();

    obj = obj || new PixelbatchBatch();

    if (data.hasOwnProperty('context'))
      obj.context = PixelContext.constructFromObject(data['context']);
    if (data.hasOwnProperty('event'))
      obj.event = ApiClient.convertToType(data['event'], 'String');
    if (data.hasOwnProperty('event_id'))
      obj.event_id = ApiClient.convertToType(data['event_id'], 'String');
    if (data.hasOwnProperty('properties'))
      obj.properties = PixelProperties.constructFromObject(data['properties']);
    if (data.hasOwnProperty('timestamp'))
      obj.timestamp = ApiClient.convertToType(data['timestamp'], 'String');
    if (data.hasOwnProperty('type'))
      obj.type = ApiClient.convertToType(data['type'], 'String');

    return obj;
  }
}

