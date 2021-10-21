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
import { Identifier } from './Identifier';
import { KeywordGroup } from './KeywordGroup';
import { Workflow } from './Workflow';
import { HttpFile } from '../http/http';

/**
* A publisher known to institution
*/
export class Publisher {
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
    * Name of the Publisher
    */
    'name': string;
    /**
    * Alternate names for the publisher
    */
    'alternativeNames'?: Array<string>;
    /**
    * Countries that publisher is associated with. There are no restrictions as to why countries should be added to this list.
    */
    'countries'?: Array<ClassificationRef>;
    /**
    * A group for each type of keyword present
    */
    'keywordGroups'?: Array<KeywordGroup>;
    /**
    * IDs that this object corresponds to in external systems. Such as a Scopus ID. Used by Pure where it is necessary to identify objects to specific external systems
    */
    'identifiers'?: Array<Identifier>;
    'type'?: ClassificationRef;
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "alternativeNames",
            "baseName": "alternativeNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<ClassificationRef>",
            "format": ""
        },
        {
            "name": "keywordGroups",
            "baseName": "keywordGroups",
            "type": "Array<KeywordGroup>",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<Identifier>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ClassificationRef",
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
        return Publisher.attributeTypeMap;
    }
    
    public constructor() {
    }
}

