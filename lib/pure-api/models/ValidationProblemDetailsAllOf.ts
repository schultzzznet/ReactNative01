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

import { ValidationError } from './ValidationError';
import { HttpFile } from '../http/http';

export class ValidationProblemDetailsAllOf {
    'errors'?: Array<ValidationError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ValidationError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ValidationProblemDetailsAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}
