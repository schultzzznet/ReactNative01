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
* RFC7807 Error details
*/
export class ProblemDetails {
    /**
    * A URI reference [RFC3986] that identifies the problem type.
    */
    'type'?: string;
    /**
    * A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization (e.g., using proactive content negotiation; see [RFC7231], Section 3.4).
    */
    'title'?: string;
    /**
    * The HTTP status code ([RFC7231], Section 6) generated by the origin server for this occurrence of the problem.
    */
    'status'?: number;
    /**
    * A human-readable explanation specific to this occurrence of the problem.
    */
    'detail'?: string;
    /**
    * A URI reference that identifies the specific occurrence of the problem.  It may or may not yield further information if dereferenced.
    */
    'instance'?: string;

    static readonly discriminator: string | undefined = "type";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string",
            "format": ""
        },
        {
            "name": "instance",
            "baseName": "instance",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProblemDetails.attributeTypeMap;
    }
    
    public constructor() {
        this.type = "ProblemDetails";
    }
}

