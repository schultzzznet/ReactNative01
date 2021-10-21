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

import { NavigationLink } from './NavigationLink';
import { HttpFile } from '../http/http';

/**
* A reference to a classification value
*/
export class ClassificationRef {
    /**
    * Classification URI of the referred classification
    */
    'uri': string;
    'link'?: NavigationLink;
    /**
    * A set of localized string values each for a specific UI locale.
    */
    'term'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "NavigationLink",
            "format": ""
        },
        {
            "name": "term",
            "baseName": "term",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClassificationRef.attributeTypeMap;
    }
    
    public constructor() {
    }
}

