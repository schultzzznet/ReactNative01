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

import { ClassificationRef } from './ClassificationRef';
import { GeoLocation } from './GeoLocation';
import { HttpFile } from '../http/http';

/**
* A physical address
*/
export class CERIFAddress {
    /**
    * Address line 1
    */
    'address1'?: string;
    /**
    * Address line 2
    */
    'address2'?: string;
    /**
    * Address line 3
    */
    'address3'?: string;
    /**
    * Address line 4
    */
    'address4'?: string;
    /**
    * Address line 5
    */
    'address5'?: string;
    /**
    * Postal code of city
    */
    'postalCode'?: string;
    /**
    * City
    */
    'city'?: string;
    'country'?: ClassificationRef;
    'subdivision'?: ClassificationRef;
    /**
    * State. Mutually exclusive with state
    */
    'state'?: string;
    'geoLocation'?: GeoLocation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string",
            "format": ""
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string",
            "format": ""
        },
        {
            "name": "address3",
            "baseName": "address3",
            "type": "string",
            "format": ""
        },
        {
            "name": "address4",
            "baseName": "address4",
            "type": "string",
            "format": ""
        },
        {
            "name": "address5",
            "baseName": "address5",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "subdivision",
            "baseName": "subdivision",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "geoLocation",
            "baseName": "geoLocation",
            "type": "GeoLocation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CERIFAddress.attributeTypeMap;
    }
    
    public constructor() {
    }
}

