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

import { CompoundDate } from './CompoundDate';
import { HttpFile } from '../http/http';

/**
* An ISSN of a journal, can be populated with a start and end date if the ISSN is only used in a specific period.
*/
export class ISSN {
    'startDate'?: CompoundDate;
    'endDate'?: CompoundDate;
    /**
    * The actual ISSN value
    */
    'issn': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "CompoundDate",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "CompoundDate",
            "format": ""
        },
        {
            "name": "issn",
            "baseName": "issn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ISSN.attributeTypeMap;
    }
    
    public constructor() {
    }
}

