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
import { ElectronicVersion } from './ElectronicVersion';
import { ElectronicVersionFile } from './ElectronicVersionFile';
import { FileElectronicVersionAllOf } from './FileElectronicVersionAllOf';
import { HttpFile } from '../http/http';

/**
* File electronic version related to a research output.
*/
export class FileElectronicVersion extends ElectronicVersion {
    /**
    * The title of the file.
    */
    'title'?: string;
    /**
    * A description of property rights for the file.
    */
    'rightsStatement'?: string;
    'file'?: ElectronicVersionFile;
    'versionType'?: ClassificationRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "rightsStatement",
            "baseName": "rightsStatement",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "ElectronicVersionFile",
            "format": ""
        },
        {
            "name": "versionType",
            "baseName": "versionType",
            "type": "ClassificationRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileElectronicVersion.attributeTypeMap);
    }
    
    public constructor() {
        super();
        this.typeDiscriminator = "FileElectronicVersion";
    }
}

