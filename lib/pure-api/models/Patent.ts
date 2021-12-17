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

import { AdditionalFileElectronicVersion } from './AdditionalFileElectronicVersion';
import { ArticleProcessingCharge } from './ArticleProcessingCharge';
import { ClassificationRef } from './ClassificationRef';
import { ClassifiedLocalizedValue } from './ClassifiedLocalizedValue';
import { ContributorAssociation } from './ContributorAssociation';
import { ElectronicVersion } from './ElectronicVersion';
import { ExternalOrganizationRef } from './ExternalOrganizationRef';
import { FormattedString } from './FormattedString';
import { Identifier } from './Identifier';
import { KeywordGroup } from './KeywordGroup';
import { Link } from './Link';
import { OrganizationRef } from './OrganizationRef';
import { PatentAllOf } from './PatentAllOf';
import { PublicationStatus } from './PublicationStatus';
import { PublisherRef } from './PublisherRef';
import { ResearchOutput } from './ResearchOutput';
import { Visibility } from './Visibility';
import { Workflow } from './Workflow';
import { HttpFile } from '../http/http';

/**
* A patent is a document that grants the rights of a piece of work/invention to its originator.
*/
export class Patent extends ResearchOutput {
    'country'?: ClassificationRef;
    /**
    * The patent number.
    */
    'patentNumber'?: string;
    /**
    * The filing date.
    */
    'date'?: Date;
    /**
    * The priority date.
    */
    'priorityDate'?: Date;
    /**
    * The priority number.
    */
    'priorityNumber'?: string;
    'publisher'?: PublisherRef;
    'ipcs'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "ClassificationRef",
            "format": ""
        },
        {
            "name": "patentNumber",
            "baseName": "patentNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "priorityDate",
            "baseName": "priorityDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "priorityNumber",
            "baseName": "priorityNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "PublisherRef",
            "format": ""
        },
        {
            "name": "ipcs",
            "baseName": "ipcs",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Patent.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "Patent";
    }
}
