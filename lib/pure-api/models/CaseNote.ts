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

import { ClassifiedCaseNoteSource } from './ClassifiedCaseNoteSource';
import { ExternalOrganizationRef } from './ExternalOrganizationRef';
import { HttpFile } from '../http/http';

/**
* A note on a case, detailing title, judgement data and court processing case.
*/
export class CaseNote {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    'court': ExternalOrganizationRef;
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'title'?: { [key: string]: string; };
    /**
    * The judgement date.
    */
    'judgementDate': Date;
    /**
    * Classified case note sources
    */
    'sources'?: Array<ClassifiedCaseNoteSource>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "court",
            "baseName": "court",
            "type": "ExternalOrganizationRef",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "judgementDate",
            "baseName": "judgementDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<ClassifiedCaseNoteSource>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseNote.attributeTypeMap;
    }
    
    public constructor() {
    }
}
