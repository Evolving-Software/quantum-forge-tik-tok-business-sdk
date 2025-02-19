/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

interface FeedDeleteProps {
  bc_id: string | undefined;
  catalog_id: string | undefined;
  feed_id: string | undefined;
}

/**
 * The FeedDeleteBody model module.
 * @module model/FeedDeleteBody
 * @version 0.1.4
 */
export class FeedDeleteBody implements FeedDeleteProps {
  bc_id: string | undefined;
  catalog_id: string | undefined;
  feed_id: string | undefined;

  /**
   * Constructs a new <code>FeedDeleteBody</code>.
   * @param {string} bc_id Business Center ID
   * @param {string} catalog_id Catalog ID
   * @param {string} feed_id Feed ID
   */
  constructor(bc_id?: string, catalog_id?: string, feed_id?: string) {
    this.bc_id = bc_id;
    this.catalog_id = catalog_id;
    this.feed_id = feed_id;
  }

  /**
   * Constructs from a plain JavaScript object
   */
  static constructFromObject(data: Record<string, any>, obj?: FeedDeleteBody): FeedDeleteBody {
    if (!data) return obj || new FeedDeleteBody();

    obj = obj || new FeedDeleteBody();
    
    if (data.hasOwnProperty('bc_id'))
      obj.bc_id = ApiClient.convertToType(data['bc_id'], 'String');
    if (data.hasOwnProperty('catalog_id'))
      obj.catalog_id = ApiClient.convertToType(data['catalog_id'], 'String');
    if (data.hasOwnProperty('feed_id'))
      obj.feed_id = ApiClient.convertToType(data['feed_id'], 'String');

    return obj;
  }
}

