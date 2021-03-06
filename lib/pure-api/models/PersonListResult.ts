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

import { PageInformation } from './PageInformation';
import { Person } from './Person';
import { HttpFile } from '../http/http';

/**
* List of persons. Can contain a subset of all items along with the full count
*/
export class PersonListResult {
    /**
    * The full count, ignoring paging
    */
    'count'?: number;
    'pageInformation'?: PageInformation;
    /**
    * Persons
    */
    'items'?: Array<Person>;

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
            "type": "Array<Person>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonListResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

