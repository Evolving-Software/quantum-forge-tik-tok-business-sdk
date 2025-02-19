/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */

/**
 * Interface for AdAcoBodyLandingPageUrls
 */
export interface IAdAcoBodyLandingPageUrls {
  landing_page_url?: string;
}

/**
 * The AdAcoBodyLandingPageUrls model module.
 * @module model/AdAcoBodyLandingPageUrls
 * @version 0.1.4
 */
export class AdAcoBodyLandingPageUrls implements IAdAcoBodyLandingPageUrls {
  landing_page_url?: string;

  /**
   * Constructs a new <code>AdAcoBodyLandingPageUrls</code>.
   * @alias module:model/AdAcoBodyLandingPageUrls
   */
  constructor() {}

  /**
   * Constructs a <code>AdAcoBodyLandingPageUrls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Partial<IAdAcoBodyLandingPageUrls>} data The plain JavaScript object bearing properties of interest.
   * @param {AdAcoBodyLandingPageUrls} obj Optional instance to populate.
   * @return {AdAcoBodyLandingPageUrls} The populated <code>AdAcoBodyLandingPageUrls</code> instance.
   */
  static constructFromObject(data: Partial<IAdAcoBodyLandingPageUrls>, obj?: AdAcoBodyLandingPageUrls): AdAcoBodyLandingPageUrls {
    const instance = obj || new AdAcoBodyLandingPageUrls();
    
    if (data?.landing_page_url !== undefined) {
      instance.landing_page_url = data.landing_page_url;
    }
    
    return instance;
  }
}

