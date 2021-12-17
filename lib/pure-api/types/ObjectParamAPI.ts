import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AcademicQualification } from '../models/AcademicQualification';
import { AccessDefinitionRef } from '../models/AccessDefinitionRef';
import { ActivityRef } from '../models/ActivityRef';
import { AdditionalFileElectronicVersion } from '../models/AdditionalFileElectronicVersion';
import { AdditionalISSN } from '../models/AdditionalISSN';
import { Address } from '../models/Address';
import { AllowedTemplate } from '../models/AllowedTemplate';
import { AllowedTemplateListResult } from '../models/AllowedTemplateListResult';
import { AlternativeISSN } from '../models/AlternativeISSN';
import { ApplicationRef } from '../models/ApplicationRef';
import { ArticleProcessingCharge } from '../models/ArticleProcessingCharge';
import { AuthorCollaborationRef } from '../models/AuthorCollaborationRef';
import { AwardRef } from '../models/AwardRef';
import { BookAnthology } from '../models/BookAnthology';
import { BookAnthologyAllOf } from '../models/BookAnthologyAllOf';
import { BookSeriesJournalAssociation } from '../models/BookSeriesJournalAssociation';
import { CERIFAddress } from '../models/CERIFAddress';
import { CaseNote } from '../models/CaseNote';
import { ClassificationRef } from '../models/ClassificationRef';
import { ClassificationRefList } from '../models/ClassificationRefList';
import { ClassificationSchemeRef } from '../models/ClassificationSchemeRef';
import { ClassificationSchemeRefAllOf } from '../models/ClassificationSchemeRefAllOf';
import { ClassificationsKeywordGroup } from '../models/ClassificationsKeywordGroup';
import { ClassificationsKeywordGroupAllOf } from '../models/ClassificationsKeywordGroupAllOf';
import { ClassifiedAddress } from '../models/ClassifiedAddress';
import { ClassifiedCaseNoteSource } from '../models/ClassifiedCaseNoteSource';
import { ClassifiedFile } from '../models/ClassifiedFile';
import { ClassifiedId } from '../models/ClassifiedId';
import { ClassifiedIdAllOf } from '../models/ClassifiedIdAllOf';
import { ClassifiedLocalizedValue } from '../models/ClassifiedLocalizedValue';
import { ClassifiedName } from '../models/ClassifiedName';
import { ClassifiedValue } from '../models/ClassifiedValue';
import { CompoundDate } from '../models/CompoundDate';
import { CompoundDateRange } from '../models/CompoundDateRange';
import { ConferenceSeriesRef } from '../models/ConferenceSeriesRef';
import { ContentRef } from '../models/ContentRef';
import { ContentRefListResult } from '../models/ContentRefListResult';
import { ContributionToBookAnthology } from '../models/ContributionToBookAnthology';
import { ContributionToBookAnthologyAllOf } from '../models/ContributionToBookAnthologyAllOf';
import { ContributionToConference } from '../models/ContributionToConference';
import { ContributionToConferenceAllOf } from '../models/ContributionToConferenceAllOf';
import { ContributionToJournal } from '../models/ContributionToJournal';
import { ContributionToJournalAllOf } from '../models/ContributionToJournalAllOf';
import { ContributionToMemorandum } from '../models/ContributionToMemorandum';
import { ContributionToMemorandumAllOf } from '../models/ContributionToMemorandumAllOf';
import { ContributionToPeriodical } from '../models/ContributionToPeriodical';
import { ContributionToPeriodicalAllOf } from '../models/ContributionToPeriodicalAllOf';
import { ContributorAssociation } from '../models/ContributorAssociation';
import { DataSetRef } from '../models/DataSetRef';
import { DateRange } from '../models/DateRange';
import { DependencyViolationProblemDetails } from '../models/DependencyViolationProblemDetails';
import { DependencyViolationProblemDetailsAllOf } from '../models/DependencyViolationProblemDetailsAllOf';
import { DisciplinesAssociation } from '../models/DisciplinesAssociation';
import { DisciplinesAssociationListResult } from '../models/DisciplinesAssociationListResult';
import { DisciplinesAssociationsQuery } from '../models/DisciplinesAssociationsQuery';
import { DisciplinesDiscipline } from '../models/DisciplinesDiscipline';
import { DisciplinesDisciplineAssignment } from '../models/DisciplinesDisciplineAssignment';
import { DisciplinesDisciplineListResult } from '../models/DisciplinesDisciplineListResult';
import { DisciplinesDisciplineScheme } from '../models/DisciplinesDisciplineScheme';
import { DisciplinesDisciplineSchemeListResult } from '../models/DisciplinesDisciplineSchemeListResult';
import { Document } from '../models/Document';
import { DoiElectronicVersion } from '../models/DoiElectronicVersion';
import { DoiElectronicVersionAllOf } from '../models/DoiElectronicVersionAllOf';
import { ElectronicISSN } from '../models/ElectronicISSN';
import { ElectronicVersion } from '../models/ElectronicVersion';
import { ElectronicVersionFile } from '../models/ElectronicVersionFile';
import { EquipmentRef } from '../models/EquipmentRef';
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
import { FileElectronicVersion } from '../models/FileElectronicVersion';
import { FileElectronicVersionAllOf } from '../models/FileElectronicVersionAllOf';
import { FormattedString } from '../models/FormattedString';
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
import { ISSNRef } from '../models/ISSNRef';
import { Id } from '../models/Id';
import { IdAllOf } from '../models/IdAllOf';
import { Identifier } from '../models/Identifier';
import { ImpactRef } from '../models/ImpactRef';
import { InternalOrExternalSupervisor } from '../models/InternalOrExternalSupervisor';
import { Journal } from '../models/Journal';
import { JournalAssociation } from '../models/JournalAssociation';
import { JournalListResult } from '../models/JournalListResult';
import { JournalRef } from '../models/JournalRef';
import { JournalTitle } from '../models/JournalTitle';
import { JournalTitleRef } from '../models/JournalTitleRef';
import { JournalsQuery } from '../models/JournalsQuery';
import { Keyword } from '../models/Keyword';
import { KeywordContainer } from '../models/KeywordContainer';
import { KeywordGroup } from '../models/KeywordGroup';
import { KeywordGroupConfiguration } from '../models/KeywordGroupConfiguration';
import { KeywordGroupConfigurationList } from '../models/KeywordGroupConfigurationList';
import { Link } from '../models/Link';
import { LinkElectronicVersion } from '../models/LinkElectronicVersion';
import { LinkElectronicVersionAllOf } from '../models/LinkElectronicVersionAllOf';
import { LocalesList } from '../models/LocalesList';
import { Memorandum } from '../models/Memorandum';
import { Name } from '../models/Name';
import { NavigationLink } from '../models/NavigationLink';
import { NonTextual } from '../models/NonTextual';
import { NonTextualAllOf } from '../models/NonTextualAllOf';
import { Note } from '../models/Note';
import { NoteListResult } from '../models/NoteListResult';
import { OrderingsList } from '../models/OrderingsList';
import { Organization } from '../models/Organization';
import { OrganizationListResult } from '../models/OrganizationListResult';
import { OrganizationOrExternalOrganizationRef } from '../models/OrganizationOrExternalOrganizationRef';
import { OrganizationRef } from '../models/OrganizationRef';
import { OrganizationsQuery } from '../models/OrganizationsQuery';
import { OtherContribution } from '../models/OtherContribution';
import { OtherContributionAllOf } from '../models/OtherContributionAllOf';
import { PageInformation } from '../models/PageInformation';
import { Patent } from '../models/Patent';
import { PatentAllOf } from '../models/PatentAllOf';
import { Person } from '../models/Person';
import { PersonClassifiedLeaveOfAbsence } from '../models/PersonClassifiedLeaveOfAbsence';
import { PersonListResult } from '../models/PersonListResult';
import { PersonOrganizationAssociation } from '../models/PersonOrganizationAssociation';
import { PersonRef } from '../models/PersonRef';
import { PersonSuperviseeAssociation } from '../models/PersonSuperviseeAssociation';
import { PersonSuperviseeAssociationListResult } from '../models/PersonSuperviseeAssociationListResult';
import { PersonSupervisorAssociation } from '../models/PersonSupervisorAssociation';
import { PersonsQuery } from '../models/PersonsQuery';
import { PressMediaRef } from '../models/PressMediaRef';
import { PrimaryId } from '../models/PrimaryId';
import { PrimaryIdAllOf } from '../models/PrimaryIdAllOf';
import { PrizeRef } from '../models/PrizeRef';
import { ProblemDetails } from '../models/ProblemDetails';
import { ProfessionalQualification } from '../models/ProfessionalQualification';
import { ProjectRef } from '../models/ProjectRef';
import { PublicationSeries } from '../models/PublicationSeries';
import { PublicationStatus } from '../models/PublicationStatus';
import { Publisher } from '../models/Publisher';
import { PublisherListResult } from '../models/PublisherListResult';
import { PublisherRef } from '../models/PublisherRef';
import { PublishersQuery } from '../models/PublishersQuery';
import { ResearchOutput } from '../models/ResearchOutput';
import { ResearchOutputListResult } from '../models/ResearchOutputListResult';
import { ResearchOutputPeerReviewConfiguration } from '../models/ResearchOutputPeerReviewConfiguration';
import { ResearchOutputPeerReviewConfigurationCombination } from '../models/ResearchOutputPeerReviewConfigurationCombination';
import { ResearchOutputPeerReviewConfigurationListResult } from '../models/ResearchOutputPeerReviewConfigurationListResult';
import { ResearchOutputRef } from '../models/ResearchOutputRef';
import { ResearchOutputsQuery } from '../models/ResearchOutputsQuery';
import { StaffOrganizationAssociation } from '../models/StaffOrganizationAssociation';
import { StaffOrganizationAssociationAllOf } from '../models/StaffOrganizationAssociationAllOf';
import { StudentOrganizationAssociation } from '../models/StudentOrganizationAssociation';
import { StudentOrganizationAssociationAllOf } from '../models/StudentOrganizationAssociationAllOf';
import { StudentThesisRef } from '../models/StudentThesisRef';
import { SupervisorAssociation } from '../models/SupervisorAssociation';
import { Thesis } from '../models/Thesis';
import { ThesisAllOf } from '../models/ThesisAllOf';
import { UploadedFile } from '../models/UploadedFile';
import { User } from '../models/User';
import { UserListResult } from '../models/UserListResult';
import { UserRef } from '../models/UserRef';
import { ValidationError } from '../models/ValidationError';
import { ValidationProblemDetails } from '../models/ValidationProblemDetails';
import { ValidationProblemDetailsAllOf } from '../models/ValidationProblemDetailsAllOf';
import { Visibility } from '../models/Visibility';
import { VisitingScholarOrganizationAssociation } from '../models/VisitingScholarOrganizationAssociation';
import { VisitingScholarOrganizationAssociationAllOf } from '../models/VisitingScholarOrganizationAssociationAllOf';
import { Workflow } from '../models/Workflow';
import { WorkflowListResult } from '../models/WorkflowListResult';
import { WorkingPaper } from '../models/WorkingPaper';
import { WorkingPaperAllOf } from '../models/WorkingPaperAllOf';

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

export interface EventApiEventGetRequest {
    /**
     * UUID of the desired event
     * @type string
     * @memberof EventApieventGet
     */
    uuid: string
}

export interface EventApiEventGetAllowedClassifiedIdentifierTypesRequest {
}

export interface EventApiEventGetAllowedCountriesRequest {
}

export interface EventApiEventGetAllowedDegreeOfRecognitionsRequest {
}

export interface EventApiEventGetAllowedDisciplineSchemesRequest {
}

export interface EventApiEventGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for events
     * @type string
     * @memberof EventApieventGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof EventApieventGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof EventApieventGetAllowedDisciplines
     */
    offset?: number
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

export interface EventApiEventGetDisciplineAssociationRequest {
    /**
     * UUID of the desired event
     * @type string
     * @memberof EventApieventGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof EventApieventGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface EventApiEventListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof EventApieventListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof EventApieventListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
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

export interface EventApiEventPutDisciplineAssociationRequest {
    /**
     * UUID of the event to update
     * @type string
     * @memberof EventApieventPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof EventApieventPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof EventApieventPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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
     * Get event with specific UUID.
     * Get event
     * @param param the request object
     */
    public eventGet(param: EventApiEventGetRequest, options?: Configuration): Promise<Event> {
        return this.api.eventGet(param.uuid,  options).toPromise();
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
     * Get a list fo a allowed discipline schemes for events
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public eventGetAllowedDisciplineSchemes(param: EventApiEventGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.eventGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for events
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public eventGetAllowedDisciplines(param: EventApiEventGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.eventGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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
     * Get disciplines from the discipline scheme  associated with the event with specific UUID.
     * Get disciplines from the discipline scheme associated with the event
     * @param param the request object
     */
    public eventGetDisciplineAssociation(param: EventApiEventGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.eventGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with events in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with events
     * @param param the request object
     */
    public eventListDisciplineAssociations(param: EventApiEventListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.eventListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
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
     * Update disciplines from the discipline scheme associated with the event with specific UUID.
     * Update disciplines from the discipline scheme associated with the event
     * @param param the request object
     */
    public eventPutDisciplineAssociation(param: EventApiEventPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.eventPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

export interface ExternalOrganizationApiExternalOrganizationGetAllowedDisciplineSchemesRequest {
}

export interface ExternalOrganizationApiExternalOrganizationGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for external organizations
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ExternalOrganizationApiexternalOrganizationGetAllowedDisciplines
     */
    offset?: number
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

export interface ExternalOrganizationApiExternalOrganizationGetDisciplineAssociationRequest {
    /**
     * UUID of the desired external organization
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface ExternalOrganizationApiExternalOrganizationListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof ExternalOrganizationApiexternalOrganizationListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
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

export interface ExternalOrganizationApiExternalOrganizationPutDisciplineAssociationRequest {
    /**
     * UUID of the external organization to update
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ExternalOrganizationApiexternalOrganizationPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof ExternalOrganizationApiexternalOrganizationPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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
     * Get a list fo a allowed discipline schemes for external organizations
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public externalOrganizationGetAllowedDisciplineSchemes(param: ExternalOrganizationApiExternalOrganizationGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.externalOrganizationGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public externalOrganizationGetAllowedDisciplines(param: ExternalOrganizationApiExternalOrganizationGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.externalOrganizationGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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
     * Get disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the external organization
     * @param param the request object
     */
    public externalOrganizationGetDisciplineAssociation(param: ExternalOrganizationApiExternalOrganizationGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.externalOrganizationGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with external organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external organizations
     * @param param the request object
     */
    public externalOrganizationListDisciplineAssociations(param: ExternalOrganizationApiExternalOrganizationListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.externalOrganizationListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
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
     * Update disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the external organization
     * @param param the request object
     */
    public externalOrganizationPutDisciplineAssociation(param: ExternalOrganizationApiExternalOrganizationPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.externalOrganizationPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

export interface ExternalPersonApiExternalPersonGetAllowedDisciplineSchemesRequest {
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

export interface ExternalPersonApiExternalPersonGetDisciplineAssociationRequest {
    /**
     * UUID of the desired external person
     * @type string
     * @memberof ExternalPersonApiexternalPersonGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ExternalPersonApiexternalPersonGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface ExternalPersonApiExternalPersonListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ExternalPersonApiexternalPersonListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof ExternalPersonApiexternalPersonListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
}

export interface ExternalPersonApiExternalPersonPutDisciplineAssociationRequest {
    /**
     * UUID of the external person to update
     * @type string
     * @memberof ExternalPersonApiexternalPersonPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ExternalPersonApiexternalPersonPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof ExternalPersonApiexternalPersonPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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

export interface ExternalPersonApiGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for external persons
     * @type string
     * @memberof ExternalPersonApigetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof ExternalPersonApigetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ExternalPersonApigetAllowedDisciplines
     */
    offset?: number
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
     * Get a list fo a allowed discipline schemes for external persons
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public externalPersonGetAllowedDisciplineSchemes(param: ExternalPersonApiExternalPersonGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.externalPersonGetAllowedDisciplineSchemes( options).toPromise();
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
     * Get disciplines from the discipline scheme associated with the external person with specific UUID.
     * Get disciplines from the discipline scheme associated with the external person
     * @param param the request object
     */
    public externalPersonGetDisciplineAssociation(param: ExternalPersonApiExternalPersonGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.externalPersonGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with external persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external persons
     * @param param the request object
     */
    public externalPersonListDisciplineAssociations(param: ExternalPersonApiExternalPersonListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.externalPersonListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the external person with specific UUID.
     * Update disciplines from the discipline scheme associated with the external person
     * @param param the request object
     */
    public externalPersonPutDisciplineAssociation(param: ExternalPersonApiExternalPersonPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.externalPersonPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public getAllowedDisciplines(param: ExternalPersonApiGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.getAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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

export interface JournalApiJournalGetAllowedDisciplineSchemesRequest {
}

export interface JournalApiJournalGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for journals
     * @type string
     * @memberof JournalApijournalGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof JournalApijournalGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof JournalApijournalGetAllowedDisciplines
     */
    offset?: number
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

export interface JournalApiJournalGetDisciplineAssociationRequest {
    /**
     * UUID of the desired journal
     * @type string
     * @memberof JournalApijournalGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof JournalApijournalGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface JournalApiJournalListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof JournalApijournalListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof JournalApijournalListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
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

export interface JournalApiJournalPutDisciplineAssociationRequest {
    /**
     * UUID of the journal to update
     * @type string
     * @memberof JournalApijournalPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof JournalApijournalPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof JournalApijournalPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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
     * Get a list fo a allowed discipline schemes for journals
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public journalGetAllowedDisciplineSchemes(param: JournalApiJournalGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.journalGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for journals
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public journalGetAllowedDisciplines(param: JournalApiJournalGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.journalGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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
     * Get disciplines from the discipline scheme associated with the journal with specific UUID.
     * Get disciplines from the discipline scheme associated with the journal
     * @param param the request object
     */
    public journalGetDisciplineAssociation(param: JournalApiJournalGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.journalGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with journals in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with journals
     * @param param the request object
     */
    public journalListDisciplineAssociations(param: JournalApiJournalListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.journalListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
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
     * Update disciplines from the discipline scheme associated with the journal with specific UUID.
     * Update disciplines from the discipline scheme associated with the journal
     * @param param the request object
     */
    public journalPutDisciplineAssociation(param: JournalApiJournalPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.journalPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

export interface OrganizationApiOrganizationGetAllowedDisciplineSchemesRequest {
}

export interface OrganizationApiOrganizationGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for organizations
     * @type string
     * @memberof OrganizationApiorganizationGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof OrganizationApiorganizationGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof OrganizationApiorganizationGetAllowedDisciplines
     */
    offset?: number
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

export interface OrganizationApiOrganizationGetDisciplineAssociationRequest {
    /**
     * UUID of the desired organization
     * @type string
     * @memberof OrganizationApiorganizationGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof OrganizationApiorganizationGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface OrganizationApiOrganizationListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof OrganizationApiorganizationListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof OrganizationApiorganizationListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
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

export interface OrganizationApiOrganizationPutDisciplineAssociationRequest {
    /**
     * UUID of the organization to update
     * @type string
     * @memberof OrganizationApiorganizationPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof OrganizationApiorganizationPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof OrganizationApiorganizationPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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
     * Get a list fo a allowed discipline schemes for organizations
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public organizationGetAllowedDisciplineSchemes(param: OrganizationApiOrganizationGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.organizationGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public organizationGetAllowedDisciplines(param: OrganizationApiOrganizationGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.organizationGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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
     * Get disciplines from the discipline scheme associated with the organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the organization
     * @param param the request object
     */
    public organizationGetDisciplineAssociation(param: OrganizationApiOrganizationGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.organizationGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with organizations
     * @param param the request object
     */
    public organizationListDisciplineAssociations(param: OrganizationApiOrganizationListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.organizationListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
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
     * Update disciplines from the discipline scheme associated with the organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the organization
     * @param param the request object
     */
    public organizationPutDisciplineAssociation(param: OrganizationApiOrganizationPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.organizationPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

export interface PersonApiPersonGetAllowedDisciplineSchemesRequest {
}

export interface PersonApiPersonGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for persons
     * @type string
     * @memberof PersonApipersonGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof PersonApipersonGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof PersonApipersonGetAllowedDisciplines
     */
    offset?: number
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

export interface PersonApiPersonGetDisciplineAssociationRequest {
    /**
     * UUID of the desired person
     * @type string
     * @memberof PersonApipersonGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof PersonApipersonGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface PersonApiPersonListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof PersonApipersonListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof PersonApipersonListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
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

export interface PersonApiPersonPutDisciplineAssociationRequest {
    /**
     * UUID of the person to update
     * @type string
     * @memberof PersonApipersonPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof PersonApipersonPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof PersonApipersonPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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
     * Get a list fo a allowed discipline schemes for persons
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public personGetAllowedDisciplineSchemes(param: PersonApiPersonGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.personGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public personGetAllowedDisciplines(param: PersonApiPersonGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.personGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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
     * Get disciplines from the discipline scheme associated with the person with specific UUID.
     * Get disciplines from the discipline scheme associated with the person
     * @param param the request object
     */
    public personGetDisciplineAssociation(param: PersonApiPersonGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.personGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with persons
     * @param param the request object
     */
    public personListDisciplineAssociations(param: PersonApiPersonListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.personListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
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
     * Update disciplines from the discipline scheme associated with the person with specific UUID.
     * Update disciplines from the discipline scheme associated with the person
     * @param param the request object
     */
    public personPutDisciplineAssociation(param: PersonApiPersonPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.personPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

export interface PublisherApiPublisherGetAllowedDisciplineSchemesRequest {
}

export interface PublisherApiPublisherGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for publishers
     * @type string
     * @memberof PublisherApipublisherGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof PublisherApipublisherGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof PublisherApipublisherGetAllowedDisciplines
     */
    offset?: number
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

export interface PublisherApiPublisherGetDisciplineAssociationRequest {
    /**
     * UUID of the desired publisher
     * @type string
     * @memberof PublisherApipublisherGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof PublisherApipublisherGetDisciplineAssociation
     */
    disciplineScheme: string
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

export interface PublisherApiPublisherListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof PublisherApipublisherListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof PublisherApipublisherListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
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

export interface PublisherApiPublisherPutDisciplineAssociationRequest {
    /**
     * UUID of the publisher to update
     * @type string
     * @memberof PublisherApipublisherPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof PublisherApipublisherPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof PublisherApipublisherPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
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
     * Get a list fo a allowed discipline schemes for publishers
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public publisherGetAllowedDisciplineSchemes(param: PublisherApiPublisherGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.publisherGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for publishers
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public publisherGetAllowedDisciplines(param: PublisherApiPublisherGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.publisherGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
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
     * Get disciplines from the discipline scheme associated with the publisher with specific UUID.
     * Get disciplines from the discipline scheme associated with the publisher
     * @param param the request object
     */
    public publisherGetDisciplineAssociation(param: PublisherApiPublisherGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.publisherGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
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
     * Lists disciplines from the discipline scheme associated with publishers in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with publishers
     * @param param the request object
     */
    public publisherListDisciplineAssociations(param: PublisherApiPublisherListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.publisherListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
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
     * Update disciplines from the discipline scheme associated with the publisher with specific UUID.
     * Update disciplines from the discipline scheme associated with the publisher
     * @param param the request object
     */
    public publisherPutDisciplineAssociation(param: PublisherApiPublisherPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.publisherPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
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

import { ObservableResearchOutputApi } from "./ObservableAPI";
import { ResearchOutputApiRequestFactory, ResearchOutputApiResponseProcessor} from "../apis/ResearchOutputApi";

export interface ResearchOutputApiResearchOutputCreateRequest {
    /**
     * The content to create
     * @type ResearchOutput
     * @memberof ResearchOutputApiresearchOutputCreate
     */
    researchOutput: ResearchOutput
}

export interface ResearchOutputApiResearchOutputCreateNoteRequest {
    /**
     * UUID of the research output to add note to
     * @type string
     * @memberof ResearchOutputApiresearchOutputCreateNote
     */
    uuid: string
    /**
     * The note to create
     * @type Note
     * @memberof ResearchOutputApiresearchOutputCreateNote
     */
    note: Note
}

export interface ResearchOutputApiResearchOutputDeleteRequest {
    /**
     * UUID of the research output
     * @type string
     * @memberof ResearchOutputApiresearchOutputDelete
     */
    uuid: string
}

export interface ResearchOutputApiResearchOutputDependentsRequest {
    /**
     * UUID of the research output
     * @type string
     * @memberof ResearchOutputApiresearchOutputDependents
     */
    uuid: string
    /**
     * Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     * @type boolean
     * @memberof ResearchOutputApiresearchOutputDependents
     */
    verbose?: boolean
}

export interface ResearchOutputApiResearchOutputFileUploadsRequest {
    /**
     * 
     * @type HttpFile
     * @memberof ResearchOutputApiresearchOutputFileUploads
     */
    body: HttpFile
    /**
     * Set the mime type for the file
     * @type string
     * @memberof ResearchOutputApiresearchOutputFileUploads
     */
    contentType?: string
}

export interface ResearchOutputApiResearchOutputGetRequest {
    /**
     * UUID of the desired research output
     * @type string
     * @memberof ResearchOutputApiresearchOutputGet
     */
    uuid: string
}

export interface ResearchOutputApiResearchOutputGetAllowedCountriesRequest {
}

export interface ResearchOutputApiResearchOutputGetAllowedKeywordGroupConfigurationClassificationsRequest {
    /**
     * Pure id of the keyword group configuration
     * @type number
     * @memberof ResearchOutputApiresearchOutputGetAllowedKeywordGroupConfigurationClassifications
     */
    id: number
}

export interface ResearchOutputApiResearchOutputGetAllowedKeywordGroupConfigurationsRequest {
}

export interface ResearchOutputApiResearchOutputGetAllowedLocalesRequest {
}

export interface ResearchOutputApiResearchOutputGetAllowedPeerReviewConfigurationsRequest {
}

export interface ResearchOutputApiResearchOutputGetAllowedTemplatesRequest {
}

export interface ResearchOutputApiResearchOutputGetAllowedTypesRequest {
}

export interface ResearchOutputApiResearchOutputGetAllowedWorkflowStepsRequest {
}

export interface ResearchOutputApiResearchOutputGetFileRequest {
    /**
     * UUID of the research output
     * @type string
     * @memberof ResearchOutputApiresearchOutputGetFile
     */
    uuid: string
    /**
     * File id 
     * @type string
     * @memberof ResearchOutputApiresearchOutputGetFile
     */
    fileId: string
}

export interface ResearchOutputApiResearchOutputGetOrderingsRequest {
}

export interface ResearchOutputApiResearchOutputListRequest {
    /**
     * Number of returned  research outputs per request.
     * @type number
     * @memberof ResearchOutputApiresearchOutputList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ResearchOutputApiresearchOutputList
     */
    offset?: number
    /**
     * The order of the list, must be a value from getResearchOutputOrderings
     * @type string
     * @memberof ResearchOutputApiresearchOutputList
     */
    order?: string
}

export interface ResearchOutputApiResearchOutputListDisciplineAssociationsRequest {
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ResearchOutputApiresearchOutputListDisciplineAssociations
     */
    disciplineScheme: string
    /**
     * The query to perform
     * @type DisciplinesAssociationsQuery
     * @memberof ResearchOutputApiresearchOutputListDisciplineAssociations
     */
    disciplinesAssociationsQuery: DisciplinesAssociationsQuery
}

export interface ResearchOutputApiResearchOutputListNotesRequest {
    /**
     * UUID of the research output to get notes for
     * @type string
     * @memberof ResearchOutputApiresearchOutputListNotes
     */
    uuid: string
    /**
     * Number of returned notes per request
     * @type number
     * @memberof ResearchOutputApiresearchOutputListNotes
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ResearchOutputApiresearchOutputListNotes
     */
    offset?: number
}

export interface ResearchOutputApiResearchOutputPutDisciplineAssociationRequest {
    /**
     * UUID of the research output to update
     * @type string
     * @memberof ResearchOutputApiresearchOutputPutDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ResearchOutputApiresearchOutputPutDisciplineAssociation
     */
    disciplineScheme: string
    /**
     * The disciplines association to create
     * @type DisciplinesAssociation
     * @memberof ResearchOutputApiresearchOutputPutDisciplineAssociation
     */
    disciplinesAssociation: DisciplinesAssociation
}

export interface ResearchOutputApiResearchOutputQueryRequest {
    /**
     * The query to perform
     * @type ResearchOutputsQuery
     * @memberof ResearchOutputApiresearchOutputQuery
     */
    researchOutputsQuery: ResearchOutputsQuery
}

export interface ResearchOutputApiResearchOutputUpdateRequest {
    /**
     * UUID of the research output to update
     * @type string
     * @memberof ResearchOutputApiresearchOutputUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type ResearchOutput
     * @memberof ResearchOutputApiresearchOutputUpdate
     */
    researchOutput: ResearchOutput
}

export interface ResearchOutputApiResearchoutputGetAllowedAdditionalFileAccessTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedAdditionalFileLicenseTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedArticleProcessingChargeCurrenciesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedBookAnthologyContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedBookAnthologyDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedCaseNoteSourcesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedCategoriesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToBookAnthologyContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToBookAnthologyDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToConferenceContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToConferenceDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToJournalContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToJournalDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToMemorandumContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToMemorandumDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToPeriodicalContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributionToPeriodicalDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedContributorCountriesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedDisciplineSchemesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedDisciplinesRequest {
    /**
     * Identifier for the discipline scheme for research output
     * @type string
     * @memberof ResearchOutputApiresearchoutputGetAllowedDisciplines
     */
    disciplineScheme: string
    /**
     * Number of returned disciplines per request
     * @type number
     * @memberof ResearchOutputApiresearchoutputGetAllowedDisciplines
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof ResearchOutputApiresearchoutputGetAllowedDisciplines
     */
    offset?: number
}

export interface ResearchOutputApiResearchoutputGetAllowedElectronicVersionAccessTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedElectronicVersionLicenseTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedElectronicVersionVersionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedLanguagesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedLinkTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedMainResearchAreasRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedMemorandumContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedMemorandumDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedNonTextualContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedNonTextualDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedOpenAccessPermissionsRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedOtherContributionContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedOtherContributionDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedOutputMediasRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedPatentContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedPatentDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedPublicationStatusesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedQualificationsRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedSupervisorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedThesisContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedThesisDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedWorkingPaperContributorRolesRequest {
}

export interface ResearchOutputApiResearchoutputGetAllowedWorkingPaperDescriptionTypesRequest {
}

export interface ResearchOutputApiResearchoutputGetDisciplineAssociationRequest {
    /**
     * UUID of the desired research output
     * @type string
     * @memberof ResearchOutputApiresearchoutputGetDisciplineAssociation
     */
    uuid: string
    /**
     * Identifier for the discipline scheme
     * @type string
     * @memberof ResearchOutputApiresearchoutputGetDisciplineAssociation
     */
    disciplineScheme: string
}

export class ObjectResearchOutputApi {
    private api: ObservableResearchOutputApi

    public constructor(configuration: Configuration, requestFactory?: ResearchOutputApiRequestFactory, responseProcessor?: ResearchOutputApiResponseProcessor) {
        this.api = new ObservableResearchOutputApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create research output
     * Create research output
     * @param param the request object
     */
    public researchOutputCreate(param: ResearchOutputApiResearchOutputCreateRequest, options?: Configuration): Promise<ResearchOutput> {
        return this.api.researchOutputCreate(param.researchOutput,  options).toPromise();
    }

    /**
     * Create note and associate it with a research output
     * Create note
     * @param param the request object
     */
    public researchOutputCreateNote(param: ResearchOutputApiResearchOutputCreateNoteRequest, options?: Configuration): Promise<Note> {
        return this.api.researchOutputCreateNote(param.uuid, param.note,  options).toPromise();
    }

    /**
     * Delete research output with specific UUID.
     * Delete research output
     * @param param the request object
     */
    public researchOutputDelete(param: ResearchOutputApiResearchOutputDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.researchOutputDelete(param.uuid,  options).toPromise();
    }

    /**
     * Lists all dependents to a research output with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a research output
     * @param param the request object
     */
    public researchOutputDependents(param: ResearchOutputApiResearchOutputDependentsRequest, options?: Configuration): Promise<ContentRefListResult> {
        return this.api.researchOutputDependents(param.uuid, param.verbose,  options).toPromise();
    }

    /**
     * Uploads file for the research output
     * Upload file to a specific research output
     * @param param the request object
     */
    public researchOutputFileUploads(param: ResearchOutputApiResearchOutputFileUploadsRequest, options?: Configuration): Promise<void> {
        return this.api.researchOutputFileUploads(param.body, param.contentType,  options).toPromise();
    }

    /**
     * Get research output with specific UUID.
     * Get research output
     * @param param the request object
     */
    public researchOutputGet(param: ResearchOutputApiResearchOutputGetRequest, options?: Configuration): Promise<ResearchOutput> {
        return this.api.researchOutputGet(param.uuid,  options).toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of research outputs
     * A list of allowed countries
     * @param param the request object
     */
    public researchOutputGetAllowedCountries(param: ResearchOutputApiResearchOutputGetAllowedCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchOutputGetAllowedCountries( options).toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param param the request object
     */
    public researchOutputGetAllowedKeywordGroupConfigurationClassifications(param: ResearchOutputApiResearchOutputGetAllowedKeywordGroupConfigurationClassificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchOutputGetAllowedKeywordGroupConfigurationClassifications(param.id,  options).toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     * @param param the request object
     */
    public researchOutputGetAllowedKeywordGroupConfigurations(param: ResearchOutputApiResearchOutputGetAllowedKeywordGroupConfigurationsRequest, options?: Configuration): Promise<KeywordGroupConfigurationList> {
        return this.api.researchOutputGetAllowedKeywordGroupConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     * @param param the request object
     */
    public researchOutputGetAllowedLocales(param: ResearchOutputApiResearchOutputGetAllowedLocalesRequest, options?: Configuration): Promise<LocalesList> {
        return this.api.researchOutputGetAllowedLocales( options).toPromise();
    }

    /**
     * Get a list of peer review configurations that describe the allowed combinations of values for the interrelated fields: type, category, peerReview, and internationalPeerReview
     * A list of peer review configurations
     * @param param the request object
     */
    public researchOutputGetAllowedPeerReviewConfigurations(param: ResearchOutputApiResearchOutputGetAllowedPeerReviewConfigurationsRequest, options?: Configuration): Promise<ResearchOutputPeerReviewConfigurationListResult> {
        return this.api.researchOutputGetAllowedPeerReviewConfigurations( options).toPromise();
    }

    /**
     * Get a list of allowed templates that can be used for research outputs, such as 'ContributionToJournal' or 'BookAnthology'. Some of the templates that exists in the API specification may be disabled for the Pure installation.
     * A list of allowed research output templates
     * @param param the request object
     */
    public researchOutputGetAllowedTemplates(param: ResearchOutputApiResearchOutputGetAllowedTemplatesRequest, options?: Configuration): Promise<AllowedTemplateListResult> {
        return this.api.researchOutputGetAllowedTemplates( options).toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of research outputs
     * A list of allowed research output types
     * @param param the request object
     */
    public researchOutputGetAllowedTypes(param: ResearchOutputApiResearchOutputGetAllowedTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchOutputGetAllowedTypes( options).toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of research outputs
     * A list of allowed workflow steps
     * @param param the request object
     */
    public researchOutputGetAllowedWorkflowSteps(param: ResearchOutputApiResearchOutputGetAllowedWorkflowStepsRequest, options?: Configuration): Promise<WorkflowListResult> {
        return this.api.researchOutputGetAllowedWorkflowSteps( options).toPromise();
    }

    /**
     * Get file from the research output
     * Get file from the research output
     * @param param the request object
     */
    public researchOutputGetFile(param: ResearchOutputApiResearchOutputGetFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.researchOutputGetFile(param.uuid, param.fileId,  options).toPromise();
    }

    /**
     * Lists all orderings available to the research output endpoint. These values can be used by the order parameter.
     * Lists available orderings
     * @param param the request object
     */
    public researchOutputGetOrderings(param: ResearchOutputApiResearchOutputGetOrderingsRequest, options?: Configuration): Promise<OrderingsList> {
        return this.api.researchOutputGetOrderings( options).toPromise();
    }

    /**
     * Lists all  research outputs in the Pure instance. If you need to filter the research outputs returned, see the POST version which supports additional filtering.
     * Lists all  research outputs
     * @param param the request object
     */
    public researchOutputList(param: ResearchOutputApiResearchOutputListRequest, options?: Configuration): Promise<ResearchOutputListResult> {
        return this.api.researchOutputList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with research outputs in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with research outputs
     * @param param the request object
     */
    public researchOutputListDisciplineAssociations(param: ResearchOutputApiResearchOutputListDisciplineAssociationsRequest, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        return this.api.researchOutputListDisciplineAssociations(param.disciplineScheme, param.disciplinesAssociationsQuery,  options).toPromise();
    }

    /**
     * Lists notes associated with a research output ordered by date (nulls last)
     * Lists notes
     * @param param the request object
     */
    public researchOutputListNotes(param: ResearchOutputApiResearchOutputListNotesRequest, options?: Configuration): Promise<NoteListResult> {
        return this.api.researchOutputListNotes(param.uuid, param.size, param.offset,  options).toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the research output with specific UUID.
     * Update disciplines from the discipline scheme associated with the research output
     * @param param the request object
     */
    public researchOutputPutDisciplineAssociation(param: ResearchOutputApiResearchOutputPutDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.researchOutputPutDisciplineAssociation(param.uuid, param.disciplineScheme, param.disciplinesAssociation,  options).toPromise();
    }

    /**
     * Lists research outputs in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for research outputs
     * @param param the request object
     */
    public researchOutputQuery(param: ResearchOutputApiResearchOutputQueryRequest, options?: Configuration): Promise<ResearchOutputListResult> {
        return this.api.researchOutputQuery(param.researchOutputsQuery,  options).toPromise();
    }

    /**
     * Update research outputs with specific UUID.
     * Update research outputs
     * @param param the request object
     */
    public researchOutputUpdate(param: ResearchOutputApiResearchOutputUpdateRequest, options?: Configuration): Promise<ResearchOutput> {
        return this.api.researchOutputUpdate(param.uuid, param.researchOutput,  options).toPromise();
    }

    /**
     * Get a list of allowed access types for additional files on research outputs
     * A list of allowed access types
     * @param param the request object
     */
    public researchoutputGetAllowedAdditionalFileAccessTypes(param: ResearchOutputApiResearchoutputGetAllowedAdditionalFileAccessTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedAdditionalFileAccessTypes( options).toPromise();
    }

    /**
     * Get a list of allowed license types for additional files on research outputs
     * A list of allowed license types
     * @param param the request object
     */
    public researchoutputGetAllowedAdditionalFileLicenseTypes(param: ResearchOutputApiResearchoutputGetAllowedAdditionalFileLicenseTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedAdditionalFileLicenseTypes( options).toPromise();
    }

    /**
     * Get a list of allowed article processing charge currencies on research outputs
     * A list of allowed article processing charge currencies
     * @param param the request object
     */
    public researchoutputGetAllowedArticleProcessingChargeCurrencies(param: ResearchOutputApiResearchoutputGetAllowedArticleProcessingChargeCurrenciesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedArticleProcessingChargeCurrencies( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the book anthology subtype of research outputs
     * A list of allowed contributor roles for the book anthology subtype
     * @param param the request object
     */
    public researchoutputGetAllowedBookAnthologyContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedBookAnthologyContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedBookAnthologyContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the book anthology subtype of research outputs
     * A list of allowed description types for the book anthology subtype
     * @param param the request object
     */
    public researchoutputGetAllowedBookAnthologyDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedBookAnthologyDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedBookAnthologyDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed case note sources for select subtypes of research outputs
     * A list of allowed case note sources
     * @param param the request object
     */
    public researchoutputGetAllowedCaseNoteSources(param: ResearchOutputApiResearchoutputGetAllowedCaseNoteSourcesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedCaseNoteSources( options).toPromise();
    }

    /**
     * Get a list of allowed categories on research outputs
     * A list of allowed categories
     * @param param the request object
     */
    public researchoutputGetAllowedCategories(param: ResearchOutputApiResearchoutputGetAllowedCategoriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedCategories( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to book anthology subtype of research outputs
     * A list of allowed contributor roles for the contribution to book anthology subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToBookAnthologyContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedContributionToBookAnthologyContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToBookAnthologyContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to book anthology subtype of research outputs
     * A list of allowed description types for the contribution to book anthology subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedContributionToBookAnthologyDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to conference subtype of research outputs
     * A list of allowed contributor roles for the contribution to conference subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToConferenceContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedContributionToConferenceContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToConferenceContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to conference subtype of research outputs
     * A list of allowed description types for the contribution to conference subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToConferenceDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedContributionToConferenceDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToConferenceDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to journal subtype of research outputs
     * A list of allowed contributor roles for the contribution to journal subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToJournalContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedContributionToJournalContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToJournalContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to journal subtype of research outputs
     * A list of allowed description types for the contribution to journal subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToJournalDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedContributionToJournalDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToJournalDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to memorandum subtype of research outputs
     * A list of allowed contributor roles for the contribution to memorandum subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToMemorandumContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedContributionToMemorandumContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToMemorandumContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to memorandum subtype of research outputs
     * A list of allowed description types for the contribution to memorandum subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToMemorandumDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedContributionToMemorandumDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToMemorandumDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to periodical subtype of research outputs
     * A list of allowed contributor roles for the contribution to periodical subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToPeriodicalContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedContributionToPeriodicalContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToPeriodicalContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to periodical subtype of research outputs
     * A list of allowed description types for the contribution to periodical subtype
     * @param param the request object
     */
    public researchoutputGetAllowedContributionToPeriodicalDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedContributionToPeriodicalDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributionToPeriodicalDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed countries for contributors on research outputs
     * A list of allowed contributor countries
     * @param param the request object
     */
    public researchoutputGetAllowedContributorCountries(param: ResearchOutputApiResearchoutputGetAllowedContributorCountriesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedContributorCountries( options).toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for research outputs
     * A list of allowed discipline schemes
     * @param param the request object
     */
    public researchoutputGetAllowedDisciplineSchemes(param: ResearchOutputApiResearchoutputGetAllowedDisciplineSchemesRequest, options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        return this.api.researchoutputGetAllowedDisciplineSchemes( options).toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for research outputs
     * A list of allowed disciplines for a specific discipline scheme
     * @param param the request object
     */
    public researchoutputGetAllowedDisciplines(param: ResearchOutputApiResearchoutputGetAllowedDisciplinesRequest, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        return this.api.researchoutputGetAllowedDisciplines(param.disciplineScheme, param.size, param.offset,  options).toPromise();
    }

    /**
     * Get a list of allowed access types for electronic versions on research outputs
     * A list of allowed access types
     * @param param the request object
     */
    public researchoutputGetAllowedElectronicVersionAccessTypes(param: ResearchOutputApiResearchoutputGetAllowedElectronicVersionAccessTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedElectronicVersionAccessTypes( options).toPromise();
    }

    /**
     * Get a list of allowed license types for electronic versions on research outputs
     * A list of allowed license types
     * @param param the request object
     */
    public researchoutputGetAllowedElectronicVersionLicenseTypes(param: ResearchOutputApiResearchoutputGetAllowedElectronicVersionLicenseTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedElectronicVersionLicenseTypes( options).toPromise();
    }

    /**
     * Get a list of allowed version types for electronic versions on research outputs
     * A list of allowed version types
     * @param param the request object
     */
    public researchoutputGetAllowedElectronicVersionVersionTypes(param: ResearchOutputApiResearchoutputGetAllowedElectronicVersionVersionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedElectronicVersionVersionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed languages on research outputs
     * A list of allowed languages
     * @param param the request object
     */
    public researchoutputGetAllowedLanguages(param: ResearchOutputApiResearchoutputGetAllowedLanguagesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedLanguages( options).toPromise();
    }

    /**
     * Get a list of allowed link types on research outputs
     * A list of allowed link types
     * @param param the request object
     */
    public researchoutputGetAllowedLinkTypes(param: ResearchOutputApiResearchoutputGetAllowedLinkTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedLinkTypes( options).toPromise();
    }

    /**
     * Get a list of allowed main research areas on research outputs
     * A list of allowed main research areas
     * @param param the request object
     */
    public researchoutputGetAllowedMainResearchAreas(param: ResearchOutputApiResearchoutputGetAllowedMainResearchAreasRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedMainResearchAreas( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the memorandum subtype of research outputs
     * A list of allowed contributor roles for the memorandum subtype
     * @param param the request object
     */
    public researchoutputGetAllowedMemorandumContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedMemorandumContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedMemorandumContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the memorandum subtype of research outputs
     * A list of allowed description types for the memorandum subtype
     * @param param the request object
     */
    public researchoutputGetAllowedMemorandumDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedMemorandumDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedMemorandumDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the non-textual subtype of research outputs
     * A list of allowed contributor roles for the non-textual subtype
     * @param param the request object
     */
    public researchoutputGetAllowedNonTextualContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedNonTextualContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedNonTextualContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the non-textual subtype of research outputs
     * A list of allowed description types for the non-textual subtype
     * @param param the request object
     */
    public researchoutputGetAllowedNonTextualDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedNonTextualDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedNonTextualDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed open access permissions on research outputs
     * A list of allowed open access permissions
     * @param param the request object
     */
    public researchoutputGetAllowedOpenAccessPermissions(param: ResearchOutputApiResearchoutputGetAllowedOpenAccessPermissionsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedOpenAccessPermissions( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the other contribution subtype of research outputs
     * A list of allowed contributor roles for the other contribution subtype
     * @param param the request object
     */
    public researchoutputGetAllowedOtherContributionContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedOtherContributionContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedOtherContributionContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the other contribution subtype of research outputs
     * A list of allowed description types for the other contribution subtype
     * @param param the request object
     */
    public researchoutputGetAllowedOtherContributionDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedOtherContributionDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedOtherContributionDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed output medias for the non-textual subtype of research outputs
     * A list of allowed output medias
     * @param param the request object
     */
    public researchoutputGetAllowedOutputMedias(param: ResearchOutputApiResearchoutputGetAllowedOutputMediasRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedOutputMedias( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the patent subtype of research outputs
     * A list of allowed contributor roles for the patent subtype
     * @param param the request object
     */
    public researchoutputGetAllowedPatentContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedPatentContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedPatentContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the patent subtype of research outputs
     * A list of allowed description types for the patent subtype
     * @param param the request object
     */
    public researchoutputGetAllowedPatentDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedPatentDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedPatentDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed publication statuses on research output
     * A list of allowed publication statuses
     * @param param the request object
     */
    public researchoutputGetAllowedPublicationStatuses(param: ResearchOutputApiResearchoutputGetAllowedPublicationStatusesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedPublicationStatuses( options).toPromise();
    }

    /**
     * Get a list of allowed qualifications for the thesis subtype of research outputs
     * A list of allowed qualifications
     * @param param the request object
     */
    public researchoutputGetAllowedQualifications(param: ResearchOutputApiResearchoutputGetAllowedQualificationsRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedQualifications( options).toPromise();
    }

    /**
     * Get a list of allowed supervisors roles for the thesis subtype of research outputs
     * A list of allowed supervisor roles
     * @param param the request object
     */
    public researchoutputGetAllowedSupervisorRoles(param: ResearchOutputApiResearchoutputGetAllowedSupervisorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedSupervisorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the thesis subtype of research outputs
     * A list of allowed contributor roles for the thesis subtype
     * @param param the request object
     */
    public researchoutputGetAllowedThesisContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedThesisContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedThesisContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the thesis subtype of research outputs
     * A list of allowed description types for the thesis subtype
     * @param param the request object
     */
    public researchoutputGetAllowedThesisDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedThesisDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedThesisDescriptionTypes( options).toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the working paper subtype of research outputs
     * A list of allowed contributor roles for the working paper subtype
     * @param param the request object
     */
    public researchoutputGetAllowedWorkingPaperContributorRoles(param: ResearchOutputApiResearchoutputGetAllowedWorkingPaperContributorRolesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedWorkingPaperContributorRoles( options).toPromise();
    }

    /**
     * Get a list of allowed description types on the working paper subtype of research outputs
     * A list of allowed description types for the working paper subtype
     * @param param the request object
     */
    public researchoutputGetAllowedWorkingPaperDescriptionTypes(param: ResearchOutputApiResearchoutputGetAllowedWorkingPaperDescriptionTypesRequest, options?: Configuration): Promise<ClassificationRefList> {
        return this.api.researchoutputGetAllowedWorkingPaperDescriptionTypes( options).toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the research output with specific UUID.
     * Get disciplinesfrom the discipline scheme associated with the research output
     * @param param the request object
     */
    public researchoutputGetDisciplineAssociation(param: ResearchOutputApiResearchoutputGetDisciplineAssociationRequest, options?: Configuration): Promise<DisciplinesAssociation> {
        return this.api.researchoutputGetDisciplineAssociation(param.uuid, param.disciplineScheme,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiUserCreateRequest {
    /**
     * The content to create
     * @type User
     * @memberof UserApiuserCreate
     */
    user: User
}

export interface UserApiUserDeleteRequest {
    /**
     * UUID of the user
     * @type string
     * @memberof UserApiuserDelete
     */
    uuid: string
}

export interface UserApiUserGetRequest {
    /**
     * UUID of the desired user
     * @type string
     * @memberof UserApiuserGet
     */
    uuid: string
}

export interface UserApiUserListRequest {
    /**
     * Number of returned users per request.
     * @type number
     * @memberof UserApiuserList
     */
    size?: number
    /**
     * The offset for the returned list. 0 or null value is from the start
     * @type number
     * @memberof UserApiuserList
     */
    offset?: number
    /**
     * The order of the list, must be a value from user_getOrderings
     * @type string
     * @memberof UserApiuserList
     */
    order?: string
}

export interface UserApiUserUpdateRequest {
    /**
     * UUID of the user to update
     * @type string
     * @memberof UserApiuserUpdate
     */
    uuid: string
    /**
     * The content to update
     * @type User
     * @memberof UserApiuserUpdate
     */
    user: User
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create user
     * Create user
     * @param param the request object
     */
    public userCreate(param: UserApiUserCreateRequest, options?: Configuration): Promise<User> {
        return this.api.userCreate(param.user,  options).toPromise();
    }

    /**
     * Delete user with specific UUID.
     * Delete user
     * @param param the request object
     */
    public userDelete(param: UserApiUserDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.userDelete(param.uuid,  options).toPromise();
    }

    /**
     * Get user UUID.
     * Get user
     * @param param the request object
     */
    public userGet(param: UserApiUserGetRequest, options?: Configuration): Promise<User> {
        return this.api.userGet(param.uuid,  options).toPromise();
    }

    /**
     * Lists all users in the Pure instance. If you need to filter the users returned, see the POST version which supports additional filtering.
     * Lists all users
     * @param param the request object
     */
    public userList(param: UserApiUserListRequest, options?: Configuration): Promise<UserListResult> {
        return this.api.userList(param.size, param.offset, param.order,  options).toPromise();
    }

    /**
     * Update user with specific UUID.
     * Update user
     * @param param the request object
     */
    public userUpdate(param: UserApiUserUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.userUpdate(param.uuid, param.user,  options).toPromise();
    }

}
