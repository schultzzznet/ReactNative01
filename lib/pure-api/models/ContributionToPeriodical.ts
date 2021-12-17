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
import { ContributionToPeriodicalAllOf } from './ContributionToPeriodicalAllOf';
import { ContributorAssociation } from './ContributorAssociation';
import { ElectronicVersion } from './ElectronicVersion';
import { ExternalOrganizationRef } from './ExternalOrganizationRef';
import { FormattedString } from './FormattedString';
import { Identifier } from './Identifier';
import { JournalAssociation } from './JournalAssociation';
import { KeywordGroup } from './KeywordGroup';
import { Link } from './Link';
import { OrganizationRef } from './OrganizationRef';
import { PublicationStatus } from './PublicationStatus';
import { PublisherRef } from './PublisherRef';
import { ResearchOutput } from './ResearchOutput';
import { Visibility } from './Visibility';
import { Workflow } from './Workflow';
import { HttpFile } from '../http/http';

/**
* A research output that has been published in a domain-specific journal with a more communicative approach.
*/
export class ContributionToPeriodical extends ResearchOutput {
    'publisher'?: PublisherRef;
    /**
    * The volume that the research output was published in.
    */
    'volume'?: string;
    'journalAssociation': JournalAssociation;
    /**
    * The number of periodical.
    */
    'number'?: string;
    /**
    * The pages of the host publication covered by this contribution, for example 10-15.
    */
    'pages'?: string;
    /**
    * The number of pages in the research output.
    */
    'numberOfPages'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "PublisherRef",
            "format": ""
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string",
            "format": ""
        },
        {
            "name": "journalAssociation",
            "baseName": "journalAssociation",
            "type": "JournalAssociation",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberOfPages",
            "baseName": "numberOfPages",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ContributionToPeriodical.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "ContributionToPeriodical";
    }
}
