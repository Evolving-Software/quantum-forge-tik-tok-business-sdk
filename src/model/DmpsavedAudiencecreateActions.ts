/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The DmpsavedAudiencecreateActions model module.
 * @module model/DmpsavedAudiencecreateActions
 * @version 0.1.4
 */
export class DmpsavedAudiencecreateActions {
  action_category_ids?: string[] | undefined;
  action_period?: number | undefined;
  action_scene?: string[] | undefined;
  video_user_actions?: string[] | undefined;

  /**
   * Constructs a new <code>DmpsavedAudiencecreateActions</code>.
   * @alias module:model/DmpsavedAudiencecreateActions
   * @class
   */
  constructor() {
    this.action_category_ids = undefined;
    this.action_period = undefined;
    this.action_scene = undefined;
    this.video_user_actions = undefined;
  }

  /**
   * Constructs a <code>DmpsavedAudiencecreateActions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmpsavedAudiencecreateActions} obj Optional instance to populate.
   * @return {module:model/DmpsavedAudiencecreateActions} The populated <code>DmpsavedAudiencecreateActions</code> instance.
   */
  static constructFromObject(data: any, obj?: DmpsavedAudiencecreateActions): DmpsavedAudiencecreateActions {
    if (data) {
      obj = obj || new DmpsavedAudiencecreateActions();
      if (data.hasOwnProperty('action_category_ids'))
        obj.action_category_ids = ApiClient.convertToType(data['action_category_ids'], ['String']);
      if (data.hasOwnProperty('action_period'))
        obj.action_period = ApiClient.convertToType(data['action_period'], 'Number');
      if (data.hasOwnProperty('action_scene'))
        obj.action_scene = ApiClient.convertToType(data['action_scene'], ['String']);
      if (data.hasOwnProperty('video_user_actions'))
        obj.video_user_actions = ApiClient.convertToType(data['video_user_actions'], ['String']);
    }
    return obj || new DmpsavedAudiencecreateActions();
  }
}

