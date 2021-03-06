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
import { EventRef } from './EventRef';
import { PublisherRef } from './PublisherRef';
import { HttpFile } from '../http/http';

export class NonTextualAllOf {
    /**
    * The place of publication.
    */
    'placeOfPublication'?: string;
    /**
    * The edition that the production was published in.
    */
    'edition'?: string;
    'publisher'?: PublisherRef;
    'event'?: EventRef;
    'outputMedia'?: ClassificationRef;
    /**
    * The size of the production.
    */
    'size'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "placeOfPublication",
            "baseName": "placeOfPublication",
            "type": "string",
            "format": ""
        },
        {
            "name": "edition",
            "baseName": "edition",
            "type": "string",
            "format": ""
        },
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "PublisherRef",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "EventRef",
            "format": ""
        },
        {
            "name": "outputMedia",
            "baseName": "outputMedia",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NonTextualAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}

