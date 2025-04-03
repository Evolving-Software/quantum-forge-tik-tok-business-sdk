import { ApiClient } from "../ApiClient";
import { type ModelBase, createArraySpec } from "../types";
import { AdgroupcreateActions } from "./AdgroupcreateActions";
import { AdgroupcreateAudienceRuleExclusions } from "./AdgroupcreateAudienceRuleExclusions";
import { AdgroupcreateAudienceRuleInclusions } from "./AdgroupcreateAudienceRuleInclusions";

/**
 * The AdgroupCreateBody model.
 */
export class AdgroupCreateBody implements ModelBase {
    'actions'?: AdgroupcreateActions;
    'adgroupName'?: string;
    'advertiserId'?: string;
    'ageGroups'?: string[];
    'androidOsv'?: string;
    'appId'?: string;
    'audienceIds'?: string[];
    'audienceRule'?: string;
    'audienceRuleExclusions'?: AdgroupcreateAudienceRuleExclusions;
    'audienceRuleInclusions'?: AdgroupcreateAudienceRuleInclusions;
    'audienceType'?: string;
    'autoTargetingEnabled'?: string;
    'billingEvent'?: string;
    'billingSpec'?: string;
    'blockedPangleAppIds'?: string[];
    'brandSafetyType'?: string;
    'budgetOptimizeOn'?: string;
    'campaignId'?: string;
    'carrierIds'?: string[];
    'catalogAuthorized'?: string;
    'catalogId'?: string;
    'comments'?: string;
    'contextualTagIds'?: string[];
    'conversionBid'?: string;
    'conversionId'?: string;
    'creativeMaterialMode'?: string;
    'dayparting'?: string;
    'deviceModelIds'?: string[];
    'devicePriceRanges'?: string[];
    'excludedAudienceIds'?: string[];
    'excludedCustomActions'?: string[];
    'excludedPangleAudiencePackageIds'?: string[];
    'frequency'?: string;
    'frequencySchedule'?: string;
    'gender'?: string;
    'householdIncome'?: string[];
    'identityAuthorizedBcId'?: string;
    'identityId'?: string;
    'identityType'?: string;
    'interestCategoryIds'?: string[];
    'interestKeywordIds'?: string[];
    'interestKeywords'?: string[];
    'internetStatus'?: string[];
    'ios14Targeting'?: string;
    'iosOsv'?: string;
    'isHfss'?: string;
    'languageIds'?: string[];
    'locationIds'?: string[];
    'minAndroidVersion'?: string;
    'minIosVersion'?: string;
    'networkTypes'?: string[];
    'nextDayRetention'?: string;
    'operatingSystem'?: string[];
    'operationSpec'?: string;
    'optimizationEvent'?: string;
    'optimizationGoal'?: string;
    'pacing'?: string;
    'pixelId'?: string;
    'placementIds'?: string[];
    'placementType'?: string;
    'productSource'?: string;
    'promotedObjectId'?: string;
    'promotedObjectType'?: string;
    'purchaseIntentionKeywordIds'?: string[];
    'roasBid'?: string;
    'schedule'?: string;
    'shoppingAds'?: string;
    'targetingExpansion'?: string;

    constructor() {
        // Initialize any required fields
    }

    /**
     * Returns an instance of AdgroupCreateBody populated with the given data
     */
    constructFromObject(data: unknown): this {
        const typedData = data as Record<string, unknown>;

        if (typedData['actions'] !== undefined) {
            this['actions'] = ApiClient.convertToType(typedData['actions'], AdgroupcreateActions) as AdgroupcreateActions;
        }
        if (typedData['adgroupName'] !== undefined) {
            this['adgroupName'] = ApiClient.convertToType(typedData['adgroupName'], 'String') as string;
        }
        if (typedData['advertiserId'] !== undefined) {
            this['advertiserId'] = ApiClient.convertToType(typedData['advertiserId'], 'String') as string;
        }
        if (typedData['ageGroups'] !== undefined) {
            this['ageGroups'] = ApiClient.convertToType(
                typedData['ageGroups'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['androidOsv'] !== undefined) {
            this['androidOsv'] = ApiClient.convertToType(typedData['androidOsv'], 'String') as string;
        }
        if (typedData['appId'] !== undefined) {
            this['appId'] = ApiClient.convertToType(typedData['appId'], 'String') as string;
        }
        if (typedData['audienceIds'] !== undefined) {
            this['audienceIds'] = ApiClient.convertToType(
                typedData['audienceIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['audienceRule'] !== undefined) {
            this['audienceRule'] = ApiClient.convertToType(typedData['audienceRule'], 'String') as string;
        }
        if (typedData['audienceRuleExclusions'] !== undefined) {
            this['audienceRuleExclusions'] = ApiClient.convertToType(
                typedData['audienceRuleExclusions'],
                AdgroupcreateAudienceRuleExclusions
            ) as AdgroupcreateAudienceRuleExclusions;
        }
        if (typedData['audienceRuleInclusions'] !== undefined) {
            this['audienceRuleInclusions'] = ApiClient.convertToType(
                typedData['audienceRuleInclusions'],
                AdgroupcreateAudienceRuleInclusions
            ) as AdgroupcreateAudienceRuleInclusions;
        }
        if (typedData['audienceType'] !== undefined) {
            this['audienceType'] = ApiClient.convertToType(typedData['audienceType'], 'String') as string;
        }
        if (typedData['autoTargetingEnabled'] !== undefined) {
            this['autoTargetingEnabled'] = ApiClient.convertToType(typedData['autoTargetingEnabled'], 'String') as string;
        }
        if (typedData['billingEvent'] !== undefined) {
            this['billingEvent'] = ApiClient.convertToType(typedData['billingEvent'], 'String') as string;
        }
        if (typedData['billingSpec'] !== undefined) {
            this['billingSpec'] = ApiClient.convertToType(typedData['billingSpec'], 'String') as string;
        }
        if (typedData['blockedPangleAppIds'] !== undefined) {
            this['blockedPangleAppIds'] = ApiClient.convertToType(
                typedData['blockedPangleAppIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['brandSafetyType'] !== undefined) {
            this['brandSafetyType'] = ApiClient.convertToType(typedData['brandSafetyType'], 'String') as string;
        }
        if (typedData['budgetOptimizeOn'] !== undefined) {
            this['budgetOptimizeOn'] = ApiClient.convertToType(typedData['budgetOptimizeOn'], 'String') as string;
        }
        if (typedData['campaignId'] !== undefined) {
            this['campaignId'] = ApiClient.convertToType(typedData['campaignId'], 'String') as string;
        }
        if (typedData['carrierIds'] !== undefined) {
            this['carrierIds'] = ApiClient.convertToType(
                typedData['carrierIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['catalogAuthorized'] !== undefined) {
            this['catalogAuthorized'] = ApiClient.convertToType(typedData['catalogAuthorized'], 'String') as string;
        }
        if (typedData['catalogId'] !== undefined) {
            this['catalogId'] = ApiClient.convertToType(typedData['catalogId'], 'String') as string;
        }
        if (typedData['comments'] !== undefined) {
            this['comments'] = ApiClient.convertToType(typedData['comments'], 'String') as string;
        }
        if (typedData['contextualTagIds'] !== undefined) {
            this['contextualTagIds'] = ApiClient.convertToType(
                typedData['contextualTagIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['conversionBid'] !== undefined) {
            this['conversionBid'] = ApiClient.convertToType(typedData['conversionBid'], 'String') as string;
        }
        if (typedData['conversionId'] !== undefined) {
            this['conversionId'] = ApiClient.convertToType(typedData['conversionId'], 'String') as string;
        }
        if (typedData['creativeMaterialMode'] !== undefined) {
            this['creativeMaterialMode'] = ApiClient.convertToType(typedData['creativeMaterialMode'], 'String') as string;
        }
        if (typedData['dayparting'] !== undefined) {
            this['dayparting'] = ApiClient.convertToType(typedData['dayparting'], 'String') as string;
        }
        if (typedData['deviceModelIds'] !== undefined) {
            this['deviceModelIds'] = ApiClient.convertToType(
                typedData['deviceModelIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['devicePriceRanges'] !== undefined) {
            this['devicePriceRanges'] = ApiClient.convertToType(
                typedData['devicePriceRanges'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['excludedAudienceIds'] !== undefined) {
            this['excludedAudienceIds'] = ApiClient.convertToType(
                typedData['excludedAudienceIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['excludedCustomActions'] !== undefined) {
            this['excludedCustomActions'] = ApiClient.convertToType(
                typedData['excludedCustomActions'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['excludedPangleAudiencePackageIds'] !== undefined) {
            this['excludedPangleAudiencePackageIds'] = ApiClient.convertToType(
                typedData['excludedPangleAudiencePackageIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['frequency'] !== undefined) {
            this['frequency'] = ApiClient.convertToType(typedData['frequency'], 'String') as string;
        }
        if (typedData['frequencySchedule'] !== undefined) {
            this['frequencySchedule'] = ApiClient.convertToType(typedData['frequencySchedule'], 'String') as string;
        }
        if (typedData['gender'] !== undefined) {
            this['gender'] = ApiClient.convertToType(typedData['gender'], 'String') as string;
        }
        if (typedData['householdIncome'] !== undefined) {
            this['householdIncome'] = ApiClient.convertToType(
                typedData['householdIncome'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['identityAuthorizedBcId'] !== undefined) {
            this['identityAuthorizedBcId'] = ApiClient.convertToType(typedData['identityAuthorizedBcId'], 'String') as string;
        }
        if (typedData['identityId'] !== undefined) {
            this['identityId'] = ApiClient.convertToType(typedData['identityId'], 'String') as string;
        }
        if (typedData['identityType'] !== undefined) {
            this['identityType'] = ApiClient.convertToType(typedData['identityType'], 'String') as string;
        }
        if (typedData['interestCategoryIds'] !== undefined) {
            this['interestCategoryIds'] = ApiClient.convertToType(
                typedData['interestCategoryIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['interestKeywordIds'] !== undefined) {
            this['interestKeywordIds'] = ApiClient.convertToType(
                typedData['interestKeywordIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['interestKeywords'] !== undefined) {
            this['interestKeywords'] = ApiClient.convertToType(
                typedData['interestKeywords'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['internetStatus'] !== undefined) {
            this['internetStatus'] = ApiClient.convertToType(
                typedData['internetStatus'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['ios14Targeting'] !== undefined) {
            this['ios14Targeting'] = ApiClient.convertToType(typedData['ios14Targeting'], 'String') as string;
        }
        if (typedData['iosOsv'] !== undefined) {
            this['iosOsv'] = ApiClient.convertToType(typedData['iosOsv'], 'String') as string;
        }
        if (typedData['isHfss'] !== undefined) {
            this['isHfss'] = ApiClient.convertToType(typedData['isHfss'], 'String') as string;
        }
        if (typedData['languageIds'] !== undefined) {
            this['languageIds'] = ApiClient.convertToType(
                typedData['languageIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['locationIds'] !== undefined) {
            this['locationIds'] = ApiClient.convertToType(
                typedData['locationIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['minAndroidVersion'] !== undefined) {
            this['minAndroidVersion'] = ApiClient.convertToType(typedData['minAndroidVersion'], 'String') as string;
        }
        if (typedData['minIosVersion'] !== undefined) {
            this['minIosVersion'] = ApiClient.convertToType(typedData['minIosVersion'], 'String') as string;
        }
        if (typedData['networkTypes'] !== undefined) {
            this['networkTypes'] = ApiClient.convertToType(
                typedData['networkTypes'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['nextDayRetention'] !== undefined) {
            this['nextDayRetention'] = ApiClient.convertToType(typedData['nextDayRetention'], 'String') as string;
        }
        if (typedData['operatingSystem'] !== undefined) {
            this['operatingSystem'] = ApiClient.convertToType(
                typedData['operatingSystem'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['operationSpec'] !== undefined) {
            this['operationSpec'] = ApiClient.convertToType(typedData['operationSpec'], 'String') as string;
        }
        if (typedData['optimizationEvent'] !== undefined) {
            this['optimizationEvent'] = ApiClient.convertToType(typedData['optimizationEvent'], 'String') as string;
        }
        if (typedData['optimizationGoal'] !== undefined) {
            this['optimizationGoal'] = ApiClient.convertToType(typedData['optimizationGoal'], 'String') as string;
        }
        if (typedData['pacing'] !== undefined) {
            this['pacing'] = ApiClient.convertToType(typedData['pacing'], 'String') as string;
        }
        if (typedData['pixelId'] !== undefined) {
            this['pixelId'] = ApiClient.convertToType(typedData['pixelId'], 'String') as string;
        }
        if (typedData['placementIds'] !== undefined) {
            this['placementIds'] = ApiClient.convertToType(
                typedData['placementIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['placementType'] !== undefined) {
            this['placementType'] = ApiClient.convertToType(typedData['placementType'], 'String') as string;
        }
        if (typedData['productSource'] !== undefined) {
            this['productSource'] = ApiClient.convertToType(typedData['productSource'], 'String') as string;
        }
        if (typedData['promotedObjectId'] !== undefined) {
            this['promotedObjectId'] = ApiClient.convertToType(typedData['promotedObjectId'], 'String') as string;
        }
        if (typedData['promotedObjectType'] !== undefined) {
            this['promotedObjectType'] = ApiClient.convertToType(typedData['promotedObjectType'], 'String') as string;
        }
        if (typedData['purchaseIntentionKeywordIds'] !== undefined) {
            this['purchaseIntentionKeywordIds'] = ApiClient.convertToType(
                typedData['purchaseIntentionKeywordIds'],
                createArraySpec('String')
            ) as string[];
        }
        if (typedData['roasBid'] !== undefined) {
            this['roasBid'] = ApiClient.convertToType(typedData['roasBid'], 'String') as string;
        }
        if (typedData['schedule'] !== undefined) {
            this['schedule'] = ApiClient.convertToType(typedData['schedule'], 'String') as string;
        }
        if (typedData['shoppingAds'] !== undefined) {
            this['shoppingAds'] = ApiClient.convertToType(typedData['shoppingAds'], 'String') as string;
        }
        if (typedData['targetingExpansion'] !== undefined) {
            this['targetingExpansion'] = ApiClient.convertToType(typedData['targetingExpansion'], 'String') as string;
        }

        return this;
    }

    /**
     * Creates a new instance from a plain object
     */
    static fromObject(data: unknown): AdgroupCreateBody {
        const instance = new AdgroupCreateBody();
        return instance.constructFromObject(data);
    }

    /**
     * Static helper method to construct an instance from object data
     */
    static constructFromObject(data: unknown): AdgroupCreateBody {
        return AdgroupCreateBody.fromObject(data);
    }
}
