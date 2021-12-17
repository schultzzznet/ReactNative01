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
import { ObservableEventApi } from './ObservableAPI';

import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";
export class PromiseEventApi {
    private api: ObservableEventApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventApiRequestFactory,
        responseProcessor?: EventApiResponseProcessor
    ) {
        this.api = new ObservableEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create event
     * Create event
     * @param event The content to create
     */
    public eventCreate(event: Event, options?: Configuration): Promise<Event> {
        const result = this.api.eventCreate(event, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with an event
     * Create note
     * @param uuid UUID of the event to add note to
     * @param note The note to create
     */
    public eventCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.eventCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete event with specific UUID.
     * Delete event
     * @param uuid UUID of the event
     */
    public eventDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.eventDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Get event with specific UUID.
     * Get event
     * @param uuid UUID of the desired event
     */
    public eventGet(uuid: string, options?: Configuration): Promise<Event> {
        const result = this.api.eventGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of events
     * A list of allowed classified identifier types
     */
    public eventGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedClassifiedIdentifierTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'country' attribute of events
     * A list of allowed countries
     */
    public eventGetAllowedCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed degree of recognitions that can be used for the 'degreeOfRecognition' attribute of events
     * A list of allowed degree of recognitions
     */
    public eventGetAllowedDegreeOfRecognitions(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedDegreeOfRecognitions(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for events
     * A list of allowed discipline schemes
     */
    public eventGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.eventGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for events
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for events
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public eventGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.eventGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public eventGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public eventGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.eventGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of events
     * A list of allowed link types
     */
    public eventGetAllowedLinkTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedLinkTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public eventGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.eventGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed subdivisions can be used for the 'subdivision' attribute of events
     * A list of allowed subdivisions
     */
    public eventGetAllowedSubdivisions(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedSubdivisions(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of events
     * A list of allowed event types
     */
    public eventGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.eventGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of events
     * A list of allowed workflow steps
     */
    public eventGetAllowedWorkflowSteps(options?: Configuration): Promise<WorkflowListResult> {
        const result = this.api.eventGetAllowedWorkflowSteps(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme  associated with the event with specific UUID.
     * Get disciplines from the discipline scheme associated with the event
     * @param uuid UUID of the desired event
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public eventGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.eventGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the event endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public eventGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.eventGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all events in the Pure instance. If you need to filter the events returned, see the POST version which supports additional filtering.
     * Lists all events
     * @param size Number of returned events per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getEventOrderings
     */
    public eventList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<EventListResult> {
        const result = this.api.eventList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with events in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with events
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public eventListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.eventListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with an event ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the event to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public eventListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.eventListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the event with specific UUID.
     * Update disciplines from the discipline scheme associated with the event
     * @param uuid UUID of the event to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public eventPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.eventPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Update event with specific UUID.
     * Update event
     * @param uuid UUID of the event to update
     * @param event The content to update
     */
    public eventUpdate(uuid: string, event: Event, options?: Configuration): Promise<Event> {
        const result = this.api.eventUpdate(uuid, event, options);
        return result.toPromise();
    }

    /**
     * Lists events in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for events
     * @param eventsQuery The query to perform
     */
    public eventsQuery(eventsQuery: EventsQuery, options?: Configuration): Promise<EventListResult> {
        const result = this.api.eventsQuery(eventsQuery, options);
        return result.toPromise();
    }


}



import { ObservableExternalOrganizationApi } from './ObservableAPI';

import { ExternalOrganizationApiRequestFactory, ExternalOrganizationApiResponseProcessor} from "../apis/ExternalOrganizationApi";
export class PromiseExternalOrganizationApi {
    private api: ObservableExternalOrganizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalOrganizationApiRequestFactory,
        responseProcessor?: ExternalOrganizationApiResponseProcessor
    ) {
        this.api = new ObservableExternalOrganizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create external organization
     * Create external organization
     * @param externalOrganization The content to create
     */
    public externalOrganizationCreate(externalOrganization: ExternalOrganization, options?: Configuration): Promise<ExternalOrganization> {
        const result = this.api.externalOrganizationCreate(externalOrganization, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with an external organization
     * Create note
     * @param uuid UUID of the external organization to add note to
     * @param note The note to create
     */
    public externalOrganizationCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.externalOrganizationCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete external organization with specific UUID.
     * Delete external organization
     * @param uuid UUID of the external organization
     */
    public externalOrganizationDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.externalOrganizationDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all dependents to the external organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the external organization
     * @param uuid UUID of the external organization to update
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public externalOrganizationDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<ContentRefListResult> {
        const result = this.api.externalOrganizationDependents(uuid, verbose, options);
        return result.toPromise();
    }

    /**
     * Uploads file for the external organization
     * Upload file to a specific external organization
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public externalOrganizationFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Promise<void> {
        const result = this.api.externalOrganizationFileUploads(body, contentType, options);
        return result.toPromise();
    }

    /**
     * Get external organization with specific UUID.
     * Get external organization
     * @param uuid UUID of the desired external organization
     */
    public externalOrganizationGet(uuid: string, options?: Configuration): Promise<ExternalOrganization> {
        const result = this.api.externalOrganizationGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'address.country' attribute of external organizations
     * A list of allowed address countries
     */
    public externalOrganizationGetAllowedAddressCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedAddressCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed subdivisions that can be used for the 'address.subdivisions' attribute of external organizations
     * A list of allowed address subdivisions
     */
    public externalOrganizationGetAllowedAddressSubdivisions(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedAddressSubdivisions(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external organizations
     * A list of allowed classified identifier types
     */
    public externalOrganizationGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedClassifiedIdentifierTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified image types that can be used for the 'images.type' attribute of external organizations
     * A list of allowed classified identifier types
     */
    public externalOrganizationGetAllowedClassifiedImageTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedClassifiedImageTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for external organizations
     * A list of allowed discipline schemes
     */
    public externalOrganizationGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.externalOrganizationGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for external organizations
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public externalOrganizationGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.externalOrganizationGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed document licenses that can be used for the 'documents.license' attribute of external organizations
     * A list of allowed document licenses
     */
    public externalOrganizationGetAllowedDocumentLicenses(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedDocumentLicenses(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed document types that can be used for the 'documents.type' attribute of external organizations
     * A list of allowed document types
     */
    public externalOrganizationGetAllowedDocumentTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedDocumentTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public externalOrganizationGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.externalOrganizationGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of external organizations
     * A list of allowed link types
     */
    public externalOrganizationGetAllowedLinkTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedLinkTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public externalOrganizationGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.externalOrganizationGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed nature types that can be used for the 'natureTypes' attribute of external organizations
     * A list of allowed nature types
     */
    public externalOrganizationGetAllowedNatureTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedNatureTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external organizations
     * A list of allowed external organization types
     */
    public externalOrganizationGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalOrganizationGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external organizations
     * A list of allowed workflow steps
     */
    public externalOrganizationGetAllowedWorkflowSteps(options?: Configuration): Promise<WorkflowListResult> {
        const result = this.api.externalOrganizationGetAllowedWorkflowSteps(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the external organization
     * @param uuid UUID of the desired external organization
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public externalOrganizationGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.externalOrganizationGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Get file from the external organization
     * Get file from the external organization
     * @param uuid UUID of the external organization
     * @param fileId File id 
     */
    public externalOrganizationGetFile(uuid: string, fileId: string, options?: Configuration): Promise<HttpFile> {
        const result = this.api.externalOrganizationGetFile(uuid, fileId, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the external organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public externalOrganizationGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.externalOrganizationGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all external organizations in the Pure instance. If you need to filter the external organizations returned, see the POST version which supports additional filtering.
     * Lists all external organizations
     * @param size Number of returned external organizations per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from externalOrganization_getOrderings
     */
    public externalOrganizationList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<ExternalOrganizationListResult> {
        const result = this.api.externalOrganizationList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with external organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external organizations
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public externalOrganizationListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.externalOrganizationListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with an external organization ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the external organization to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public externalOrganizationListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.externalOrganizationListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Merge a list of external organizations together. Note that this operation is irreversible
     * Merge external organizations
     * @param externalOrganizationRefList References to the entities to merge. The first will be the target. All additional entities will be merged into the target.
     */
    public externalOrganizationMerge(externalOrganizationRefList: ExternalOrganizationRefList, options?: Configuration): Promise<ExternalOrganization> {
        const result = this.api.externalOrganizationMerge(externalOrganizationRefList, options);
        return result.toPromise();
    }

    /**
     * Runs through a list external organizations and returns the deduplicated and merged organizations. The operation does not touch the Pure database
     * Preview deduplication of external organizations
     * @param externalOrganizationList The content to deduplicate. The data do not need to exist in the database.
     */
    public externalOrganizationPreviewDeduplication(externalOrganizationList: ExternalOrganizationList, options?: Configuration): Promise<ExternalOrganizationListResult> {
        const result = this.api.externalOrganizationPreviewDeduplication(externalOrganizationList, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the external organization
     * @param uuid UUID of the external organization to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public externalOrganizationPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.externalOrganizationPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists external organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external organizations
     * @param externalOrganizationsQuery The query to perform
     */
    public externalOrganizationQuery(externalOrganizationsQuery: ExternalOrganizationsQuery, options?: Configuration): Promise<ExternalOrganizationListResult> {
        const result = this.api.externalOrganizationQuery(externalOrganizationsQuery, options);
        return result.toPromise();
    }

    /**
     * Update external organization with specific UUID.
     * Update external organization
     * @param uuid UUID of the external organization to update
     * @param externalOrganization The content to update
     */
    public externalOrganizationUpdate(uuid: string, externalOrganization: ExternalOrganization, options?: Configuration): Promise<ExternalOrganization> {
        const result = this.api.externalOrganizationUpdate(uuid, externalOrganization, options);
        return result.toPromise();
    }


}



import { ObservableExternalPersonApi } from './ObservableAPI';

import { ExternalPersonApiRequestFactory, ExternalPersonApiResponseProcessor} from "../apis/ExternalPersonApi";
export class PromiseExternalPersonApi {
    private api: ObservableExternalPersonApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalPersonApiRequestFactory,
        responseProcessor?: ExternalPersonApiResponseProcessor
    ) {
        this.api = new ObservableExternalPersonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create external person
     * Create external person
     * @param externalPerson The content to create
     */
    public externalPersonCreate(externalPerson: ExternalPerson, options?: Configuration): Promise<ExternalPerson> {
        const result = this.api.externalPersonCreate(externalPerson, options);
        return result.toPromise();
    }

    /**
     * Delete external person with specific UUID.
     * Delete external person
     * @param uuid UUID of the external person
     */
    public externalPersonDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.externalPersonDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all dependents to a external person with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a external person
     * @param uuid UUID of the external person
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public externalPersonDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<ContentRefListResult> {
        const result = this.api.externalPersonDependents(uuid, verbose, options);
        return result.toPromise();
    }

    /**
     * Get external person with specific UUID.
     * Get external person
     * @param uuid UUID of the desired external person
     */
    public externalPersonGet(uuid: string, options?: Configuration): Promise<ExternalPerson> {
        const result = this.api.externalPersonGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external persons
     * A list of allowed classified identifier types
     */
    public externalPersonGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalPersonGetAllowedClassifiedIdentifierTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of external persons
     * A list of allowed countries
     */
    public externalPersonGetAllowedCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalPersonGetAllowedCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for external persons
     * A list of allowed discipline schemes
     */
    public externalPersonGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.externalPersonGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public externalPersonGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalPersonGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public externalPersonGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.externalPersonGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public externalPersonGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.externalPersonGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external persons
     * A list of allowed external person types
     */
    public externalPersonGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.externalPersonGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external persons
     * A list of allowed workflow steps
     */
    public externalPersonGetAllowedWorkflowSteps(options?: Configuration): Promise<WorkflowListResult> {
        const result = this.api.externalPersonGetAllowedWorkflowSteps(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the external person with specific UUID.
     * Get disciplines from the discipline scheme associated with the external person
     * @param uuid UUID of the desired external person
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public externalPersonGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.externalPersonGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the external person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public externalPersonGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.externalPersonGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all external persons in the Pure instance. If you need to filter the external persons returned, see the POST version which supports additional filtering.
     * Lists all external persons
     * @param size Number of returned external persons per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getExternalPersonOrderings
     */
    public externalPersonList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<ExternalPersonListResult> {
        const result = this.api.externalPersonList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with external persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external persons
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public externalPersonListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.externalPersonListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the external person with specific UUID.
     * Update disciplines from the discipline scheme associated with the external person
     * @param uuid UUID of the external person to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public externalPersonPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.externalPersonPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists external persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external persons
     * @param externalPersonsQuery The query to perform
     */
    public externalPersonQuery(externalPersonsQuery: ExternalPersonsQuery, options?: Configuration): Promise<ExternalPersonListResult> {
        const result = this.api.externalPersonQuery(externalPersonsQuery, options);
        return result.toPromise();
    }

    /**
     * Update external persons with specific UUID.
     * Update external persons
     * @param uuid UUID of the external person to update
     * @param externalPerson The content to update
     */
    public externalPersonUpdate(uuid: string, externalPerson: ExternalPerson, options?: Configuration): Promise<ExternalPerson> {
        const result = this.api.externalPersonUpdate(uuid, externalPerson, options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for external persons
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public getAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.getAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }


}



import { ObservableJournalApi } from './ObservableAPI';

import { JournalApiRequestFactory, JournalApiResponseProcessor} from "../apis/JournalApi";
export class PromiseJournalApi {
    private api: ObservableJournalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JournalApiRequestFactory,
        responseProcessor?: JournalApiResponseProcessor
    ) {
        this.api = new ObservableJournalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create journal
     * Create journal
     * @param journal The content to create
     */
    public journalCreate(journal: Journal, options?: Configuration): Promise<Journal> {
        const result = this.api.journalCreate(journal, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with a journal
     * Create note
     * @param uuid UUID of the journal to add note to
     * @param note The note to create
     */
    public journalCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.journalCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete journal with specific UUID.
     * Delete journal
     * @param uuid UUID of the journal
     */
    public journalDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.journalDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all dependents to a journal with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a journal
     * @param uuid UUID of the journal
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public journalDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<ContentRefListResult> {
        const result = this.api.journalDependents(uuid, verbose, options);
        return result.toPromise();
    }

    /**
     * Get journal with specific UUID.
     * Get journal
     * @param uuid UUID of the desired journal
     */
    public journalGet(uuid: string, options?: Configuration): Promise<Journal> {
        const result = this.api.journalGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of journals
     * A list of allowed classified identifier types
     */
    public journalGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.journalGetAllowedClassifiedIdentifierTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'journal.country' attribute of journals
     * A list of allowed countries
     */
    public journalGetAllowedCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.journalGetAllowedCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for journals
     * A list of allowed discipline schemes
     */
    public journalGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.journalGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for journals
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for journals
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public journalGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.journalGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public journalGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.journalGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public journalGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.journalGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of journals
     * A list of allowed link types
     */
    public journalGetAllowedLinkTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.journalGetAllowedLinkTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public journalGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.journalGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of journal
     * A list of allowed journal types
     */
    public journalGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.journalGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of journals
     * A list of allowed workflow steps
     */
    public journalGetAllowedWorkflowSteps(options?: Configuration): Promise<WorkflowListResult> {
        const result = this.api.journalGetAllowedWorkflowSteps(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the journal with specific UUID.
     * Get disciplines from the discipline scheme associated with the journal
     * @param uuid UUID of the desired journal
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public journalGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.journalGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the journal endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public journalGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.journalGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all journals in the Pure instance. If you need to filter the journals returned, see the POST version which supports additional filtering.
     * Lists all journals
     * @param size Number of returned journals per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getJournalOrderings
     */
    public journalList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<JournalListResult> {
        const result = this.api.journalList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with journals in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with journals
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public journalListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.journalListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with the journal ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the journal to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public journalListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.journalListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the journal with specific UUID.
     * Update disciplines from the discipline scheme associated with the journal
     * @param uuid UUID of the journal to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public journalPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.journalPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists journals in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for journals
     * @param journalsQuery The query to perform
     */
    public journalQuery(journalsQuery: JournalsQuery, options?: Configuration): Promise<JournalListResult> {
        const result = this.api.journalQuery(journalsQuery, options);
        return result.toPromise();
    }

    /**
     * Update journal with specific UUID.
     * Update journal
     * @param uuid UUID of the journal to update
     * @param journal The content to update
     */
    public journalUpdate(uuid: string, journal: Journal, options?: Configuration): Promise<Journal> {
        const result = this.api.journalUpdate(uuid, journal, options);
        return result.toPromise();
    }


}



import { ObservableOrganizationApi } from './ObservableAPI';

import { OrganizationApiRequestFactory, OrganizationApiResponseProcessor} from "../apis/OrganizationApi";
export class PromiseOrganizationApi {
    private api: ObservableOrganizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationApiRequestFactory,
        responseProcessor?: OrganizationApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create organization
     * Create organization
     * @param organization The content to create
     */
    public organizationCreate(organization: Organization, options?: Configuration): Promise<Organization> {
        const result = this.api.organizationCreate(organization, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with an organization
     * Create note
     * @param uuid UUID of the organization to add note to
     * @param note The note to create
     */
    public organizationCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.organizationCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete organization with specific UUID.
     * Delete organization
     * @param uuid UUID of the organization
     */
    public organizationDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.organizationDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all dependents to the organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the organization
     * @param uuid UUID of the organization
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public organizationDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<ContentRefListResult> {
        const result = this.api.organizationDependents(uuid, verbose, options);
        return result.toPromise();
    }

    /**
     * Uploads file for the organization
     * Upload file to a specific organization
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public organizationFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Promise<void> {
        const result = this.api.organizationFileUploads(body, contentType, options);
        return result.toPromise();
    }

    /**
     * Get organization with specific UUID.
     * Get organization
     * @param uuid UUID of the desired organization
     */
    public organizationGet(uuid: string, options?: Configuration): Promise<Organization> {
        const result = this.api.organizationGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'addresses.country' attribute of organizations
     * A list of allowed address countries
     */
    public organizationGetAllowedAddressCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedAddressCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed subdivisions that can be used for the 'addresses.subdivisions' attribute of organizations
     * A list of allowed address subdivisions
     */
    public organizationGetAllowedAddressSubdivisions(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedAddressSubdivisions(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed address types that can be used for the 'addresses.type' attribute of organizations
     * A list of allowed address types
     */
    public organizationGetAllowedAddressTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedAddressTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of organizations
     * A list of allowed classified identifier types
     */
    public organizationGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedClassifiedIdentifierTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified photo types that can be used for the 'photos.type' attribute of organizations
     * A list of allowed classified identifier types
     */
    public organizationGetAllowedClassifiedImageTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedClassifiedImageTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed cost centers that can be used for the 'costCenters' attribute of organizations
     * A list of allowed cost centers
     */
    public organizationGetAllowedCostCenters(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedCostCenters(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for organizations
     * A list of allowed discipline schemes
     */
    public organizationGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.organizationGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for organizations
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public organizationGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.organizationGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed e-mail types that can be used for the 'emails.type' attribute of organizations
     * A list of allowed e-mail types
     */
    public organizationGetAllowedEmailTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedEmailTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public organizationGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public organizationGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.organizationGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public organizationGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.organizationGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed name variant types that can be used for the 'nameVariants.type' attribute of organizations
     * A list of allowed name variant types
     */
    public organizationGetAllowedNameVariantTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedNameVariantTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed phone number types that can be used for the 'phoneNumbers.type' attribute of organizations
     * A list of allowed phone number types
     */
    public organizationGetAllowedPhoneNumberTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedPhoneNumberTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed photo types that can be used for the 'photos.type' attribute of organizations
     * A list of allowed photo types
     */
    public organizationGetAllowedPhotoTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedPhotoTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed profile information types that can be used for the 'profileInformations.type' attribute of organizations
     * A list of allowed profile information types
     */
    public organizationGetAllowedProfileInformationTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedProfileInformationTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of organizations
     * A list of allowed organization types
     */
    public organizationGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed web address types that can be used for the 'webAddresses.type' attribute of organizations
     * A list of allowed web address types
     */
    public organizationGetAllowedWebAddressTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.organizationGetAllowedWebAddressTypes(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the organization
     * @param uuid UUID of the desired organization
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public organizationGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.organizationGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Get file from the organization
     * Get file from the organization
     * @param uuid UUID of the organization
     * @param fileId Id of the file
     */
    public organizationGetFile(uuid: string, fileId: string, options?: Configuration): Promise<HttpFile> {
        const result = this.api.organizationGetFile(uuid, fileId, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public organizationGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.organizationGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all organizations in the Pure instance. If you need to filter the organizations returned, see the POST version which supports additional filtering.
     * Lists all organizations
     * @param size Number of returned organizations per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from organization_getOrderings
     */
    public organizationList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<OrganizationListResult> {
        const result = this.api.organizationList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with organizations
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public organizationListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.organizationListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with an organization ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the organization to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public organizationListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.organizationListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the organization
     * @param uuid UUID of the organization to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public organizationPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.organizationPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for organizations
     * @param organizationsQuery The query to perform
     */
    public organizationQuery(organizationsQuery: OrganizationsQuery, options?: Configuration): Promise<OrganizationListResult> {
        const result = this.api.organizationQuery(organizationsQuery, options);
        return result.toPromise();
    }

    /**
     * Update organization with specific UUID.
     * Update organization
     * @param uuid UUID of the organization to update
     * @param organization The content to update
     */
    public organizationUpdate(uuid: string, organization: Organization, options?: Configuration): Promise<Organization> {
        const result = this.api.organizationUpdate(uuid, organization, options);
        return result.toPromise();
    }


}



import { ObservablePersonApi } from './ObservableAPI';

import { PersonApiRequestFactory, PersonApiResponseProcessor} from "../apis/PersonApi";
export class PromisePersonApi {
    private api: ObservablePersonApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonApiRequestFactory,
        responseProcessor?: PersonApiResponseProcessor
    ) {
        this.api = new ObservablePersonApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create person
     * Create person
     * @param person The content to create
     */
    public personCreate(person: Person, options?: Configuration): Promise<Person> {
        const result = this.api.personCreate(person, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with a person
     * Create note
     * @param uuid UUID of the person to add note to
     * @param note The note to create
     */
    public personCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.personCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete person with specific UUID.
     * Delete person
     * @param uuid UUID of the person
     */
    public personDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.personDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Uploads file for the person
     * Upload file to a specific person
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public personFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Promise<void> {
        const result = this.api.personFileUploads(body, contentType, options);
        return result.toPromise();
    }

    /**
     * Get person with specific UUID.
     * Get person
     * @param uuid UUID of the desired person
     */
    public personGet(uuid: string, options?: Configuration): Promise<Person> {
        const result = this.api.personGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used for the 'academicQualifications.fieldOfStudy' attribute of persons
     * A list of the allowed values for field of study
     */
    public personGetAllowedAcademicQualificationsFieldOfStudies(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedAcademicQualificationsFieldOfStudies(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed academic qualification types for persons
     * A list of allowed academic qualification types for persons
     */
    public personGetAllowedAcademicQualificationsTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedAcademicQualificationsTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'addresses.country' attribute of persons
     * A list of allowed address countries
     */
    public personGetAllowedAddressCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedAddressCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed subdivisions can be used for the 'subdivision' attribute of person organization associations
     * A list of allowed subdivisions
     */
    public personGetAllowedAddressSubdivisions(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedAddressSubdivisions(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed address types that can be used for the 'addresses.type' attribute of persons
     * A list of allowed address types
     */
    public personGetAllowedAddressTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedAddressTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of persons
     * A list of allowed classified identifier types
     */
    public personGetAllowedClassifiedIdentifierTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedClassifiedIdentifierTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for persons
     * A list of allowed discipline schemes
     */
    public personGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.personGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for persons
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public personGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.personGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used for the 'externalPositions.appointment' attribute of persons
     * A list of the allowed values for appointments
     */
    public personGetAllowedExternalPositionsAppointments(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedExternalPositionsAppointments(options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting the person gender property.
     * A list of allowed classifications for the gender property
     */
    public personGetAllowedGenders(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedGenders(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public personGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public personGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.personGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting the leaveOfAbsence property.
     * A list of allowed classifications for the leave of absence property
     */
    public personGetAllowedLeavesOfAbsenceClassifications(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedLeavesOfAbsenceClassifications(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of persons
     * A list of allowed link types
     */
    public personGetAllowedLinkTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedLinkTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public personGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.personGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a classified name.
     * A list of allowed classifications for classified names
     */
    public personGetAllowedNamesTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedNamesTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting the nationality property.
     * A list of allowed classifications for the nationalities property
     */
    public personGetAllowedNationalities(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedNationalities(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed email types for person organisation associations on persons
     * A list of allowed email types
     */
    public personGetAllowedPersonOrganizationAssociationsEmailTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPersonOrganizationAssociationsEmailTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed employment types for person organisation associations on persons
     * A list of allowed employment types
     */
    public personGetAllowedPersonOrganizationAssociationsEmploymentTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPersonOrganizationAssociationsEmploymentTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed job titles for person organisation associations on persons
     * A list of allowed job titles
     */
    public personGetAllowedPersonOrganizationAssociationsJobTitles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPersonOrganizationAssociationsJobTitles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed phone numbers types for person organisation associations on persons
     * A list of allowed phone number types
     */
    public personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed supervisor roles for person organisation associations on persons
     * A list of allowed supervisor roles
     */
    public personGetAllowedPersonOrganizationAssociationsSupervisorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPersonOrganizationAssociationsSupervisorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed web address types for person organisation associations on persons
     * A list of allowed web address types
     */
    public personGetAllowedPersonOrganizationAssociationsWebAddressTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPersonOrganizationAssociationsWebAddressTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed country classifications for private address on persons
     * A list of allowed country classifications for private address
     */
    public personGetAllowedPrivateAddressCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedPrivateAddressCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting an entry in profile information.
     * A list of allowed classifications for the profile information property
     */
    public personGetAllowedProfileInformationTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedProfileInformationTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed photo types that can be used for the 'profilePhotos.type' attribute of persons
     * A list of allowed photo types
     */
    public personGetAllowedProfilePhotoTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedProfilePhotoTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types for person profile photos
     * A list of allowed types for person profile photos
     */
    public personGetAllowedProfilePhotosTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedProfilePhotosTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed contract types for staff organisation associations on persons
     * A list of allowed contract types
     */
    public personGetAllowedStaffOrganizationAssociationsContractTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedStaffOrganizationAssociationsContractTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed staff types for staff organisation associations on persons
     * A list of allowed staff types
     */
    public personGetAllowedStaffOrganizationAssociationsStaffTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedStaffOrganizationAssociationsStaffTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed employment types for student organisation associations on persons
     * A list of allowed employment types
     */
    public personGetAllowedStudentAssociationsEmploymentTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedStudentAssociationsEmploymentTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of classifications that can be used when submitting a title.
     * A list of allowed classifications for the titles property
     */
    public personGetAllowedTitlesTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedTitlesTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed employment types for visiting scholar organisation associations on persons
     * A list of allowed employment types
     */
    public personGetAllowedVisitingScholarAssociationsEmploymentTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.personGetAllowedVisitingScholarAssociationsEmploymentTypes(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the person with specific UUID.
     * Get disciplines from the discipline scheme associated with the person
     * @param uuid UUID of the desired person
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public personGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.personGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Get file from the person
     * Get file from the person
     * @param uuid UUID of the person
     * @param fileId File id 
     */
    public personGetFile(uuid: string, fileId: string, options?: Configuration): Promise<HttpFile> {
        const result = this.api.personGetFile(uuid, fileId, options);
        return result.toPromise();
    }

    /**
     * Get highlighted content for the person with the specific UUID. Highlights are only available for editorial types
     * Get highlighted content
     * @param uuid UUID of the owner (person) of the highlighted content
     */
    public personGetHighlightedContent(uuid: string, options?: Configuration): Promise<HighlightedContent> {
        const result = this.api.personGetHighlightedContent(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public personGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.personGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all persons in the Pure instance. If you need to filter the persons returned, see the POST version which supports additional filtering.
     * Lists all persons
     * @param size Number of returned persons per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getPersonOrderings
     */
    public personList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<PersonListResult> {
        const result = this.api.personList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with persons
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public personListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.personListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with an person ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the person to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public personListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.personListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the person with specific UUID.
     * Update disciplines from the discipline scheme associated with the person
     * @param uuid UUID of the person to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public personPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.personPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for persons
     * @param personsQuery The query to perform
     */
    public personQuery(personsQuery: PersonsQuery, options?: Configuration): Promise<PersonListResult> {
        const result = this.api.personQuery(personsQuery, options);
        return result.toPromise();
    }

    /**
     * Find supervisees of a person by their specific UUID.
     * person supervisees
     * @param uuid UUID of the person
     */
    public personSupervisee(uuid: string, options?: Configuration): Promise<PersonSuperviseeAssociationListResult> {
        const result = this.api.personSupervisee(uuid, options);
        return result.toPromise();
    }

    /**
     * Update person with specific UUID.
     * Update person
     * @param uuid UUID of the person to update
     * @param person The content to update
     */
    public personUpdate(uuid: string, person: Person, options?: Configuration): Promise<Person> {
        const result = this.api.personUpdate(uuid, person, options);
        return result.toPromise();
    }

    /**
     * Update highlighted content references. Add an empty array of references for a content type to not highlight any items of this type. Types that are not present will be ignored. Highlights can only be updated for editorial types
     * Update highlighted content
     * @param uuid UUID of the person to update highlighted content for
     * @param highlightedContent The highlighted content references to set on the person
     */
    public personUpdateHighlightedContent(uuid: string, highlightedContent: HighlightedContent, options?: Configuration): Promise<HighlightedContent> {
        const result = this.api.personUpdateHighlightedContent(uuid, highlightedContent, options);
        return result.toPromise();
    }


}



import { ObservablePublisherApi } from './ObservableAPI';

import { PublisherApiRequestFactory, PublisherApiResponseProcessor} from "../apis/PublisherApi";
export class PromisePublisherApi {
    private api: ObservablePublisherApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublisherApiRequestFactory,
        responseProcessor?: PublisherApiResponseProcessor
    ) {
        this.api = new ObservablePublisherApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create publisher
     * Create publisher
     * @param publisher The content to create
     */
    public publisherCreate(publisher: Publisher, options?: Configuration): Promise<Publisher> {
        const result = this.api.publisherCreate(publisher, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with a publisher
     * Create note
     * @param uuid UUID of the publisher to add note to
     * @param note The note to create
     */
    public publisherCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.publisherCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete publisher with specific UUID.
     * Delete publisher
     * @param uuid UUID of the publisher
     */
    public publisherDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.publisherDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all dependents to a publisher with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a publisher
     * @param uuid UUID of the publisher
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public publisherDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<ContentRefListResult> {
        const result = this.api.publisherDependents(uuid, verbose, options);
        return result.toPromise();
    }

    /**
     * Get publisher with specific UUID.
     * Get publisher
     * @param uuid UUID of the desired publisher
     */
    public publisherGet(uuid: string, options?: Configuration): Promise<Publisher> {
        const result = this.api.publisherGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for publishers
     * A list of allowed discipline schemes
     */
    public publisherGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.publisherGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for publishers
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for publishers
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public publisherGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.publisherGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public publisherGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.publisherGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public publisherGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.publisherGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public publisherGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.publisherGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of publishers
     * A list of allowed publisher types
     */
    public publisherGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.publisherGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of publishers
     * A list of allowed workflow steps
     */
    public publisherGetAllowedWorkflowSteps(options?: Configuration): Promise<WorkflowListResult> {
        const result = this.api.publisherGetAllowedWorkflowSteps(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the publisher with specific UUID.
     * Get disciplines from the discipline scheme associated with the publisher
     * @param uuid UUID of the desired publisher
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public publisherGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.publisherGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the publisher endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public publisherGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.publisherGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all publishers in the Pure instance. If you need to filter the publishers returned, see the POST version which supports additional filtering.
     * Lists all publishers
     * @param size Number of returned publishers per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from publisher_getOrderings
     */
    public publisherList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<PublisherListResult> {
        const result = this.api.publisherList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with publishers in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with publishers
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public publisherListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.publisherListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with a publisher ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the publisher to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public publisherListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.publisherListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the publisher with specific UUID.
     * Update disciplines from the discipline scheme associated with the publisher
     * @param uuid UUID of the publisher to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public publisherPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.publisherPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists publishers in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for publishers
     * @param publishersQuery The query to perform
     */
    public publisherQuery(publishersQuery: PublishersQuery, options?: Configuration): Promise<PublisherListResult> {
        const result = this.api.publisherQuery(publishersQuery, options);
        return result.toPromise();
    }

    /**
     * Update publishers with specific UUID.
     * Update publishers
     * @param uuid UUID of the publisher to update
     * @param publisher The content to update
     */
    public publisherUpdate(uuid: string, publisher: Publisher, options?: Configuration): Promise<Publisher> {
        const result = this.api.publisherUpdate(uuid, publisher, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of publishers
     * A list of allowed countries
     */
    public publishersGetAllowedCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.publishersGetAllowedCountries(options);
        return result.toPromise();
    }


}



import { ObservableResearchOutputApi } from './ObservableAPI';

import { ResearchOutputApiRequestFactory, ResearchOutputApiResponseProcessor} from "../apis/ResearchOutputApi";
export class PromiseResearchOutputApi {
    private api: ObservableResearchOutputApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ResearchOutputApiRequestFactory,
        responseProcessor?: ResearchOutputApiResponseProcessor
    ) {
        this.api = new ObservableResearchOutputApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create research output
     * Create research output
     * @param researchOutput The content to create
     */
    public researchOutputCreate(researchOutput: ResearchOutput, options?: Configuration): Promise<ResearchOutput> {
        const result = this.api.researchOutputCreate(researchOutput, options);
        return result.toPromise();
    }

    /**
     * Create note and associate it with a research output
     * Create note
     * @param uuid UUID of the research output to add note to
     * @param note The note to create
     */
    public researchOutputCreateNote(uuid: string, note: Note, options?: Configuration): Promise<Note> {
        const result = this.api.researchOutputCreateNote(uuid, note, options);
        return result.toPromise();
    }

    /**
     * Delete research output with specific UUID.
     * Delete research output
     * @param uuid UUID of the research output
     */
    public researchOutputDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.researchOutputDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all dependents to a research output with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a research output
     * @param uuid UUID of the research output
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public researchOutputDependents(uuid: string, verbose?: boolean, options?: Configuration): Promise<ContentRefListResult> {
        const result = this.api.researchOutputDependents(uuid, verbose, options);
        return result.toPromise();
    }

    /**
     * Uploads file for the research output
     * Upload file to a specific research output
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public researchOutputFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Promise<void> {
        const result = this.api.researchOutputFileUploads(body, contentType, options);
        return result.toPromise();
    }

    /**
     * Get research output with specific UUID.
     * Get research output
     * @param uuid UUID of the desired research output
     */
    public researchOutputGet(uuid: string, options?: Configuration): Promise<ResearchOutput> {
        const result = this.api.researchOutputGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of research outputs
     * A list of allowed countries
     */
    public researchOutputGetAllowedCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchOutputGetAllowedCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public researchOutputGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchOutputGetAllowedKeywordGroupConfigurationClassifications(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public researchOutputGetAllowedKeywordGroupConfigurations(options?: Configuration): Promise<KeywordGroupConfigurationList> {
        const result = this.api.researchOutputGetAllowedKeywordGroupConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public researchOutputGetAllowedLocales(options?: Configuration): Promise<LocalesList> {
        const result = this.api.researchOutputGetAllowedLocales(options);
        return result.toPromise();
    }

    /**
     * Get a list of peer review configurations that describe the allowed combinations of values for the interrelated fields: type, category, peerReview, and internationalPeerReview
     * A list of peer review configurations
     */
    public researchOutputGetAllowedPeerReviewConfigurations(options?: Configuration): Promise<ResearchOutputPeerReviewConfigurationListResult> {
        const result = this.api.researchOutputGetAllowedPeerReviewConfigurations(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed templates that can be used for research outputs, such as 'ContributionToJournal' or 'BookAnthology'. Some of the templates that exists in the API specification may be disabled for the Pure installation.
     * A list of allowed research output templates
     */
    public researchOutputGetAllowedTemplates(options?: Configuration): Promise<AllowedTemplateListResult> {
        const result = this.api.researchOutputGetAllowedTemplates(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed types that can be used for the 'type' attribute of research outputs
     * A list of allowed research output types
     */
    public researchOutputGetAllowedTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchOutputGetAllowedTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of research outputs
     * A list of allowed workflow steps
     */
    public researchOutputGetAllowedWorkflowSteps(options?: Configuration): Promise<WorkflowListResult> {
        const result = this.api.researchOutputGetAllowedWorkflowSteps(options);
        return result.toPromise();
    }

    /**
     * Get file from the research output
     * Get file from the research output
     * @param uuid UUID of the research output
     * @param fileId File id 
     */
    public researchOutputGetFile(uuid: string, fileId: string, options?: Configuration): Promise<HttpFile> {
        const result = this.api.researchOutputGetFile(uuid, fileId, options);
        return result.toPromise();
    }

    /**
     * Lists all orderings available to the research output endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public researchOutputGetOrderings(options?: Configuration): Promise<OrderingsList> {
        const result = this.api.researchOutputGetOrderings(options);
        return result.toPromise();
    }

    /**
     * Lists all  research outputs in the Pure instance. If you need to filter the research outputs returned, see the POST version which supports additional filtering.
     * Lists all  research outputs
     * @param size Number of returned  research outputs per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getResearchOutputOrderings
     */
    public researchOutputList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<ResearchOutputListResult> {
        const result = this.api.researchOutputList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Lists disciplines from the discipline scheme associated with research outputs in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with research outputs
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public researchOutputListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Promise<DisciplinesAssociationListResult> {
        const result = this.api.researchOutputListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);
        return result.toPromise();
    }

    /**
     * Lists notes associated with a research output ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the research output to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public researchOutputListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Promise<NoteListResult> {
        const result = this.api.researchOutputListNotes(uuid, size, offset, options);
        return result.toPromise();
    }

    /**
     * Update disciplines from the discipline scheme associated with the research output with specific UUID.
     * Update disciplines from the discipline scheme associated with the research output
     * @param uuid UUID of the research output to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public researchOutputPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.researchOutputPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);
        return result.toPromise();
    }

    /**
     * Lists research outputs in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for research outputs
     * @param researchOutputsQuery The query to perform
     */
    public researchOutputQuery(researchOutputsQuery: ResearchOutputsQuery, options?: Configuration): Promise<ResearchOutputListResult> {
        const result = this.api.researchOutputQuery(researchOutputsQuery, options);
        return result.toPromise();
    }

    /**
     * Update research outputs with specific UUID.
     * Update research outputs
     * @param uuid UUID of the research output to update
     * @param researchOutput The content to update
     */
    public researchOutputUpdate(uuid: string, researchOutput: ResearchOutput, options?: Configuration): Promise<ResearchOutput> {
        const result = this.api.researchOutputUpdate(uuid, researchOutput, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed access types for additional files on research outputs
     * A list of allowed access types
     */
    public researchoutputGetAllowedAdditionalFileAccessTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedAdditionalFileAccessTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed license types for additional files on research outputs
     * A list of allowed license types
     */
    public researchoutputGetAllowedAdditionalFileLicenseTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedAdditionalFileLicenseTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed article processing charge currencies on research outputs
     * A list of allowed article processing charge currencies
     */
    public researchoutputGetAllowedArticleProcessingChargeCurrencies(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedArticleProcessingChargeCurrencies(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the book anthology subtype of research outputs
     * A list of allowed contributor roles for the book anthology subtype
     */
    public researchoutputGetAllowedBookAnthologyContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedBookAnthologyContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the book anthology subtype of research outputs
     * A list of allowed description types for the book anthology subtype
     */
    public researchoutputGetAllowedBookAnthologyDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedBookAnthologyDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed case note sources for select subtypes of research outputs
     * A list of allowed case note sources
     */
    public researchoutputGetAllowedCaseNoteSources(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedCaseNoteSources(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed categories on research outputs
     * A list of allowed categories
     */
    public researchoutputGetAllowedCategories(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedCategories(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to book anthology subtype of research outputs
     * A list of allowed contributor roles for the contribution to book anthology subtype
     */
    public researchoutputGetAllowedContributionToBookAnthologyContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToBookAnthologyContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to book anthology subtype of research outputs
     * A list of allowed description types for the contribution to book anthology subtype
     */
    public researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to conference subtype of research outputs
     * A list of allowed contributor roles for the contribution to conference subtype
     */
    public researchoutputGetAllowedContributionToConferenceContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToConferenceContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to conference subtype of research outputs
     * A list of allowed description types for the contribution to conference subtype
     */
    public researchoutputGetAllowedContributionToConferenceDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToConferenceDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to journal subtype of research outputs
     * A list of allowed contributor roles for the contribution to journal subtype
     */
    public researchoutputGetAllowedContributionToJournalContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToJournalContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to journal subtype of research outputs
     * A list of allowed description types for the contribution to journal subtype
     */
    public researchoutputGetAllowedContributionToJournalDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToJournalDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to memorandum subtype of research outputs
     * A list of allowed contributor roles for the contribution to memorandum subtype
     */
    public researchoutputGetAllowedContributionToMemorandumContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToMemorandumContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to memorandum subtype of research outputs
     * A list of allowed description types for the contribution to memorandum subtype
     */
    public researchoutputGetAllowedContributionToMemorandumDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToMemorandumDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the contribution to periodical subtype of research outputs
     * A list of allowed contributor roles for the contribution to periodical subtype
     */
    public researchoutputGetAllowedContributionToPeriodicalContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToPeriodicalContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the contribution to periodical subtype of research outputs
     * A list of allowed description types for the contribution to periodical subtype
     */
    public researchoutputGetAllowedContributionToPeriodicalDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributionToPeriodicalDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed countries for contributors on research outputs
     * A list of allowed contributor countries
     */
    public researchoutputGetAllowedContributorCountries(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedContributorCountries(options);
        return result.toPromise();
    }

    /**
     * Get a list fo a allowed discipline schemes for research outputs
     * A list of allowed discipline schemes
     */
    public researchoutputGetAllowedDisciplineSchemes(options?: Configuration): Promise<DisciplinesDisciplineSchemeListResult> {
        const result = this.api.researchoutputGetAllowedDisciplineSchemes(options);
        return result.toPromise();
    }

    /**
     * Get a list of a allowed disciplines for specific discipline scheme for research outputs
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for research output
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public researchoutputGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Promise<DisciplinesDisciplineListResult> {
        const result = this.api.researchoutputGetAllowedDisciplines(disciplineScheme, size, offset, options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed access types for electronic versions on research outputs
     * A list of allowed access types
     */
    public researchoutputGetAllowedElectronicVersionAccessTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedElectronicVersionAccessTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed license types for electronic versions on research outputs
     * A list of allowed license types
     */
    public researchoutputGetAllowedElectronicVersionLicenseTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedElectronicVersionLicenseTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed version types for electronic versions on research outputs
     * A list of allowed version types
     */
    public researchoutputGetAllowedElectronicVersionVersionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedElectronicVersionVersionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed languages on research outputs
     * A list of allowed languages
     */
    public researchoutputGetAllowedLanguages(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedLanguages(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed link types on research outputs
     * A list of allowed link types
     */
    public researchoutputGetAllowedLinkTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedLinkTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed main research areas on research outputs
     * A list of allowed main research areas
     */
    public researchoutputGetAllowedMainResearchAreas(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedMainResearchAreas(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the memorandum subtype of research outputs
     * A list of allowed contributor roles for the memorandum subtype
     */
    public researchoutputGetAllowedMemorandumContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedMemorandumContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the memorandum subtype of research outputs
     * A list of allowed description types for the memorandum subtype
     */
    public researchoutputGetAllowedMemorandumDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedMemorandumDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the non-textual subtype of research outputs
     * A list of allowed contributor roles for the non-textual subtype
     */
    public researchoutputGetAllowedNonTextualContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedNonTextualContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the non-textual subtype of research outputs
     * A list of allowed description types for the non-textual subtype
     */
    public researchoutputGetAllowedNonTextualDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedNonTextualDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed open access permissions on research outputs
     * A list of allowed open access permissions
     */
    public researchoutputGetAllowedOpenAccessPermissions(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedOpenAccessPermissions(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the other contribution subtype of research outputs
     * A list of allowed contributor roles for the other contribution subtype
     */
    public researchoutputGetAllowedOtherContributionContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedOtherContributionContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the other contribution subtype of research outputs
     * A list of allowed description types for the other contribution subtype
     */
    public researchoutputGetAllowedOtherContributionDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedOtherContributionDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed output medias for the non-textual subtype of research outputs
     * A list of allowed output medias
     */
    public researchoutputGetAllowedOutputMedias(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedOutputMedias(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the patent subtype of research outputs
     * A list of allowed contributor roles for the patent subtype
     */
    public researchoutputGetAllowedPatentContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedPatentContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the patent subtype of research outputs
     * A list of allowed description types for the patent subtype
     */
    public researchoutputGetAllowedPatentDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedPatentDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed publication statuses on research output
     * A list of allowed publication statuses
     */
    public researchoutputGetAllowedPublicationStatuses(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedPublicationStatuses(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed qualifications for the thesis subtype of research outputs
     * A list of allowed qualifications
     */
    public researchoutputGetAllowedQualifications(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedQualifications(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed supervisors roles for the thesis subtype of research outputs
     * A list of allowed supervisor roles
     */
    public researchoutputGetAllowedSupervisorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedSupervisorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the thesis subtype of research outputs
     * A list of allowed contributor roles for the thesis subtype
     */
    public researchoutputGetAllowedThesisContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedThesisContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the thesis subtype of research outputs
     * A list of allowed description types for the thesis subtype
     */
    public researchoutputGetAllowedThesisDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedThesisDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed roles for contributors on the working paper subtype of research outputs
     * A list of allowed contributor roles for the working paper subtype
     */
    public researchoutputGetAllowedWorkingPaperContributorRoles(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedWorkingPaperContributorRoles(options);
        return result.toPromise();
    }

    /**
     * Get a list of allowed description types on the working paper subtype of research outputs
     * A list of allowed description types for the working paper subtype
     */
    public researchoutputGetAllowedWorkingPaperDescriptionTypes(options?: Configuration): Promise<ClassificationRefList> {
        const result = this.api.researchoutputGetAllowedWorkingPaperDescriptionTypes(options);
        return result.toPromise();
    }

    /**
     * Get disciplines from the discipline scheme associated with the research output with specific UUID.
     * Get disciplinesfrom the discipline scheme associated with the research output
     * @param uuid UUID of the desired research output
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public researchoutputGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Promise<DisciplinesAssociation> {
        const result = this.api.researchoutputGetDisciplineAssociation(uuid, disciplineScheme, options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create user
     * Create user
     * @param user The content to create
     */
    public userCreate(user: User, options?: Configuration): Promise<User> {
        const result = this.api.userCreate(user, options);
        return result.toPromise();
    }

    /**
     * Delete user with specific UUID.
     * Delete user
     * @param uuid UUID of the user
     */
    public userDelete(uuid: string, options?: Configuration): Promise<void> {
        const result = this.api.userDelete(uuid, options);
        return result.toPromise();
    }

    /**
     * Get user UUID.
     * Get user
     * @param uuid UUID of the desired user
     */
    public userGet(uuid: string, options?: Configuration): Promise<User> {
        const result = this.api.userGet(uuid, options);
        return result.toPromise();
    }

    /**
     * Lists all users in the Pure instance. If you need to filter the users returned, see the POST version which supports additional filtering.
     * Lists all users
     * @param size Number of returned users per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from user_getOrderings
     */
    public userList(size?: number, offset?: number, order?: string, options?: Configuration): Promise<UserListResult> {
        const result = this.api.userList(size, offset, order, options);
        return result.toPromise();
    }

    /**
     * Update user with specific UUID.
     * Update user
     * @param uuid UUID of the user to update
     * @param user The content to update
     */
    public userUpdate(uuid: string, user: User, options?: Configuration): Promise<User> {
        const result = this.api.userUpdate(uuid, user, options);
        return result.toPromise();
    }


}



