/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from '../ApiClient';

/**
 * The Oauth2AccessTokenBody model module.
 * @module model/Oauth2AccessTokenBody
 * @version 0.1.4
 */
export class Oauth2AccessTokenBody {
  /** @property {string} app_id - The App ID applied by the developer */
  app_id: string;
  
  /** @property {string} auth_code - Authorization code provided once the callback is complete */
  auth_code: string;
  
  /** @property {string} secret - The private key of the developer's App */
  secret: string;

  /**
   * Constructs a new <code>Oauth2AccessTokenBody</code>.
   * @param app_id {string} The App ID applied by the developer
   * @param auth_code {string} Authorization code provided once the callback is complete
   * @param secret {string} The private key of the developer's App
   */
  constructor(app_id: string, auth_code: string, secret: string) {
    this.app_id = app_id;
    this.auth_code = auth_code;
    this.secret = secret;
  }

  /**
   * Constructs a <code>Oauth2AccessTokenBody</code> from a plain JavaScript object
   * @param {Record<string, any>} data The plain JavaScript object bearing properties of interest
   * @param {Oauth2AccessTokenBody} [obj] Optional instance to populate
   * @return {Oauth2AccessTokenBody} The populated <code>Oauth2AccessTokenBody</code> instance
   */
  static constructFromObject(data: Record<string, any>, obj?: Oauth2AccessTokenBody): Oauth2AccessTokenBody {
    if (!data) return obj || new Oauth2AccessTokenBody('', '', '');

    obj = obj || new Oauth2AccessTokenBody(
      data['app_id'] || '',
      data['auth_code'] || '',
      data['secret'] || ''
    );
            
    if (data.hasOwnProperty('app_id')) {
      obj.app_id = ApiClient.convertToType(data['app_id'], 'String');
    }
    if (data.hasOwnProperty('auth_code')) {
      obj.auth_code = ApiClient.convertToType(data['auth_code'], 'String');
    }
    if (data.hasOwnProperty('secret')) {
      obj.secret = ApiClient.convertToType(data['secret'], 'String');
    }

    return obj;
  }
}

