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

import { KeywordGroupConfiguration } from './KeywordGroupConfiguration';
import { HttpFile } from '../http/http';

/**
* List of keyword group configurations
*/
export class KeywordGroupConfigurationList {
    'configurations'?: Array<KeywordGroupConfiguration>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configurations",
            "baseName": "configurations",
            "type": "Array<KeywordGroupConfiguration>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KeywordGroupConfigurationList.attributeTypeMap;
    }
    
    public constructor() {
    }
}

