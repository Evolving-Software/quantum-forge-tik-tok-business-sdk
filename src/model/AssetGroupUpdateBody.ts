/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';
import {BcassetGroupcreateAssets} from './BcassetGroupcreateAssets';
import {BcassetGroupcreateMembers} from './BcassetGroupcreateMembers';
import type { ModelBase } from '../types';

/**
 * The AssetGroupUpdateBody model module.
 * @module model/AssetGroupUpdateBody
 * @version 0.1.4
 */
export class AssetGroupUpdateBody implements ModelBase {
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
   * Constructs a AssetGroupUpdateBody from a plain JavaScript object.
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest.
   * @return {AssetGroupUpdateBody} The populated instance.
   */
  static fromObject(data: Record<string, any>): AssetGroupUpdateBody {
    if (!data) {
      throw new Error('Data must be provided to construct AssetGroupUpdateBody');
    }

    const asset_group_id = ApiClient.convertToType(data['asset_group_id'], 'String') as string;
    const bc_id = ApiClient.convertToType(data['bc_id'], 'String') as string;
    const update_entity = ApiClient.convertToType(data['update_entity'], 'String') as string;

    const instance = new AssetGroupUpdateBody(asset_group_id, bc_id, update_entity);

    if (data.hasOwnProperty('action'))
      instance.action = ApiClient.convertToType(data['action'], 'String') as string;
    if (data.hasOwnProperty('asset_group_name'))
      instance.asset_group_name = ApiClient.convertToType(data['asset_group_name'], 'String') as string;
    if (data.hasOwnProperty('assets'))
      instance.assets = (data['assets'] as any[]).map(item => BcassetGroupcreateAssets.fromObject(item));
    if (data.hasOwnProperty('members'))
      instance.members = (data['members'] as any[]).map(item => BcassetGroupcreateMembers.fromObject(item));

    return instance;
  }

  /**
   * Static helper method to construct an instance from object data
   */
  static constructFromObject(data: unknown): AssetGroupUpdateBody {
    return AssetGroupUpdateBody.fromObject(data as Record<string, any>);
  }

  /**
   * Instance method to construct from object
   */
  constructFromObject(data: unknown): this {
    const result = AssetGroupUpdateBody.fromObject(data as Record<string, any>);
    Object.assign(this, result);
    return this;
  }
}

// Export as a ModelStatic type
export type { AssetGroupUpdateBody as ModelStatic };

