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

import { AcademicQualification } from './AcademicQualification';
import { Address } from './Address';
import { ClassificationRef } from './ClassificationRef';
import { ClassifiedFile } from './ClassifiedFile';
import { ClassifiedLocalizedValue } from './ClassifiedLocalizedValue';
import { ClassifiedName } from './ClassifiedName';
import { ExternalAppointment } from './ExternalAppointment';
import { HonoraryStaffOrganizationAssociation } from './HonoraryStaffOrganizationAssociation';
import { Identifier } from './Identifier';
import { KeywordGroup } from './KeywordGroup';
import { Link } from './Link';
import { Name } from './Name';
import { PersonClassifiedLeaveOfAbsence } from './PersonClassifiedLeaveOfAbsence';
import { ProfessionalQualification } from './ProfessionalQualification';
import { StaffOrganizationAssociation } from './StaffOrganizationAssociation';
import { StudentOrganizationAssociation } from './StudentOrganizationAssociation';
import { UserRef } from './UserRef';
import { Visibility } from './Visibility';
import { VisitingScholarOrganizationAssociation } from './VisitingScholarOrganizationAssociation';
import { HttpFile } from '../http/http';

/**
* An academic professional, student, or other individual attatched to the institution.
*/
export class Person {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    /**
    * UUID, this is the primary identity of the entity
    */
    'uuid'?: string;
    /**
    * Username of creator
    */
    'createdBy'?: string;
    /**
    * Date and time of creation
    */
    'createdDate'?: Date;
    /**
    * Username of the user that performed a modification
    */
    'modifiedBy'?: string;
    /**
    * Date and time of last modification
    */
    'modifiedDate'?: Date;
    /**
    * URL of the content on the Pure Portal
    */
    'portalUrl'?: string;
    /**
    * All pretty URLs
    */
    'prettyUrlIdentifiers'?: Array<string>;
    /**
    * UUIDs of other content items which have been merged into this content item (or similar)
    */
    'previousUuids'?: Array<string>;
    /**
    * Signals that the information is maintained by synchronization from an external system
    */
    'externallyManaged'?: boolean;
    /**
    * A hash representing the current version of the content. For new content this is null, and for existing content the current value. The property should never be modified explicitly by a client.
    */
    'version'?: string;
    /**
    * Date that the person entered into the academic profession.
    */
    'startDateAsResearcher'?: Date;
    /**
    * Notes regarding affiliations of the person.
    */
    'affiliationNote'?: string;
    /**
    * The person's date of birth.
    */
    'dateOfBirth'?: Date;
    /**
    * Date of the persons first day of the institution.
    */
    'employeeStartDate'?: Date;
    /**
    * positions held by the person, that are external to the institution
    */
    'externalPositions'?: Array<ExternalAppointment>;
    /**
    * Groups of Keyword associated with the person.
    */
    'keywordGroups'?: Array<KeywordGroup>;
    /**
    * Leaves of absence had by the person.
    */
    'leavesOfAbsence'?: Array<PersonClassifiedLeaveOfAbsence>;
    /**
    * Links associated with the person.
    */
    'links'?: Array<Link>;
    'name'?: Name;
    /**
    * Variant names of the person, Known aliases, ect.
    */
    'names'?: Array<ClassifiedName>;
    'nationality'?: ClassificationRef;
    /**
    * orcid of the person .
    */
    'orcid'?: string;
    /**
    * Organisations that the person is associated with under the title of 'Honorary Staff'
    */
    'honoraryStaffOrganizationAssociations'?: Array<HonoraryStaffOrganizationAssociation>;
    /**
    * Organizations that the person is associated with as 'Staff'
    */
    'staffOrganizationAssociations'?: Array<StaffOrganizationAssociation>;
    /**
    * Organizations that the person is associated with as a 'Student'
    */
    'studentOrganizationAssociations'?: Array<StudentOrganizationAssociation>;
    /**
    * Organizations that the person is associated with as a 'Visiting Scholar
    */
    'visitingScholarOrganizationAssociations'?: Array<VisitingScholarOrganizationAssociation>;
    /**
    * Levels of academic qualifications that the person has achieved.
    */
    'academicQualifications'?: Array<AcademicQualification>;
    /**
    * Profile photos in the form of Image files. The maximum file size is 1mb
    */
    'profilePhotos'?: Array<ClassifiedFile>;
    'privateAddress'?: Address;
    /**
    * The professional qualifications held by the person
    */
    'professionalQualifications'?: Array<ProfessionalQualification>;
    /**
    * If the person has been profiled.
    */
    'selectedForProfileRefinementService'?: boolean;
    /**
    * Information objects making up profiles made of the person
    */
    'profileInformation'?: Array<ClassifiedLocalizedValue>;
    /**
    * Date of retirement for the person
    */
    'retirementDate'?: Date;
    'gender'?: ClassificationRef;
    /**
    * Titles held by the person
    */
    'titles'?: Array<ClassifiedLocalizedValue>;
    'visibility'?: Visibility;
    /**
    * Boolean to define if the Person is willing to take on Phd Students.
    */
    'willingToTakePhdStudents'?: boolean;
    /**
    * Field to describe or list phd projects that the person will participate in.
    */
    'willingToTakePhdStudentsDescription'?: string;
    /**
    * Identifiers related to the person
    */
    'identifiers'?: Array<Identifier>;
    'user'?: UserRef;
    /**
    * The content system name
    */
    'systemName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "portalUrl",
            "baseName": "portalUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "prettyUrlIdentifiers",
            "baseName": "prettyUrlIdentifiers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "previousUuids",
            "baseName": "previousUuids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "externallyManaged",
            "baseName": "externallyManaged",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDateAsResearcher",
            "baseName": "startDateAsResearcher",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "affiliationNote",
            "baseName": "affiliationNote",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "employeeStartDate",
            "baseName": "employeeStartDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "externalPositions",
            "baseName": "externalPositions",
            "type": "Array<ExternalAppointment>",
            "format": ""
        },
        {
            "name": "keywordGroups",
            "baseName": "keywordGroups",
            "type": "Array<KeywordGroup>",
            "format": ""
        },
        {
            "name": "leavesOfAbsence",
            "baseName": "leavesOfAbsence",
            "type": "Array<PersonClassifiedLeaveOfAbsence>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name",
            "format": ""
        },
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<ClassifiedName>",
            "format": ""
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "orcid",
            "baseName": "orcid",
            "type": "string",
            "format": ""
        },
        {
            "name": "honoraryStaffOrganizationAssociations",
            "baseName": "honoraryStaffOrganizationAssociations",
            "type": "Array<HonoraryStaffOrganizationAssociation>",
            "format": ""
        },
        {
            "name": "staffOrganizationAssociations",
            "baseName": "staffOrganizationAssociations",
            "type": "Array<StaffOrganizationAssociation>",
            "format": ""
        },
        {
            "name": "studentOrganizationAssociations",
            "baseName": "studentOrganizationAssociations",
            "type": "Array<StudentOrganizationAssociation>",
            "format": ""
        },
        {
            "name": "visitingScholarOrganizationAssociations",
            "baseName": "visitingScholarOrganizationAssociations",
            "type": "Array<VisitingScholarOrganizationAssociation>",
            "format": ""
        },
        {
            "name": "academicQualifications",
            "baseName": "academicQualifications",
            "type": "Array<AcademicQualification>",
            "format": ""
        },
        {
            "name": "profilePhotos",
            "baseName": "profilePhotos",
            "type": "Array<ClassifiedFile>",
            "format": ""
        },
        {
            "name": "privateAddress",
            "baseName": "privateAddress",
            "type": "Address",
            "format": ""
        },
        {
            "name": "professionalQualifications",
            "baseName": "professionalQualifications",
            "type": "Array<ProfessionalQualification>",
            "format": ""
        },
        {
            "name": "selectedForProfileRefinementService",
            "baseName": "selectedForProfileRefinementService",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "profileInformation",
            "baseName": "profileInformation",
            "type": "Array<ClassifiedLocalizedValue>",
            "format": ""
        },
        {
            "name": "retirementDate",
            "baseName": "retirementDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "titles",
            "baseName": "titles",
            "type": "Array<ClassifiedLocalizedValue>",
            "format": ""
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility",
            "format": ""
        },
        {
            "name": "willingToTakePhdStudents",
            "baseName": "willingToTakePhdStudents",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "willingToTakePhdStudentsDescription",
            "baseName": "willingToTakePhdStudentsDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<Identifier>",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "UserRef",
            "format": ""
        },
        {
            "name": "systemName",
            "baseName": "systemName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Person.attributeTypeMap;
    }
    
    public constructor() {
    }
}

