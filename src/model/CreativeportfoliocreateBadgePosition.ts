/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CreativeportfoliocreateBadgePosition model module.
 * @module model/CreativeportfoliocreateBadgePosition
 * @version 0.1.4
 */
export class CreativeportfoliocreateBadgePosition {
  /** @type {number} */
  angle?: number;
  /** @type {number} */
  position_x?: number;
  /** @type {number} */
  position_y?: number;

  /**
   * Constructs a new <code>CreativeportfoliocreateBadgePosition</code>.
   * Badge position information
   * @alias module:model/CreativeportfoliocreateBadgePosition
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreativeportfoliocreateBadgePosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreativeportfoliocreateBadgePosition} obj Optional instance to populate.
   * @return {module:model/CreativeportfoliocreateBadgePosition} The populated <code>CreativeportfoliocreateBadgePosition</code> instance.
   */
  static constructFromObject(data: any, obj?: CreativeportfoliocreateBadgePosition): CreativeportfoliocreateBadgePosition {
    if (data) {
      obj = obj || new CreativeportfoliocreateBadgePosition();
      if (data.hasOwnProperty('angle')) obj.angle = ApiClient.convertToType(data['angle'], 'Number');
      if (data.hasOwnProperty('position_x')) obj.position_x = ApiClient.convertToType(data['position_x'], 'Number');
      if (data.hasOwnProperty('position_y')) obj.position_y = ApiClient.convertToType(data['position_y'], 'Number');
    }
    return obj!;
  }
}

