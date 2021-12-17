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
import { BookSeriesJournalAssociation } from './BookSeriesJournalAssociation';
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
import { PublicationSeries } from './PublicationSeries';
import { PublicationStatus } from './PublicationStatus';
import { PublisherRef } from './PublisherRef';
import { ResearchOutput } from './ResearchOutput';
import { Visibility } from './Visibility';
import { Workflow } from './Workflow';
import { WorkingPaperAllOf } from './WorkingPaperAllOf';
import { HttpFile } from '../http/http';

/**
* A working paper is a document that constitutes an early version of a publication. Working papers are primarily used for exchanging ideas or to get feedback, before submitting it to a publisher. Working papers are usually published by the authors own institution.
*/
export class WorkingPaper extends ResearchOutput {
    /**
    * The volume that the research output was published in.
    */
    'volume'?: string;
    /**
    * The number of pages in the research output.
    */
    'numberOfPages'?: number;
    /**
    * The pages of the host publication covered by this contribution, for example 10-15.
    */
    'pages'?: string;
    /**
    * The publication series this research output is part of.
    */
    'publicationSeries'?: Array<PublicationSeries>;
    /**
    * The place of publication.
    */
    'placeOfPublication'?: string;
    /**
    * The edition that the production was published in.
    */
    'edition'?: string;
    /**
    * The ISBN number for the printed versions of the production.
    */
    'printISBNs'?: Array<string>;
    /**
    * The ISBN number for the electronic versions of the production.
    */
    'electronicISBNs'?: Array<string>;
    'publisher'?: PublisherRef;
    /**
    * The book series this research output is part of.
    */
    'bookSeries'?: Array<BookSeriesJournalAssociation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberOfPages",
            "baseName": "numberOfPages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicationSeries",
            "baseName": "publicationSeries",
            "type": "Array<PublicationSeries>",
            "format": ""
        },
        {
            "name": "placeOfPublication",
            "baseName": "placeOfPublication",
            "type": "string",
            "format": ""
        },
        {
            "name": "edition",
            "baseName": "edition",
            "type": "string",
            "format": ""
        },
        {
            "name": "printISBNs",
            "baseName": "printISBNs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "electronicISBNs",
            "baseName": "electronicISBNs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "PublisherRef",
            "format": ""
        },
        {
            "name": "bookSeries",
            "baseName": "bookSeries",
            "type": "Array<BookSeriesJournalAssociation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkingPaper.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "WorkingPaper";
    }
}
