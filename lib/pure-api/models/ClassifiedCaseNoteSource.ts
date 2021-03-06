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
import { HttpFile } from '../http/http';

/**
* Identification value of the case note in the source system.
*/
export class ClassifiedCaseNoteSource {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    'classification': ClassificationRef;
    /**
    * The identifier of the case note in the source system.
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "classification",
            "baseName": "classification",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClassifiedCaseNoteSource.attributeTypeMap;
    }
    
    public constructor() {
    }
}

