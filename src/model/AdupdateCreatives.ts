import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdcreateDisclaimerClickableTexts } from "./AdcreateDisclaimerClickableTexts";

/**
 * The AdupdateCreatives model.
 */
export class AdupdateCreatives implements ModelBase {
    'adId'?: string;
    'adName'?: string;
    'appId'?: string;
    'appName'?: string;
    'avatarIconList'?: string[];
    'callToActionId'?: string;
    'cardId'?: string;
    'clickTrackingUrl'?: string;
    'creativeName'?: string;
    'darkPostStatus'?: string;
    'deeplink'?: string;
    'disclaimerClickableTexts'?: AdcreateDisclaimerClickableTexts[];
    'disclaimerText'?: string;
    'displayName'?: string;
    'fallbackType'?: string;
    'identityId'?: string;
    'identityType'?: string;
    'imageIds'?: string[];
    'ineligibleReason'?: string;
    'isNewStructure'?: string;
    'landingPageUrl'?: string;
    'mediaInfoList'?: string[];
    'networkType'?: string[];
    'pageId'?: string;
    'pageName'?: string;
    'playableUrl'?: string;
    'profileId'?: string;
    'promotedObjectId'?: string;
    'promotedObjectType'?: string;
    'status'?: string;
    'title'?: string;
    'trackingInfo'?: string;
    'trackingPixel'?: string;
    'videoId'?: string;
    'videoInfo'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdupdateCreatives populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['adId'] !== undefined) {
            this['adId'] = ApiClient.convertToType(typedData['adId'], 'String') as string;
        }
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
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['callToActionId'] !== undefined) {
            this['callToActionId'] = ApiClient.convertToType(typedData['callToActionId'], 'String') as string;
        }
        if (typedData['cardId'] !== undefined) {
            this['cardId'] = ApiClient.convertToType(typedData['cardId'], 'String') as string;
        }
        if (typedData['clickTrackingUrl'] !== undefined) {
            this['clickTrackingUrl'] = ApiClient.convertToType(typedData['clickTrackingUrl'], 'String') as string;
        }
        if (typedData['creativeName'] !== undefined) {
            this['creativeName'] = ApiClient.convertToType(typedData['creativeName'], 'String') as string;
        }
        if (typedData['darkPostStatus'] !== undefined) {
            this['darkPostStatus'] = ApiClient.convertToType(typedData['darkPostStatus'], 'String') as string;
        }
        if (typedData['deeplink'] !== undefined) {
            this['deeplink'] = ApiClient.convertToType(typedData['deeplink'], 'String') as string;
        }
        if (typedData['disclaimerClickableTexts'] !== undefined) {
            this['disclaimerClickableTexts'] = ApiClient.convertToType(
                typedData['disclaimerClickableTexts'],
                createArraySpec(AdcreateDisclaimerClickableTexts)
            ) as AdcreateDisclaimerClickableTexts[];
        }
        if (typedData['disclaimerText'] !== undefined) {
            this['disclaimerText'] = ApiClient.convertToType(typedData['disclaimerText'], 'String') as string;
        }
        if (typedData['displayName'] !== undefined) {
            this['displayName'] = ApiClient.convertToType(typedData['displayName'], 'String') as string;
        }
        if (typedData['fallbackType'] !== undefined) {
            this['fallbackType'] = ApiClient.convertToType(typedData['fallbackType'], 'String') as string;
        }
        if (typedData['identityId'] !== undefined) {
            this['identityId'] = ApiClient.convertToType(typedData['identityId'], 'String') as string;
        }
        if (typedData['identityType'] !== undefined) {
            this['identityType'] = ApiClient.convertToType(typedData['identityType'], 'String') as string;
        }
        if (typedData['imageIds'] !== undefined) {
            this['imageIds'] = ApiClient.convertToType(
                typedData['imageIds'], 
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['ineligibleReason'] !== undefined) {
            this['ineligibleReason'] = ApiClient.convertToType(typedData['ineligibleReason'], 'String') as string;
        }
        if (typedData['isNewStructure'] !== undefined) {
            this['isNewStructure'] = ApiClient.convertToType(typedData['isNewStructure'], 'String') as string;
        }
        if (typedData['landingPageUrl'] !== undefined) {
            this['landingPageUrl'] = ApiClient.convertToType(typedData['landingPageUrl'], 'String') as string;
        }
        if (typedData['mediaInfoList'] !== undefined) {
            this['mediaInfoList'] = ApiClient.convertToType(
                typedData['mediaInfoList'], 
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['networkType'] !== undefined) {
            this['networkType'] = ApiClient.convertToType(
                typedData['networkType'], 
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['pageId'] !== undefined) {
            this['pageId'] = ApiClient.convertToType(typedData['pageId'], 'String') as string;
        }
        if (typedData['pageName'] !== undefined) {
            this['pageName'] = ApiClient.convertToType(typedData['pageName'], 'String') as string;
        }
        if (typedData['playableUrl'] !== undefined) {
            this['playableUrl'] = ApiClient.convertToType(typedData['playableUrl'], 'String') as string;
        }
        if (typedData['profileId'] !== undefined) {
            this['profileId'] = ApiClient.convertToType(typedData['profileId'], 'String') as string;
        }
        if (typedData['promotedObjectId'] !== undefined) {
            this['promotedObjectId'] = ApiClient.convertToType(typedData['promotedObjectId'], 'String') as string;
        }
        if (typedData['promotedObjectType'] !== undefined) {
            this['promotedObjectType'] = ApiClient.convertToType(typedData['promotedObjectType'], 'String') as string;
        }
        if (typedData['status'] !== undefined) {
            this['status'] = ApiClient.convertToType(typedData['status'], 'String') as string;
        }
        if (typedData['title'] !== undefined) {
            this['title'] = ApiClient.convertToType(typedData['title'], 'String') as string;
        }
        if (typedData['trackingInfo'] !== undefined) {
            this['trackingInfo'] = ApiClient.convertToType(typedData['trackingInfo'], 'String') as string;
        }
        if (typedData['trackingPixel'] !== undefined) {
            this['trackingPixel'] = ApiClient.convertToType(typedData['trackingPixel'], 'String') as string;
        }
        if (typedData['videoId'] !== undefined) {
            this['videoId'] = ApiClient.convertToType(typedData['videoId'], 'String') as string;
        }
        if (typedData['videoInfo'] !== undefined) {
            this['videoInfo'] = ApiClient.convertToType(typedData['videoInfo'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdupdateCreatives {
        const instance = new AdupdateCreatives();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdupdateCreatives {
        return AdupdateCreatives.fromObject(data);
    }
}
