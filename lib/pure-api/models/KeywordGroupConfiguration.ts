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

import { ClassificationSchemeRef } from './ClassificationSchemeRef';
import { HttpFile } from '../http/http';

/**
* A specification of the allowed behavior of a specified keyword group
*/
export class KeywordGroupConfiguration {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    /**
    * The content system name this configuration applies to
    */
    'targetSystemName'?: string;
    /**
    * The OpenAPI schema type of this keyword configuration
    */
    'keywordGroupType'?: string;
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'name'?: { [key: string]: string; };
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'description'?: { [key: string]: string; };
    'classificationScheme'?: ClassificationSchemeRef;
    /**
    * Defines if user defined keywords are allowed
    */
    'allowUserdefinedKeywords'?: boolean;
    'limitToLeafSelection'?: boolean;
    'logicalName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "targetSystemName",
            "baseName": "targetSystemName",
            "type": "string",
            "format": ""
        },
        {
            "name": "keywordGroupType",
            "baseName": "keywordGroupType",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "classificationScheme",
            "baseName": "classificationScheme",
            "type": "ClassificationSchemeRef",
            "format": ""
        },
        {
            "name": "allowUserdefinedKeywords",
            "baseName": "allowUserdefinedKeywords",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limitToLeafSelection",
            "baseName": "limitToLeafSelection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "logicalName",
            "baseName": "logicalName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KeywordGroupConfiguration.attributeTypeMap;
    }
    
    public constructor() {
    }
}

