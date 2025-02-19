/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The EventsourceUnbindBody model module.
 * @module model/EventsourceUnbindBody
 * @version 0.1.4
 */
export class EventsourceUnbindBody {
  app_id?: string | undefined;
  advertiser_id: string;
  bc_id: string;
  catalog_id: string;

  /**
   * Constructs a new <code>EventsourceUnbindBody</code>.
   * @alias module:model/EventsourceUnbindBody
   * @class
   */
  constructor() {
    this.app_id = undefined;
    this.advertiser_id = '';
    this.bc_id = '';
    this.catalog_id = '';
  }

  /**
   * Constructs a <code>EventsourceUnbindBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventsourceUnbindBody} obj Optional instance to populate.
   * @return {module:model/EventsourceUnbindBody} The populated <code>EventsourceUnbindBody</code> instance.
   */
  static constructFromObject(data: any, obj?: EventsourceUnbindBody): EventsourceUnbindBody {
    if (data) {
      obj = obj || new EventsourceUnbindBody();
      if (data.hasOwnProperty('app_id'))
        obj.app_id = ApiClient.convertToType(data['app_id'], 'String');
    }
    return obj || new EventsourceUnbindBody();
  }
}

