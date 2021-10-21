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

import { ExternalPersonRef } from './ExternalPersonRef';
import { PersonRef } from './PersonRef';
import { HttpFile } from '../http/http';

/**
* A supervisor, either internal or external, use as mutually exclusive
*/
export class InternalOrExternalSupervisor {
    'externalSupervisor'?: ExternalPersonRef;
    'supervisor'?: PersonRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "externalSupervisor",
            "baseName": "externalSupervisor",
            "type": "ExternalPersonRef",
            "format": ""
        },
        {
            "name": "supervisor",
            "baseName": "supervisor",
            "type": "PersonRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InternalOrExternalSupervisor.attributeTypeMap;
    }
    
    public constructor() {
    }
}

