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
import { DateRange } from './DateRange';
import { EventRef } from './EventRef';
import { GeoLocation } from './GeoLocation';
import { Identifier } from './Identifier';
import { KeywordGroup } from './KeywordGroup';
import { Link } from './Link';
import { OrganizationOrExternalOrganizationRef } from './OrganizationOrExternalOrganizationRef';
import { Workflow } from './Workflow';
import { HttpFile } from '../http/http';

/**
* An event typically a conference, workshop or similar
*/
export class Event {
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
    * A hash representing the current version of the content. For new content this is null, and for existing content the current value. The property should never be modified explicitly by a client.
    */
    'version'?: string;
    'type'?: ClassificationRef;
    /**
    * A set of potentially formatted string values each localized for a specific submission locale. Please note that invalid locale values will be ignored.
    */
    'abbreviatedTitle'?: { [key: string]: string; };
    'geoLocation'?: GeoLocation;
    /**
    * The city of the event
    */
    'city'?: string;
    /**
    * The conference number of the event
    */
    'conferenceNumber'?: string;
    'country'?: ClassificationRef;
    'degreeOfRecognition'?: ClassificationRef;
    /**
    * A set of potentially formatted string values each localized for a specific submission locale. Please note that invalid locale values will be ignored.
    */
    'description'?: { [key: string]: string; };
    /**
    * A group for each type of keyword present
    */
    'keywordGroups'?: Array<KeywordGroup>;
    /**
    * Links to information about the event
    */
    'links'?: Array<Link>;
    /**
    * The actual location of the event
    */
    'location'?: string;
    /**
    * The organizers of the event
    */
    'organizers'?: Array<OrganizationOrExternalOrganizationRef>;
    'lifecycle'?: DateRange;
    /**
    * Other events related to this event
    */
    'events'?: Array<EventRef>;
    /**
    * IDs that this object corresponds to in external systems. Such as a Scopus ID. Used by Pure where it is necessary to identify objects to specific external systems
    */
    'identifiers'?: Array<Identifier>;
    /**
    * The event sponsors
    */
    'sponsorOrganizations'?: Array<OrganizationOrExternalOrganizationRef>;
    'subdivision'?: ClassificationRef;
    /**
    * A set of potentially formatted string values each localized for a specific submission locale. Please note that invalid locale values will be ignored.
    */
    'title'?: { [key: string]: string; };
    /**
    * A set of potentially formatted string values each localized for a specific submission locale. Please note that invalid locale values will be ignored.
    */
    'subTitle'?: { [key: string]: string; };
    'workflow'?: Workflow;
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
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "abbreviatedTitle",
            "baseName": "abbreviatedTitle",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "geoLocation",
            "baseName": "geoLocation",
            "type": "GeoLocation",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "conferenceNumber",
            "baseName": "conferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "degreeOfRecognition",
            "baseName": "degreeOfRecognition",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "keywordGroups",
            "baseName": "keywordGroups",
            "type": "Array<KeywordGroup>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "organizers",
            "baseName": "organizers",
            "type": "Array<OrganizationOrExternalOrganizationRef>",
            "format": ""
        },
        {
            "name": "lifecycle",
            "baseName": "lifecycle",
            "type": "DateRange",
            "format": ""
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<EventRef>",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<Identifier>",
            "format": ""
        },
        {
            "name": "sponsorOrganizations",
            "baseName": "sponsorOrganizations",
            "type": "Array<OrganizationOrExternalOrganizationRef>",
            "format": ""
        },
        {
            "name": "subdivision",
            "baseName": "subdivision",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "subTitle",
            "baseName": "subTitle",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "workflow",
            "baseName": "workflow",
            "type": "Workflow",
            "format": ""
        },
        {
            "name": "systemName",
            "baseName": "systemName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
    
    public constructor() {
    }
}

