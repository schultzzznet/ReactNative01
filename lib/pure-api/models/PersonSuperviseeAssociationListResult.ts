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
import { PersonSuperviseeAssociation } from './PersonSuperviseeAssociation';
import { HttpFile } from '../http/http';

/**
* A list of supervision associations between persons
*/
export class PersonSuperviseeAssociationListResult {
    /**
    * The full count, ignoring paging
    */
    'count'?: number;
    'pageInformation'?: PageInformation;
    /**
    * Supervisee Associations
    */
    'items'?: Array<PersonSuperviseeAssociation>;

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
            "type": "Array<PersonSuperviseeAssociation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonSuperviseeAssociationListResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

