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
* Visibility of an object
*/
export class Visibility {
    /**
    * Visibility value
    */
    'key': VisibilityKeyEnum;
    /**
    * A set of localized string values each for a specific UI locale.
    */
    'description'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "VisibilityKeyEnum",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Visibility.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type VisibilityKeyEnum = "FREE" | "CAMPUS" | "BACKEND" | "CONFIDENTIAL" ;

