/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {BcassetGroupcreateAssets} from './BcassetGroupcreateAssets';
import {BcassetGroupcreateMembers} from './BcassetGroupcreateMembers';

/**
 * The AssetGroupUpdateBody model module.
 * @module model/AssetGroupUpdateBody
 * @version 0.1.4
 */
export class AssetGroupUpdateBody {
  /**
   * @member {String} action
   */
  action?: string;

  /**
   * @member {String} asset_group_id
   */
  asset_group_id: string;

  /**
   * @member {String} asset_group_name
   */
  asset_group_name?: string;

  /**
   * @member {Array.<module:model/BcassetGroupcreateAssets>} assets
   */
  assets?: BcassetGroupcreateAssets[];

  /**
   * @member {String} bc_id
   */
  bc_id: string;

  /**
   * @member {Array.<module:model/BcassetGroupcreateMembers>} members
   */
  members?: BcassetGroupcreateMembers[];

  /**
   * @member {String} update_entity
   */
  update_entity: string;

  /**
   * Constructs a new AssetGroupUpdateBody.
   * @param asset_group_id {String} 
   * @param bc_id {String} 
   * @param update_entity {String} 
   */
  constructor(asset_group_id: string, bc_id: string, update_entity: string) {
    this.asset_group_id = asset_group_id;
    this.bc_id = bc_id;
    this.update_entity = update_entity;
  }

  /**
   * Constructs a AssetGroupUpdateBody from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from data to obj if supplied or a new instance if not.
   */
  static constructFromObject(data: any, obj?: AssetGroupUpdateBody): AssetGroupUpdateBody {
    if (!data) {
      throw new Error('Data must be provided to construct AssetGroupUpdateBody');
    }

    obj = obj || new AssetGroupUpdateBody(
      data['asset_group_id'],
      data['bc_id'],
      data['update_entity']
    );

    if (data.hasOwnProperty('action'))
      obj.action = ApiClient.convertToType(data['action'], 'String');
    if (data.hasOwnProperty('asset_group_name'))
      obj.asset_group_name = ApiClient.convertToType(data['asset_group_name'], 'String');
    if (data.hasOwnProperty('assets'))
      obj.assets = ApiClient.convertToType(data['assets'], [BcassetGroupcreateAssets]);
    if (data.hasOwnProperty('members'))
      obj.members = ApiClient.convertToType(data['members'], [BcassetGroupcreateMembers]);

    return obj;
  }
}

