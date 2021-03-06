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

import { BookSeriesJournalAssociation } from './BookSeriesJournalAssociation';
import { ExternalOrganizationRef } from './ExternalOrganizationRef';
import { PublicationSeries } from './PublicationSeries';
import { HttpFile } from '../http/http';

export class ContributionToMemorandumAllOf {
    'applicant'?: ExternalOrganizationRef;
    /**
    * The project number.
    */
    'projectNumber'?: string;
    /**
    * The journal number.
    */
    'journalNumber'?: string;
    /**
    * The date finished.
    */
    'dateFinished'?: Date;
    /**
    * The number of pages in the research output.
    */
    'numberOfPages'?: number;
    /**
    * The publication series this research output is part of.
    */
    'publicationSeries'?: Array<PublicationSeries>;
    /**
    * The book series this research output is part of.
    */
    'bookSeries'?: Array<BookSeriesJournalAssociation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applicant",
            "baseName": "applicant",
            "type": "ExternalOrganizationRef",
            "format": ""
        },
        {
            "name": "projectNumber",
            "baseName": "projectNumber",
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
            "name": "dateFinished",
            "baseName": "dateFinished",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "numberOfPages",
            "baseName": "numberOfPages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "publicationSeries",
            "baseName": "publicationSeries",
            "type": "Array<PublicationSeries>",
            "format": ""
        },
        {
            "name": "bookSeries",
            "baseName": "bookSeries",
            "type": "Array<BookSeriesJournalAssociation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContributionToMemorandumAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

