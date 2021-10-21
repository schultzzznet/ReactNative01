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

import { ContentRef } from './ContentRef';
import { DependencyViolationProblemDetailsAllOf } from './DependencyViolationProblemDetailsAllOf';
import { ProblemDetails } from './ProblemDetails';
import { HttpFile } from '../http/http';

/**
* Problem details for dependency violation failures, typically seen when deleting an entity that referred to from other dependent entities
*/
export class DependencyViolationProblemDetails extends ProblemDetails {
    /**
    * A list of dependant content that block deletion, may not be a complete list if the number of dependencies is very large
    */
    'dependencyViolationErrors'?: Array<ContentRef>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dependencyViolationErrors",
            "baseName": "dependencyViolationErrors",
            "type": "Array<ContentRef>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DependencyViolationProblemDetails.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.type = "DependencyViolationProblemDetails";
    }
}
