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

import { ClassificationRef } from './ClassificationRef';
import { PublisherRef } from './PublisherRef';
import { HttpFile } from '../http/http';

export class PatentAllOf {
    'country'?: ClassificationRef;
    /**
    * The patent number.
    */
    'patentNumber'?: string;
    /**
    * The filing date.
    */
    'date'?: Date;
    /**
    * The priority date.
    */
    'priorityDate'?: Date;
    /**
    * The priority number.
    */
    'priorityNumber'?: string;
    'publisher'?: PublisherRef;
    'ipcs'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "patentNumber",
            "baseName": "patentNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "priorityDate",
            "baseName": "priorityDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "priorityNumber",
            "baseName": "priorityNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "PublisherRef",
            "format": ""
        },
        {
            "name": "ipcs",
            "baseName": "ipcs",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PatentAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

