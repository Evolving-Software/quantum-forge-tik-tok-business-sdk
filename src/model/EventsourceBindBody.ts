/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

interface EventSourceBindProps {
  advertiser_id: string | undefined;
  app_id: string | undefined;
  bc_id: string | undefined;
  catalog_id: string | undefined;
  pixel_code: string | undefined;
}

/**
 * The EventsourceBindBody model module.
 * @module model/EventsourceBindBody
 * @version 0.1.4
 */
export class EventsourceBindBody implements EventSourceBindProps {
  advertiser_id: string | undefined;
  app_id: string | undefined;
  bc_id: string | undefined;
  catalog_id: string | undefined;
  pixel_code: string | undefined;

  /**
   * Constructs a new <code>EventsourceBindBody</code>.
   * @param {string} advertiser_id Advertiser ID
   * @param {string} bc_id Business Center ID
   * @param {string} catalog_id Catalog ID
   */
  constructor(advertiser_id?: string, bc_id?: string, catalog_id?: string) {
    this.advertiser_id = advertiser_id;
    this.bc_id = bc_id;
    this.catalog_id = catalog_id;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: EventsourceBindBody): EventsourceBindBody {
    if (!data) return obj || new EventsourceBindBody();

    obj = obj || new EventsourceBindBody();
    
    if (data.hasOwnProperty('advertiser_id'))
      obj.advertiser_id = ApiClient.convertToType(data['advertiser_id'], 'String');
    if (data.hasOwnProperty('app_id'))
      obj.app_id = ApiClient.convertToType(data['app_id'], 'String');
    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('catalog_id'))
      obj.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
    if (data.hasOwnProperty('pixel_code'))
      obj.pixel_code = ApiClient.convertToType(data['pixel_code'], 'String');

    return obj;
  }
}

