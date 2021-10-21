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
* Create a query for persons
*/
export class PersonsQuery {
    'uuids'?: Array<string>;
    'size'?: number;
    'offset'?: number;
    'orderings'?: Array<string>;
    'keywordURIs'?: Array<string>;
    /**
    * String used to perform search
    */
    'searchString'?: string;
    'orderBy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuids",
            "baseName": "uuids",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "orderings",
            "baseName": "orderings",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "keywordURIs",
            "baseName": "keywordURIs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "searchString",
            "baseName": "searchString",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderBy",
            "baseName": "orderBy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonsQuery.attributeTypeMap;
    }
    
    public constructor() {
    }
}

