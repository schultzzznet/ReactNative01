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
import { NavigationLink } from './NavigationLink';
import { HttpFile } from '../http/http';

/**
* A reference to a data set
*/
export class DataSetRef extends ContentRef {

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DataSetRef.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.systemName = "DataSetRef";
    }
}

