// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ClassificationRefList } from '../models/ClassificationRefList';
import { ContentRefListResult } from '../models/ContentRefListResult';
import { DisciplinesAssociation } from '../models/DisciplinesAssociation';
import { DisciplinesAssociationListResult } from '../models/DisciplinesAssociationListResult';
import { DisciplinesAssociationsQuery } from '../models/DisciplinesAssociationsQuery';
import { DisciplinesDisciplineListResult } from '../models/DisciplinesDisciplineListResult';
import { DisciplinesDisciplineSchemeListResult } from '../models/DisciplinesDisciplineSchemeListResult';
import { ExternalOrganization } from '../models/ExternalOrganization';
import { ExternalOrganizationList } from '../models/ExternalOrganizationList';
import { ExternalOrganizationListResult } from '../models/ExternalOrganizationListResult';
import { ExternalOrganizationRefList } from '../models/ExternalOrganizationRefList';
import { ExternalOrganizationsQuery } from '../models/ExternalOrganizationsQuery';
import { KeywordGroupConfigurationList } from '../models/KeywordGroupConfigurationList';
import { LocalesList } from '../models/LocalesList';
import { Note } from '../models/Note';
import { NoteListResult } from '../models/NoteListResult';
import { OrderingsList } from '../models/OrderingsList';
import { ProblemDetails } from '../models/ProblemDetails';
import { UploadedFile } from '../models/UploadedFile';
import { WorkflowListResult } from '../models/WorkflowListResult';

/**
 * no description
 */
export class ExternalOrganizationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create external organization
     * Create external organization
     * @param externalOrganization The content to create
     */
    public async externalOrganizationCreate(externalOrganization: ExternalOrganization, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'externalOrganization' is not null or undefined
        if (externalOrganization === null || externalOrganization === undefined) {
            throw new RequiredError('Required parameter externalOrganization was null or undefined when calling externalOrganizationCreate.');
        }


        // Path Params
        const localVarPath = '/external-organizations';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(externalOrganization, "ExternalOrganization", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create note and associate it with an external organization
     * Create note
     * @param uuid UUID of the external organization to add note to
     * @param note The note to create
     */
    public async externalOrganizationCreateNote(uuid: string, note: Note, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationCreateNote.');
        }


        // verify required parameter 'note' is not null or undefined
        if (note === null || note === undefined) {
            throw new RequiredError('Required parameter note was null or undefined when calling externalOrganizationCreateNote.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}/notes'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(note, "Note", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete external organization with specific UUID.
     * Delete external organization
     * @param uuid UUID of the external organization
     */
    public async externalOrganizationDelete(uuid: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationDelete.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all dependents to the external organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the external organization
     * @param uuid UUID of the external organization to update
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public async externalOrganizationDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationDependents.');
        }



        // Path Params
        const localVarPath = '/external-organizations/{uuid}/dependents'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (verbose !== undefined) {
            requestContext.setQueryParam("verbose", ObjectSerializer.serialize(verbose, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Uploads file for the external organization
     * Upload file to a specific external organization
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public async externalOrganizationFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling externalOrganizationFileUploads.');
        }



        // Path Params
        const localVarPath = '/external-organizations/file-uploads';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("Content-Type", ObjectSerializer.serialize(contentType, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "HttpFile", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get external organization with specific UUID.
     * Get external organization
     * @param uuid UUID of the desired external organization
     */
    public async externalOrganizationGet(uuid: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationGet.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed countries that can be used for the 'address.country' attribute of external organizations
     * A list of allowed address countries
     */
    public async externalOrganizationGetAllowedAddressCountries(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-address-countries';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed subdivisions that can be used for the 'address.subdivisions' attribute of external organizations
     * A list of allowed address subdivisions
     */
    public async externalOrganizationGetAllowedAddressSubdivisions(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-address-subdivision';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external organizations
     * A list of allowed classified identifier types
     */
    public async externalOrganizationGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-classified-identifier-types';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed classified image types that can be used for the 'images.type' attribute of external organizations
     * A list of allowed classified identifier types
     */
    public async externalOrganizationGetAllowedClassifiedImageTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-classified-file-types';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list fo a allowed discipline schemes for external organizations
     * A list of allowed discipline schemes
     */
    public async externalOrganizationGetAllowedDisciplineSchemes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/disciplines/allowed-discipline-schemes';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for external organizations
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public async externalOrganizationGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalOrganizationGetAllowedDisciplines.');
        }




        // Path Params
        const localVarPath = '/external-organizations/disciplines/{discipline-scheme}/allowed-disciplines'
            .replace('{' + 'discipline-scheme' + '}', encodeURIComponent(String(disciplineScheme)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed document licenses that can be used for the 'documents.license' attribute of external organizations
     * A list of allowed document licenses
     */
    public async externalOrganizationGetAllowedDocumentLicenses(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-document-licenses';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed document types that can be used for the 'documents.type' attribute of external organizations
     * A list of allowed document types
     */
    public async externalOrganizationGetAllowedDocumentTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-document-types';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public async externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling externalOrganizationGetAllowedKeywordGroupConfigurationClassifications.');
        }


        // Path Params
        const localVarPath = '/external-organizations/allowed-keyword-group-configurations/{id}/classifications'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public async externalOrganizationGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-keyword-group-configurations';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of external organizations
     * A list of allowed link types
     */
    public async externalOrganizationGetAllowedLinkTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-link-types';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public async externalOrganizationGetAllowedLocales(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-locales';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed nature types that can be used for the 'natureTypes' attribute of external organizations
     * A list of allowed nature types
     */
    public async externalOrganizationGetAllowedNatureTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-nature-types';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external organizations
     * A list of allowed external organization types
     */
    public async externalOrganizationGetAllowedTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-types';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external organizations
     * A list of allowed workflow steps
     */
    public async externalOrganizationGetAllowedWorkflowSteps(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/allowed-workflow-steps';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the external organization
     * @param uuid UUID of the desired external organization
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public async externalOrganizationGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationGetDisciplineAssociation.');
        }


        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalOrganizationGetDisciplineAssociation.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}/disciplines/{discipline-scheme}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)))
            .replace('{' + 'discipline-scheme' + '}', encodeURIComponent(String(disciplineScheme)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get file from the external organization
     * Get file from the external organization
     * @param uuid UUID of the external organization
     * @param fileId File id 
     */
    public async externalOrganizationGetFile(uuid: string, fileId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationGetFile.');
        }


        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling externalOrganizationGetFile.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}/files/{fileId}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)))
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all orderings available to the external organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public async externalOrganizationGetOrderings(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-organizations/orderings';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all external organizations in the Pure instance. If you need to filter the external organizations returned, see the POST version which supports additional filtering.
     * Lists all external organizations
     * @param size Number of returned external organizations per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from externalOrganization_getOrderings
     */
    public async externalOrganizationList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/external-organizations';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists disciplines from the discipline scheme associated with external organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external organizations
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public async externalOrganizationListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalOrganizationListDisciplineAssociations.');
        }


        // verify required parameter 'disciplinesAssociationsQuery' is not null or undefined
        if (disciplinesAssociationsQuery === null || disciplinesAssociationsQuery === undefined) {
            throw new RequiredError('Required parameter disciplinesAssociationsQuery was null or undefined when calling externalOrganizationListDisciplineAssociations.');
        }


        // Path Params
        const localVarPath = '/external-organizations/disciplines/{discipline-scheme}/search'
            .replace('{' + 'discipline-scheme' + '}', encodeURIComponent(String(disciplineScheme)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(disciplinesAssociationsQuery, "DisciplinesAssociationsQuery", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists notes associated with an external organization ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the external organization to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public async externalOrganizationListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationListNotes.');
        }




        // Path Params
        const localVarPath = '/external-organizations/{uuid}/notes'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Merge a list of external organizations together. Note that this operation is irreversible
     * Merge external organizations
     * @param externalOrganizationRefList References to the entities to merge. The first will be the target. All additional entities will be merged into the target.
     */
    public async externalOrganizationMerge(externalOrganizationRefList: ExternalOrganizationRefList, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'externalOrganizationRefList' is not null or undefined
        if (externalOrganizationRefList === null || externalOrganizationRefList === undefined) {
            throw new RequiredError('Required parameter externalOrganizationRefList was null or undefined when calling externalOrganizationMerge.');
        }


        // Path Params
        const localVarPath = '/external-organizations/merge';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(externalOrganizationRefList, "ExternalOrganizationRefList", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Runs through a list external organizations and returns the deduplicated and merged organizations. The operation does not touch the Pure database
     * Preview deduplication of external organizations
     * @param externalOrganizationList The content to deduplicate. The data do not need to exist in the database.
     */
    public async externalOrganizationPreviewDeduplication(externalOrganizationList: ExternalOrganizationList, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'externalOrganizationList' is not null or undefined
        if (externalOrganizationList === null || externalOrganizationList === undefined) {
            throw new RequiredError('Required parameter externalOrganizationList was null or undefined when calling externalOrganizationPreviewDeduplication.');
        }


        // Path Params
        const localVarPath = '/external-organizations/preview-deduplication';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(externalOrganizationList, "ExternalOrganizationList", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the external organization
     * @param uuid UUID of the external organization to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public async externalOrganizationPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationPutDisciplineAssociation.');
        }


        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalOrganizationPutDisciplineAssociation.');
        }


        // verify required parameter 'disciplinesAssociation' is not null or undefined
        if (disciplinesAssociation === null || disciplinesAssociation === undefined) {
            throw new RequiredError('Required parameter disciplinesAssociation was null or undefined when calling externalOrganizationPutDisciplineAssociation.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}/disciplines/{discipline-scheme}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)))
            .replace('{' + 'discipline-scheme' + '}', encodeURIComponent(String(disciplineScheme)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(disciplinesAssociation, "DisciplinesAssociation", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists external organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external organizations
     * @param externalOrganizationsQuery The query to perform
     */
    public async externalOrganizationQuery(externalOrganizationsQuery: ExternalOrganizationsQuery, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'externalOrganizationsQuery' is not null or undefined
        if (externalOrganizationsQuery === null || externalOrganizationsQuery === undefined) {
            throw new RequiredError('Required parameter externalOrganizationsQuery was null or undefined when calling externalOrganizationQuery.');
        }


        // Path Params
        const localVarPath = '/external-organizations/search';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(externalOrganizationsQuery, "ExternalOrganizationsQuery", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update external organization with specific UUID.
     * Update external organization
     * @param uuid UUID of the external organization to update
     * @param externalOrganization The content to update
     */
    public async externalOrganizationUpdate(uuid: string, externalOrganization: ExternalOrganization, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalOrganizationUpdate.');
        }


        // verify required parameter 'externalOrganization' is not null or undefined
        if (externalOrganization === null || externalOrganization === undefined) {
            throw new RequiredError('Required parameter externalOrganization was null or undefined when calling externalOrganizationUpdate.');
        }


        // Path Params
        const localVarPath = '/external-organizations/{uuid}'
            .replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(externalOrganization, "ExternalOrganization", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["api-key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ExternalOrganizationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationCreate(response: ResponseContext): Promise<ExternalOrganization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationCreateNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationCreateNote(response: ResponseContext): Promise<Note > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Note = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Note", ""
            ) as Note;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Note = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Note", ""
            ) as Note;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationDelete(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationDependents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationDependents(response: ResponseContext): Promise<ContentRefListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContentRefListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContentRefListResult", ""
            ) as ContentRefListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ContentRefListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContentRefListResult", ""
            ) as ContentRefListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationFileUploads
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationFileUploads(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: UploadedFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadedFile", ""
            ) as UploadedFile;
            throw new ApiException<UploadedFile>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGet(response: ResponseContext): Promise<ExternalOrganization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "The requested content have changed UUID");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedAddressCountries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedAddressCountries(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedAddressSubdivisions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedAddressSubdivisions(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedClassifiedIdentifierTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedClassifiedIdentifierTypes(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedClassifiedImageTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedClassifiedImageTypes(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedDisciplineSchemes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedDisciplineSchemes(response: ResponseContext): Promise<DisciplinesDisciplineSchemeListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DisciplinesDisciplineSchemeListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesDisciplineSchemeListResult", ""
            ) as DisciplinesDisciplineSchemeListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DisciplinesDisciplineSchemeListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesDisciplineSchemeListResult", ""
            ) as DisciplinesDisciplineSchemeListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedDisciplines
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedDisciplines(response: ResponseContext): Promise<DisciplinesDisciplineListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DisciplinesDisciplineListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesDisciplineListResult", ""
            ) as DisciplinesDisciplineListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DisciplinesDisciplineListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesDisciplineListResult", ""
            ) as DisciplinesDisciplineListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedDocumentLicenses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedDocumentLicenses(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedDocumentTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedDocumentTypes(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedKeywordGroupConfigurationClassifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedKeywordGroupConfigurations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedKeywordGroupConfigurations(response: ResponseContext): Promise<KeywordGroupConfigurationList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: KeywordGroupConfigurationList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KeywordGroupConfigurationList", ""
            ) as KeywordGroupConfigurationList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: KeywordGroupConfigurationList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KeywordGroupConfigurationList", ""
            ) as KeywordGroupConfigurationList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedLinkTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedLinkTypes(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedLocales
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedLocales(response: ResponseContext): Promise<LocalesList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LocalesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LocalesList", ""
            ) as LocalesList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LocalesList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LocalesList", ""
            ) as LocalesList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedNatureTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedNatureTypes(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedTypes(response: ResponseContext): Promise<ClassificationRefList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClassificationRefList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClassificationRefList", ""
            ) as ClassificationRefList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetAllowedWorkflowSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetAllowedWorkflowSteps(response: ResponseContext): Promise<WorkflowListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkflowListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkflowListResult", ""
            ) as WorkflowListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkflowListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkflowListResult", ""
            ) as WorkflowListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetDisciplineAssociation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetDisciplineAssociation(response: ResponseContext): Promise<DisciplinesAssociation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DisciplinesAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesAssociation", ""
            ) as DisciplinesAssociation;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DisciplinesAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesAssociation", ""
            ) as DisciplinesAssociation;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetFile(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationGetOrderings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationGetOrderings(response: ResponseContext): Promise<OrderingsList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderingsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderingsList", ""
            ) as OrderingsList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderingsList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderingsList", ""
            ) as OrderingsList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationList(response: ResponseContext): Promise<ExternalOrganizationListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganizationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganizationListResult", ""
            ) as ExternalOrganizationListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganizationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganizationListResult", ""
            ) as ExternalOrganizationListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationListDisciplineAssociations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationListDisciplineAssociations(response: ResponseContext): Promise<DisciplinesAssociationListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DisciplinesAssociationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesAssociationListResult", ""
            ) as DisciplinesAssociationListResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DisciplinesAssociationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesAssociationListResult", ""
            ) as DisciplinesAssociationListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationListNotes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationListNotes(response: ResponseContext): Promise<NoteListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoteListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoteListResult", ""
            ) as NoteListResult;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoteListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoteListResult", ""
            ) as NoteListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationMerge
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationMerge(response: ResponseContext): Promise<ExternalOrganization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationPreviewDeduplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationPreviewDeduplication(response: ResponseContext): Promise<ExternalOrganizationListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganizationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganizationListResult", ""
            ) as ExternalOrganizationListResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganizationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganizationListResult", ""
            ) as ExternalOrganizationListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationPutDisciplineAssociation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationPutDisciplineAssociation(response: ResponseContext): Promise<DisciplinesAssociation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DisciplinesAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesAssociation", ""
            ) as DisciplinesAssociation;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DisciplinesAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DisciplinesAssociation", ""
            ) as DisciplinesAssociation;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationQuery(response: ResponseContext): Promise<ExternalOrganizationListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganizationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganizationListResult", ""
            ) as ExternalOrganizationListResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganizationListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganizationListResult", ""
            ) as ExternalOrganizationListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalOrganizationUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalOrganizationUpdate(response: ResponseContext): Promise<ExternalOrganization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(400, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalOrganization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalOrganization", ""
            ) as ExternalOrganization;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
