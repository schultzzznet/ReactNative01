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
import { ExternalPerson } from '../models/ExternalPerson';
import { ExternalPersonListResult } from '../models/ExternalPersonListResult';
import { ExternalPersonsQuery } from '../models/ExternalPersonsQuery';
import { KeywordGroupConfigurationList } from '../models/KeywordGroupConfigurationList';
import { LocalesList } from '../models/LocalesList';
import { OrderingsList } from '../models/OrderingsList';
import { ProblemDetails } from '../models/ProblemDetails';
import { WorkflowListResult } from '../models/WorkflowListResult';

/**
 * no description
 */
export class ExternalPersonApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create external person
     * Create external person
     * @param externalPerson The content to create
     */
    public async externalPersonCreate(externalPerson: ExternalPerson, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'externalPerson' is not null or undefined
        if (externalPerson === null || externalPerson === undefined) {
            throw new RequiredError('Required parameter externalPerson was null or undefined when calling externalPersonCreate.');
        }


        // Path Params
        const localVarPath = '/external-persons';

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
            ObjectSerializer.serialize(externalPerson, "ExternalPerson", ""),
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
     * Delete external person with specific UUID.
     * Delete external person
     * @param uuid UUID of the external person
     */
    public async externalPersonDelete(uuid: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalPersonDelete.');
        }


        // Path Params
        const localVarPath = '/external-persons/{uuid}'
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
     * Lists all dependents to a external person with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a external person
     * @param uuid UUID of the external person
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public async externalPersonDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalPersonDependents.');
        }



        // Path Params
        const localVarPath = '/external-persons/{uuid}/dependents'
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
     * Get external person with specific UUID.
     * Get external person
     * @param uuid UUID of the desired external person
     */
    public async externalPersonGet(uuid: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalPersonGet.');
        }


        // Path Params
        const localVarPath = '/external-persons/{uuid}'
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
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external persons
     * A list of allowed classified identifier types
     */
    public async externalPersonGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/allowed-classified-identifier-types';

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
     * Get a list of allowed countries that can be used for the 'countries' attribute of external persons
     * A list of allowed countries
     */
    public async externalPersonGetAllowedCountries(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/allowed-countries';

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
     * Get a list fo a allowed discipline schemes for external persons
     * A list of allowed discipline schemes
     */
    public async externalPersonGetAllowedDisciplineSchemes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/disciplines/allowed-discipline-schemes';

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
    public async externalPersonGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling externalPersonGetAllowedKeywordGroupConfigurationClassifications.');
        }


        // Path Params
        const localVarPath = '/external-persons/allowed-keyword-group-configurations/{id}/classifications'
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
    public async externalPersonGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/allowed-keyword-group-configurations';

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
    public async externalPersonGetAllowedLocales(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/allowed-locales';

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
     * Get a list of allowed types that can be used for the 'type' attribute of external persons
     * A list of allowed external person types
     */
    public async externalPersonGetAllowedTypes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/allowed-types';

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
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external persons
     * A list of allowed workflow steps
     */
    public async externalPersonGetAllowedWorkflowSteps(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/allowed-workflow-steps';

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
     * Get disciplines from the discipline scheme associated with the external person with specific UUID.
     * Get disciplines from the discipline scheme associated with the external person
     * @param uuid UUID of the desired external person
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public async externalPersonGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalPersonGetDisciplineAssociation.');
        }


        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalPersonGetDisciplineAssociation.');
        }


        // Path Params
        const localVarPath = '/external-persons/{uuid}/disciplines/{discipline-scheme}'
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
     * Lists all orderings available to the external person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public async externalPersonGetOrderings(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/external-persons/orderings';

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
     * Lists all external persons in the Pure instance. If you need to filter the external persons returned, see the POST version which supports additional filtering.
     * Lists all external persons
     * @param size Number of returned external persons per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getExternalPersonOrderings
     */
    public async externalPersonList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/external-persons';

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
     * Lists disciplines from the discipline scheme associated with external persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external persons
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public async externalPersonListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalPersonListDisciplineAssociations.');
        }


        // verify required parameter 'disciplinesAssociationsQuery' is not null or undefined
        if (disciplinesAssociationsQuery === null || disciplinesAssociationsQuery === undefined) {
            throw new RequiredError('Required parameter disciplinesAssociationsQuery was null or undefined when calling externalPersonListDisciplineAssociations.');
        }


        // Path Params
        const localVarPath = '/external-persons/disciplines/{discipline-scheme}/search'
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
     * Update disciplines from the discipline scheme associated with the external person with specific UUID.
     * Update disciplines from the discipline scheme associated with the external person
     * @param uuid UUID of the external person to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public async externalPersonPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalPersonPutDisciplineAssociation.');
        }


        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling externalPersonPutDisciplineAssociation.');
        }


        // verify required parameter 'disciplinesAssociation' is not null or undefined
        if (disciplinesAssociation === null || disciplinesAssociation === undefined) {
            throw new RequiredError('Required parameter disciplinesAssociation was null or undefined when calling externalPersonPutDisciplineAssociation.');
        }


        // Path Params
        const localVarPath = '/external-persons/{uuid}/disciplines/{discipline-scheme}'
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
     * Lists external persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external persons
     * @param externalPersonsQuery The query to perform
     */
    public async externalPersonQuery(externalPersonsQuery: ExternalPersonsQuery, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'externalPersonsQuery' is not null or undefined
        if (externalPersonsQuery === null || externalPersonsQuery === undefined) {
            throw new RequiredError('Required parameter externalPersonsQuery was null or undefined when calling externalPersonQuery.');
        }


        // Path Params
        const localVarPath = '/external-persons/search';

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
            ObjectSerializer.serialize(externalPersonsQuery, "ExternalPersonsQuery", ""),
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
     * Update external persons with specific UUID.
     * Update external persons
     * @param uuid UUID of the external person to update
     * @param externalPerson The content to update
     */
    public async externalPersonUpdate(uuid: string, externalPerson: ExternalPerson, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError('Required parameter uuid was null or undefined when calling externalPersonUpdate.');
        }


        // verify required parameter 'externalPerson' is not null or undefined
        if (externalPerson === null || externalPerson === undefined) {
            throw new RequiredError('Required parameter externalPerson was null or undefined when calling externalPersonUpdate.');
        }


        // Path Params
        const localVarPath = '/external-persons/{uuid}'
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
            ObjectSerializer.serialize(externalPerson, "ExternalPerson", ""),
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
     * Get a list of a allowed disciplines for specific discipline scheme for external persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for external persons
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public async getAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'disciplineScheme' is not null or undefined
        if (disciplineScheme === null || disciplineScheme === undefined) {
            throw new RequiredError('Required parameter disciplineScheme was null or undefined when calling getAllowedDisciplines.');
        }




        // Path Params
        const localVarPath = '/external-persons/disciplines/{discipline-scheme}/allowed-disciplines'
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

}

export class ExternalPersonApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalPersonCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonCreate(response: ResponseContext): Promise<ExternalPerson > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPerson", ""
            ) as ExternalPerson;
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
            const body: ExternalPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPerson", ""
            ) as ExternalPerson;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalPersonDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonDelete(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to externalPersonDependents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonDependents(response: ResponseContext): Promise<ContentRefListResult > {
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
     * @params response Response returned by the server for a request to externalPersonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGet(response: ResponseContext): Promise<ExternalPerson > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPerson", ""
            ) as ExternalPerson;
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
            const body: ExternalPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPerson", ""
            ) as ExternalPerson;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalPersonGetAllowedClassifiedIdentifierTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedClassifiedIdentifierTypes(response: ResponseContext): Promise<ClassificationRefList > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedCountries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedCountries(response: ResponseContext): Promise<ClassificationRefList > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedDisciplineSchemes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedDisciplineSchemes(response: ResponseContext): Promise<DisciplinesDisciplineSchemeListResult > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedKeywordGroupConfigurationClassifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedKeywordGroupConfigurationClassifications(response: ResponseContext): Promise<ClassificationRefList > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedKeywordGroupConfigurations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedKeywordGroupConfigurations(response: ResponseContext): Promise<KeywordGroupConfigurationList > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedLocales
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedLocales(response: ResponseContext): Promise<LocalesList > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedTypes(response: ResponseContext): Promise<ClassificationRefList > {
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
     * @params response Response returned by the server for a request to externalPersonGetAllowedWorkflowSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetAllowedWorkflowSteps(response: ResponseContext): Promise<WorkflowListResult > {
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
     * @params response Response returned by the server for a request to externalPersonGetDisciplineAssociation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetDisciplineAssociation(response: ResponseContext): Promise<DisciplinesAssociation > {
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
     * @params response Response returned by the server for a request to externalPersonGetOrderings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonGetOrderings(response: ResponseContext): Promise<OrderingsList > {
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
     * @params response Response returned by the server for a request to externalPersonList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonList(response: ResponseContext): Promise<ExternalPersonListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalPersonListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPersonListResult", ""
            ) as ExternalPersonListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalPersonListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPersonListResult", ""
            ) as ExternalPersonListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalPersonListDisciplineAssociations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonListDisciplineAssociations(response: ResponseContext): Promise<DisciplinesAssociationListResult > {
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
     * @params response Response returned by the server for a request to externalPersonPutDisciplineAssociation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonPutDisciplineAssociation(response: ResponseContext): Promise<DisciplinesAssociation > {
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
     * @params response Response returned by the server for a request to externalPersonQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonQuery(response: ResponseContext): Promise<ExternalPersonListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalPersonListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPersonListResult", ""
            ) as ExternalPersonListResult;
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
            const body: ExternalPersonListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPersonListResult", ""
            ) as ExternalPersonListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to externalPersonUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async externalPersonUpdate(response: ResponseContext): Promise<ExternalPerson > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPerson", ""
            ) as ExternalPerson;
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
            const body: ExternalPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalPerson", ""
            ) as ExternalPerson;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllowedDisciplines
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllowedDisciplines(response: ResponseContext): Promise<DisciplinesDisciplineListResult > {
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

}
