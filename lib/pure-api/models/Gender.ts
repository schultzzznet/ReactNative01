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
* A list of possible genders
*/
export class Gender {
    'key'?: GenderKeyEnum;
    /**
    * A set of localized string values each for a specific submission locale. Please note that invalid locale values will be ignored.
    */
    'value'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "GenderKeyEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Gender.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type GenderKeyEnum = "MALE" | "FEMALE" | "UNKNOWN" ;

