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

import { ExternalOrganization } from './ExternalOrganization';
import { NavigationLink } from './NavigationLink';
import { PageInformation } from './PageInformation';
import { HttpFile } from '../http/http';

/**
* List of organizations external to the institution. Can contain a subset of all items along with the full count
*/
export class ExternalOrganizationListResult {
    /**
    * The full count, ignoring paging
    */
    'count'?: number;
    'pageInformation'?: PageInformation;
    /**
    * Links to navigate from this result. Such as a 'prev' link to link to the previous page of items
    */
    'navigationLinks'?: Array<NavigationLink>;
    /**
    * External organizations
    */
    'items'?: Array<ExternalOrganization>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageInformation",
            "baseName": "pageInformation",
            "type": "PageInformation",
            "format": ""
        },
        {
            "name": "navigationLinks",
            "baseName": "navigationLinks",
            "type": "Array<NavigationLink>",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ExternalOrganization>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExternalOrganizationListResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

