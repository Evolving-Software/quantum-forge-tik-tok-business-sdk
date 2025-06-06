import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdAcoBodyAvatarIconList } from "./AdAcoBodyAvatarIconList";
import { AdAcoBodyCallToActionList } from "./AdAcoBodyCallToActionList";
import { AdAcoBodyCardList } from "./AdAcoBodyCardList";
import { AdAcoBodyDeeplinkList } from "./AdAcoBodyDeeplinkList";
import { AdAcoBodyDisplayNameList } from "./AdAcoBodyDisplayNameList";
import { AdAcoBodyLandingPageUrls } from "./AdAcoBodyLandingPageUrls";
import { AdAcoBodyMediaInfoList } from "./AdAcoBodyMediaInfoList";
import { AdAcoBodyPageList } from "./AdAcoBodyPageList";
import { AdAcoBodyTitleList } from "./AdAcoBodyTitleList";

/**
 * The AdAcoBody model.
 */
export class AdAcoBody implements ModelBase {
    'adName'?: string;
    'appId'?: string;
    'appName': string;
    'avatarIconList'?: AdAcoBodyAvatarIconList[];
    'callToActionList'?: AdAcoBodyCallToActionList[];
    'cardList'?: AdAcoBodyCardList[];
    'countryCode'?: string[];
    'deeplinkList'?: AdAcoBodyDeeplinkList[];
    'displayNameList'?: AdAcoBodyDisplayNameList[];
    'landingPageUrls'?: AdAcoBodyLandingPageUrls[];
    'mediaInfoList'?: AdAcoBodyMediaInfoList[];
    'pageList'?: AdAcoBodyPageList[];
    'titleList'?: AdAcoBodyTitleList[];

    constructor() {
        this.appName = '';
    }

    /**
     * Returns an instance of AdAcoBody populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['adName'] !== undefined) {
            this['adName'] = ApiClient.convertToType(typedData['adName'], 'String') as string;
        }
        if (typedData['appId'] !== undefined) {
            this['appId'] = ApiClient.convertToType(typedData['appId'], 'String') as string;
        }
        if (typedData['appName'] !== undefined) {
            this['appName'] = ApiClient.convertToType(typedData['appName'], 'String') as string;
        }
        if (typedData['avatarIconList'] !== undefined) {
            this['avatarIconList'] = ApiClient.convertToType(
                typedData['avatarIconList'],
                createArraySpec(AdAcoBodyAvatarIconList)
            ) as AdAcoBodyAvatarIconList[];
        }
        if (typedData['callToActionList'] !== undefined) {
            this['callToActionList'] = ApiClient.convertToType(
                typedData['callToActionList'],
                createArraySpec(AdAcoBodyCallToActionList)
            ) as AdAcoBodyCallToActionList[];
        }
        if (typedData['cardList'] !== undefined) {
            this['cardList'] = ApiClient.convertToType(
                typedData['cardList'],
                createArraySpec(AdAcoBodyCardList)
            ) as AdAcoBodyCardList[];
        }
        if (typedData['countryCode'] !== undefined) {
            this['countryCode'] = ApiClient.convertToType(typedData['countryCode'], '[String]') as string[];
        }
        if (typedData['deeplinkList'] !== undefined) {
            this['deeplinkList'] = ApiClient.convertToType(
                typedData['deeplinkList'],
                createArraySpec(AdAcoBodyDeeplinkList)
            ) as AdAcoBodyDeeplinkList[];
        }
        if (typedData['displayNameList'] !== undefined) {
            this['displayNameList'] = ApiClient.convertToType(
                typedData['displayNameList'],
                createArraySpec(AdAcoBodyDisplayNameList)
            ) as AdAcoBodyDisplayNameList[];
        }
        if (typedData['landingPageUrls'] !== undefined) {
            this['landingPageUrls'] = ApiClient.convertToType(
                typedData['landingPageUrls'],
                createArraySpec(AdAcoBodyLandingPageUrls)
            ) as AdAcoBodyLandingPageUrls[];
        }
        if (typedData['mediaInfoList'] !== undefined) {
            this['mediaInfoList'] = ApiClient.convertToType(
                typedData['mediaInfoList'],
                createArraySpec(AdAcoBodyMediaInfoList)
            ) as AdAcoBodyMediaInfoList[];
        }
        if (typedData['pageList'] !== undefined) {
            this['pageList'] = ApiClient.convertToType(
                typedData['pageList'],
                createArraySpec(AdAcoBodyPageList)
            ) as AdAcoBodyPageList[];
        }
        if (typedData['titleList'] !== undefined) {
            this['titleList'] = ApiClient.convertToType(
                typedData['titleList'],
                createArraySpec(AdAcoBodyTitleList)
            ) as AdAcoBodyTitleList[];
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdAcoBody {
        const instance = new AdAcoBody();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdAcoBody {
        return AdAcoBody.fromObject(data);
    }
}