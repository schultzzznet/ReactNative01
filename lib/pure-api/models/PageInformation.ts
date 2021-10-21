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
* Information about pages
*/
export class PageInformation {
    /**
    * Offset that returned items start at
    */
    'offset'?: number;
    /**
    * The requested number of items. May be higher than the actual number of items in the result if there are fewer items in the store than requested
    */
    'size'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PageInformation.attributeTypeMap;
    }
    
    public constructor() {
    }
}
