/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The CreativeportfoliocreateAdvancedGestureIcon model module.
 * @module model/CreativeportfoliocreateAdvancedGestureIcon
 * @version 0.1.4
 */
export class CreativeportfoliocreateAdvancedGestureIcon {
  /** @type {string} */
  image_id?: string;

  /**
   * Constructs a new <code>CreativeportfoliocreateAdvancedGestureIcon</code>.
   * @alias module:model/CreativeportfoliocreateAdvancedGestureIcon
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreativeportfoliocreateAdvancedGestureIcon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreativeportfoliocreateAdvancedGestureIcon} obj Optional instance to populate.
   * @return {module:model/CreativeportfoliocreateAdvancedGestureIcon} The populated <code>CreativeportfoliocreateAdvancedGestureIcon</code> instance.
   */
  static constructFromObject(data: any, obj?: CreativeportfoliocreateAdvancedGestureIcon): CreativeportfoliocreateAdvancedGestureIcon {
    if (data) {
      obj = obj || new CreativeportfoliocreateAdvancedGestureIcon();
      if (data.hasOwnProperty('image_id'))
        obj.image_id = ApiClient.convertToType(data['image_id'], 'String');
    }
    return obj!;
  }
}

