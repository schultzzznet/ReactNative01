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

import { HttpFile } from '../http/http';

/**
* A discipline within a specific discipline scheme
*/
export class DisciplinesDiscipline {
    /**
    * The discipline identifier
    */
    'disciplineId'?: string;
    /**
    * The discipline title
    */
    'title'?: string;
    /**
    * The discipline description
    */
    'description'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disciplineId",
            "baseName": "disciplineId",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DisciplinesDiscipline.attributeTypeMap;
    }
    
    public constructor() {
    }
}

