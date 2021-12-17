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
import { KeywordGroup } from './KeywordGroup';
import { OrganizationRef } from './OrganizationRef';
import { PersonOrganizationAssociation } from './PersonOrganizationAssociation';
import { PersonSupervisorAssociation } from './PersonSupervisorAssociation';
import { StudentOrganizationAssociationAllOf } from './StudentOrganizationAssociationAllOf';
import { HttpFile } from '../http/http';

/**
* A relation describing the association between student and organisation
*/
export class StudentOrganizationAssociation extends PersonOrganizationAssociation {
    /**
    * The date when the student received an award.
    */
    'awardDate'?: Date;
    /**
    * Description of what award the student gained.
    */
    'awardGained'?: string;
    /**
    * The FTE (Full-Time Equivalent). A decimal number ranging between 0 (0% equivalent of full time) and 1 (100% equivalent of full time).
    */
    'fte'?: number;
    /**
    * The name or title of a program often consists of the degree (e.g., BS) and the discipline or field of study (e.g., Business Administration).
    */
    'programme'?: string;
    /**
    * A set of string values, one for each submission locale. Note: invalid locale values will be ignored.
    */
    'projectTitle'?: { [key: string]: string; };

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
            "name": "fte",
            "baseName": "fte",
            "type": "number",
            "format": "double"
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
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StudentOrganizationAssociation.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "StudentOrganizationAssociation";
    }
}

