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

import { Journal } from './Journal';
import { PageInformation } from './PageInformation';
import { HttpFile } from '../http/http';

/**
* A list of journals
*/
export class JournalListResult {
    /**
    * The full count, ignoring paging
    */
    'count'?: number;
    'pageInformation'?: PageInformation;
    'items'?: Array<Journal>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageInformation",
            "baseName": "pageInformation",
            "type": "PageInformation",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Journal>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JournalListResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

