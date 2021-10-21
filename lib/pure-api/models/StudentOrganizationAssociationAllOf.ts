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

export class StudentOrganizationAssociationAllOf {
    /**
    * The date when the student received an award.
    */
    'awardDate'?: Date;
    /**
    * Description of what award the student gained.
    */
    'awardGained'?: string;
    /**
    * The name or title of a program often consists of the degree (e.g., BS) and the discipline or field of study (e.g., Business Administration).
    */
    'programme'?: string;
    /**
    * A set of localized string values each for a specific submission locale. Please note that invalid locale values will be ignored.
    */
    'projectTitle'?: { [key: string]: string; };
    'fte'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "awardDate",
            "baseName": "awardDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "awardGained",
            "baseName": "awardGained",
            "type": "string",
            "format": ""
        },
        {
            "name": "programme",
            "baseName": "programme",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectTitle",
            "baseName": "projectTitle",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "fte",
            "baseName": "fte",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return StudentOrganizationAssociationAllOf.attributeTypeMap;
    }
    
    public constructor() {
    }
}
