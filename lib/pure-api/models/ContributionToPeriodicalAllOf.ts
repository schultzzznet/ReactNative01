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

import { JournalAssociation } from './JournalAssociation';
import { PublisherRef } from './PublisherRef';
import { HttpFile } from '../http/http';

export class ContributionToPeriodicalAllOf {
    'publisher'?: PublisherRef;
    /**
    * The volume that the research output was published in.
    */
    'volume'?: string;
    'journalAssociation'?: JournalAssociation;
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
        return ContributionToPeriodicalAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

