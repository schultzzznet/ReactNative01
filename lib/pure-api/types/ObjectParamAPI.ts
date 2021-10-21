import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AcademicQualification } from '../models/AcademicQualification';
import { ActivityRef } from '../models/ActivityRef';
import { AdditionalISSN } from '../models/AdditionalISSN';
import { Address } from '../models/Address';
import { AlternativeISSN } from '../models/AlternativeISSN';
import { ApplicationRef } from '../models/ApplicationRef';
import { AwardRef } from '../models/AwardRef';
import { CERIFAddress } from '../models/CERIFAddress';
import { ClassificationRef } from '../models/ClassificationRef';
import { ClassificationRefList } from '../models/ClassificationRefList';
import { ClassificationSchemeRef } from '../models/ClassificationSchemeRef';
import { ClassificationSchemeRefAllOf } from '../models/ClassificationSchemeRefAllOf';
import { ClassificationsKeywordGroup } from '../models/ClassificationsKeywordGroup';
import { ClassificationsKeywordGroupAllOf } from '../models/ClassificationsKeywordGroupAllOf';
import { ClassifiedAddress } from '../models/ClassifiedAddress';
import { ClassifiedFile } from '../models/ClassifiedFile';
import { ClassifiedId } from '../models/ClassifiedId';
import { ClassifiedIdAllOf } from '../models/ClassifiedIdAllOf';
import { ClassifiedLocalizedValue } from '../models/ClassifiedLocalizedValue';
import { ClassifiedName } from '../models/ClassifiedName';
import { ClassifiedValue } from '../models/ClassifiedValue';
import { CompoundDate } from '../models/CompoundDate';
import { CompoundDateRange } from '../models/CompoundDateRange';
import { ContentRef } from '../models/ContentRef';
import { ContentRefListResult } from '../models/ContentRefListResult';
import { DataSetRef } from '../models/DataSetRef';
import { DateRange } from '../models/DateRange';
import { DependencyViolationProblemDetails } from '../models/DependencyViolationProblemDetails';
import { DependencyViolationProblemDetailsAllOf } from '../models/DependencyViolationProblemDetailsAllOf';
import { Document } from '../models/Document';
import { ElectronicISSN } from '../models/ElectronicISSN';
import { Event } from '../models/Event';
import { EventListResult } from '../models/EventListResult';
import { EventRef } from '../models/EventRef';
import { EventsQuery } from '../models/EventsQuery';
import { ExternalAppointment } from '../models/ExternalAppointment';
import { ExternalOrganization } from '../models/ExternalOrganization';
import { ExternalOrganizationList } from '../models/ExternalOrganizationList';
import { ExternalOrganizationListResult } from '../models/ExternalOrganizationListResult';
import { ExternalOrganizationRef } from '../models/ExternalOrganizationRef';
import { ExternalOrganizationRefList } from '../models/ExternalOrganizationRefList';
import { ExternalOrganizationsQuery } from '../models/ExternalOrganizationsQuery';
import { ExternalPerson } from '../models/ExternalPerson';
import { ExternalPersonListResult } from '../models/ExternalPersonListResult';
import { ExternalPersonRef } from '../models/ExternalPersonRef';
import { ExternalPersonsQuery } from '../models/ExternalPersonsQuery';
import { FreeKeywordsKeywordGroup } from '../models/FreeKeywordsKeywordGroup';
import { FreeKeywordsKeywordGroupAllOf } from '../models/FreeKeywordsKeywordGroupAllOf';
import { FullKeywordGroup } from '../models/FullKeywordGroup';
import { FullKeywordGroupAllOf } from '../models/FullKeywordGroupAllOf';
import { Gender } from '../models/Gender';
import { GenericProblemDetails } from '../models/GenericProblemDetails';
import { GeoLocation } from '../models/GeoLocation';
import { HighlightedContent } from '../models/HighlightedContent';
import { HonoraryStaffOrganizationAssociation } from '../models/HonoraryStaffOrganizationAssociation';
import { HonoraryStaffOrganizationAssociationAllOf } from '../models/HonoraryStaffOrganizationAssociationAllOf';
import { ISSN } from '../models/ISSN';
import { Id } from '../models/Id';
import { IdAllOf } from '../models/IdAllOf';
import { Identifier } from '../models/Identifier';
import { InternalOrExternalSupervisor } from '../models/InternalOrExternalSupervisor';
import { Journal } from '../models/Journal';
import { JournalListResult } from '../models/JournalListResult';
import { JournalRef } from '../models/JournalRef';
import { JournalTitle } from '../models/JournalTitle';
import { JournalsQuery } from '../models/JournalsQuery';
import { Keyword } from '../models/Keyword';
import { KeywordContainer } from '../models/KeywordContainer';
import { KeywordGroup } from '../models/KeywordGroup';
import { KeywordGroupConfiguration } from '../models/KeywordGroupConfiguration';
import { KeywordGroupConfigurationList } from '../models/KeywordGroupConfigurationList';
import { Link } from '../models/Link';
import { LocalesList } from '../models/LocalesList';
import { Name } from '../models/Name';
import { NavigationLink } from '../models/NavigationLink';
import { Note } from '../models/Note';
import { NoteListResult } from '../models/NoteListResult';
import { OrderingsList } from '../models/OrderingsList';
import { Organization } from '../models/Organization';
import { OrganizationListResult } from '../models/OrganizationListResult';
import { OrganizationOrExternalOrganizationRef } from '../models/OrganizationOrExternalOrganizationRef';
import { OrganizationRef } from '../models/OrganizationRef';
import { OrganizationsQuery } from '../models/OrganizationsQuery';
import { PageInformation } from '../models/PageInformation';
import { Person } from '../models/Person';
import { PersonClassifiedLeaveOfAbsence } from '../models/PersonClassifiedLeaveOfAbsence';
import { PersonListResult } from '../models/PersonListResult';
import { PersonOrganizationAssociation } from '../models/PersonOrganizationAssociation';
import { PersonRef } from '../models/PersonRef';
import { PersonSuperviseeAssociation } from '../models/PersonSuperviseeAssociation';
import { PersonSuperviseeAssociationListResult } from '../models/PersonSuperviseeAssociationListResult';
import { PersonSupervisorAssociation } from '../models/PersonSupervisorAssociation';
import { PersonsQuery } from '../models/PersonsQuery';
import { ProblemDetails } from '../models/ProblemDetails';
import { ProfessionalQualification } from '../models/ProfessionalQualification';
import { Publisher } from '../models/Publisher';
import { PublisherListResult } from '../models/PublisherListResult';
import { PublisherRef } from '../models/PublisherRef';
import { PublishersQuery } from '../models/PublishersQuery';
import { ResearchOutputRef } from '../models/ResearchOutputRef';
import { StaffOrganizationAssociation } from '../models/StaffOrganizationAssociation';
import { StaffOrganizationAssociationAllOf } from '../models/StaffOrganizationAssociationAllOf';
import { StudentOrganizationAssociation } from '../models/StudentOrganizationAssociation';
import { StudentOrganizationAssociationAllOf } from '../models/StudentOrganizationAssociationAllOf';
import { UploadedFile } from '../models/UploadedFile';
import { UserRef } from '../models/UserRef';
import { ValidationError } from '../models/ValidationError';
import { ValidationProblemDetails } from '../models/ValidationProblemDetails';
import { ValidationProblemDetailsAllOf } from '../models/ValidationProblemDetailsAllOf';
import { Visibility } from '../models/Visibility';
import { VisitingScholarOrganizationAssociation } from '../models/VisitingScholarOrganizationAssociation';
import { VisitingScholarOrganizationAssociationAllOf } from '../models/VisitingScholarOrganizationAssociationAllOf';
import { Workflow } from '../models/Workflow';
import { WorkflowListResult } from '../models/WorkflowListResult';

import { ObservableEventApi } from "./ObservableAPI";
import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";

export interface EventApiEventCreateRequest {
    /**
     * The content to create
     * @type Event
     * @memberof EventApieventCreate
     */
    event: Event
}

export interface EventApiEventCreateNoteRequest {
    /**
     * UUID of the event to add note to
     * @type string
     * @memberof EventApieventCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof EventApieventCreateNote
     */
    note: Note
}

export interface EventApiEventDeleteRequest {
    /**
     * UUID of the event
     * @type string
     * @memberof EventApieventDelete
     */
    uuid: string
}

export interface EventApiEventGetAllowedClassifiedIdentifierTypesRequest {
}

export interface EventApiEventGetAllowedCountriesRequest {
}

export interface EventApiEventGetAllowedDegreeOfRecognitionsRequest {
}

export interface EventApiEventGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof EventApieventGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface EventApiEventGetAllowedKeywordGroupConfigurationsRequest {
}

export interface EventApiEventGetAllowedLinkTypesRequest {
}

export interface EventApiEventGetAllowedLocalesRequest {
}

export interface EventApiEventGetAllowedSubdivisionsRequest {
}

export interface EventApiEventGetAllowedTypesRequest {
}

export interface EventApiEventGetAllowedWorkflowStepsRequest {
}

export interface EventApiEventGetOrderingsRequest {
}

export interface EventApiEventListRequest {
    /**
     * Number of returned events per request.
     * @type number
     * @memberof EventApieventList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof EventApieventList
     */
    offset?: number
    /**
     * The order of the list, must be a value from getEventOrderings
     * @type string
     * @memberof EventApieventList
     */
    order?: string
}

export interface EventApiEventListNotesRequest {
    /**
     * UUID of the event to get notes for
     * @type string
     * @memberof EventApieventListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof EventApieventListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof EventApieventListNotes
     */
    offset?: number
}

export interface EventApiEventUpdateRequest {
    /**
     * UUID of the event to update
     * @type string
     * @memberof EventApieventUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type Event
     * @memberof EventApieventUpdate
     */
    event: Event
}

export interface EventApiEventsQueryRequest {
    /**
     * The query to perform
     * @type EventsQuery
     * @memberof EventApieventsQuery
     */
    eventsQuery: EventsQuery
}

export class ObjectEventApi {
    private api: ObservableEventApi

    public constructor(configuration: Configuration, requestFactory?: EventApiRequestFactory, responseProcessor?: EventApiResponseProcessor) {
        this.api = new ObservableEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create event
     * Create event
     * @param param the request object
     */
    public eventCreate(param: EventApiEventCreateRequest, options?: Configuration): Promise<Event> {
        return this.api.eventCreate(param.event,  options).toPromise();
    }

    /**
     * Create note and associate it with an event
     * Create note
     * @param param the request object
     */
    public eventCreateNote(param: EventApiEventCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.eventCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete event with specific UUID.
     * Delete event
     * @param param the request object
     */
    public eventDelete(param: EventApiEventDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.eventDelete(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of events
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public eventGetAllowedClassifiedIdentifierTypes(param: EventApiEventGetAllowedClassifiedIdentifierTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedClassifiedIdentifierTypes( options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'country' attribute of events
     * A list of allowed countries
     * @param param the request object
     */
    public eventGetAllowedCountries(param: EventApiEventGetAllowedCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedCountries( options).toPromise();
    }

    /**
     * Get a list of allowed degree of recognitions that can be used for the 'degreeOfRecognition' attribute of events
     * A list of allowed degree of recognitions
     * @param param the request object
     */
    public eventGetAllowedDegreeOfRecognitions(param: EventApiEventGetAllowedDegreeOfRecognitionsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedDegreeOfRecognitions( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public eventGetAllowedKeywordGroupConfigurationClassifications(param: EventApiEventGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public eventGetAllowedKeywordGroupConfigurations(param: EventApiEventGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.eventGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of events
     * A list of allowed link types
     * @param param the request object
     */
    public eventGetAllowedLinkTypes(param: EventApiEventGetAllowedLinkTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedLinkTypes( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public eventGetAllowedLocales(param: EventApiEventGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.eventGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed subdivisions can be used for the 'subdivision' attribute of events
     * A list of allowed subdivisions
     * @param param the request object
     */
    public eventGetAllowedSubdivisions(param: EventApiEventGetAllowedSubdivisionsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedSubdivisions( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of events
     * A list of allowed event types
     * @param param the request object
     */
    public eventGetAllowedTypes(param: EventApiEventGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.eventGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of events
     * A list of allowed workflow steps
     * @param param the request object
     */
    public eventGetAllowedWorkflowSteps(param: EventApiEventGetAllowedWorkflowStepsRequest, options?: Configuration): Promise<WorkflowListResult> {
        return this.api.eventGetAllowedWorkflowSteps( options).toPromise();
    }

    /**
     * Lists all orderings available to the event endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public eventGetOrderings(param: EventApiEventGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.eventGetOrderings( options).toPromise();
    }

    /**
     * Lists all events in the Pure instance. If you need to filter the events returned, see the POST version which supports additional filtering.
     * Lists all events
     * @param param the request object
     */
    public eventList(param: EventApiEventListRequest, options?: Configuration): Promise<EventListResult> {
        return this.api.eventList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists notes associated with an event ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public eventListNotes(param: EventApiEventListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.eventListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Update event with specific UUID.
     * Update event
     * @param param the request object
     */
    public eventUpdate(param: EventApiEventUpdateRequest, options?: Configuration): Promise<Event> {
        return this.api.eventUpdate(param.uuid, param.event,  options).toPromise();
    }

    /**
     * Lists events in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for events
     * @param param the request object
     */
    public eventsQuery(param: EventApiEventsQueryRequest, options?: Configuration): Promise<EventListResult> {
        return this.api.eventsQuery(param.eventsQuery,  options).toPromise();
    }

}

import { ObservableExternalOrganizationApi } from "./ObservableAPI";
import { ExternalOrganizationApiRequestFactory, ExternalOrganizationApiResponseProcessor} from "../apis/ExternalOrganizationApi";

export interface ExternalOrganizationApiExternalOrganizationCreateRequest {
    /**
     * The content to create
     * @type ExternalOrganization
     * @memberof ExternalOrganizationApiexternalOrganizationCreate
     */
    externalOrganization: ExternalOrganization
}

export interface ExternalOrganizationApiExternalOrganizationCreateNoteRequest {
    /**
     * UUID of the external organization to add note to
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof ExternalOrganizationApiexternalOrganizationCreateNote
     */
    note: Note
}

export interface ExternalOrganizationApiExternalOrganizationDeleteRequest {
    /**
     * UUID of the external organization
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationDelete
     */
    uuid: string
}

export interface ExternalOrganizationApiExternalOrganizationDependentsRequest {
    /**
     * UUID of the external organization to update
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationDependents
     */
    uuid: string
    /**
     * Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     * @type boolean
     * @memberof ExternalOrganizationApiexternalOrganizationDependents
     */
    verbose?: boolean
}

export interface ExternalOrganizationApiExternalOrganizationFileUploadsRequest {
    /**
     * 
     * @type HttpFile
     * @memberof ExternalOrganizationApiexternalOrganizationFileUploads
     */
    body: HttpFile
    /**
     * Set the mime type for the file
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationFileUploads
     */
    contentType?: string
}

export interface ExternalOrganizationApiExternalOrganizationGetRequest {
    /**
     * UUID of the desired external organization
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationGet
     */
    uuid: string
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedAddressCountriesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedAddressSubdivisionsRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedClassifiedIdentifierTypesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedClassifiedImageTypesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedDocumentLicensesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedDocumentTypesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedKeywordGroupConfigurationsRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedLinkTypesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedLocalesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedNatureTypesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedTypesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedWorkflowStepsRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetFileRequest {
    /**
     * UUID of the external organization
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationGetFile
     */
    uuid: string
    /**
     * File id 
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationGetFile
     */
    fileId: string
}

export interface ExternalOrganizationApiExternalOrganizationGetOrderingsRequest {
}

export interface ExternalOrganizationApiExternalOrganizationListRequest {
    /**
     * Number of returned external organizations per request.
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationList
     */
    offset?: number
    /**
     * The order of the list, must be a value from externalOrganization_getOrderings
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationList
     */
    order?: string
}

export interface ExternalOrganizationApiExternalOrganizationListNotesRequest {
    /**
     * UUID of the external organization to get notes for
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationListNotes
     */
    offset?: number
}

export interface ExternalOrganizationApiExternalOrganizationMergeRequest {
    /**
     * References to the entities to merge. The first will be the target. All additional entities will be merged into the target.
     * @type ExternalOrganizationRefList
     * @memberof ExternalOrganizationApiexternalOrganizationMerge
     */
    externalOrganizationRefList: ExternalOrganizationRefList
}

export interface ExternalOrganizationApiExternalOrganizationPreviewDeduplicationRequest {
    /**
     * The content to deduplicate. The data do not need to exist in the database.
     * @type ExternalOrganizationList
     * @memberof ExternalOrganizationApiexternalOrganizationPreviewDeduplication
     */
    externalOrganizationList: ExternalOrganizationList
}

export interface ExternalOrganizationApiExternalOrganizationQueryRequest {
    /**
     * The query to perform
     * @type ExternalOrganizationsQuery
     * @memberof ExternalOrganizationApiexternalOrganizationQuery
     */
    externalOrganizationsQuery: ExternalOrganizationsQuery
}

export interface ExternalOrganizationApiExternalOrganizationUpdateRequest {
    /**
     * UUID of the external organization to update
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type ExternalOrganization
     * @memberof ExternalOrganizationApiexternalOrganizationUpdate
     */
    externalOrganization: ExternalOrganization
}

export class ObjectExternalOrganizationApi {
    private api: ObservableExternalOrganizationApi

    public constructor(configuration: Configuration, requestFactory?: ExternalOrganizationApiRequestFactory, responseProcessor?: ExternalOrganizationApiResponseProcessor) {
        this.api = new ObservableExternalOrganizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create external organization
     * Create external organization
     * @param param the request object
     */
    public externalOrganizationCreate(param: ExternalOrganizationApiExternalOrganizationCreateRequest, options?: Configuration): Promise<ExternalOrganization> {
        return this.api.externalOrganizationCreate(param.externalOrganization,  options).toPromise();
    }

    /**
     * Create note and associate it with an external organization
     * Create note
     * @param param the request object
     */
    public externalOrganizationCreateNote(param: ExternalOrganizationApiExternalOrganizationCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.externalOrganizationCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete external organization with specific UUID.
     * Delete external organization
     * @param param the request object
     */
    public externalOrganizationDelete(param: ExternalOrganizationApiExternalOrganizationDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.externalOrganizationDelete(param.uuid,  options).toPromise();
    }

    /**
     * Lists all dependents to the external organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the external organization
     * @param param the request object
     */
    public externalOrganizationDependents(param: ExternalOrganizationApiExternalOrganizationDependentsRequest, options?: Configuration): Promise<ContentRefListResult> {
        return this.api.externalOrganizationDependents(param.uuid, param.verbose,  options).toPromise();
    }

    /**
     * Uploads file for the external organization
     * Upload file to a specific external organization
     * @param param the request object
     */
    public externalOrganizationFileUploads(param: ExternalOrganizationApiExternalOrganizationFileUploadsRequest, options?: Configuration): Promise<void> {
        return this.api.externalOrganizationFileUploads(param.body, param.contentType,  options).toPromise();
    }

    /**
     * Get external organization with specific UUID.
     * Get external organization
     * @param param the request object
     */
    public externalOrganizationGet(param: ExternalOrganizationApiExternalOrganizationGetRequest, options?: Configuration): Promise<ExternalOrganization> {
        return this.api.externalOrganizationGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'address.country' attribute of external organizations
     * A list of allowed address countries
     * @param param the request object
     */
    public externalOrganizationGetAllowedAddressCountries(param: ExternalOrganizationApiExternalOrganizationGetAllowedAddressCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedAddressCountries( options).toPromise();
    }

    /**
     * Get a list of allowed subdivisions that can be used for the 'address.subdivisions' attribute of external organizations
     * A list of allowed address subdivisions
     * @param param the request object
     */
    public externalOrganizationGetAllowedAddressSubdivisions(param: ExternalOrganizationApiExternalOrganizationGetAllowedAddressSubdivisionsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedAddressSubdivisions( options).toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external organizations
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public externalOrganizationGetAllowedClassifiedIdentifierTypes(param: ExternalOrganizationApiExternalOrganizationGetAllowedClassifiedIdentifierTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedClassifiedIdentifierTypes( options).toPromise();
    }

    /**
     * Get a list of allowed classified image types that can be used for the 'images.type' attribute of external organizations
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public externalOrganizationGetAllowedClassifiedImageTypes(param: ExternalOrganizationApiExternalOrganizationGetAllowedClassifiedImageTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedClassifiedImageTypes( options).toPromise();
    }

    /**
     * Get a list of allowed document licenses that can be used for the 'documents.license' attribute of external organizations
     * A list of allowed document licenses
     * @param param the request object
     */
    public externalOrganizationGetAllowedDocumentLicenses(param: ExternalOrganizationApiExternalOrganizationGetAllowedDocumentLicensesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedDocumentLicenses( options).toPromise();
    }

    /**
     * Get a list of allowed document types that can be used for the 'documents.type' attribute of external organizations
     * A list of allowed document types
     * @param param the request object
     */
    public externalOrganizationGetAllowedDocumentTypes(param: ExternalOrganizationApiExternalOrganizationGetAllowedDocumentTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedDocumentTypes( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(param: ExternalOrganizationApiExternalOrganizationGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public externalOrganizationGetAllowedKeywordGroupConfigurations(param: ExternalOrganizationApiExternalOrganizationGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.externalOrganizationGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of external organizations
     * A list of allowed link types
     * @param param the request object
     */
    public externalOrganizationGetAllowedLinkTypes(param: ExternalOrganizationApiExternalOrganizationGetAllowedLinkTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedLinkTypes( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public externalOrganizationGetAllowedLocales(param: ExternalOrganizationApiExternalOrganizationGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.externalOrganizationGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed nature types that can be used for the 'natureTypes' attribute of external organizations
     * A list of allowed nature types
     * @param param the request object
     */
    public externalOrganizationGetAllowedNatureTypes(param: ExternalOrganizationApiExternalOrganizationGetAllowedNatureTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedNatureTypes( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external organizations
     * A list of allowed external organization types
     * @param param the request object
     */
    public externalOrganizationGetAllowedTypes(param: ExternalOrganizationApiExternalOrganizationGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalOrganizationGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external organizations
     * A list of allowed workflow steps
     * @param param the request object
     */
    public externalOrganizationGetAllowedWorkflowSteps(param: ExternalOrganizationApiExternalOrganizationGetAllowedWorkflowStepsRequest, options?: Configuration): Promise<WorkflowListResult> {
        return this.api.externalOrganizationGetAllowedWorkflowSteps( options).toPromise();
    }

    /**
     * Get file from the external organization
     * Get file from the external organization
     * @param param the request object
     */
    public externalOrganizationGetFile(param: ExternalOrganizationApiExternalOrganizationGetFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.externalOrganizationGetFile(param.uuid, param.fileId,  options).toPromise();
    }

    /**
     * Lists all orderings available to the external organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public externalOrganizationGetOrderings(param: ExternalOrganizationApiExternalOrganizationGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.externalOrganizationGetOrderings( options).toPromise();
    }

    /**
     * Lists all external organizations in the Pure instance. If you need to filter the external organizations returned, see the POST version which supports additional filtering.
     * Lists all external organizations
     * @param param the request object
     */
    public externalOrganizationList(param: ExternalOrganizationApiExternalOrganizationListRequest, options?: Configuration): Promise<ExternalOrganizationListResult> {
        return this.api.externalOrganizationList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists notes associated with an external organization ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public externalOrganizationListNotes(param: ExternalOrganizationApiExternalOrganizationListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.externalOrganizationListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Merge a list of external organizations together. Note that this operation is irreversible
     * Merge external organizations
     * @param param the request object
     */
    public externalOrganizationMerge(param: ExternalOrganizationApiExternalOrganizationMergeRequest, options?: Configuration): Promise<ExternalOrganization> {
        return this.api.externalOrganizationMerge(param.externalOrganizationRefList,  options).toPromise();
    }

    /**
     * Runs through a list external organizations and returns the deduplicated and merged organizations. The operation does not touch the Pure database
     * Preview deduplication of external organizations
     * @param param the request object
     */
    public externalOrganizationPreviewDeduplication(param: ExternalOrganizationApiExternalOrganizationPreviewDeduplicationRequest, options?: Configuration): Promise<ExternalOrganizationListResult> {
        return this.api.externalOrganizationPreviewDeduplication(param.externalOrganizationList,  options).toPromise();
    }

    /**
     * Lists external organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external organizations
     * @param param the request object
     */
    public externalOrganizationQuery(param: ExternalOrganizationApiExternalOrganizationQueryRequest, options?: Configuration): Promise<ExternalOrganizationListResult> {
        return this.api.externalOrganizationQuery(param.externalOrganizationsQuery,  options).toPromise();
    }

    /**
     * Update external organization with specific UUID.
     * Update external organization
     * @param param the request object
     */
    public externalOrganizationUpdate(param: ExternalOrganizationApiExternalOrganizationUpdateRequest, options?: Configuration): Promise<ExternalOrganization> {
        return this.api.externalOrganizationUpdate(param.uuid, param.externalOrganization,  options).toPromise();
    }

}

import { ObservableExternalPersonApi } from "./ObservableAPI";
import { ExternalPersonApiRequestFactory, ExternalPersonApiResponseProcessor} from "../apis/ExternalPersonApi";

export interface ExternalPersonApiExternalPersonCreateRequest {
    /**
     * The content to create
     * @type ExternalPerson
     * @memberof ExternalPersonApiexternalPersonCreate
     */
    externalPerson: ExternalPerson
}

export interface ExternalPersonApiExternalPersonDeleteRequest {
    /**
     * UUID of the external person
     * @type string
     * @memberof ExternalPersonApiexternalPersonDelete
     */
    uuid: string
}

export interface ExternalPersonApiExternalPersonDependentsRequest {
    /**
     * UUID of the external person
     * @type string
     * @memberof ExternalPersonApiexternalPersonDependents
     */
    uuid: string
    /**
     * Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     * @type boolean
     * @memberof ExternalPersonApiexternalPersonDependents
     */
    verbose?: boolean
}

export interface ExternalPersonApiExternalPersonGetRequest {
    /**
     * UUID of the desired external person
     * @type string
     * @memberof ExternalPersonApiexternalPersonGet
     */
    uuid: string
}

export interface ExternalPersonApiExternalPersonGetAllowedClassifiedIdentifierTypesRequest {
}

export interface ExternalPersonApiExternalPersonGetAllowedCountriesRequest {
}

export interface ExternalPersonApiExternalPersonGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof ExternalPersonApiexternalPersonGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface ExternalPersonApiExternalPersonGetAllowedKeywordGroupConfigurationsRequest {
}

export interface ExternalPersonApiExternalPersonGetAllowedLocalesRequest {
}

export interface ExternalPersonApiExternalPersonGetAllowedTypesRequest {
}

export interface ExternalPersonApiExternalPersonGetAllowedWorkflowStepsRequest {
}

export interface ExternalPersonApiExternalPersonGetOrderingsRequest {
}

export interface ExternalPersonApiExternalPersonListRequest {
    /**
     * Number of returned external persons per request.
     * @type number
     * @memberof ExternalPersonApiexternalPersonList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ExternalPersonApiexternalPersonList
     */
    offset?: number
    /**
     * The order of the list, must be a value from getExternalPersonOrderings
     * @type string
     * @memberof ExternalPersonApiexternalPersonList
     */
    order?: string
}

export interface ExternalPersonApiExternalPersonQueryRequest {
    /**
     * The query to perform
     * @type ExternalPersonsQuery
     * @memberof ExternalPersonApiexternalPersonQuery
     */
    externalPersonsQuery: ExternalPersonsQuery
}

export interface ExternalPersonApiExternalPersonUpdateRequest {
    /**
     * UUID of the external person to update
     * @type string
     * @memberof ExternalPersonApiexternalPersonUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type ExternalPerson
     * @memberof ExternalPersonApiexternalPersonUpdate
     */
    externalPerson: ExternalPerson
}

export class ObjectExternalPersonApi {
    private api: ObservableExternalPersonApi

    public constructor(configuration: Configuration, requestFactory?: ExternalPersonApiRequestFactory, responseProcessor?: ExternalPersonApiResponseProcessor) {
        this.api = new ObservableExternalPersonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create external person
     * Create external person
     * @param param the request object
     */
    public externalPersonCreate(param: ExternalPersonApiExternalPersonCreateRequest, options?: Configuration): Promise<ExternalPerson> {
        return this.api.externalPersonCreate(param.externalPerson,  options).toPromise();
    }

    /**
     * Delete external person with specific UUID.
     * Delete external person
     * @param param the request object
     */
    public externalPersonDelete(param: ExternalPersonApiExternalPersonDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.externalPersonDelete(param.uuid,  options).toPromise();
    }

    /**
     * Lists all dependents to a external person with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a external person
     * @param param the request object
     */
    public externalPersonDependents(param: ExternalPersonApiExternalPersonDependentsRequest, options?: Configuration): Promise<ContentRefListResult> {
        return this.api.externalPersonDependents(param.uuid, param.verbose,  options).toPromise();
    }

    /**
     * Get external person with specific UUID.
     * Get external person
     * @param param the request object
     */
    public externalPersonGet(param: ExternalPersonApiExternalPersonGetRequest, options?: Configuration): Promise<ExternalPerson> {
        return this.api.externalPersonGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external persons
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public externalPersonGetAllowedClassifiedIdentifierTypes(param: ExternalPersonApiExternalPersonGetAllowedClassifiedIdentifierTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalPersonGetAllowedClassifiedIdentifierTypes( options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of external persons
     * A list of allowed countries
     * @param param the request object
     */
    public externalPersonGetAllowedCountries(param: ExternalPersonApiExternalPersonGetAllowedCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalPersonGetAllowedCountries( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public externalPersonGetAllowedKeywordGroupConfigurationClassifications(param: ExternalPersonApiExternalPersonGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalPersonGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public externalPersonGetAllowedKeywordGroupConfigurations(param: ExternalPersonApiExternalPersonGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.externalPersonGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public externalPersonGetAllowedLocales(param: ExternalPersonApiExternalPersonGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.externalPersonGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external persons
     * A list of allowed external person types
     * @param param the request object
     */
    public externalPersonGetAllowedTypes(param: ExternalPersonApiExternalPersonGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.externalPersonGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external persons
     * A list of allowed workflow steps
     * @param param the request object
     */
    public externalPersonGetAllowedWorkflowSteps(param: ExternalPersonApiExternalPersonGetAllowedWorkflowStepsRequest, options?: Configuration): Promise<WorkflowListResult> {
        return this.api.externalPersonGetAllowedWorkflowSteps( options).toPromise();
    }

    /**
     * Lists all orderings available to the external person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public externalPersonGetOrderings(param: ExternalPersonApiExternalPersonGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.externalPersonGetOrderings( options).toPromise();
    }

    /**
     * Lists all external persons in the Pure instance. If you need to filter the external persons returned, see the POST version which supports additional filtering.
     * Lists all external persons
     * @param param the request object
     */
    public externalPersonList(param: ExternalPersonApiExternalPersonListRequest, options?: Configuration): Promise<ExternalPersonListResult> {
        return this.api.externalPersonList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists external persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external persons
     * @param param the request object
     */
    public externalPersonQuery(param: ExternalPersonApiExternalPersonQueryRequest, options?: Configuration): Promise<ExternalPersonListResult> {
        return this.api.externalPersonQuery(param.externalPersonsQuery,  options).toPromise();
    }

    /**
     * Update external persons with specific UUID.
     * Update external persons
     * @param param the request object
     */
    public externalPersonUpdate(param: ExternalPersonApiExternalPersonUpdateRequest, options?: Configuration): Promise<ExternalPerson> {
        return this.api.externalPersonUpdate(param.uuid, param.externalPerson,  options).toPromise();
    }

}

import { ObservableJournalApi } from "./ObservableAPI";
import { JournalApiRequestFactory, JournalApiResponseProcessor} from "../apis/JournalApi";

export interface JournalApiJournalCreateRequest {
    /**
     * The content to create
     * @type Journal
     * @memberof JournalApijournalCreate
     */
    journal: Journal
}

export interface JournalApiJournalCreateNoteRequest {
    /**
     * UUID of the journal to add note to
     * @type string
     * @memberof JournalApijournalCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof JournalApijournalCreateNote
     */
    note: Note
}

export interface JournalApiJournalDeleteRequest {
    /**
     * UUID of the journal
     * @type string
     * @memberof JournalApijournalDelete
     */
    uuid: string
}

export interface JournalApiJournalDependentsRequest {
    /**
     * UUID of the journal
     * @type string
     * @memberof JournalApijournalDependents
     */
    uuid: string
    /**
     * Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     * @type boolean
     * @memberof JournalApijournalDependents
     */
    verbose?: boolean
}

export interface JournalApiJournalGetRequest {
    /**
     * UUID of the desired journal
     * @type string
     * @memberof JournalApijournalGet
     */
    uuid: string
}

export interface JournalApiJournalGetAllowedClassifiedIdentifierTypesRequest {
}

export interface JournalApiJournalGetAllowedCountriesRequest {
}

export interface JournalApiJournalGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof JournalApijournalGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface JournalApiJournalGetAllowedKeywordGroupConfigurationsRequest {
}

export interface JournalApiJournalGetAllowedLinkTypesRequest {
}

export interface JournalApiJournalGetAllowedLocalesRequest {
}

export interface JournalApiJournalGetAllowedTypesRequest {
}

export interface JournalApiJournalGetAllowedWorkflowStepsRequest {
}

export interface JournalApiJournalGetOrderingsRequest {
}

export interface JournalApiJournalListRequest {
    /**
     * Number of returned journals per request.
     * @type number
     * @memberof JournalApijournalList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof JournalApijournalList
     */
    offset?: number
    /**
     * The order of the list, must be a value from getJournalOrderings
     * @type string
     * @memberof JournalApijournalList
     */
    order?: string
}

export interface JournalApiJournalListNotesRequest {
    /**
     * UUID of the journal to get notes for
     * @type string
     * @memberof JournalApijournalListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof JournalApijournalListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof JournalApijournalListNotes
     */
    offset?: number
}

export interface JournalApiJournalQueryRequest {
    /**
     * The query to perform
     * @type JournalsQuery
     * @memberof JournalApijournalQuery
     */
    journalsQuery: JournalsQuery
}

export interface JournalApiJournalUpdateRequest {
    /**
     * UUID of the journal to update
     * @type string
     * @memberof JournalApijournalUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type Journal
     * @memberof JournalApijournalUpdate
     */
    journal: Journal
}

export class ObjectJournalApi {
    private api: ObservableJournalApi

    public constructor(configuration: Configuration, requestFactory?: JournalApiRequestFactory, responseProcessor?: JournalApiResponseProcessor) {
        this.api = new ObservableJournalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create journal
     * Create journal
     * @param param the request object
     */
    public journalCreate(param: JournalApiJournalCreateRequest, options?: Configuration): Promise<Journal> {
        return this.api.journalCreate(param.journal,  options).toPromise();
    }

    /**
     * Create note and associate it with a journal
     * Create note
     * @param param the request object
     */
    public journalCreateNote(param: JournalApiJournalCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.journalCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete journal with specific UUID.
     * Delete journal
     * @param param the request object
     */
    public journalDelete(param: JournalApiJournalDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.journalDelete(param.uuid,  options).toPromise();
    }

    /**
     * Lists all dependents to a journal with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a journal
     * @param param the request object
     */
    public journalDependents(param: JournalApiJournalDependentsRequest, options?: Configuration): Promise<ContentRefListResult> {
        return this.api.journalDependents(param.uuid, param.verbose,  options).toPromise();
    }

    /**
     * Get journal with specific UUID.
     * Get journal
     * @param param the request object
     */
    public journalGet(param: JournalApiJournalGetRequest, options?: Configuration): Promise<Journal> {
        return this.api.journalGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of journals
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public journalGetAllowedClassifiedIdentifierTypes(param: JournalApiJournalGetAllowedClassifiedIdentifierTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.journalGetAllowedClassifiedIdentifierTypes( options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'journal.country' attribute of journals
     * A list of allowed countries
     * @param param the request object
     */
    public journalGetAllowedCountries(param: JournalApiJournalGetAllowedCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.journalGetAllowedCountries( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public journalGetAllowedKeywordGroupConfigurationClassifications(param: JournalApiJournalGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.journalGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public journalGetAllowedKeywordGroupConfigurations(param: JournalApiJournalGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.journalGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of journals
     * A list of allowed link types
     * @param param the request object
     */
    public journalGetAllowedLinkTypes(param: JournalApiJournalGetAllowedLinkTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.journalGetAllowedLinkTypes( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public journalGetAllowedLocales(param: JournalApiJournalGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.journalGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of journal
     * A list of allowed journal types
     * @param param the request object
     */
    public journalGetAllowedTypes(param: JournalApiJournalGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.journalGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of journals
     * A list of allowed workflow steps
     * @param param the request object
     */
    public journalGetAllowedWorkflowSteps(param: JournalApiJournalGetAllowedWorkflowStepsRequest, options?: Configuration): Promise<WorkflowListResult> {
        return this.api.journalGetAllowedWorkflowSteps( options).toPromise();
    }

    /**
     * Lists all orderings available to the journal endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public journalGetOrderings(param: JournalApiJournalGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.journalGetOrderings( options).toPromise();
    }

    /**
     * Lists all journals in the Pure instance. If you need to filter the journals returned, see the POST version which supports additional filtering.
     * Lists all journals
     * @param param the request object
     */
    public journalList(param: JournalApiJournalListRequest, options?: Configuration): Promise<JournalListResult> {
        return this.api.journalList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists notes associated with the journal ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public journalListNotes(param: JournalApiJournalListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.journalListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Lists journals in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for journals
     * @param param the request object
     */
    public journalQuery(param: JournalApiJournalQueryRequest, options?: Configuration): Promise<JournalListResult> {
        return this.api.journalQuery(param.journalsQuery,  options).toPromise();
    }

    /**
     * Update journal with specific UUID.
     * Update journal
     * @param param the request object
     */
    public journalUpdate(param: JournalApiJournalUpdateRequest, options?: Configuration): Promise<Journal> {
        return this.api.journalUpdate(param.uuid, param.journal,  options).toPromise();
    }

}

import { ObservableOrganizationApi } from "./ObservableAPI";
import { OrganizationApiRequestFactory, OrganizationApiResponseProcessor} from "../apis/OrganizationApi";

export interface OrganizationApiOrganizationCreateRequest {
    /**
     * The content to create
     * @type Organization
     * @memberof OrganizationApiorganizationCreate
     */
    organization: Organization
}

export interface OrganizationApiOrganizationCreateNoteRequest {
    /**
     * UUID of the organization to add note to
     * @type string
     * @memberof OrganizationApiorganizationCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof OrganizationApiorganizationCreateNote
     */
    note: Note
}

export interface OrganizationApiOrganizationDeleteRequest {
    /**
     * UUID of the organization
     * @type string
     * @memberof OrganizationApiorganizationDelete
     */
    uuid: string
}

export interface OrganizationApiOrganizationDependentsRequest {
    /**
     * UUID of the organization
     * @type string
     * @memberof OrganizationApiorganizationDependents
     */
    uuid: string
    /**
     * Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     * @type boolean
     * @memberof OrganizationApiorganizationDependents
     */
    verbose?: boolean
}

export interface OrganizationApiOrganizationFileUploadsRequest {
    /**
     * 
     * @type HttpFile
     * @memberof OrganizationApiorganizationFileUploads
     */
    body: HttpFile
    /**
     * Set the mime type for the file
     * @type string
     * @memberof OrganizationApiorganizationFileUploads
     */
    contentType?: string
}

export interface OrganizationApiOrganizationGetRequest {
    /**
     * UUID of the desired organization
     * @type string
     * @memberof OrganizationApiorganizationGet
     */
    uuid: string
}

export interface OrganizationApiOrganizationGetAllowedAddressCountriesRequest {
}

export interface OrganizationApiOrganizationGetAllowedAddressSubdivisionsRequest {
}

export interface OrganizationApiOrganizationGetAllowedAddressTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedClassifiedIdentifierTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedClassifiedImageTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedCostCentersRequest {
}

export interface OrganizationApiOrganizationGetAllowedEmailTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof OrganizationApiorganizationGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface OrganizationApiOrganizationGetAllowedKeywordGroupConfigurationsRequest {
}

export interface OrganizationApiOrganizationGetAllowedLocalesRequest {
}

export interface OrganizationApiOrganizationGetAllowedNameVariantTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedPhoneNumberTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedPhotoTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedProfileInformationTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedTypesRequest {
}

export interface OrganizationApiOrganizationGetAllowedWebAddressTypesRequest {
}

export interface OrganizationApiOrganizationGetFileRequest {
    /**
     * UUID of the organization
     * @type string
     * @memberof OrganizationApiorganizationGetFile
     */
    uuid: string
    /**
     * Id of the file
     * @type string
     * @memberof OrganizationApiorganizationGetFile
     */
    fileId: string
}

export interface OrganizationApiOrganizationGetOrderingsRequest {
}

export interface OrganizationApiOrganizationListRequest {
    /**
     * Number of returned organizations per request.
     * @type number
     * @memberof OrganizationApiorganizationList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof OrganizationApiorganizationList
     */
    offset?: number
    /**
     * The order of the list, must be a value from organization_getOrderings
     * @type string
     * @memberof OrganizationApiorganizationList
     */
    order?: string
}

export interface OrganizationApiOrganizationListNotesRequest {
    /**
     * UUID of the organization to get notes for
     * @type string
     * @memberof OrganizationApiorganizationListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof OrganizationApiorganizationListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof OrganizationApiorganizationListNotes
     */
    offset?: number
}

export interface OrganizationApiOrganizationQueryRequest {
    /**
     * The query to perform
     * @type OrganizationsQuery
     * @memberof OrganizationApiorganizationQuery
     */
    organizationsQuery: OrganizationsQuery
}

export interface OrganizationApiOrganizationUpdateRequest {
    /**
     * UUID of the organization to update
     * @type string
     * @memberof OrganizationApiorganizationUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type Organization
     * @memberof OrganizationApiorganizationUpdate
     */
    organization: Organization
}

export class ObjectOrganizationApi {
    private api: ObservableOrganizationApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationApiRequestFactory, responseProcessor?: OrganizationApiResponseProcessor) {
        this.api = new ObservableOrganizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create organization
     * Create organization
     * @param param the request object
     */
    public organizationCreate(param: OrganizationApiOrganizationCreateRequest, options?: Configuration): Promise<Organization> {
        return this.api.organizationCreate(param.organization,  options).toPromise();
    }

    /**
     * Create note and associate it with an organization
     * Create note
     * @param param the request object
     */
    public organizationCreateNote(param: OrganizationApiOrganizationCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.organizationCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete organization with specific UUID.
     * Delete organization
     * @param param the request object
     */
    public organizationDelete(param: OrganizationApiOrganizationDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.organizationDelete(param.uuid,  options).toPromise();
    }

    /**
     * Lists all dependents to the organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the organization
     * @param param the request object
     */
    public organizationDependents(param: OrganizationApiOrganizationDependentsRequest, options?: Configuration): Promise<ContentRefListResult> {
        return this.api.organizationDependents(param.uuid, param.verbose,  options).toPromise();
    }

    /**
     * Uploads file for the organization
     * Upload file to a specific organization
     * @param param the request object
     */
    public organizationFileUploads(param: OrganizationApiOrganizationFileUploadsRequest, options?: Configuration): Promise<void> {
        return this.api.organizationFileUploads(param.body, param.contentType,  options).toPromise();
    }

    /**
     * Get organization with specific UUID.
     * Get organization
     * @param param the request object
     */
    public organizationGet(param: OrganizationApiOrganizationGetRequest, options?: Configuration): Promise<Organization> {
        return this.api.organizationGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'addresses.country' attribute of organizations
     * A list of allowed address countries
     * @param param the request object
     */
    public organizationGetAllowedAddressCountries(param: OrganizationApiOrganizationGetAllowedAddressCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedAddressCountries( options).toPromise();
    }

    /**
     * Get a list of allowed subdivisions that can be used for the 'addresses.subdivisions' attribute of organizations
     * A list of allowed address subdivisions
     * @param param the request object
     */
    public organizationGetAllowedAddressSubdivisions(param: OrganizationApiOrganizationGetAllowedAddressSubdivisionsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedAddressSubdivisions( options).toPromise();
    }

    /**
     * Get a list of allowed address types that can be used for the 'addresses.type' attribute of organizations
     * A list of allowed address types
     * @param param the request object
     */
    public organizationGetAllowedAddressTypes(param: OrganizationApiOrganizationGetAllowedAddressTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedAddressTypes( options).toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of organizations
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public organizationGetAllowedClassifiedIdentifierTypes(param: OrganizationApiOrganizationGetAllowedClassifiedIdentifierTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedClassifiedIdentifierTypes( options).toPromise();
    }

    /**
     * Get a list of allowed classified photo types that can be used for the 'photos.type' attribute of organizations
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public organizationGetAllowedClassifiedImageTypes(param: OrganizationApiOrganizationGetAllowedClassifiedImageTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedClassifiedImageTypes( options).toPromise();
    }

    /**
     * Get a list of allowed cost centers that can be used for the 'costCenters' attribute of organizations
     * A list of allowed cost centers
     * @param param the request object
     */
    public organizationGetAllowedCostCenters(param: OrganizationApiOrganizationGetAllowedCostCentersRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedCostCenters( options).toPromise();
    }

    /**
     * Get a list of allowed e-mail types that can be used for the 'emails.type' attribute of organizations
     * A list of allowed e-mail types
     * @param param the request object
     */
    public organizationGetAllowedEmailTypes(param: OrganizationApiOrganizationGetAllowedEmailTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedEmailTypes( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public organizationGetAllowedKeywordGroupConfigurationClassifications(param: OrganizationApiOrganizationGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public organizationGetAllowedKeywordGroupConfigurations(param: OrganizationApiOrganizationGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.organizationGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public organizationGetAllowedLocales(param: OrganizationApiOrganizationGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.organizationGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed name variant types that can be used for the 'nameVariants.type' attribute of organizations
     * A list of allowed name variant types
     * @param param the request object
     */
    public organizationGetAllowedNameVariantTypes(param: OrganizationApiOrganizationGetAllowedNameVariantTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedNameVariantTypes( options).toPromise();
    }

    /**
     * Get a list of allowed phone number types that can be used for the 'phoneNumbers.type' attribute of organizations
     * A list of allowed phone number types
     * @param param the request object
     */
    public organizationGetAllowedPhoneNumberTypes(param: OrganizationApiOrganizationGetAllowedPhoneNumberTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedPhoneNumberTypes( options).toPromise();
    }

    /**
     * Get a list of allowed photo types that can be used for the 'photos.type' attribute of organizations
     * A list of allowed photo types
     * @param param the request object
     */
    public organizationGetAllowedPhotoTypes(param: OrganizationApiOrganizationGetAllowedPhotoTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedPhotoTypes( options).toPromise();
    }

    /**
     * Get a list of allowed profile information types that can be used for the 'profileInformations.type' attribute of organizations
     * A list of allowed profile information types
     * @param param the request object
     */
    public organizationGetAllowedProfileInformationTypes(param: OrganizationApiOrganizationGetAllowedProfileInformationTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedProfileInformationTypes( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of organizations
     * A list of allowed organization types
     * @param param the request object
     */
    public organizationGetAllowedTypes(param: OrganizationApiOrganizationGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed web address types that can be used for the 'webAddresses.type' attribute of organizations
     * A list of allowed web address types
     * @param param the request object
     */
    public organizationGetAllowedWebAddressTypes(param: OrganizationApiOrganizationGetAllowedWebAddressTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.organizationGetAllowedWebAddressTypes( options).toPromise();
    }

    /**
     * Get file from the organization
     * Get file from the organization
     * @param param the request object
     */
    public organizationGetFile(param: OrganizationApiOrganizationGetFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.organizationGetFile(param.uuid, param.fileId,  options).toPromise();
    }

    /**
     * Lists all orderings available to the organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public organizationGetOrderings(param: OrganizationApiOrganizationGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.organizationGetOrderings( options).toPromise();
    }

    /**
     * Lists all organizations in the Pure instance. If you need to filter the organizations returned, see the POST version which supports additional filtering.
     * Lists all organizations
     * @param param the request object
     */
    public organizationList(param: OrganizationApiOrganizationListRequest, options?: Configuration): Promise<OrganizationListResult> {
        return this.api.organizationList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists notes associated with an organization ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public organizationListNotes(param: OrganizationApiOrganizationListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.organizationListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Lists organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for organizations
     * @param param the request object
     */
    public organizationQuery(param: OrganizationApiOrganizationQueryRequest, options?: Configuration): Promise<OrganizationListResult> {
        return this.api.organizationQuery(param.organizationsQuery,  options).toPromise();
    }

    /**
     * Update organization with specific UUID.
     * Update organization
     * @param param the request object
     */
    public organizationUpdate(param: OrganizationApiOrganizationUpdateRequest, options?: Configuration): Promise<Organization> {
        return this.api.organizationUpdate(param.uuid, param.organization,  options).toPromise();
    }

}

import { ObservablePersonApi } from "./ObservableAPI";
import { PersonApiRequestFactory, PersonApiResponseProcessor} from "../apis/PersonApi";

export interface PersonApiPersonCreateRequest {
    /**
     * The content to create
     * @type Person
     * @memberof PersonApipersonCreate
     */
    person: Person
}

export interface PersonApiPersonCreateNoteRequest {
    /**
     * UUID of the person to add note to
     * @type string
     * @memberof PersonApipersonCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof PersonApipersonCreateNote
     */
    note: Note
}

export interface PersonApiPersonDeleteRequest {
    /**
     * UUID of the person
     * @type string
     * @memberof PersonApipersonDelete
     */
    uuid: string
}

export interface PersonApiPersonFileUploadsRequest {
    /**
     * 
     * @type HttpFile
     * @memberof PersonApipersonFileUploads
     */
    body: HttpFile
    /**
     * Set the mime type for the file
     * @type string
     * @memberof PersonApipersonFileUploads
     */
    contentType?: string
}

export interface PersonApiPersonGetRequest {
    /**
     * UUID of the desired person
     * @type string
     * @memberof PersonApipersonGet
     */
    uuid: string
}

export interface PersonApiPersonGetAllowedAcademicQualificationsFieldOfStudiesRequest {
}

export interface PersonApiPersonGetAllowedAcademicQualificationsTypesRequest {
}

export interface PersonApiPersonGetAllowedAddressCountriesRequest {
}

export interface PersonApiPersonGetAllowedAddressSubdivisionsRequest {
}

export interface PersonApiPersonGetAllowedAddressTypesRequest {
}

export interface PersonApiPersonGetAllowedClassifiedIdentifierTypesRequest {
}

export interface PersonApiPersonGetAllowedExternalPositionsAppointmentsRequest {
}

export interface PersonApiPersonGetAllowedGendersRequest {
}

export interface PersonApiPersonGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof PersonApipersonGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface PersonApiPersonGetAllowedKeywordGroupConfigurationsRequest {
}

export interface PersonApiPersonGetAllowedLeavesOfAbsenceClassificationsRequest {
}

export interface PersonApiPersonGetAllowedLinkTypesRequest {
}

export interface PersonApiPersonGetAllowedLocalesRequest {
}

export interface PersonApiPersonGetAllowedNamesTypesRequest {
}

export interface PersonApiPersonGetAllowedNationalitiesRequest {
}

export interface PersonApiPersonGetAllowedPersonOrganizationAssociationsEmailTypesRequest {
}

export interface PersonApiPersonGetAllowedPersonOrganizationAssociationsEmploymentTypesRequest {
}

export interface PersonApiPersonGetAllowedPersonOrganizationAssociationsJobTitlesRequest {
}

export interface PersonApiPersonGetAllowedPersonOrganizationAssociationsPhoneNumberTypesRequest {
}

export interface PersonApiPersonGetAllowedPersonOrganizationAssociationsSupervisorRolesRequest {
}

export interface PersonApiPersonGetAllowedPersonOrganizationAssociationsWebAddressTypesRequest {
}

export interface PersonApiPersonGetAllowedPrivateAddressCountriesRequest {
}

export interface PersonApiPersonGetAllowedProfileInformationTypesRequest {
}

export interface PersonApiPersonGetAllowedProfilePhotoTypesRequest {
}

export interface PersonApiPersonGetAllowedProfilePhotosTypesRequest {
}

export interface PersonApiPersonGetAllowedStaffOrganizationAssociationsContractTypesRequest {
}

export interface PersonApiPersonGetAllowedStaffOrganizationAssociationsStaffTypesRequest {
}

export interface PersonApiPersonGetAllowedStudentAssociationsEmploymentTypesRequest {
}

export interface PersonApiPersonGetAllowedTitlesTypesRequest {
}

export interface PersonApiPersonGetAllowedVisitingScholarAssociationsEmploymentTypesRequest {
}

export interface PersonApiPersonGetFileRequest {
    /**
     * UUID of the person
     * @type string
     * @memberof PersonApipersonGetFile
     */
    uuid: string
    /**
     * File id 
     * @type string
     * @memberof PersonApipersonGetFile
     */
    fileId: string
}

export interface PersonApiPersonGetHighlightedContentRequest {
    /**
     * UUID of the owner (person) of the highlighted content
     * @type string
     * @memberof PersonApipersonGetHighlightedContent
     */
    uuid: string
}

export interface PersonApiPersonGetOrderingsRequest {
}

export interface PersonApiPersonListRequest {
    /**
     * Number of returned persons per request.
     * @type number
     * @memberof PersonApipersonList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof PersonApipersonList
     */
    offset?: number
    /**
     * The order of the list, must be a value from getPersonOrderings
     * @type string
     * @memberof PersonApipersonList
     */
    order?: string
}

export interface PersonApiPersonListNotesRequest {
    /**
     * UUID of the person to get notes for
     * @type string
     * @memberof PersonApipersonListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof PersonApipersonListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof PersonApipersonListNotes
     */
    offset?: number
}

export interface PersonApiPersonQueryRequest {
    /**
     * The query to perform
     * @type PersonsQuery
     * @memberof PersonApipersonQuery
     */
    personsQuery: PersonsQuery
}

export interface PersonApiPersonSuperviseeRequest {
    /**
     * UUID of the person
     * @type string
     * @memberof PersonApipersonSupervisee
     */
    uuid: string
}

export interface PersonApiPersonUpdateRequest {
    /**
     * UUID of the person to update
     * @type string
     * @memberof PersonApipersonUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type Person
     * @memberof PersonApipersonUpdate
     */
    person: Person
}

export interface PersonApiPersonUpdateHighlightedContentRequest {
    /**
     * UUID of the person to update highlighted content for
     * @type string
     * @memberof PersonApipersonUpdateHighlightedContent
     */
    uuid: string
    /**
     * The highlighted content references to set on the person
     * @type HighlightedContent
     * @memberof PersonApipersonUpdateHighlightedContent
     */
    highlightedContent: HighlightedContent
}

export class ObjectPersonApi {
    private api: ObservablePersonApi

    public constructor(configuration: Configuration, requestFactory?: PersonApiRequestFactory, responseProcessor?: PersonApiResponseProcessor) {
        this.api = new ObservablePersonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create person
     * Create person
     * @param param the request object
     */
    public personCreate(param: PersonApiPersonCreateRequest, options?: Configuration): Promise<Person> {
        return this.api.personCreate(param.person,  options).toPromise();
    }

    /**
     * Create note and associate it with a person
     * Create note
     * @param param the request object
     */
    public personCreateNote(param: PersonApiPersonCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.personCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete person with specific UUID.
     * Delete person
     * @param param the request object
     */
    public personDelete(param: PersonApiPersonDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.personDelete(param.uuid,  options).toPromise();
    }

    /**
     * Uploads file for the person
     * Upload file to a specific person
     * @param param the request object
     */
    public personFileUploads(param: PersonApiPersonFileUploadsRequest, options?: Configuration): Promise<void> {
        return this.api.personFileUploads(param.body, param.contentType,  options).toPromise();
    }

    /**
     * Get person with specific UUID.
     * Get person
     * @param param the request object
     */
    public personGet(param: PersonApiPersonGetRequest, options?: Configuration): Promise<Person> {
        return this.api.personGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of classifications that can be used for the 'academicQualifications.fieldOfStudy' attribute of persons
     * A list of the allowed values for field of study
     * @param param the request object
     */
    public personGetAllowedAcademicQualificationsFieldOfStudies(param: PersonApiPersonGetAllowedAcademicQualificationsFieldOfStudiesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedAcademicQualificationsFieldOfStudies( options).toPromise();
    }

    /**
     * Get a list of allowed academic qualification types for persons
     * A list of allowed academic qualification types for persons
     * @param param the request object
     */
    public personGetAllowedAcademicQualificationsTypes(param: PersonApiPersonGetAllowedAcademicQualificationsTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedAcademicQualificationsTypes( options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'addresses.country' attribute of persons
     * A list of allowed address countries
     * @param param the request object
     */
    public personGetAllowedAddressCountries(param: PersonApiPersonGetAllowedAddressCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedAddressCountries( options).toPromise();
    }

    /**
     * Get a list of allowed subdivisions can be used for the 'subdivision' attribute of person organization associations
     * A list of allowed subdivisions
     * @param param the request object
     */
    public personGetAllowedAddressSubdivisions(param: PersonApiPersonGetAllowedAddressSubdivisionsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedAddressSubdivisions( options).toPromise();
    }

    /**
     * Get a list of allowed address types that can be used for the 'addresses.type' attribute of persons
     * A list of allowed address types
     * @param param the request object
     */
    public personGetAllowedAddressTypes(param: PersonApiPersonGetAllowedAddressTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedAddressTypes( options).toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of persons
     * A list of allowed classified identifier types
     * @param param the request object
     */
    public personGetAllowedClassifiedIdentifierTypes(param: PersonApiPersonGetAllowedClassifiedIdentifierTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedClassifiedIdentifierTypes( options).toPromise();
    }

    /**
     * Get a list of classifications that can be used for the 'externalPositions.appointment' attribute of persons
     * A list of the allowed values for appointments
     * @param param the request object
     */
    public personGetAllowedExternalPositionsAppointments(param: PersonApiPersonGetAllowedExternalPositionsAppointmentsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedExternalPositionsAppointments( options).toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting the person gender property.
     * A list of allowed classifications for the gender property
     * @param param the request object
     */
    public personGetAllowedGenders(param: PersonApiPersonGetAllowedGendersRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedGenders( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public personGetAllowedKeywordGroupConfigurationClassifications(param: PersonApiPersonGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public personGetAllowedKeywordGroupConfigurations(param: PersonApiPersonGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.personGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting the leaveOfAbsence property.
     * A list of allowed classifications for the leave of absence property
     * @param param the request object
     */
    public personGetAllowedLeavesOfAbsenceClassifications(param: PersonApiPersonGetAllowedLeavesOfAbsenceClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedLeavesOfAbsenceClassifications( options).toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of persons
     * A list of allowed link types
     * @param param the request object
     */
    public personGetAllowedLinkTypes(param: PersonApiPersonGetAllowedLinkTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedLinkTypes( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public personGetAllowedLocales(param: PersonApiPersonGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.personGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a classified name.
     * A list of allowed classifications for classified names
     * @param param the request object
     */
    public personGetAllowedNamesTypes(param: PersonApiPersonGetAllowedNamesTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedNamesTypes( options).toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting the nationality property.
     * A list of allowed classifications for the nationalities property
     * @param param the request object
     */
    public personGetAllowedNationalities(param: PersonApiPersonGetAllowedNationalitiesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedNationalities( options).toPromise();
    }

    /**
     * Get a list of allowed email types for person organisation associations on persons
     * A list of allowed email types
     * @param param the request object
     */
    public personGetAllowedPersonOrganizationAssociationsEmailTypes(param: PersonApiPersonGetAllowedPersonOrganizationAssociationsEmailTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPersonOrganizationAssociationsEmailTypes( options).toPromise();
    }

    /**
     * Get a list of allowed employment types for person organisation associations on persons
     * A list of allowed employment types
     * @param param the request object
     */
    public personGetAllowedPersonOrganizationAssociationsEmploymentTypes(param: PersonApiPersonGetAllowedPersonOrganizationAssociationsEmploymentTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPersonOrganizationAssociationsEmploymentTypes( options).toPromise();
    }

    /**
     * Get a list of allowed job titles for person organisation associations on persons
     * A list of allowed job titles
     * @param param the request object
     */
    public personGetAllowedPersonOrganizationAssociationsJobTitles(param: PersonApiPersonGetAllowedPersonOrganizationAssociationsJobTitlesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPersonOrganizationAssociationsJobTitles( options).toPromise();
    }

    /**
     * Get a list of allowed phone numbers types for person organisation associations on persons
     * A list of allowed phone number types
     * @param param the request object
     */
    public personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes(param: PersonApiPersonGetAllowedPersonOrganizationAssociationsPhoneNumberTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes( options).toPromise();
    }

    /**
     * Get a list of allowed supervisor roles for person organisation associations on persons
     * A list of allowed supervisor roles
     * @param param the request object
     */
    public personGetAllowedPersonOrganizationAssociationsSupervisorRoles(param: PersonApiPersonGetAllowedPersonOrganizationAssociationsSupervisorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPersonOrganizationAssociationsSupervisorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed web address types for person organisation associations on persons
     * A list of allowed web address types
     * @param param the request object
     */
    public personGetAllowedPersonOrganizationAssociationsWebAddressTypes(param: PersonApiPersonGetAllowedPersonOrganizationAssociationsWebAddressTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPersonOrganizationAssociationsWebAddressTypes( options).toPromise();
    }

    /**
     * Get a list of allowed country classifications for private address on persons
     * A list of allowed country classifications for private address
     * @param param the request object
     */
    public personGetAllowedPrivateAddressCountries(param: PersonApiPersonGetAllowedPrivateAddressCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedPrivateAddressCountries( options).toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting an entry in profile information.
     * A list of allowed classifications for the profile information property
     * @param param the request object
     */
    public personGetAllowedProfileInformationTypes(param: PersonApiPersonGetAllowedProfileInformationTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedProfileInformationTypes( options).toPromise();
    }

    /**
     * Get a list of allowed photo types that can be used for the 'profilePhotos.type' attribute of persons
     * A list of allowed photo types
     * @param param the request object
     */
    public personGetAllowedProfilePhotoTypes(param: PersonApiPersonGetAllowedProfilePhotoTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedProfilePhotoTypes( options).toPromise();
    }

    /**
     * Get a list of allowed types for person profile photos
     * A list of allowed types for person profile photos
     * @param param the request object
     */
    public personGetAllowedProfilePhotosTypes(param: PersonApiPersonGetAllowedProfilePhotosTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedProfilePhotosTypes( options).toPromise();
    }

    /**
     * Get a list of allowed contract types for staff organisation associations on persons
     * A list of allowed contract types
     * @param param the request object
     */
    public personGetAllowedStaffOrganizationAssociationsContractTypes(param: PersonApiPersonGetAllowedStaffOrganizationAssociationsContractTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedStaffOrganizationAssociationsContractTypes( options).toPromise();
    }

    /**
     * Get a list of allowed staff types for staff organisation associations on persons
     * A list of allowed staff types
     * @param param the request object
     */
    public personGetAllowedStaffOrganizationAssociationsStaffTypes(param: PersonApiPersonGetAllowedStaffOrganizationAssociationsStaffTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedStaffOrganizationAssociationsStaffTypes( options).toPromise();
    }

    /**
     * Get a list of allowed employment types for student organisation associations on persons
     * A list of allowed employment types
     * @param param the request object
     */
    public personGetAllowedStudentAssociationsEmploymentTypes(param: PersonApiPersonGetAllowedStudentAssociationsEmploymentTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedStudentAssociationsEmploymentTypes( options).toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting a title.
     * A list of allowed classifications for the titles property
     * @param param the request object
     */
    public personGetAllowedTitlesTypes(param: PersonApiPersonGetAllowedTitlesTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedTitlesTypes( options).toPromise();
    }

    /**
     * Get a list of allowed employment types for visiting scholar organisation associations on persons
     * A list of allowed employment types
     * @param param the request object
     */
    public personGetAllowedVisitingScholarAssociationsEmploymentTypes(param: PersonApiPersonGetAllowedVisitingScholarAssociationsEmploymentTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.personGetAllowedVisitingScholarAssociationsEmploymentTypes( options).toPromise();
    }

    /**
     * Get file from the person
     * Get file from the person
     * @param param the request object
     */
    public personGetFile(param: PersonApiPersonGetFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.personGetFile(param.uuid, param.fileId,  options).toPromise();
    }

    /**
     * Get highlighted content for the person with the specific UUID. Highlights are only available for editorial types
     * Get highlighted content
     * @param param the request object
     */
    public personGetHighlightedContent(param: PersonApiPersonGetHighlightedContentRequest, options?: Configuration): Promise<HighlightedContent> {
        return this.api.personGetHighlightedContent(param.uuid,  options).toPromise();
    }

    /**
     * Lists all orderings available to the person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public personGetOrderings(param: PersonApiPersonGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.personGetOrderings( options).toPromise();
    }

    /**
     * Lists all persons in the Pure instance. If you need to filter the persons returned, see the POST version which supports additional filtering.
     * Lists all persons
     * @param param the request object
     */
    public personList(param: PersonApiPersonListRequest, options?: Configuration): Promise<PersonListResult> {
        return this.api.personList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists notes associated with an person ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public personListNotes(param: PersonApiPersonListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.personListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Lists persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for persons
     * @param param the request object
     */
    public personQuery(param: PersonApiPersonQueryRequest, options?: Configuration): Promise<PersonListResult> {
        return this.api.personQuery(param.personsQuery,  options).toPromise();
    }

    /**
     * Find supervisees of a person by their specific UUID.
     * person supervisees
     * @param param the request object
     */
    public personSupervisee(param: PersonApiPersonSuperviseeRequest, options?: Configuration): Promise<PersonSuperviseeAssociationListResult> {
        return this.api.personSupervisee(param.uuid,  options).toPromise();
    }

    /**
     * Update person with specific UUID.
     * Update person
     * @param param the request object
     */
    public personUpdate(param: PersonApiPersonUpdateRequest, options?: Configuration): Promise<Person> {
        return this.api.personUpdate(param.uuid, param.person,  options).toPromise();
    }

    /**
     * Update highlighted content references. Add an empty array of references for a content type to not highlight any items of this type. Types that are not present will be ignored. Highlights can only be updated for editorial types
     * Update highlighted content
     * @param param the request object
     */
    public personUpdateHighlightedContent(param: PersonApiPersonUpdateHighlightedContentRequest, options?: Configuration): Promise<HighlightedContent> {
        return this.api.personUpdateHighlightedContent(param.uuid, param.highlightedContent,  options).toPromise();
    }

}

import { ObservablePublisherApi } from "./ObservableAPI";
import { PublisherApiRequestFactory, PublisherApiResponseProcessor} from "../apis/PublisherApi";

export interface PublisherApiPublisherCreateRequest {
    /**
     * The content to create
     * @type Publisher
     * @memberof PublisherApipublisherCreate
     */
    publisher: Publisher
}

export interface PublisherApiPublisherCreateNoteRequest {
    /**
     * UUID of the publisher to add note to
     * @type string
     * @memberof PublisherApipublisherCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof PublisherApipublisherCreateNote
     */
    note: Note
}

export interface PublisherApiPublisherDeleteRequest {
    /**
     * UUID of the publisher
     * @type string
     * @memberof PublisherApipublisherDelete
     */
    uuid: string
}

export interface PublisherApiPublisherDependentsRequest {
    /**
     * UUID of the publisher
     * @type string
     * @memberof PublisherApipublisherDependents
     */
    uuid: string
    /**
     * Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     * @type boolean
     * @memberof PublisherApipublisherDependents
     */
    verbose?: boolean
}

export interface PublisherApiPublisherGetRequest {
    /**
     * UUID of the desired publisher
     * @type string
     * @memberof PublisherApipublisherGet
     */
    uuid: string
}

export interface PublisherApiPublisherGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof PublisherApipublisherGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface PublisherApiPublisherGetAllowedKeywordGroupConfigurationsRequest {
}

export interface PublisherApiPublisherGetAllowedLocalesRequest {
}

export interface PublisherApiPublisherGetAllowedTypesRequest {
}

export interface PublisherApiPublisherGetAllowedWorkflowStepsRequest {
}

export interface PublisherApiPublisherGetOrderingsRequest {
}

export interface PublisherApiPublisherListRequest {
    /**
     * Number of returned publishers per request.
     * @type number
     * @memberof PublisherApipublisherList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof PublisherApipublisherList
     */
    offset?: number
    /**
     * The order of the list, must be a value from publisher_getOrderings
     * @type string
     * @memberof PublisherApipublisherList
     */
    order?: string
}

export interface PublisherApiPublisherListNotesRequest {
    /**
     * UUID of the publisher to get notes for
     * @type string
     * @memberof PublisherApipublisherListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof PublisherApipublisherListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof PublisherApipublisherListNotes
     */
    offset?: number
}

export interface PublisherApiPublisherQueryRequest {
    /**
     * The query to perform
     * @type PublishersQuery
     * @memberof PublisherApipublisherQuery
     */
    publishersQuery: PublishersQuery
}

export interface PublisherApiPublisherUpdateRequest {
    /**
     * UUID of the publisher to update
     * @type string
     * @memberof PublisherApipublisherUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type Publisher
     * @memberof PublisherApipublisherUpdate
     */
    publisher: Publisher
}

export interface PublisherApiPublishersGetAllowedCountriesRequest {
}

export class ObjectPublisherApi {
    private api: ObservablePublisherApi

    public constructor(configuration: Configuration, requestFactory?: PublisherApiRequestFactory, responseProcessor?: PublisherApiResponseProcessor) {
        this.api = new ObservablePublisherApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create publisher
     * Create publisher
     * @param param the request object
     */
    public publisherCreate(param: PublisherApiPublisherCreateRequest, options?: Configuration): Promise<Publisher> {
        return this.api.publisherCreate(param.publisher,  options).toPromise();
    }

    /**
     * Create note and associate it with a publisher
     * Create note
     * @param param the request object
     */
    public publisherCreateNote(param: PublisherApiPublisherCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.publisherCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete publisher with specific UUID.
     * Delete publisher
     * @param param the request object
     */
    public publisherDelete(param: PublisherApiPublisherDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.publisherDelete(param.uuid,  options).toPromise();
    }

    /**
     * Lists all dependents to a publisher with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a publisher
     * @param param the request object
     */
    public publisherDependents(param: PublisherApiPublisherDependentsRequest, options?: Configuration): Promise<ContentRefListResult> {
        return this.api.publisherDependents(param.uuid, param.verbose,  options).toPromise();
    }

    /**
     * Get publisher with specific UUID.
     * Get publisher
     * @param param the request object
     */
    public publisherGet(param: PublisherApiPublisherGetRequest, options?: Configuration): Promise<Publisher> {
        return this.api.publisherGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public publisherGetAllowedKeywordGroupConfigurationClassifications(param: PublisherApiPublisherGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.publisherGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public publisherGetAllowedKeywordGroupConfigurations(param: PublisherApiPublisherGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.publisherGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public publisherGetAllowedLocales(param: PublisherApiPublisherGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.publisherGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of publishers
     * A list of allowed publisher types
     * @param param the request object
     */
    public publisherGetAllowedTypes(param: PublisherApiPublisherGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.publisherGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of publishers
     * A list of allowed workflow steps
     * @param param the request object
     */
    public publisherGetAllowedWorkflowSteps(param: PublisherApiPublisherGetAllowedWorkflowStepsRequest, options?: Configuration): Promise<WorkflowListResult> {
        return this.api.publisherGetAllowedWorkflowSteps( options).toPromise();
    }

    /**
     * Lists all orderings available to the publisher endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public publisherGetOrderings(param: PublisherApiPublisherGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.publisherGetOrderings( options).toPromise();
    }

    /**
     * Lists all publishers in the Pure instance. If you need to filter the publishers returned, see the POST version which supports additional filtering.
     * Lists all publishers
     * @param param the request object
     */
    public publisherList(param: PublisherApiPublisherListRequest, options?: Configuration): Promise<PublisherListResult> {
        return this.api.publisherList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists notes associated with a publisher ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public publisherListNotes(param: PublisherApiPublisherListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.publisherListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Lists publishers in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for publishers
     * @param param the request object
     */
    public publisherQuery(param: PublisherApiPublisherQueryRequest, options?: Configuration): Promise<PublisherListResult> {
        return this.api.publisherQuery(param.publishersQuery,  options).toPromise();
    }

    /**
     * Update publishers with specific UUID.
     * Update publishers
     * @param param the request object
     */
    public publisherUpdate(param: PublisherApiPublisherUpdateRequest, options?: Configuration): Promise<Publisher> {
        return this.api.publisherUpdate(param.uuid, param.publisher,  options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of publishers
     * A list of allowed countries
     * @param param the request object
     */
    public publishersGetAllowedCountries(param: PublisherApiPublishersGetAllowedCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.publishersGetAllowedCountries( options).toPromise();
    }

}
