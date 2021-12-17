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
import { ClassifiedAddress } from './ClassifiedAddress';
import { ClassifiedLocalizedValue } from './ClassifiedLocalizedValue';
import { ClassifiedValue } from './ClassifiedValue';
import { DateRange } from './DateRange';
import { HonoraryStaffOrganizationAssociationAllOf } from './HonoraryStaffOrganizationAssociationAllOf';
import { KeywordGroup } from './KeywordGroup';
import { OrganizationRef } from './OrganizationRef';
import { PersonOrganizationAssociation } from './PersonOrganizationAssociation';
import { PersonSupervisorAssociation } from './PersonSupervisorAssociation';
import { HttpFile } from '../http/http';

/**
* A relation describing the association between honorary staff and organisation
*/
export class HonoraryStaffOrganizationAssociation extends PersonOrganizationAssociation {
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'jobDescription'?: { [key: string]: string; };
    'jobTitle'?: ClassificationRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "jobDescription",
            "baseName": "jobDescription",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "ClassificationRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HonoraryStaffOrganizationAssociation.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "HonoraryStaffOrganizationAssociation";
    }
}

