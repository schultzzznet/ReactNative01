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
import { Keyword } from './Keyword';
import { HttpFile } from '../http/http';

/**
* Container for a structured keyword and/or free keywords
*/
export class KeywordContainer {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    'structuredKeyword': ClassificationRef;
    /**
    * Free keywords
    */
    'freeKeywords'?: Array<Keyword>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "structuredKeyword",
            "baseName": "structuredKeyword",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "freeKeywords",
            "baseName": "freeKeywords",
            "type": "Array<Keyword>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KeywordContainer.attributeTypeMap;
    }
    
    public constructor() {
    }
}

