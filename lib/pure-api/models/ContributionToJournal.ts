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
import { CaseNote } from './CaseNote';
import { ClassificationRef } from './ClassificationRef';
import { ClassifiedLocalizedValue } from './ClassifiedLocalizedValue';
import { ConferenceSeriesRef } from './ConferenceSeriesRef';
import { ContributionToJournalAllOf } from './ContributionToJournalAllOf';
import { ContributorAssociation } from './ContributorAssociation';
import { ElectronicVersion } from './ElectronicVersion';
import { EventRef } from './EventRef';
import { ExternalOrganizationRef } from './ExternalOrganizationRef';
import { FormattedString } from './FormattedString';
import { Identifier } from './Identifier';
import { JournalAssociation } from './JournalAssociation';
import { KeywordGroup } from './KeywordGroup';
import { Link } from './Link';
import { OrganizationRef } from './OrganizationRef';
import { PublicationStatus } from './PublicationStatus';
import { ResearchOutput } from './ResearchOutput';
import { Visibility } from './Visibility';
import { Workflow } from './Workflow';
import { HttpFile } from '../http/http';

/**
* A journal is published in a consecutive number of volumes/issues, as a series with the same journal title.
*/
export class ContributionToJournal extends ResearchOutput {
    'event'?: EventRef;
    /**
    * The pages of the host publication covered by this contribution, for example 10-15.
    */
    'pages'?: string;
    /**
    * The volume that the research output was published in.
    */
    'volume'?: string;
    'journalAssociation': JournalAssociation;
    /**
    * The article number.
    */
    'articleNumber'?: string;
    /**
    * The issue number of the journal the research output is published in.
    */
    'journalNumber'?: string;
    /**
    * A collection of court case notes related to this research output.
    */
    'caseNotes'?: Array<CaseNote>;
    'conferenceSeries'?: ConferenceSeriesRef;
    /**
    * The number of pages in the research output.
    */
    'numberOfPages'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "event",
            "baseName": "event",
            "type": "EventRef",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "string",
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
            "name": "articleNumber",
            "baseName": "articleNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "journalNumber",
            "baseName": "journalNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseNotes",
            "baseName": "caseNotes",
            "type": "Array<CaseNote>",
            "format": ""
        },
        {
            "name": "conferenceSeries",
            "baseName": "conferenceSeries",
            "type": "ConferenceSeriesRef",
            "format": ""
        },
        {
            "name": "numberOfPages",
            "baseName": "numberOfPages",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ContributionToJournal.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "ContributionToJournal";
    }
}

