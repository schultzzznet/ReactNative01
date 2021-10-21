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

import { HttpFile } from '../http/http';

/**
* Information about the uploaded file
*/
export class UploadedFile {
    /**
    * The calculated digest for the file in Pure
    */
    'digest'?: string;
    /**
    * The digest type
    */
    'digestType'?: string;
    /**
    * The file size of the file in Pure
    */
    'size'?: number;
    /**
    * The mime type detected for the file
    */
    'mimeType'?: string;
    /**
    * The timestamp Pure received the file
    */
    'timeStamp'?: Date;
    /**
    * The timestamp where Pure deletes the uploaded file if it has not been attached to any content
    */
    'expires'?: Date;
    /**
    * Pure key identifer for the file upload
    */
    'key': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "digest",
            "baseName": "digest",
            "type": "string",
            "format": ""
        },
        {
            "name": "digestType",
            "baseName": "digestType",
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
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeStamp",
            "baseName": "timeStamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expires",
            "baseName": "expires",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadedFile.attributeTypeMap;
    }
    
    public constructor() {
    }
}

