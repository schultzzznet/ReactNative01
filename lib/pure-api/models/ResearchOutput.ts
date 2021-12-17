/**
 * Pure API
 * This is an early access version of the new Pure write API.
 *
 * OpenAPI spec version: 0.1 Early Access
 * Contact: b.plauborg@elsevier.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AdditionalFileElectronicVersion } from './AdditionalFileElectronicVersion';
import { ArticleProcessingCharge } from './ArticleProcessingCharge';
import { ClassificationRef } from './ClassificationRef';
import { ClassifiedLocalizedValue } from './ClassifiedLocalizedValue';
import { ContributorAssociation } from './ContributorAssociation';
import { ElectronicVersion } from './ElectronicVersion';
import { ExternalOrganizationRef } from './ExternalOrganizationRef';
import { FormattedString } from './FormattedString';
import { Identifier } from './Identifier';
import { KeywordGroup } from './KeywordGroup';
import { Link } from './Link';
import { OrganizationRef } from './OrganizationRef';
import { PublicationStatus } from './PublicationStatus';
import { Visibility } from './Visibility';
import { Workflow } from './Workflow';
import { HttpFile } from '../http/http';

/**
* Research output exists in many variations, from written to non-textual form. Templates are available for a range of these variations.
*/
export class ResearchOutput {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    /**
    * UUID, this is the primary identity of the entity
    */
    'uuid'?: string;
    /**
    * Username of creator
    */
    'createdBy'?: string;
    /**
    * Date and time of creation
    */
    'createdDate'?: Date;
    /**
    * Username of the user that performed a modification
    */
    'modifiedBy'?: string;
    /**
    * Date and time of last modification
    */
    'modifiedDate'?: Date;
    /**
    * URL of the content on the Pure Portal
    */
    'portalUrl'?: string;
    /**
    * All pretty URLs
    */
    'prettyUrlIdentifiers'?: Array<string>;
    /**
    * UUIDs of other content items which have been merged into this content item (or similar)
    */
    'previousUuids'?: Array<string>;
    /**
    * A hash representing the current version of the content. For new content this is null, and for existing content the current value. The property should never be modified explicitly by a client.
    */
    'version'?: string;
    'title'?: FormattedString;
    'subTitle'?: FormattedString;
    'type'?: ClassificationRef;
    'category'?: ClassificationRef;
    /**
    * Indicates whether the research output is peer reviewed or not. Query the /research-outputs/allowed-peer-review-configurations endpoint for allowed values.
    */
    'peerReview'?: boolean;
    /**
    * Indicates whether the research output is internationally peer reviewed or not. Query the /research-outputs/allowed-peer-review-configurations endpoint for allowed values.
    */
    'internationalPeerReview'?: boolean;
    /**
    * Manage the research output's different statuses and dates these were reached.
    */
    'publicationStatuses'?: Array<PublicationStatus>;
    'language'?: ClassificationRef;
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'translatedTitle'?: { [key: string]: string; };
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'translatedSubTitle'?: { [key: string]: string; };
    /**
    * Contributors and their affiliations
    */
    'contributors'?: Array<ContributorAssociation>;
    /**
    * A collection of organisational unit affiliations.
    */
    'organizations'?: Array<OrganizationRef>;
    /**
    * A collection of external organisation affiliations.
    */
    'externalOrganisations'?: Array<ExternalOrganizationRef>;
    /**
    * The total number of authors from author collaborations.
    */
    'totalNumberOfContributors'?: number;
    'managingOrganization'?: OrganizationRef;
    'openAccessPermission'?: ClassificationRef;
    /**
    * The open access embargo end date describes the date at which the embargo on public consumption is lifted.
    */
    'openAccessEmbargoDate'?: Date;
    /**
    * The submission year of the research output.
    */
    'submissionYear'?: number;
    'mainResearchArea'?: ClassificationRef;
    /**
    * Electronic versions of this research output.
    */
    'electronicVersions'?: Array<ElectronicVersion>;
    /**
    * Additional files related to this research output.
    */
    'additionalFiles'?: Array<AdditionalFileElectronicVersion>;
    /**
    * Additional links associated with this research output.
    */
    'links'?: Array<Link>;
    'articleProcessingCharge'?: ArticleProcessingCharge;
    /**
    * Groups of keywords associated with the research output.
    */
    'keywordGroups'?: Array<KeywordGroup>;
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'bibliographicalNote'?: { [key: string]: string; };
    /**
    * A list of descriptions for this research output. Query the relevant /research-outputs/allowed-*-description-types endpoint for allowed types.
    */
    'descriptions'?: Array<ClassifiedLocalizedValue>;
    'visibility'?: Visibility;
    'workflow'?: Workflow;
    /**
    * Identifiers related to the research output.
    */
    'identifiers'?: Array<Identifier>;
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    '_abstract'?: { [key: string]: string; };
    /**
    * The content system name
    */
    'systemName'?: string;
    'typeDiscriminator': string;

    static readonly discriminator: string | undefined = "typeDiscriminator";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "portalUrl",
            "baseName": "portalUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "prettyUrlIdentifiers",
            "baseName": "prettyUrlIdentifiers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "previousUuids",
            "baseName": "previousUuids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "FormattedString",
            "format": ""
        },
        {
            "name": "subTitle",
            "baseName": "subTitle",
            "type": "FormattedString",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "peerReview",
            "baseName": "peerReview",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "internationalPeerReview",
            "baseName": "internationalPeerReview",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicationStatuses",
            "baseName": "publicationStatuses",
            "type": "Array<PublicationStatus>",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "translatedTitle",
            "baseName": "translatedTitle",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "translatedSubTitle",
            "baseName": "translatedSubTitle",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "contributors",
            "baseName": "contributors",
            "type": "Array<ContributorAssociation>",
            "format": ""
        },
        {
            "name": "organizations",
            "baseName": "organizations",
            "type": "Array<OrganizationRef>",
            "format": ""
        },
        {
            "name": "externalOrganisations",
            "baseName": "externalOrganisations",
            "type": "Array<ExternalOrganizationRef>",
            "format": ""
        },
        {
            "name": "totalNumberOfContributors",
            "baseName": "totalNumberOfContributors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "managingOrganization",
            "baseName": "managingOrganization",
            "type": "OrganizationRef",
            "format": ""
        },
        {
            "name": "openAccessPermission",
            "baseName": "openAccessPermission",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "openAccessEmbargoDate",
            "baseName": "openAccessEmbargoDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "submissionYear",
            "baseName": "submissionYear",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "mainResearchArea",
            "baseName": "mainResearchArea",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "electronicVersions",
            "baseName": "electronicVersions",
            "type": "Array<ElectronicVersion>",
            "format": ""
        },
        {
            "name": "additionalFiles",
            "baseName": "additionalFiles",
            "type": "Array<AdditionalFileElectronicVersion>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "articleProcessingCharge",
            "baseName": "articleProcessingCharge",
            "type": "ArticleProcessingCharge",
            "format": ""
        },
        {
            "name": "keywordGroups",
            "baseName": "keywordGroups",
            "type": "Array<KeywordGroup>",
            "format": ""
        },
        {
            "name": "bibliographicalNote",
            "baseName": "bibliographicalNote",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "descriptions",
            "baseName": "descriptions",
            "type": "Array<ClassifiedLocalizedValue>",
            "format": ""
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility",
            "format": ""
        },
        {
            "name": "workflow",
            "baseName": "workflow",
            "type": "Workflow",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<Identifier>",
            "format": ""
        },
        {
            "name": "_abstract",
            "baseName": "abstract",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "systemName",
            "baseName": "systemName",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeDiscriminator",
            "baseName": "typeDiscriminator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResearchOutput.attributeTypeMap;
    }
    
    public constructor() {
        this.typeDiscriminator = "ResearchOutput";
    }
}
