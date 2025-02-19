/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import ApiClient from './ApiClient';
import {AdAcoBody} from './model/AdAcoBody';
import {AdAcoBodyAvatarIcon} from './model/AdAcoBodyAvatarIcon';
import {AdAcoBodyAvatarIconList} from './model/AdAcoBodyAvatarIconList';
import {AdAcoBodyCallToActionList} from './model/AdAcoBodyCallToActionList';
import {AdAcoBodyCardList} from './model/AdAcoBodyCardList';
import {AdAcoBodyCommonMaterial} from './model/AdAcoBodyCommonMaterial';
import {AdAcoBodyCommonMaterialTrackingInfo} from './model/AdAcoBodyCommonMaterialTrackingInfo';
import {AdAcoBodyDeeplinkList} from './model/AdAcoBodyDeeplinkList';
import {AdAcoBodyDisplayNameList} from './model/AdAcoBodyDisplayNameList';
import {AdAcoBodyLandingPageUrls} from './model/AdAcoBodyLandingPageUrls';
import {AdAcoBodyMediaInfo} from './model/AdAcoBodyMediaInfo';
import {AdAcoBodyMediaInfoImageInfo} from './model/AdAcoBodyMediaInfoImageInfo';
import {AdAcoBodyMediaInfoList} from './model/AdAcoBodyMediaInfoList';
import {AdAcoBodyMediaInfoVideoInfo} from './model/AdAcoBodyMediaInfoVideoInfo';
import {AdAcoBodyPageList} from './model/AdAcoBodyPageList';
import {AdAcoBodyTitleList} from './model/AdAcoBodyTitleList';
import {AdAcoUpdateBody} from './model/AdAcoUpdateBody';
import {AdCreateBody} from './model/AdCreateBody';
import {AdStatusUpdateBody} from './model/AdStatusUpdateBody';
import {AdUpdateBody} from './model/AdUpdateBody';
import {AdUploadBody} from './model/AdUploadBody';
import {AdcreateCreatives} from './model/AdcreateCreatives';
import {AdcreateDisclaimerClickableTexts} from './model/AdcreateDisclaimerClickableTexts';
import {AdcreateDisclaimerText} from './model/AdcreateDisclaimerText';
import {AdgroupCreateBody} from './model/AdgroupCreateBody';
import {AdgroupStatusUpdateBody} from './model/AdgroupStatusUpdateBody';
import {AdgroupUpdateBody} from './model/AdgroupUpdateBody';
import {AdgroupcreateActions} from './model/AdgroupcreateActions';
import {AdgroupcreateAudienceRule} from './model/AdgroupcreateAudienceRule';
import {AdgroupcreateAudienceRuleExclusions} from './model/AdgroupcreateAudienceRuleExclusions';
import {AdgroupcreateAudienceRuleExclusionsEventSources} from './model/AdgroupcreateAudienceRuleExclusionsEventSources';
import {AdgroupcreateAudienceRuleExclusionsFilter} from './model/AdgroupcreateAudienceRuleExclusionsFilter';
import {AdgroupcreateAudienceRuleExclusionsFilterFilters} from './model/AdgroupcreateAudienceRuleExclusionsFilterFilters';
import {AdgroupcreateAudienceRuleExclusionsRules} from './model/AdgroupcreateAudienceRuleExclusionsRules';
import {AdgroupcreateAudienceRuleInclusions} from './model/AdgroupcreateAudienceRuleInclusions';
import {AdgroupcreateExcludedCustomActions} from './model/AdgroupcreateExcludedCustomActions';
import {AdgroupcreateIncludedCustomActions} from './model/AdgroupcreateIncludedCustomActions';
import {AdgroupcreateTargetingExpansion} from './model/AdgroupcreateTargetingExpansion';
import {AdminDeleteBody} from './model/AdminDeleteBody';
import {AdupdateCreatives} from './model/AdupdateCreatives';
import {AdvertiserCreateBody} from './model/AdvertiserCreateBody';
import {AdvertiserUpdateBody} from './model/AdvertiserUpdateBody';
import {AdvertiserupdateQualificationImages} from './model/AdvertiserupdateQualificationImages';
import {AssetAssignBody} from './model/AssetAssignBody';
import {AssetDeleteBody} from './model/AssetDeleteBody';
import {AssetGroupCreateBody} from './model/AssetGroupCreateBody';
import {AssetGroupDeleteBody} from './model/AssetGroupDeleteBody';
import {AssetGroupUpdateBody} from './model/AssetGroupUpdateBody';
import {AssetUnassignBody} from './model/AssetUnassignBody';
import {BcTransferBody} from './model/BcTransferBody';
import {BcadvertisercreateAdvertiserInfo} from './model/BcadvertisercreateAdvertiserInfo';
import {BcadvertisercreateBillingGroupInfo} from './model/BcadvertisercreateBillingGroupInfo';
import {BcadvertisercreateBillingInfo} from './model/BcadvertisercreateBillingInfo';
import {BcadvertisercreateContactInfo} from './model/BcadvertisercreateContactInfo';
import {BcadvertisercreateCustomerInfo} from './model/BcadvertisercreateCustomerInfo';
import {BcadvertisercreateQualificationInfo} from './model/BcadvertisercreateQualificationInfo';
import {BcassetGroupcreateAssets} from './model/BcassetGroupcreateAssets';
import {BcassetGroupcreateMembers} from './model/BcassetGroupcreateMembers';
import {BcmemberinviteExtUserRole} from './model/BcmemberinviteExtUserRole';
import {BidRecommendBody} from './model/BidRecommendBody';
import {BillingGroupCreateBody} from './model/BillingGroupCreateBody';
import {BillingGroupUpdateBody} from './model/BillingGroupUpdateBody';
import {CampaignCreateBody} from './model/CampaignCreateBody';
import {CampaignStatusUpdateBody} from './model/CampaignStatusUpdateBody';
import {CampaignUpdateBody} from './model/CampaignUpdateBody';
import {CatalogCapitalizeBody} from './model/CatalogCapitalizeBody';
import {CatalogCreateBody} from './model/CatalogCreateBody';
import {CatalogDeleteBody} from './model/CatalogDeleteBody';
import {CatalogUpdateBody} from './model/CatalogUpdateBody';
import {CatalogcreateCatalogConf} from './model/CatalogcreateCatalogConf';
import {CreativeportfoliocreateAdvancedAudioInfo} from './model/CreativeportfoliocreateAdvancedAudioInfo';
import {CreativeportfoliocreateAdvancedGestureIcon} from './model/CreativeportfoliocreateAdvancedGestureIcon';
import {CreativeportfoliocreateBadgeImageInfo} from './model/CreativeportfoliocreateBadgeImageInfo';
import {CreativeportfoliocreateBadgePosition} from './model/CreativeportfoliocreateBadgePosition';
import {CreativeportfoliocreatePortfolioContent} from './model/CreativeportfoliocreatePortfolioContent';
import {CreativeportfoliocreateStickerParam} from './model/CreativeportfoliocreateStickerParam';
import {CustomAudienceApplyBody} from './model/CustomAudienceApplyBody';
import {CustomAudienceCreateBody} from './model/CustomAudienceCreateBody';
import {CustomAudienceDeleteBody} from './model/CustomAudienceDeleteBody';
import {CustomAudienceShareBody} from './model/CustomAudienceShareBody';
import {CustomAudienceUpdateBody} from './model/CustomAudienceUpdateBody';
import {DmpcustomAudienceapplyContextInfo} from './model/DmpcustomAudienceapplyContextInfo';
import {DmpcustomAudiencefileuploadContextInfo} from './model/DmpcustomAudiencefileuploadContextInfo';
import {DmpcustomAudiencelookalikecreateContextInfo} from './model/DmpcustomAudiencelookalikecreateContextInfo';
import {DmpcustomAudiencelookalikecreateLookalikeSpec} from './model/DmpcustomAudiencelookalikecreateLookalikeSpec';
import {DmpcustomAudiencerulecreateRuleSpec} from './model/DmpcustomAudiencerulecreateRuleSpec';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet} from './model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet} from './model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters} from './model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters} from './model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters';
import {DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules} from './model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet} from './model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet} from './model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters} from './model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters} from './model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters';
import {DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules} from './model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules';
import {DmpsavedAudiencecreateActions} from './model/DmpsavedAudiencecreateActions';
import {EventsourceBindBody} from './model/EventsourceBindBody';
import {EventsourceUnbindBody} from './model/EventsourceUnbindBody';
import {FeedDeleteBody} from './model/FeedDeleteBody';
import {FileImageAdUpload} from './model/FileImageAdUpload';
import {FileUploadBody} from './model/FileUploadBody';
import {FilteringAdGet} from './model/FilteringAdGet';
import {FilteringAdgroupGet} from './model/FilteringAdgroupGet';
import {FilteringAdvertiserBalanceGet} from './model/FilteringAdvertiserBalanceGet';
import {FilteringAdvertiserTransactionGet} from './model/FilteringAdvertiserTransactionGet';
import {FilteringBcAccountTransactionGet} from './model/FilteringBcAccountTransactionGet';
import {FilteringBcAssetAdminGet} from './model/FilteringBcAssetAdminGet';
import {FilteringBcAssetGet} from './model/FilteringBcAssetGet';
import {FilteringBcAssetGroupGet} from './model/FilteringBcAssetGroupGet';
import {FilteringBcAssetGroupList} from './model/FilteringBcAssetGroupList';
import {FilteringBcAssetMemberGet} from './model/FilteringBcAssetMemberGet';
import {FilteringBcBillingGroupGet} from './model/FilteringBcBillingGroupGet';
import {FilteringBcGet} from './model/FilteringBcGet';
import {FilteringBcMemberGet} from './model/FilteringBcMemberGet';
import {FilteringBcPartnerAssetGet} from './model/FilteringBcPartnerAssetGet';
import {FilteringBcPartnerGet} from './model/FilteringBcPartnerGet';
import {FilteringBcTransactionGet} from './model/FilteringBcTransactionGet';
import {FilteringCampaignGet} from './model/FilteringCampaignGet';
import {FilteringReportIntegratedGet} from './model/FilteringReportIntegratedGet';
import {FilteringVideoAdSearch} from './model/FilteringVideoAdSearch';
import {IdentityCreateBody} from './model/IdentityCreateBody';
import {ImageUploadBody} from './model/ImageUploadBody';
import {InlineResponse200} from './model/InlineResponse200';
import {LinkUpdateBody} from './model/LinkUpdateBody';
import {LookalikeCreateBody} from './model/LookalikeCreateBody';
import {LookalikeUpdateBody} from './model/LookalikeUpdateBody';
import {MaterialStatusUpdateBody} from './model/MaterialStatusUpdateBody';
import {MemberDeleteBody} from './model/MemberDeleteBody';
import {MemberInviteBody} from './model/MemberInviteBody';
import {MemberUpdateBody} from './model/MemberUpdateBody';
import {Oauth2AccessTokenBody} from './model/Oauth2AccessTokenBody';
import {PartnerAddBody} from './model/PartnerAddBody';
import {PartnerDeleteBody} from './model/PartnerDeleteBody';
import {PixelBatchBody} from './model/PixelBatchBody';
import {PixelContent} from './model/PixelContent';
import {PixelContext} from './model/PixelContext';
import {PixelContextAd} from './model/PixelContextAd';
import {PixelContextPage} from './model/PixelContextPage';
import {PixelContextUser} from './model/PixelContextUser';
import {PixelProperties} from './model/PixelProperties';
import PixelTrackBody from './model/PixelTrackBody';
import PortfolioCreateBody from './model/PortfolioCreateBody';
import {PixelTransferBody} from './model/PixelTransferBody';
import {PixelbatchBatch} from './model/PixelbatchBatch';
import {ProductDeleteBody} from './model/ProductDeleteBody';
import {ProductFileBody} from './model/ProductFileBody';
import {RuleCreateBody} from './model/RuleCreateBody';
import {SavedAudienceCreateBody} from './model/SavedAudienceCreateBody';
import {SavedAudienceDeleteBody} from './model/SavedAudienceDeleteBody';
import {ShareCancelBody} from './model/ShareCancelBody';
import {TargetingCategoryRecommendBody} from './model/TargetingCategoryRecommendBody';
import TargetingInfoBody from './model/TargetingInfoBody';
import TargetingSearchBody from './model/TargetingSearchBody';
import {AccountApi} from './api/AccountApi';
import {AdApi} from './api/AdApi';
import {AdAcoApi} from './api/AdAcoApi';
import {AdgroupApi} from './api/AdgroupApi';
import {AudienceApi} from './api/AudienceApi';
import {AuthenticationApi} from './api/AuthenticationApi';
import {BCApi} from './api/BCApi';
import {CampaignCreationApi} from './api/CampaignCreationApi';
import {CatalogApi} from './api/CatalogApi';
import {CreativeAssetApi} from './api/CreativeAssetApi';
import {EventCallbackApi} from './api/EventCallbackApi';
import {FileApi} from './api/FileApi';
import {IdentityApi} from './api/IdentityApi';
import {MeasurementApi} from './api/MeasurementApi';
import {RecommendToolApi} from './api/RecommendToolApi';
import {ReportingApi} from './api/ReportingApi';
import {ToolApi} from './api/ToolApi';

/**
* Comprehensive_collection_of_client_libraries_that_enable_our_developers_to_build_software_to_integrate_with_Business_API_faster_and_in_a_more_standardized_way_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var js_sdk = require('index'); // See note below*.
* var xxxSvc = new js_sdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new js_sdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new js_sdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new js_sdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdAcoBody model constructor.
     * @property {module:model/AdAcoBody}
     */
    AdAcoBody,

    /**
     * The AdAcoBodyAvatarIcon model constructor.
     * @property {module:model/AdAcoBodyAvatarIcon}
     */
    AdAcoBodyAvatarIcon,

    /**
     * The AdAcoBodyAvatarIconList model constructor.
     * @property {module:model/AdAcoBodyAvatarIconList}
     */
    AdAcoBodyAvatarIconList,

    /**
     * The AdAcoBodyCallToActionList model constructor.
     * @property {module:model/AdAcoBodyCallToActionList}
     */
    AdAcoBodyCallToActionList,

    /**
     * The AdAcoBodyCardList model constructor.
     * @property {module:model/AdAcoBodyCardList}
     */
    AdAcoBodyCardList,

    /**
     * The AdAcoBodyCommonMaterial model constructor.
     * @property {module:model/AdAcoBodyCommonMaterial}
     */
    AdAcoBodyCommonMaterial,

    /**
     * The AdAcoBodyCommonMaterialTrackingInfo model constructor.
     * @property {module:model/AdAcoBodyCommonMaterialTrackingInfo}
     */
    AdAcoBodyCommonMaterialTrackingInfo,

    /**
     * The AdAcoBodyDeeplinkList model constructor.
     * @property {module:model/AdAcoBodyDeeplinkList}
     */
    AdAcoBodyDeeplinkList,

    /**
     * The AdAcoBodyDisplayNameList model constructor.
     * @property {module:model/AdAcoBodyDisplayNameList}
     */
    AdAcoBodyDisplayNameList,

    /**
     * The AdAcoBodyLandingPageUrls model constructor.
     * @property {module:model/AdAcoBodyLandingPageUrls}
     */
    AdAcoBodyLandingPageUrls,

    /**
     * The AdAcoBodyMediaInfo model constructor.
     * @property {module:model/AdAcoBodyMediaInfo}
     */
    AdAcoBodyMediaInfo,

    /**
     * The AdAcoBodyMediaInfoImageInfo model constructor.
     * @property {module:model/AdAcoBodyMediaInfoImageInfo}
     */
    AdAcoBodyMediaInfoImageInfo,

    /**
     * The AdAcoBodyMediaInfoList model constructor.
     * @property {module:model/AdAcoBodyMediaInfoList}
     */
    AdAcoBodyMediaInfoList,

    /**
     * The AdAcoBodyMediaInfoVideoInfo model constructor.
     * @property {module:model/AdAcoBodyMediaInfoVideoInfo}
     */
    AdAcoBodyMediaInfoVideoInfo,

    /**
     * The AdAcoBodyPageList model constructor.
     * @property {module:model/AdAcoBodyPageList}
     */
    AdAcoBodyPageList,

    /**
     * The AdAcoBodyTitleList model constructor.
     * @property {module:model/AdAcoBodyTitleList}
     */
    AdAcoBodyTitleList,

    /**
     * The AdAcoUpdateBody model constructor.
     * @property {module:model/AdAcoUpdateBody}
     */
    AdAcoUpdateBody,

    /**
     * The AdCreateBody model constructor.
     * @property {module:model/AdCreateBody}
     */
    AdCreateBody,

    /**
     * The AdStatusUpdateBody model constructor.
     * @property {module:model/AdStatusUpdateBody}
     */
    AdStatusUpdateBody,

    /**
     * The AdUpdateBody model constructor.
     * @property {module:model/AdUpdateBody}
     */
    AdUpdateBody,

    /**
     * The AdUploadBody model constructor.
     * @property {module:model/AdUploadBody}
     */
    AdUploadBody,

    /**
     * The AdcreateCreatives model constructor.
     * @property {module:model/AdcreateCreatives}
     */
    AdcreateCreatives,

    /**
     * The AdcreateDisclaimerClickableTexts model constructor.
     * @property {module:model/AdcreateDisclaimerClickableTexts}
     */
    AdcreateDisclaimerClickableTexts,

    /**
     * The AdcreateDisclaimerText model constructor.
     * @property {module:model/AdcreateDisclaimerText}
     */
    AdcreateDisclaimerText,

    /**
     * The AdgroupCreateBody model constructor.
     * @property {module:model/AdgroupCreateBody}
     */
    AdgroupCreateBody,

    /**
     * The AdgroupStatusUpdateBody model constructor.
     * @property {module:model/AdgroupStatusUpdateBody}
     */
    AdgroupStatusUpdateBody,

    /**
     * The AdgroupUpdateBody model constructor.
     * @property {module:model/AdgroupUpdateBody}
     */
    AdgroupUpdateBody,

    /**
     * The AdgroupcreateActions model constructor.
     * @property {module:model/AdgroupcreateActions}
     */
    AdgroupcreateActions,

    /**
     * The AdgroupcreateAudienceRule model constructor.
     * @property {module:model/AdgroupcreateAudienceRule}
     */
    AdgroupcreateAudienceRule,

    /**
     * The AdgroupcreateAudienceRuleExclusions model constructor.
     * @property {module:model/AdgroupcreateAudienceRuleExclusions}
     */
    AdgroupcreateAudienceRuleExclusions,

    /**
     * The AdgroupcreateAudienceRuleExclusionsEventSources model constructor.
     * @property {module:model/AdgroupcreateAudienceRuleExclusionsEventSources}
     */
    AdgroupcreateAudienceRuleExclusionsEventSources,

    /**
     * The AdgroupcreateAudienceRuleExclusionsFilter model constructor.
     * @property {module:model/AdgroupcreateAudienceRuleExclusionsFilter}
     */
    AdgroupcreateAudienceRuleExclusionsFilter,

    /**
     * The AdgroupcreateAudienceRuleExclusionsFilterFilters model constructor.
     * @property {module:model/AdgroupcreateAudienceRuleExclusionsFilterFilters}
     */
    AdgroupcreateAudienceRuleExclusionsFilterFilters,

    /**
     * The AdgroupcreateAudienceRuleExclusionsRules model constructor.
     * @property {module:model/AdgroupcreateAudienceRuleExclusionsRules}
     */
    AdgroupcreateAudienceRuleExclusionsRules,

    /**
     * The AdgroupcreateAudienceRuleInclusions model constructor.
     * @property {module:model/AdgroupcreateAudienceRuleInclusions}
     */
    AdgroupcreateAudienceRuleInclusions,

    /**
     * The AdgroupcreateExcludedCustomActions model constructor.
     * @property {module:model/AdgroupcreateExcludedCustomActions}
     */
    AdgroupcreateExcludedCustomActions,

    /**
     * The AdgroupcreateIncludedCustomActions model constructor.
     * @property {module:model/AdgroupcreateIncludedCustomActions}
     */
    AdgroupcreateIncludedCustomActions,

    /**
     * The AdgroupcreateTargetingExpansion model constructor.
     * @property {module:model/AdgroupcreateTargetingExpansion}
     */
    AdgroupcreateTargetingExpansion,

    /**
     * The AdminDeleteBody model constructor.
     * @property {module:model/AdminDeleteBody}
     */
    AdminDeleteBody,

    /**
     * The AdupdateCreatives model constructor.
     * @property {module:model/AdupdateCreatives}
     */
    AdupdateCreatives,

    /**
     * The AdvertiserCreateBody model constructor.
     * @property {module:model/AdvertiserCreateBody}
     */
    AdvertiserCreateBody,

    /**
     * The AdvertiserUpdateBody model constructor.
     * @property {module:model/AdvertiserUpdateBody}
     */
    AdvertiserUpdateBody,

    /**
     * The AdvertiserupdateQualificationImages model constructor.
     * @property {module:model/AdvertiserupdateQualificationImages}
     */
    AdvertiserupdateQualificationImages,

    /**
     * The AssetAssignBody model constructor.
     * @property {module:model/AssetAssignBody}
     */
    AssetAssignBody,

    /**
     * The AssetDeleteBody model constructor.
     * @property {module:model/AssetDeleteBody}
     */
    AssetDeleteBody,

    /**
     * The AssetGroupCreateBody model constructor.
     * @property {module:model/AssetGroupCreateBody}
     */
    AssetGroupCreateBody,

    /**
     * The AssetGroupDeleteBody model constructor.
     * @property {module:model/AssetGroupDeleteBody}
     */
    AssetGroupDeleteBody,

    /**
     * The AssetGroupUpdateBody model constructor.
     * @property {module:model/AssetGroupUpdateBody}
     */
    AssetGroupUpdateBody,

    /**
     * The AssetUnassignBody model constructor.
     * @property {module:model/AssetUnassignBody}
     */
    AssetUnassignBody,

    /**
     * The BcTransferBody model constructor.
     * @property {module:model/BcTransferBody}
     */
    BcTransferBody,

    /**
     * The BcadvertisercreateAdvertiserInfo model constructor.
     * @property {module:model/BcadvertisercreateAdvertiserInfo}
     */
    BcadvertisercreateAdvertiserInfo,

    /**
     * The BcadvertisercreateBillingGroupInfo model constructor.
     * @property {module:model/BcadvertisercreateBillingGroupInfo}
     */
    BcadvertisercreateBillingGroupInfo,

    /**
     * The BcadvertisercreateBillingInfo model constructor.
     * @property {module:model/BcadvertisercreateBillingInfo}
     */
    BcadvertisercreateBillingInfo,

    /**
     * The BcadvertisercreateContactInfo model constructor.
     * @property {module:model/BcadvertisercreateContactInfo}
     */
    BcadvertisercreateContactInfo,

    /**
     * The BcadvertisercreateCustomerInfo model constructor.
     * @property {module:model/BcadvertisercreateCustomerInfo}
     */
    BcadvertisercreateCustomerInfo,

    /**
     * The BcadvertisercreateQualificationInfo model constructor.
     * @property {module:model/BcadvertisercreateQualificationInfo}
     */
    BcadvertisercreateQualificationInfo,

    /**
     * The BcassetGroupcreateAssets model constructor.
     * @property {module:model/BcassetGroupcreateAssets}
     */
    BcassetGroupcreateAssets,

    /**
     * The BcassetGroupcreateMembers model constructor.
     * @property {module:model/BcassetGroupcreateMembers}
     */
    BcassetGroupcreateMembers,

    /**
     * The BcmemberinviteExtUserRole model constructor.
     * @property {module:model/BcmemberinviteExtUserRole}
     */
    BcmemberinviteExtUserRole,

    /**
     * The BidRecommendBody model constructor.
     * @property {module:model/BidRecommendBody}
     */
    BidRecommendBody,

    /**
     * The BillingGroupCreateBody model constructor.
     * @property {module:model/BillingGroupCreateBody}
     */
    BillingGroupCreateBody,

    /**
     * The BillingGroupUpdateBody model constructor.
     * @property {module:model/BillingGroupUpdateBody}
     */
    BillingGroupUpdateBody,

    /**
     * The CampaignCreateBody model constructor.
     * @property {module:model/CampaignCreateBody}
     */
    CampaignCreateBody,

    /**
     * The CampaignStatusUpdateBody model constructor.
     * @property {module:model/CampaignStatusUpdateBody}
     */
    CampaignStatusUpdateBody,

    /**
     * The CampaignUpdateBody model constructor.
     * @property {module:model/CampaignUpdateBody}
     */
    CampaignUpdateBody,

    /**
     * The CatalogCapitalizeBody model constructor.
     * @property {module:model/CatalogCapitalizeBody}
     */
    CatalogCapitalizeBody,

    /**
     * The CatalogCreateBody model constructor.
     * @property {module:model/CatalogCreateBody}
     */
    CatalogCreateBody,

    /**
     * The CatalogDeleteBody model constructor.
     * @property {module:model/CatalogDeleteBody}
     */
    CatalogDeleteBody,

    /**
     * The CatalogUpdateBody model constructor.
     * @property {module:model/CatalogUpdateBody}
     */
    CatalogUpdateBody,

    /**
     * The CatalogcreateCatalogConf model constructor.
     * @property {module:model/CatalogcreateCatalogConf}
     */
    CatalogcreateCatalogConf,

    /**
     * The CreativeportfoliocreateAdvancedAudioInfo model constructor.
     * @property {module:model/CreativeportfoliocreateAdvancedAudioInfo}
     */
    CreativeportfoliocreateAdvancedAudioInfo,

    /**
     * The CreativeportfoliocreateAdvancedGestureIcon model constructor.
     * @property {module:model/CreativeportfoliocreateAdvancedGestureIcon}
     */
    CreativeportfoliocreateAdvancedGestureIcon,

    /**
     * The CreativeportfoliocreateBadgeImageInfo model constructor.
     * @property {module:model/CreativeportfoliocreateBadgeImageInfo}
     */
    CreativeportfoliocreateBadgeImageInfo,

    /**
     * The CreativeportfoliocreateBadgePosition model constructor.
     * @property {module:model/CreativeportfoliocreateBadgePosition}
     */
    CreativeportfoliocreateBadgePosition,

    /**
     * The CreativeportfoliocreatePortfolioContent model constructor.
     * @property {module:model/CreativeportfoliocreatePortfolioContent}
     */
    CreativeportfoliocreatePortfolioContent,

    /**
     * The CreativeportfoliocreateStickerParam model constructor.
     * @property {module:model/CreativeportfoliocreateStickerParam}
     */
    CreativeportfoliocreateStickerParam,

    /**
     * The CustomAudienceApplyBody model constructor.
     * @property {module:model/CustomAudienceApplyBody}
     */
    CustomAudienceApplyBody,

    /**
     * The CustomAudienceCreateBody model constructor.
     * @property {module:model/CustomAudienceCreateBody}
     */
    CustomAudienceCreateBody,

    /**
     * The CustomAudienceDeleteBody model constructor.
     * @property {module:model/CustomAudienceDeleteBody}
     */
    CustomAudienceDeleteBody,

    /**
     * The CustomAudienceShareBody model constructor.
     * @property {module:model/CustomAudienceShareBody}
     */
    CustomAudienceShareBody,

    /**
     * The CustomAudienceUpdateBody model constructor.
     * @property {module:model/CustomAudienceUpdateBody}
     */
    CustomAudienceUpdateBody,

    /**
     * The DmpcustomAudienceapplyContextInfo model constructor.
     * @property {module:model/DmpcustomAudienceapplyContextInfo}
     */
    DmpcustomAudienceapplyContextInfo,

    /**
     * The DmpcustomAudiencefileuploadContextInfo model constructor.
     * @property {module:model/DmpcustomAudiencefileuploadContextInfo}
     */
    DmpcustomAudiencefileuploadContextInfo,

    /**
     * The DmpcustomAudiencelookalikecreateContextInfo model constructor.
     * @property {module:model/DmpcustomAudiencelookalikecreateContextInfo}
     */
    DmpcustomAudiencelookalikecreateContextInfo,

    /**
     * The DmpcustomAudiencelookalikecreateLookalikeSpec model constructor.
     * @property {module:model/DmpcustomAudiencelookalikecreateLookalikeSpec}
     */
    DmpcustomAudiencelookalikecreateLookalikeSpec,

    /**
     * The DmpcustomAudiencerulecreateRuleSpec model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpec}
     */
    DmpcustomAudiencerulecreateRuleSpec,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet}
     */
    DmpcustomAudiencerulecreateRuleSpecExclusionRuleSet,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet}
     */
    DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSet,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters}
     */
    DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetFilters,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters}
     */
    DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetFilterSetParameterFilters,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules}
     */
    DmpcustomAudiencerulecreateRuleSpecExclusionRuleSetRules,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet}
     */
    DmpcustomAudiencerulecreateRuleSpecInclusionRuleSet,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet}
     */
    DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSet,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters}
     */
    DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetFilters,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters}
     */
    DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetFilterSetParameterFilters,

    /**
     * The DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules model constructor.
     * @property {module:model/DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules}
     */
    DmpcustomAudiencerulecreateRuleSpecInclusionRuleSetRules,

    /**
     * The DmpsavedAudiencecreateActions model constructor.
     * @property {module:model/DmpsavedAudiencecreateActions}
     */
    DmpsavedAudiencecreateActions,

    /**
     * The EventsourceBindBody model constructor.
     * @property {module:model/EventsourceBindBody}
     */
    EventsourceBindBody,

    /**
     * The EventsourceUnbindBody model constructor.
     * @property {module:model/EventsourceUnbindBody}
     */
    EventsourceUnbindBody,

    /**
     * The FeedDeleteBody model constructor.
     * @property {module:model/FeedDeleteBody}
     */
    FeedDeleteBody,

    /**
     * The FileImageAdUpload model constructor.
     * @property {module:model/FileImageAdUpload}
     */
    FileImageAdUpload,

    /**
     * The FileUploadBody model constructor.
     * @property {module:model/FileUploadBody}
     */
    FileUploadBody,

    /**
     * The FilteringAdGet model constructor.
     * @property {module:model/FilteringAdGet}
     */
    FilteringAdGet,

    /**
     * The FilteringAdgroupGet model constructor.
     * @property {module:model/FilteringAdgroupGet}
     */
    FilteringAdgroupGet,

    /**
     * The FilteringAdvertiserBalanceGet model constructor.
     * @property {module:model/FilteringAdvertiserBalanceGet}
     */
    FilteringAdvertiserBalanceGet,

    /**
     * The FilteringAdvertiserTransactionGet model constructor.
     * @property {module:model/FilteringAdvertiserTransactionGet}
     */
    FilteringAdvertiserTransactionGet,

    /**
     * The FilteringBcAccountTransactionGet model constructor.
     * @property {module:model/FilteringBcAccountTransactionGet}
     */
    FilteringBcAccountTransactionGet,

    /**
     * The FilteringBcAssetAdminGet model constructor.
     * @property {module:model/FilteringBcAssetAdminGet}
     */
    FilteringBcAssetAdminGet,

    /**
     * The FilteringBcAssetGet model constructor.
     * @property {module:model/FilteringBcAssetGet}
     */
    FilteringBcAssetGet,

    /**
     * The FilteringBcAssetGroupGet model constructor.
     * @property {module:model/FilteringBcAssetGroupGet}
     */
    FilteringBcAssetGroupGet,

    /**
     * The FilteringBcAssetGroupList model constructor.
     * @property {module:model/FilteringBcAssetGroupList}
     */
    FilteringBcAssetGroupList,

    /**
     * The FilteringBcAssetMemberGet model constructor.
     * @property {module:model/FilteringBcAssetMemberGet}
     */
    FilteringBcAssetMemberGet,

    /**
     * The FilteringBcBillingGroupGet model constructor.
     * @property {module:model/FilteringBcBillingGroupGet}
     */
    FilteringBcBillingGroupGet,

    /**
     * The FilteringBcGet model constructor.
     * @property {module:model/FilteringBcGet}
     */
    FilteringBcGet,

    /**
     * The FilteringBcMemberGet model constructor.
     * @property {module:model/FilteringBcMemberGet}
     */
    FilteringBcMemberGet,

    /**
     * The FilteringBcPartnerAssetGet model constructor.
     * @property {module:model/FilteringBcPartnerAssetGet}
     */
    FilteringBcPartnerAssetGet,

    /**
     * The FilteringBcPartnerGet model constructor.
     * @property {module:model/FilteringBcPartnerGet}
     */
    FilteringBcPartnerGet,

    /**
     * The FilteringBcTransactionGet model constructor.
     * @property {module:model/FilteringBcTransactionGet}
     */
    FilteringBcTransactionGet,

    /**
     * The FilteringCampaignGet model constructor.
     * @property {module:model/FilteringCampaignGet}
     */
    FilteringCampaignGet,

    /**
     * The FilteringReportIntegratedGet model constructor.
     * @property {module:model/FilteringReportIntegratedGet}
     */
    FilteringReportIntegratedGet,

    /**
     * The FilteringVideoAdSearch model constructor.
     * @property {module:model/FilteringVideoAdSearch}
     */
    FilteringVideoAdSearch,

    /**
     * The IdentityCreateBody model constructor.
     * @property {module:model/IdentityCreateBody}
     */
    IdentityCreateBody,

    /**
     * The ImageUploadBody model constructor.
     * @property {module:model/ImageUploadBody}
     */
    ImageUploadBody,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The LinkUpdateBody model constructor.
     * @property {module:model/LinkUpdateBody}
     */
    LinkUpdateBody,

    /**
     * The LookalikeCreateBody model constructor.
     * @property {module:model/LookalikeCreateBody}
     */
    LookalikeCreateBody,

    /**
     * The LookalikeUpdateBody model constructor.
     * @property {module:model/LookalikeUpdateBody}
     */
    LookalikeUpdateBody,

    /**
     * The MaterialStatusUpdateBody model constructor.
     * @property {module:model/MaterialStatusUpdateBody}
     */
    MaterialStatusUpdateBody,

    /**
     * The MemberDeleteBody model constructor.
     * @property {module:model/MemberDeleteBody}
     */
    MemberDeleteBody,

    /**
     * The MemberInviteBody model constructor.
     * @property {module:model/MemberInviteBody}
     */
    MemberInviteBody,

    /**
     * The MemberUpdateBody model constructor.
     * @property {module:model/MemberUpdateBody}
     */
    MemberUpdateBody,

    /**
     * The Oauth2AccessTokenBody model constructor.
     * @property {module:model/Oauth2AccessTokenBody}
     */
    Oauth2AccessTokenBody,

    /**
     * The PartnerAddBody model constructor.
     * @property {module:model/PartnerAddBody}
     */
    PartnerAddBody,

    /**
     * The PartnerDeleteBody model constructor.
     * @property {module:model/PartnerDeleteBody}
     */
    PartnerDeleteBody,

    /**
     * The PixelBatchBody model constructor.
     * @property {module:model/PixelBatchBody}
     */
    PixelBatchBody,

    /**
     * The PixelContent model constructor.
     * @property {module:model/PixelContent}
     */
    PixelContent,

    /**
     * The PixelContext model constructor.
     * @property {module:model/PixelContext}
     */
    PixelContext,

    /**
     * The PixelContextAd model constructor.
     * @property {module:model/PixelContextAd}
     */
    PixelContextAd,

    /**
     * The PixelContextPage model constructor.
     * @property {module:model/PixelContextPage}
     */
    PixelContextPage,

    /**
     * The PixelContextUser model constructor.
     * @property {module:model/PixelContextUser}
     */
    PixelContextUser,

    /**
     * The PixelProperties model constructor.
     * @property {module:model/PixelProperties}
     */
    PixelProperties,

    /**
     * The PixelTrackBody model constructor.
     * @property {module:model/PixelTrackBody}
     */
    PixelTrackBody,

    /**
     * The PixelTransferBody model constructor.
     * @property {module:model/PixelTransferBody}
     */
    PixelTransferBody,

    /**
     * The PixelbatchBatch model constructor.
     * @property {module:model/PixelbatchBatch}
     */
    PixelbatchBatch,

    /**
     * The PortfolioCreateBody model constructor.
     * @property {module:model/PortfolioCreateBody}
     */
    PortfolioCreateBody,

    /**
     * The ProductDeleteBody model constructor.
     * @property {module:model/ProductDeleteBody}
     */
    ProductDeleteBody,

    /**
     * The ProductFileBody model constructor.
     * @property {module:model/ProductFileBody}
     */
    ProductFileBody,

    /**
     * The RuleCreateBody model constructor.
     * @property {module:model/RuleCreateBody}
     */
    RuleCreateBody,

    /**
     * The SavedAudienceCreateBody model constructor.
     * @property {module:model/SavedAudienceCreateBody}
     */
    SavedAudienceCreateBody,

    /**
     * The SavedAudienceDeleteBody model constructor.
     * @property {module:model/SavedAudienceDeleteBody}
     */
    SavedAudienceDeleteBody,

    /**
     * The ShareCancelBody model constructor.
     * @property {module:model/ShareCancelBody}
     */
    ShareCancelBody,

    /**
     * The TargetingCategoryRecommendBody model constructor.
     * @property {module:model/TargetingCategoryRecommendBody}
     */
    TargetingCategoryRecommendBody,

    /**
     * The TargetingInfoBody model constructor.
     * @property {module:model/TargetingInfoBody}
     */
    TargetingInfoBody,

    /**
     * The TargetingSearchBody model constructor.
     * @property {module:model/TargetingSearchBody}
     */
    TargetingSearchBody,

    /**
    * The AccountApi service constructor.
    * @property {module:api/AccountApi}
    */
    AccountApi,

    /**
    * The AdApi service constructor.
    * @property {module:api/AdApi}
    */
    AdApi,

    /**
    * The AdAcoApi service constructor.
    * @property {module:api/AdAcoApi}
    */
    AdAcoApi,

    /**
    * The AdgroupApi service constructor.
    * @property {module:api/AdgroupApi}
    */
    AdgroupApi,

    /**
    * The AudienceApi service constructor.
    * @property {module:api/AudienceApi}
    */
    AudienceApi,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The BCApi service constructor.
    * @property {module:api/BCApi}
    */
    BCApi,

    /**
    * The CampaignCreationApi service constructor.
    * @property {module:api/CampaignCreationApi}
    */
    CampaignCreationApi,

    /**
    * The CatalogApi service constructor.
    * @property {module:api/CatalogApi}
    */
    CatalogApi,

    /**
    * The CreativeAssetApi service constructor.
    * @property {module:api/CreativeAssetApi}
    */
    CreativeAssetApi,

    /**
    * The EventCallbackApi service constructor.
    * @property {module:api/EventCallbackApi}
    */
    EventCallbackApi,

    /**
    * The FileApi service constructor.
    * @property {module:api/FileApi}
    */
    FileApi,

    /**
    * The IdentityApi service constructor.
    * @property {module:api/IdentityApi}
    */
    IdentityApi,

    /**
    * The MeasurementApi service constructor.
    * @property {module:api/MeasurementApi}
    */
    MeasurementApi,

    /**
    * The RecommendToolApi service constructor.
    * @property {module:api/RecommendToolApi}
    */
    RecommendToolApi,

    /**
    * The ReportingApi service constructor.
    * @property {module:api/ReportingApi}
    */
    ReportingApi,

    /**
    * The ToolApi service constructor.
    * @property {module:api/ToolApi}
    */
    ToolApi
};
