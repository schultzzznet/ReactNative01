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

import { CompoundDate } from './CompoundDate';
import { HttpFile } from '../http/http';

/**
* A title of a journal, can be populated with a start and end date if the title is only used in a specific period.
*/
export class JournalTitle {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    /**
    * The title of the journal.
    */
    'title': string;
    'startDate'?: CompoundDate;
    'endDate'?: CompoundDate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "CompoundDate",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "CompoundDate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JournalTitle.attributeTypeMap;
    }
    
    public constructor() {
    }
}

