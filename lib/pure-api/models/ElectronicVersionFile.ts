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

import { UploadedFile } from './UploadedFile';
import { HttpFile } from '../http/http';

/**
* Information about an electronic version file
*/
export class ElectronicVersionFile {
    /**
    * Pure database ID of the object, prefer using the UUID if it is present on the entity
    */
    'pureId'?: number;
    /**
    * The id of the file
    */
    'fileId'?: string;
    /**
    * The documents file name
    */
    'fileName': string;
    /**
    * The documents mime type
    */
    'mimeType': string;
    /**
    * The documents size in bytes
    */
    'size': number;
    /**
    * Download url for the binary file
    */
    'url'?: string;
    'uploadedFile'?: UploadedFile;
    /**
    * Base64 encoded file data for new files. This property can be used instead of uploadedFile for small files
    */
    'fileData'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pureId",
            "baseName": "pureId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "fileId",
            "baseName": "fileId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadedFile",
            "baseName": "uploadedFile",
            "type": "UploadedFile",
            "format": ""
        },
        {
            "name": "fileData",
            "baseName": "fileData",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return ElectronicVersionFile.attributeTypeMap;
    }
    
    public constructor() {
    }
}

