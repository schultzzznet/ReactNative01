import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";
export class ObservableEventApi {
    private requestFactory: EventApiRequestFactory;
    private responseProcessor: EventApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventApiRequestFactory,
        responseProcessor?: EventApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventApiResponseProcessor();
    }

    /**
     * Create event
     * Create event
     * @param event The content to create
     */
    public eventCreate(event: Event, options?: Configuration): Observable<Event> {
        const requestContextPromise = this.requestFactory.eventCreate(event, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with an event
     * Create note
     * @param uuid UUID of the event to add note to
     * @param note The note to create
     */
    public eventCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.eventCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete event with specific UUID.
     * Delete event
     * @param uuid UUID of the event
     */
    public eventDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.eventDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventDelete(rsp)));
            }));
    }
 
    /**
     * Get event with specific UUID.
     * Get event
     * @param uuid UUID of the desired event
     */
    public eventGet(uuid: string, options?: Configuration): Observable<Event> {
        const requestContextPromise = this.requestFactory.eventGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGet(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of events
     * A list of allowed classified identifier types
     */
    public eventGetAllowedClassifiedIdentifierTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedClassifiedIdentifierTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedClassifiedIdentifierTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'country' attribute of events
     * A list of allowed countries
     */
    public eventGetAllowedCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedCountries(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed degree of recognitions that can be used for the 'degreeOfRecognition' attribute of events
     * A list of allowed degree of recognitions
     */
    public eventGetAllowedDegreeOfRecognitions(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedDegreeOfRecognitions(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedDegreeOfRecognitions(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for events
     * A list of allowed discipline schemes
     */
    public eventGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.eventGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for events
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for events
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public eventGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.eventGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public eventGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public eventGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of events
     * A list of allowed link types
     */
    public eventGetAllowedLinkTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedLinkTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedLinkTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public eventGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed subdivisions can be used for the 'subdivision' attribute of events
     * A list of allowed subdivisions
     */
    public eventGetAllowedSubdivisions(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedSubdivisions(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedSubdivisions(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of events
     * A list of allowed event types
     */
    public eventGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.eventGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of events
     * A list of allowed workflow steps
     */
    public eventGetAllowedWorkflowSteps(options?: Configuration): Observable<WorkflowListResult> {
        const requestContextPromise = this.requestFactory.eventGetAllowedWorkflowSteps(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetAllowedWorkflowSteps(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme  associated with the event with specific UUID.
     * Get disciplines from the discipline scheme associated with the event
     * @param uuid UUID of the desired event
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public eventGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.eventGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the event endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public eventGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.eventGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all events in the Pure instance. If you need to filter the events returned, see the POST version which supports additional filtering.
     * Lists all events
     * @param size Number of returned events per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getEventOrderings
     */
    public eventList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<EventListResult> {
        const requestContextPromise = this.requestFactory.eventList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with events in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with events
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public eventListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.eventListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with an event ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the event to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public eventListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.eventListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventListNotes(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the event with specific UUID.
     * Update disciplines from the discipline scheme associated with the event
     * @param uuid UUID of the event to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public eventPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.eventPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Update event with specific UUID.
     * Update event
     * @param uuid UUID of the event to update
     * @param event The content to update
     */
    public eventUpdate(uuid: string, event: Event, options?: Configuration): Observable<Event> {
        const requestContextPromise = this.requestFactory.eventUpdate(uuid, event, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventUpdate(rsp)));
            }));
    }
 
    /**
     * Lists events in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for events
     * @param eventsQuery The query to perform
     */
    public eventsQuery(eventsQuery: EventsQuery, options?: Configuration): Observable<EventListResult> {
        const requestContextPromise = this.requestFactory.eventsQuery(eventsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsQuery(rsp)));
            }));
    }
 
}

import { ExternalOrganizationApiRequestFactory, ExternalOrganizationApiResponseProcessor} from "../apis/ExternalOrganizationApi";
export class ObservableExternalOrganizationApi {
    private requestFactory: ExternalOrganizationApiRequestFactory;
    private responseProcessor: ExternalOrganizationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalOrganizationApiRequestFactory,
        responseProcessor?: ExternalOrganizationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExternalOrganizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExternalOrganizationApiResponseProcessor();
    }

    /**
     * Create external organization
     * Create external organization
     * @param externalOrganization The content to create
     */
    public externalOrganizationCreate(externalOrganization: ExternalOrganization, options?: Configuration): Observable<ExternalOrganization> {
        const requestContextPromise = this.requestFactory.externalOrganizationCreate(externalOrganization, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with an external organization
     * Create note
     * @param uuid UUID of the external organization to add note to
     * @param note The note to create
     */
    public externalOrganizationCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.externalOrganizationCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete external organization with specific UUID.
     * Delete external organization
     * @param uuid UUID of the external organization
     */
    public externalOrganizationDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.externalOrganizationDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationDelete(rsp)));
            }));
    }
 
    /**
     * Lists all dependents to the external organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the external organization
     * @param uuid UUID of the external organization to update
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public externalOrganizationDependents(uuid: string, verbose?: boolean, options?: Configuration): Observable<ContentRefListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationDependents(uuid, verbose, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationDependents(rsp)));
            }));
    }
 
    /**
     * Uploads file for the external organization
     * Upload file to a specific external organization
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public externalOrganizationFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.externalOrganizationFileUploads(body, contentType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationFileUploads(rsp)));
            }));
    }
 
    /**
     * Get external organization with specific UUID.
     * Get external organization
     * @param uuid UUID of the desired external organization
     */
    public externalOrganizationGet(uuid: string, options?: Configuration): Observable<ExternalOrganization> {
        const requestContextPromise = this.requestFactory.externalOrganizationGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGet(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'address.country' attribute of external organizations
     * A list of allowed address countries
     */
    public externalOrganizationGetAllowedAddressCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedAddressCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedAddressCountries(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed subdivisions that can be used for the 'address.subdivisions' attribute of external organizations
     * A list of allowed address subdivisions
     */
    public externalOrganizationGetAllowedAddressSubdivisions(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedAddressSubdivisions(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedAddressSubdivisions(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external organizations
     * A list of allowed classified identifier types
     */
    public externalOrganizationGetAllowedClassifiedIdentifierTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedClassifiedIdentifierTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedClassifiedIdentifierTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified image types that can be used for the 'images.type' attribute of external organizations
     * A list of allowed classified identifier types
     */
    public externalOrganizationGetAllowedClassifiedImageTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedClassifiedImageTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedClassifiedImageTypes(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for external organizations
     * A list of allowed discipline schemes
     */
    public externalOrganizationGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for external organizations
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public externalOrganizationGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed document licenses that can be used for the 'documents.license' attribute of external organizations
     * A list of allowed document licenses
     */
    public externalOrganizationGetAllowedDocumentLicenses(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedDocumentLicenses(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedDocumentLicenses(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed document types that can be used for the 'documents.type' attribute of external organizations
     * A list of allowed document types
     */
    public externalOrganizationGetAllowedDocumentTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedDocumentTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedDocumentTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public externalOrganizationGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of external organizations
     * A list of allowed link types
     */
    public externalOrganizationGetAllowedLinkTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedLinkTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedLinkTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public externalOrganizationGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed nature types that can be used for the 'natureTypes' attribute of external organizations
     * A list of allowed nature types
     */
    public externalOrganizationGetAllowedNatureTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedNatureTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedNatureTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external organizations
     * A list of allowed external organization types
     */
    public externalOrganizationGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external organizations
     * A list of allowed workflow steps
     */
    public externalOrganizationGetAllowedWorkflowSteps(options?: Configuration): Observable<WorkflowListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetAllowedWorkflowSteps(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetAllowedWorkflowSteps(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the external organization
     * @param uuid UUID of the desired external organization
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public externalOrganizationGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Get file from the external organization
     * Get file from the external organization
     * @param uuid UUID of the external organization
     * @param fileId File id 
     */
    public externalOrganizationGetFile(uuid: string, fileId: string, options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetFile(uuid, fileId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetFile(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the external organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public externalOrganizationGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.externalOrganizationGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all external organizations in the Pure instance. If you need to filter the external organizations returned, see the POST version which supports additional filtering.
     * Lists all external organizations
     * @param size Number of returned external organizations per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from externalOrganization_getOrderings
     */
    public externalOrganizationList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<ExternalOrganizationListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with external organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external organizations
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public externalOrganizationListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with an external organization ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the external organization to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public externalOrganizationListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationListNotes(rsp)));
            }));
    }
 
    /**
     * Merge a list of external organizations together. Note that this operation is irreversible
     * Merge external organizations
     * @param externalOrganizationRefList References to the entities to merge. The first will be the target. All additional entities will be merged into the target.
     */
    public externalOrganizationMerge(externalOrganizationRefList: ExternalOrganizationRefList, options?: Configuration): Observable<ExternalOrganization> {
        const requestContextPromise = this.requestFactory.externalOrganizationMerge(externalOrganizationRefList, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationMerge(rsp)));
            }));
    }
 
    /**
     * Runs through a list external organizations and returns the deduplicated and merged organizations. The operation does not touch the Pure database
     * Preview deduplication of external organizations
     * @param externalOrganizationList The content to deduplicate. The data do not need to exist in the database.
     */
    public externalOrganizationPreviewDeduplication(externalOrganizationList: ExternalOrganizationList, options?: Configuration): Observable<ExternalOrganizationListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationPreviewDeduplication(externalOrganizationList, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationPreviewDeduplication(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the external organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the external organization
     * @param uuid UUID of the external organization to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public externalOrganizationPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.externalOrganizationPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists external organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external organizations
     * @param externalOrganizationsQuery The query to perform
     */
    public externalOrganizationQuery(externalOrganizationsQuery: ExternalOrganizationsQuery, options?: Configuration): Observable<ExternalOrganizationListResult> {
        const requestContextPromise = this.requestFactory.externalOrganizationQuery(externalOrganizationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationQuery(rsp)));
            }));
    }
 
    /**
     * Update external organization with specific UUID.
     * Update external organization
     * @param uuid UUID of the external organization to update
     * @param externalOrganization The content to update
     */
    public externalOrganizationUpdate(uuid: string, externalOrganization: ExternalOrganization, options?: Configuration): Observable<ExternalOrganization> {
        const requestContextPromise = this.requestFactory.externalOrganizationUpdate(uuid, externalOrganization, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalOrganizationUpdate(rsp)));
            }));
    }
 
}

import { ExternalPersonApiRequestFactory, ExternalPersonApiResponseProcessor} from "../apis/ExternalPersonApi";
export class ObservableExternalPersonApi {
    private requestFactory: ExternalPersonApiRequestFactory;
    private responseProcessor: ExternalPersonApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalPersonApiRequestFactory,
        responseProcessor?: ExternalPersonApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExternalPersonApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExternalPersonApiResponseProcessor();
    }

    /**
     * Create external person
     * Create external person
     * @param externalPerson The content to create
     */
    public externalPersonCreate(externalPerson: ExternalPerson, options?: Configuration): Observable<ExternalPerson> {
        const requestContextPromise = this.requestFactory.externalPersonCreate(externalPerson, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonCreate(rsp)));
            }));
    }
 
    /**
     * Delete external person with specific UUID.
     * Delete external person
     * @param uuid UUID of the external person
     */
    public externalPersonDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.externalPersonDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonDelete(rsp)));
            }));
    }
 
    /**
     * Lists all dependents to a external person with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a external person
     * @param uuid UUID of the external person
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public externalPersonDependents(uuid: string, verbose?: boolean, options?: Configuration): Observable<ContentRefListResult> {
        const requestContextPromise = this.requestFactory.externalPersonDependents(uuid, verbose, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonDependents(rsp)));
            }));
    }
 
    /**
     * Get external person with specific UUID.
     * Get external person
     * @param uuid UUID of the desired external person
     */
    public externalPersonGet(uuid: string, options?: Configuration): Observable<ExternalPerson> {
        const requestContextPromise = this.requestFactory.externalPersonGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGet(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of external persons
     * A list of allowed classified identifier types
     */
    public externalPersonGetAllowedClassifiedIdentifierTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedClassifiedIdentifierTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedClassifiedIdentifierTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of external persons
     * A list of allowed countries
     */
    public externalPersonGetAllowedCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedCountries(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for external persons
     * A list of allowed discipline schemes
     */
    public externalPersonGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public externalPersonGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public externalPersonGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public externalPersonGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of external persons
     * A list of allowed external person types
     */
    public externalPersonGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of external persons
     * A list of allowed workflow steps
     */
    public externalPersonGetAllowedWorkflowSteps(options?: Configuration): Observable<WorkflowListResult> {
        const requestContextPromise = this.requestFactory.externalPersonGetAllowedWorkflowSteps(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetAllowedWorkflowSteps(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the external person with specific UUID.
     * Get disciplines from the discipline scheme associated with the external person
     * @param uuid UUID of the desired external person
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public externalPersonGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.externalPersonGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the external person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public externalPersonGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.externalPersonGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all external persons in the Pure instance. If you need to filter the external persons returned, see the POST version which supports additional filtering.
     * Lists all external persons
     * @param size Number of returned external persons per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getExternalPersonOrderings
     */
    public externalPersonList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<ExternalPersonListResult> {
        const requestContextPromise = this.requestFactory.externalPersonList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with external persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with external persons
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public externalPersonListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.externalPersonListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the external person with specific UUID.
     * Update disciplines from the discipline scheme associated with the external person
     * @param uuid UUID of the external person to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public externalPersonPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.externalPersonPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists external persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for external persons
     * @param externalPersonsQuery The query to perform
     */
    public externalPersonQuery(externalPersonsQuery: ExternalPersonsQuery, options?: Configuration): Observable<ExternalPersonListResult> {
        const requestContextPromise = this.requestFactory.externalPersonQuery(externalPersonsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonQuery(rsp)));
            }));
    }
 
    /**
     * Update external persons with specific UUID.
     * Update external persons
     * @param uuid UUID of the external person to update
     * @param externalPerson The content to update
     */
    public externalPersonUpdate(uuid: string, externalPerson: ExternalPerson, options?: Configuration): Observable<ExternalPerson> {
        const requestContextPromise = this.requestFactory.externalPersonUpdate(uuid, externalPerson, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalPersonUpdate(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for external persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for external persons
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public getAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.getAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllowedDisciplines(rsp)));
            }));
    }
 
}

import { JournalApiRequestFactory, JournalApiResponseProcessor} from "../apis/JournalApi";
export class ObservableJournalApi {
    private requestFactory: JournalApiRequestFactory;
    private responseProcessor: JournalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JournalApiRequestFactory,
        responseProcessor?: JournalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JournalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JournalApiResponseProcessor();
    }

    /**
     * Create journal
     * Create journal
     * @param journal The content to create
     */
    public journalCreate(journal: Journal, options?: Configuration): Observable<Journal> {
        const requestContextPromise = this.requestFactory.journalCreate(journal, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with a journal
     * Create note
     * @param uuid UUID of the journal to add note to
     * @param note The note to create
     */
    public journalCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.journalCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete journal with specific UUID.
     * Delete journal
     * @param uuid UUID of the journal
     */
    public journalDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.journalDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalDelete(rsp)));
            }));
    }
 
    /**
     * Lists all dependents to a journal with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a journal
     * @param uuid UUID of the journal
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public journalDependents(uuid: string, verbose?: boolean, options?: Configuration): Observable<ContentRefListResult> {
        const requestContextPromise = this.requestFactory.journalDependents(uuid, verbose, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalDependents(rsp)));
            }));
    }
 
    /**
     * Get journal with specific UUID.
     * Get journal
     * @param uuid UUID of the desired journal
     */
    public journalGet(uuid: string, options?: Configuration): Observable<Journal> {
        const requestContextPromise = this.requestFactory.journalGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGet(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of journals
     * A list of allowed classified identifier types
     */
    public journalGetAllowedClassifiedIdentifierTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedClassifiedIdentifierTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedClassifiedIdentifierTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'journal.country' attribute of journals
     * A list of allowed countries
     */
    public journalGetAllowedCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedCountries(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for journals
     * A list of allowed discipline schemes
     */
    public journalGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.journalGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for journals
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for journals
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public journalGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.journalGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public journalGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public journalGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of journals
     * A list of allowed link types
     */
    public journalGetAllowedLinkTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedLinkTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedLinkTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public journalGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of journal
     * A list of allowed journal types
     */
    public journalGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.journalGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of journals
     * A list of allowed workflow steps
     */
    public journalGetAllowedWorkflowSteps(options?: Configuration): Observable<WorkflowListResult> {
        const requestContextPromise = this.requestFactory.journalGetAllowedWorkflowSteps(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetAllowedWorkflowSteps(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the journal with specific UUID.
     * Get disciplines from the discipline scheme associated with the journal
     * @param uuid UUID of the desired journal
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public journalGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.journalGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the journal endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public journalGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.journalGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all journals in the Pure instance. If you need to filter the journals returned, see the POST version which supports additional filtering.
     * Lists all journals
     * @param size Number of returned journals per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getJournalOrderings
     */
    public journalList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<JournalListResult> {
        const requestContextPromise = this.requestFactory.journalList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with journals in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with journals
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public journalListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.journalListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with the journal ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the journal to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public journalListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.journalListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalListNotes(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the journal with specific UUID.
     * Update disciplines from the discipline scheme associated with the journal
     * @param uuid UUID of the journal to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public journalPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.journalPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists journals in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for journals
     * @param journalsQuery The query to perform
     */
    public journalQuery(journalsQuery: JournalsQuery, options?: Configuration): Observable<JournalListResult> {
        const requestContextPromise = this.requestFactory.journalQuery(journalsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalQuery(rsp)));
            }));
    }
 
    /**
     * Update journal with specific UUID.
     * Update journal
     * @param uuid UUID of the journal to update
     * @param journal The content to update
     */
    public journalUpdate(uuid: string, journal: Journal, options?: Configuration): Observable<Journal> {
        const requestContextPromise = this.requestFactory.journalUpdate(uuid, journal, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.journalUpdate(rsp)));
            }));
    }
 
}

import { OrganizationApiRequestFactory, OrganizationApiResponseProcessor} from "../apis/OrganizationApi";
export class ObservableOrganizationApi {
    private requestFactory: OrganizationApiRequestFactory;
    private responseProcessor: OrganizationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationApiRequestFactory,
        responseProcessor?: OrganizationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationApiResponseProcessor();
    }

    /**
     * Create organization
     * Create organization
     * @param organization The content to create
     */
    public organizationCreate(organization: Organization, options?: Configuration): Observable<Organization> {
        const requestContextPromise = this.requestFactory.organizationCreate(organization, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with an organization
     * Create note
     * @param uuid UUID of the organization to add note to
     * @param note The note to create
     */
    public organizationCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.organizationCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete organization with specific UUID.
     * Delete organization
     * @param uuid UUID of the organization
     */
    public organizationDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.organizationDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationDelete(rsp)));
            }));
    }
 
    /**
     * Lists all dependents to the organization with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to the organization
     * @param uuid UUID of the organization
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public organizationDependents(uuid: string, verbose?: boolean, options?: Configuration): Observable<ContentRefListResult> {
        const requestContextPromise = this.requestFactory.organizationDependents(uuid, verbose, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationDependents(rsp)));
            }));
    }
 
    /**
     * Uploads file for the organization
     * Upload file to a specific organization
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public organizationFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.organizationFileUploads(body, contentType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationFileUploads(rsp)));
            }));
    }
 
    /**
     * Get organization with specific UUID.
     * Get organization
     * @param uuid UUID of the desired organization
     */
    public organizationGet(uuid: string, options?: Configuration): Observable<Organization> {
        const requestContextPromise = this.requestFactory.organizationGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGet(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'addresses.country' attribute of organizations
     * A list of allowed address countries
     */
    public organizationGetAllowedAddressCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedAddressCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedAddressCountries(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed subdivisions that can be used for the 'addresses.subdivisions' attribute of organizations
     * A list of allowed address subdivisions
     */
    public organizationGetAllowedAddressSubdivisions(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedAddressSubdivisions(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedAddressSubdivisions(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed address types that can be used for the 'addresses.type' attribute of organizations
     * A list of allowed address types
     */
    public organizationGetAllowedAddressTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedAddressTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedAddressTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of organizations
     * A list of allowed classified identifier types
     */
    public organizationGetAllowedClassifiedIdentifierTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedClassifiedIdentifierTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedClassifiedIdentifierTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified photo types that can be used for the 'photos.type' attribute of organizations
     * A list of allowed classified identifier types
     */
    public organizationGetAllowedClassifiedImageTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedClassifiedImageTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedClassifiedImageTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed cost centers that can be used for the 'costCenters' attribute of organizations
     * A list of allowed cost centers
     */
    public organizationGetAllowedCostCenters(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedCostCenters(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedCostCenters(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for organizations
     * A list of allowed discipline schemes
     */
    public organizationGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for organizations
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for organizations
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public organizationGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed e-mail types that can be used for the 'emails.type' attribute of organizations
     * A list of allowed e-mail types
     */
    public organizationGetAllowedEmailTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedEmailTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedEmailTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public organizationGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public organizationGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public organizationGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed name variant types that can be used for the 'nameVariants.type' attribute of organizations
     * A list of allowed name variant types
     */
    public organizationGetAllowedNameVariantTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedNameVariantTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedNameVariantTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed phone number types that can be used for the 'phoneNumbers.type' attribute of organizations
     * A list of allowed phone number types
     */
    public organizationGetAllowedPhoneNumberTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedPhoneNumberTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedPhoneNumberTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed photo types that can be used for the 'photos.type' attribute of organizations
     * A list of allowed photo types
     */
    public organizationGetAllowedPhotoTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedPhotoTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedPhotoTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed profile information types that can be used for the 'profileInformations.type' attribute of organizations
     * A list of allowed profile information types
     */
    public organizationGetAllowedProfileInformationTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedProfileInformationTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedProfileInformationTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of organizations
     * A list of allowed organization types
     */
    public organizationGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed web address types that can be used for the 'webAddresses.type' attribute of organizations
     * A list of allowed web address types
     */
    public organizationGetAllowedWebAddressTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.organizationGetAllowedWebAddressTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetAllowedWebAddressTypes(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the organization with specific UUID.
     * Get disciplines from the discipline scheme associated with the organization
     * @param uuid UUID of the desired organization
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public organizationGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.organizationGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Get file from the organization
     * Get file from the organization
     * @param uuid UUID of the organization
     * @param fileId Id of the file
     */
    public organizationGetFile(uuid: string, fileId: string, options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.organizationGetFile(uuid, fileId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetFile(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the organization endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public organizationGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.organizationGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all organizations in the Pure instance. If you need to filter the organizations returned, see the POST version which supports additional filtering.
     * Lists all organizations
     * @param size Number of returned organizations per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from organization_getOrderings
     */
    public organizationList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<OrganizationListResult> {
        const requestContextPromise = this.requestFactory.organizationList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with organizations in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with organizations
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public organizationListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.organizationListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with an organization ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the organization to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public organizationListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.organizationListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationListNotes(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the organization with specific UUID.
     * Update disciplines from the discipline scheme associated with the organization
     * @param uuid UUID of the organization to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public organizationPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.organizationPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists organizations in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for organizations
     * @param organizationsQuery The query to perform
     */
    public organizationQuery(organizationsQuery: OrganizationsQuery, options?: Configuration): Observable<OrganizationListResult> {
        const requestContextPromise = this.requestFactory.organizationQuery(organizationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationQuery(rsp)));
            }));
    }
 
    /**
     * Update organization with specific UUID.
     * Update organization
     * @param uuid UUID of the organization to update
     * @param organization The content to update
     */
    public organizationUpdate(uuid: string, organization: Organization, options?: Configuration): Observable<Organization> {
        const requestContextPromise = this.requestFactory.organizationUpdate(uuid, organization, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationUpdate(rsp)));
            }));
    }
 
}

import { PersonApiRequestFactory, PersonApiResponseProcessor} from "../apis/PersonApi";
export class ObservablePersonApi {
    private requestFactory: PersonApiRequestFactory;
    private responseProcessor: PersonApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonApiRequestFactory,
        responseProcessor?: PersonApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PersonApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PersonApiResponseProcessor();
    }

    /**
     * Create person
     * Create person
     * @param person The content to create
     */
    public personCreate(person: Person, options?: Configuration): Observable<Person> {
        const requestContextPromise = this.requestFactory.personCreate(person, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with a person
     * Create note
     * @param uuid UUID of the person to add note to
     * @param note The note to create
     */
    public personCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.personCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete person with specific UUID.
     * Delete person
     * @param uuid UUID of the person
     */
    public personDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.personDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personDelete(rsp)));
            }));
    }
 
    /**
     * Uploads file for the person
     * Upload file to a specific person
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public personFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.personFileUploads(body, contentType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personFileUploads(rsp)));
            }));
    }
 
    /**
     * Get person with specific UUID.
     * Get person
     * @param uuid UUID of the desired person
     */
    public personGet(uuid: string, options?: Configuration): Observable<Person> {
        const requestContextPromise = this.requestFactory.personGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGet(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used for the 'academicQualifications.fieldOfStudy' attribute of persons
     * A list of the allowed values for field of study
     */
    public personGetAllowedAcademicQualificationsFieldOfStudies(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedAcademicQualificationsFieldOfStudies(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedAcademicQualificationsFieldOfStudies(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed academic qualification types for persons
     * A list of allowed academic qualification types for persons
     */
    public personGetAllowedAcademicQualificationsTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedAcademicQualificationsTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedAcademicQualificationsTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'addresses.country' attribute of persons
     * A list of allowed address countries
     */
    public personGetAllowedAddressCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedAddressCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedAddressCountries(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed subdivisions can be used for the 'subdivision' attribute of person organization associations
     * A list of allowed subdivisions
     */
    public personGetAllowedAddressSubdivisions(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedAddressSubdivisions(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedAddressSubdivisions(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed address types that can be used for the 'addresses.type' attribute of persons
     * A list of allowed address types
     */
    public personGetAllowedAddressTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedAddressTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedAddressTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classified identifier types that can be used for the 'identifiers.type' attribute of persons
     * A list of allowed classified identifier types
     */
    public personGetAllowedClassifiedIdentifierTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedClassifiedIdentifierTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedClassifiedIdentifierTypes(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for persons
     * A list of allowed discipline schemes
     */
    public personGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.personGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for persons
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for persons
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public personGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.personGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used for the 'externalPositions.appointment' attribute of persons
     * A list of the allowed values for appointments
     */
    public personGetAllowedExternalPositionsAppointments(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedExternalPositionsAppointments(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedExternalPositionsAppointments(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used when submitting the person gender property.
     * A list of allowed classifications for the gender property
     */
    public personGetAllowedGenders(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedGenders(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedGenders(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public personGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public personGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.personGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used when submitting the leaveOfAbsence property.
     * A list of allowed classifications for the leave of absence property
     */
    public personGetAllowedLeavesOfAbsenceClassifications(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedLeavesOfAbsenceClassifications(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedLeavesOfAbsenceClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed link types that can be used for the 'links.linkType' attribute of persons
     * A list of allowed link types
     */
    public personGetAllowedLinkTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedLinkTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedLinkTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public personGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.personGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a classified name.
     * A list of allowed classifications for classified names
     */
    public personGetAllowedNamesTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedNamesTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedNamesTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used when submitting the nationality property.
     * A list of allowed classifications for the nationalities property
     */
    public personGetAllowedNationalities(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedNationalities(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedNationalities(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed email types for person organisation associations on persons
     * A list of allowed email types
     */
    public personGetAllowedPersonOrganizationAssociationsEmailTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPersonOrganizationAssociationsEmailTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPersonOrganizationAssociationsEmailTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed employment types for person organisation associations on persons
     * A list of allowed employment types
     */
    public personGetAllowedPersonOrganizationAssociationsEmploymentTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPersonOrganizationAssociationsEmploymentTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPersonOrganizationAssociationsEmploymentTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed job titles for person organisation associations on persons
     * A list of allowed job titles
     */
    public personGetAllowedPersonOrganizationAssociationsJobTitles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPersonOrganizationAssociationsJobTitles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPersonOrganizationAssociationsJobTitles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed phone numbers types for person organisation associations on persons
     * A list of allowed phone number types
     */
    public personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPersonOrganizationAssociationsPhoneNumberTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed supervisor roles for person organisation associations on persons
     * A list of allowed supervisor roles
     */
    public personGetAllowedPersonOrganizationAssociationsSupervisorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPersonOrganizationAssociationsSupervisorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPersonOrganizationAssociationsSupervisorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed web address types for person organisation associations on persons
     * A list of allowed web address types
     */
    public personGetAllowedPersonOrganizationAssociationsWebAddressTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPersonOrganizationAssociationsWebAddressTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPersonOrganizationAssociationsWebAddressTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed country classifications for private address on persons
     * A list of allowed country classifications for private address
     */
    public personGetAllowedPrivateAddressCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedPrivateAddressCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedPrivateAddressCountries(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used when submitting an entry in profile information.
     * A list of allowed classifications for the profile information property
     */
    public personGetAllowedProfileInformationTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedProfileInformationTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedProfileInformationTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed photo types that can be used for the 'profilePhotos.type' attribute of persons
     * A list of allowed photo types
     */
    public personGetAllowedProfilePhotoTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedProfilePhotoTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedProfilePhotoTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types for person profile photos
     * A list of allowed types for person profile photos
     */
    public personGetAllowedProfilePhotosTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedProfilePhotosTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedProfilePhotosTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed contract types for staff organisation associations on persons
     * A list of allowed contract types
     */
    public personGetAllowedStaffOrganizationAssociationsContractTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedStaffOrganizationAssociationsContractTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedStaffOrganizationAssociationsContractTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed staff types for staff organisation associations on persons
     * A list of allowed staff types
     */
    public personGetAllowedStaffOrganizationAssociationsStaffTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedStaffOrganizationAssociationsStaffTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedStaffOrganizationAssociationsStaffTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed employment types for student organisation associations on persons
     * A list of allowed employment types
     */
    public personGetAllowedStudentAssociationsEmploymentTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedStudentAssociationsEmploymentTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedStudentAssociationsEmploymentTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of classifications that can be used when submitting a title.
     * A list of allowed classifications for the titles property
     */
    public personGetAllowedTitlesTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedTitlesTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedTitlesTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed employment types for visiting scholar organisation associations on persons
     * A list of allowed employment types
     */
    public personGetAllowedVisitingScholarAssociationsEmploymentTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.personGetAllowedVisitingScholarAssociationsEmploymentTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetAllowedVisitingScholarAssociationsEmploymentTypes(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the person with specific UUID.
     * Get disciplines from the discipline scheme associated with the person
     * @param uuid UUID of the desired person
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public personGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.personGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Get file from the person
     * Get file from the person
     * @param uuid UUID of the person
     * @param fileId File id 
     */
    public personGetFile(uuid: string, fileId: string, options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.personGetFile(uuid, fileId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetFile(rsp)));
            }));
    }
 
    /**
     * Get highlighted content for the person with the specific UUID. Highlights are only available for editorial types
     * Get highlighted content
     * @param uuid UUID of the owner (person) of the highlighted content
     */
    public personGetHighlightedContent(uuid: string, options?: Configuration): Observable<HighlightedContent> {
        const requestContextPromise = this.requestFactory.personGetHighlightedContent(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetHighlightedContent(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the person endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public personGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.personGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all persons in the Pure instance. If you need to filter the persons returned, see the POST version which supports additional filtering.
     * Lists all persons
     * @param size Number of returned persons per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getPersonOrderings
     */
    public personList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<PersonListResult> {
        const requestContextPromise = this.requestFactory.personList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with persons in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with persons
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public personListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.personListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with an person ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the person to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public personListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.personListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personListNotes(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the person with specific UUID.
     * Update disciplines from the discipline scheme associated with the person
     * @param uuid UUID of the person to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public personPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.personPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists persons in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for persons
     * @param personsQuery The query to perform
     */
    public personQuery(personsQuery: PersonsQuery, options?: Configuration): Observable<PersonListResult> {
        const requestContextPromise = this.requestFactory.personQuery(personsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personQuery(rsp)));
            }));
    }
 
    /**
     * Find supervisees of a person by their specific UUID.
     * person supervisees
     * @param uuid UUID of the person
     */
    public personSupervisee(uuid: string, options?: Configuration): Observable<PersonSuperviseeAssociationListResult> {
        const requestContextPromise = this.requestFactory.personSupervisee(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personSupervisee(rsp)));
            }));
    }
 
    /**
     * Update person with specific UUID.
     * Update person
     * @param uuid UUID of the person to update
     * @param person The content to update
     */
    public personUpdate(uuid: string, person: Person, options?: Configuration): Observable<Person> {
        const requestContextPromise = this.requestFactory.personUpdate(uuid, person, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personUpdate(rsp)));
            }));
    }
 
    /**
     * Update highlighted content references. Add an empty array of references for a content type to not highlight any items of this type. Types that are not present will be ignored. Highlights can only be updated for editorial types
     * Update highlighted content
     * @param uuid UUID of the person to update highlighted content for
     * @param highlightedContent The highlighted content references to set on the person
     */
    public personUpdateHighlightedContent(uuid: string, highlightedContent: HighlightedContent, options?: Configuration): Observable<HighlightedContent> {
        const requestContextPromise = this.requestFactory.personUpdateHighlightedContent(uuid, highlightedContent, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personUpdateHighlightedContent(rsp)));
            }));
    }
 
}

import { PublisherApiRequestFactory, PublisherApiResponseProcessor} from "../apis/PublisherApi";
export class ObservablePublisherApi {
    private requestFactory: PublisherApiRequestFactory;
    private responseProcessor: PublisherApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublisherApiRequestFactory,
        responseProcessor?: PublisherApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublisherApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublisherApiResponseProcessor();
    }

    /**
     * Create publisher
     * Create publisher
     * @param publisher The content to create
     */
    public publisherCreate(publisher: Publisher, options?: Configuration): Observable<Publisher> {
        const requestContextPromise = this.requestFactory.publisherCreate(publisher, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with a publisher
     * Create note
     * @param uuid UUID of the publisher to add note to
     * @param note The note to create
     */
    public publisherCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.publisherCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete publisher with specific UUID.
     * Delete publisher
     * @param uuid UUID of the publisher
     */
    public publisherDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.publisherDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherDelete(rsp)));
            }));
    }
 
    /**
     * Lists all dependents to a publisher with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a publisher
     * @param uuid UUID of the publisher
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public publisherDependents(uuid: string, verbose?: boolean, options?: Configuration): Observable<ContentRefListResult> {
        const requestContextPromise = this.requestFactory.publisherDependents(uuid, verbose, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherDependents(rsp)));
            }));
    }
 
    /**
     * Get publisher with specific UUID.
     * Get publisher
     * @param uuid UUID of the desired publisher
     */
    public publisherGet(uuid: string, options?: Configuration): Observable<Publisher> {
        const requestContextPromise = this.requestFactory.publisherGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGet(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for publishers
     * A list of allowed discipline schemes
     */
    public publisherGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for publishers
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for publishers
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public publisherGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public publisherGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public publisherGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public publisherGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of publishers
     * A list of allowed publisher types
     */
    public publisherGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of publishers
     * A list of allowed workflow steps
     */
    public publisherGetAllowedWorkflowSteps(options?: Configuration): Observable<WorkflowListResult> {
        const requestContextPromise = this.requestFactory.publisherGetAllowedWorkflowSteps(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetAllowedWorkflowSteps(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the publisher with specific UUID.
     * Get disciplines from the discipline scheme associated with the publisher
     * @param uuid UUID of the desired publisher
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public publisherGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.publisherGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the publisher endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public publisherGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.publisherGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all publishers in the Pure instance. If you need to filter the publishers returned, see the POST version which supports additional filtering.
     * Lists all publishers
     * @param size Number of returned publishers per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from publisher_getOrderings
     */
    public publisherList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<PublisherListResult> {
        const requestContextPromise = this.requestFactory.publisherList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with publishers in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with publishers
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public publisherListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.publisherListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with a publisher ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the publisher to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public publisherListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.publisherListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherListNotes(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the publisher with specific UUID.
     * Update disciplines from the discipline scheme associated with the publisher
     * @param uuid UUID of the publisher to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public publisherPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.publisherPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists publishers in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for publishers
     * @param publishersQuery The query to perform
     */
    public publisherQuery(publishersQuery: PublishersQuery, options?: Configuration): Observable<PublisherListResult> {
        const requestContextPromise = this.requestFactory.publisherQuery(publishersQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherQuery(rsp)));
            }));
    }
 
    /**
     * Update publishers with specific UUID.
     * Update publishers
     * @param uuid UUID of the publisher to update
     * @param publisher The content to update
     */
    public publisherUpdate(uuid: string, publisher: Publisher, options?: Configuration): Observable<Publisher> {
        const requestContextPromise = this.requestFactory.publisherUpdate(uuid, publisher, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publisherUpdate(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of publishers
     * A list of allowed countries
     */
    public publishersGetAllowedCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.publishersGetAllowedCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publishersGetAllowedCountries(rsp)));
            }));
    }
 
}

import { ResearchOutputApiRequestFactory, ResearchOutputApiResponseProcessor} from "../apis/ResearchOutputApi";
export class ObservableResearchOutputApi {
    private requestFactory: ResearchOutputApiRequestFactory;
    private responseProcessor: ResearchOutputApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ResearchOutputApiRequestFactory,
        responseProcessor?: ResearchOutputApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ResearchOutputApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ResearchOutputApiResponseProcessor();
    }

    /**
     * Create research output
     * Create research output
     * @param researchOutput The content to create
     */
    public researchOutputCreate(researchOutput: ResearchOutput, options?: Configuration): Observable<ResearchOutput> {
        const requestContextPromise = this.requestFactory.researchOutputCreate(researchOutput, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputCreate(rsp)));
            }));
    }
 
    /**
     * Create note and associate it with a research output
     * Create note
     * @param uuid UUID of the research output to add note to
     * @param note The note to create
     */
    public researchOutputCreateNote(uuid: string, note: Note, options?: Configuration): Observable<Note> {
        const requestContextPromise = this.requestFactory.researchOutputCreateNote(uuid, note, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputCreateNote(rsp)));
            }));
    }
 
    /**
     * Delete research output with specific UUID.
     * Delete research output
     * @param uuid UUID of the research output
     */
    public researchOutputDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.researchOutputDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputDelete(rsp)));
            }));
    }
 
    /**
     * Lists all dependents to a research output with the specified UUID. If the user dont have access to view all the dependent content, an authorization error will be thrown. 
     * Lists all dependents to a research output
     * @param uuid UUID of the research output
     * @param verbose Default: false. Setting this to true will add links and names to the output but will also have an impact on performance. Use with coution.
     */
    public researchOutputDependents(uuid: string, verbose?: boolean, options?: Configuration): Observable<ContentRefListResult> {
        const requestContextPromise = this.requestFactory.researchOutputDependents(uuid, verbose, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputDependents(rsp)));
            }));
    }
 
    /**
     * Uploads file for the research output
     * Upload file to a specific research output
     * @param body 
     * @param contentType Set the mime type for the file
     */
    public researchOutputFileUploads(body: HttpFile, contentType?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.researchOutputFileUploads(body, contentType, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputFileUploads(rsp)));
            }));
    }
 
    /**
     * Get research output with specific UUID.
     * Get research output
     * @param uuid UUID of the desired research output
     */
    public researchOutputGet(uuid: string, options?: Configuration): Observable<ResearchOutput> {
        const requestContextPromise = this.requestFactory.researchOutputGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGet(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries that can be used for the 'countries' attribute of research outputs
     * A list of allowed countries
     */
    public researchOutputGetAllowedCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedCountries(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed classifications that can be used when submitting a specified keyword group.
     * A list of allowed classifications for the specified keyword group
     * @param id Pure id of the keyword group configuration
     */
    public researchOutputGetAllowedKeywordGroupConfigurationClassifications(id: number, options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedKeywordGroupConfigurationClassifications(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedKeywordGroupConfigurationClassifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed keyword group configurations that can be used when submitting keyword groups.
     * A list of keyword group configurations
     */
    public researchOutputGetAllowedKeywordGroupConfigurations(options?: Configuration): Observable<KeywordGroupConfigurationList> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedKeywordGroupConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedKeywordGroupConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed locales that can be used when submitting localized string entities.
     * A list of allowed locales in localized strings
     */
    public researchOutputGetAllowedLocales(options?: Configuration): Observable<LocalesList> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedLocales(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedLocales(rsp)));
            }));
    }
 
    /**
     * Get a list of peer review configurations that describe the allowed combinations of values for the interrelated fields: type, category, peerReview, and internationalPeerReview
     * A list of peer review configurations
     */
    public researchOutputGetAllowedPeerReviewConfigurations(options?: Configuration): Observable<ResearchOutputPeerReviewConfigurationListResult> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedPeerReviewConfigurations(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedPeerReviewConfigurations(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed templates that can be used for research outputs, such as 'ContributionToJournal' or 'BookAnthology'. Some of the templates that exists in the API specification may be disabled for the Pure installation.
     * A list of allowed research output templates
     */
    public researchOutputGetAllowedTemplates(options?: Configuration): Observable<AllowedTemplateListResult> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedTemplates(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedTemplates(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed types that can be used for the 'type' attribute of research outputs
     * A list of allowed research output types
     */
    public researchOutputGetAllowedTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed workflow steps that can be used for the 'workflow' attribute of research outputs
     * A list of allowed workflow steps
     */
    public researchOutputGetAllowedWorkflowSteps(options?: Configuration): Observable<WorkflowListResult> {
        const requestContextPromise = this.requestFactory.researchOutputGetAllowedWorkflowSteps(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetAllowedWorkflowSteps(rsp)));
            }));
    }
 
    /**
     * Get file from the research output
     * Get file from the research output
     * @param uuid UUID of the research output
     * @param fileId File id 
     */
    public researchOutputGetFile(uuid: string, fileId: string, options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.researchOutputGetFile(uuid, fileId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetFile(rsp)));
            }));
    }
 
    /**
     * Lists all orderings available to the research output endpoint. These values can be used by the order parameter.
     * Lists available orderings
     */
    public researchOutputGetOrderings(options?: Configuration): Observable<OrderingsList> {
        const requestContextPromise = this.requestFactory.researchOutputGetOrderings(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputGetOrderings(rsp)));
            }));
    }
 
    /**
     * Lists all  research outputs in the Pure instance. If you need to filter the research outputs returned, see the POST version which supports additional filtering.
     * Lists all  research outputs
     * @param size Number of returned  research outputs per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from getResearchOutputOrderings
     */
    public researchOutputList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<ResearchOutputListResult> {
        const requestContextPromise = this.requestFactory.researchOutputList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputList(rsp)));
            }));
    }
 
    /**
     * Lists disciplines from the discipline scheme associated with research outputs in the Pure instance that matches the provided query.
     * Query operation for disciplines associated with research outputs
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociationsQuery The query to perform
     */
    public researchOutputListDisciplineAssociations(disciplineScheme: string, disciplinesAssociationsQuery: DisciplinesAssociationsQuery, options?: Configuration): Observable<DisciplinesAssociationListResult> {
        const requestContextPromise = this.requestFactory.researchOutputListDisciplineAssociations(disciplineScheme, disciplinesAssociationsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputListDisciplineAssociations(rsp)));
            }));
    }
 
    /**
     * Lists notes associated with a research output ordered by date (nulls last)
     * Lists notes
     * @param uuid UUID of the research output to get notes for
     * @param size Number of returned notes per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public researchOutputListNotes(uuid: string, size?: number, offset?: number, options?: Configuration): Observable<NoteListResult> {
        const requestContextPromise = this.requestFactory.researchOutputListNotes(uuid, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputListNotes(rsp)));
            }));
    }
 
    /**
     * Update disciplines from the discipline scheme associated with the research output with specific UUID.
     * Update disciplines from the discipline scheme associated with the research output
     * @param uuid UUID of the research output to update
     * @param disciplineScheme Identifier for the discipline scheme
     * @param disciplinesAssociation The disciplines association to create
     */
    public researchOutputPutDisciplineAssociation(uuid: string, disciplineScheme: string, disciplinesAssociation: DisciplinesAssociation, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.researchOutputPutDisciplineAssociation(uuid, disciplineScheme, disciplinesAssociation, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputPutDisciplineAssociation(rsp)));
            }));
    }
 
    /**
     * Lists research outputs in the Pure instance that matches the provided query, similar to the GET version, instead of using parameters to alter the response, an JSON document is posted with the request. The JSON document contains fields for all the parameters available for the GET version, but also additional filtering options.
     * Query operation for research outputs
     * @param researchOutputsQuery The query to perform
     */
    public researchOutputQuery(researchOutputsQuery: ResearchOutputsQuery, options?: Configuration): Observable<ResearchOutputListResult> {
        const requestContextPromise = this.requestFactory.researchOutputQuery(researchOutputsQuery, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputQuery(rsp)));
            }));
    }
 
    /**
     * Update research outputs with specific UUID.
     * Update research outputs
     * @param uuid UUID of the research output to update
     * @param researchOutput The content to update
     */
    public researchOutputUpdate(uuid: string, researchOutput: ResearchOutput, options?: Configuration): Observable<ResearchOutput> {
        const requestContextPromise = this.requestFactory.researchOutputUpdate(uuid, researchOutput, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchOutputUpdate(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed access types for additional files on research outputs
     * A list of allowed access types
     */
    public researchoutputGetAllowedAdditionalFileAccessTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedAdditionalFileAccessTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedAdditionalFileAccessTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed license types for additional files on research outputs
     * A list of allowed license types
     */
    public researchoutputGetAllowedAdditionalFileLicenseTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedAdditionalFileLicenseTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedAdditionalFileLicenseTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed article processing charge currencies on research outputs
     * A list of allowed article processing charge currencies
     */
    public researchoutputGetAllowedArticleProcessingChargeCurrencies(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedArticleProcessingChargeCurrencies(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedArticleProcessingChargeCurrencies(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the book anthology subtype of research outputs
     * A list of allowed contributor roles for the book anthology subtype
     */
    public researchoutputGetAllowedBookAnthologyContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedBookAnthologyContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedBookAnthologyContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the book anthology subtype of research outputs
     * A list of allowed description types for the book anthology subtype
     */
    public researchoutputGetAllowedBookAnthologyDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedBookAnthologyDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedBookAnthologyDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed case note sources for select subtypes of research outputs
     * A list of allowed case note sources
     */
    public researchoutputGetAllowedCaseNoteSources(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedCaseNoteSources(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedCaseNoteSources(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed categories on research outputs
     * A list of allowed categories
     */
    public researchoutputGetAllowedCategories(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedCategories(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedCategories(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the contribution to book anthology subtype of research outputs
     * A list of allowed contributor roles for the contribution to book anthology subtype
     */
    public researchoutputGetAllowedContributionToBookAnthologyContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToBookAnthologyContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToBookAnthologyContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the contribution to book anthology subtype of research outputs
     * A list of allowed description types for the contribution to book anthology subtype
     */
    public researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToBookAnthologyDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the contribution to conference subtype of research outputs
     * A list of allowed contributor roles for the contribution to conference subtype
     */
    public researchoutputGetAllowedContributionToConferenceContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToConferenceContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToConferenceContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the contribution to conference subtype of research outputs
     * A list of allowed description types for the contribution to conference subtype
     */
    public researchoutputGetAllowedContributionToConferenceDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToConferenceDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToConferenceDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the contribution to journal subtype of research outputs
     * A list of allowed contributor roles for the contribution to journal subtype
     */
    public researchoutputGetAllowedContributionToJournalContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToJournalContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToJournalContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the contribution to journal subtype of research outputs
     * A list of allowed description types for the contribution to journal subtype
     */
    public researchoutputGetAllowedContributionToJournalDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToJournalDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToJournalDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the contribution to memorandum subtype of research outputs
     * A list of allowed contributor roles for the contribution to memorandum subtype
     */
    public researchoutputGetAllowedContributionToMemorandumContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToMemorandumContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToMemorandumContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the contribution to memorandum subtype of research outputs
     * A list of allowed description types for the contribution to memorandum subtype
     */
    public researchoutputGetAllowedContributionToMemorandumDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToMemorandumDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToMemorandumDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the contribution to periodical subtype of research outputs
     * A list of allowed contributor roles for the contribution to periodical subtype
     */
    public researchoutputGetAllowedContributionToPeriodicalContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToPeriodicalContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToPeriodicalContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the contribution to periodical subtype of research outputs
     * A list of allowed description types for the contribution to periodical subtype
     */
    public researchoutputGetAllowedContributionToPeriodicalDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributionToPeriodicalDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributionToPeriodicalDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed countries for contributors on research outputs
     * A list of allowed contributor countries
     */
    public researchoutputGetAllowedContributorCountries(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedContributorCountries(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedContributorCountries(rsp)));
            }));
    }
 
    /**
     * Get a list fo a allowed discipline schemes for research outputs
     * A list of allowed discipline schemes
     */
    public researchoutputGetAllowedDisciplineSchemes(options?: Configuration): Observable<DisciplinesDisciplineSchemeListResult> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedDisciplineSchemes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedDisciplineSchemes(rsp)));
            }));
    }
 
    /**
     * Get a list of a allowed disciplines for specific discipline scheme for research outputs
     * A list of allowed disciplines for a specific discipline scheme
     * @param disciplineScheme Identifier for the discipline scheme for research output
     * @param size Number of returned disciplines per request
     * @param offset The offset for the returned list. 0 or null value is from the start
     */
    public researchoutputGetAllowedDisciplines(disciplineScheme: string, size?: number, offset?: number, options?: Configuration): Observable<DisciplinesDisciplineListResult> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedDisciplines(disciplineScheme, size, offset, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedDisciplines(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed access types for electronic versions on research outputs
     * A list of allowed access types
     */
    public researchoutputGetAllowedElectronicVersionAccessTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedElectronicVersionAccessTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedElectronicVersionAccessTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed license types for electronic versions on research outputs
     * A list of allowed license types
     */
    public researchoutputGetAllowedElectronicVersionLicenseTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedElectronicVersionLicenseTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedElectronicVersionLicenseTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed version types for electronic versions on research outputs
     * A list of allowed version types
     */
    public researchoutputGetAllowedElectronicVersionVersionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedElectronicVersionVersionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedElectronicVersionVersionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed languages on research outputs
     * A list of allowed languages
     */
    public researchoutputGetAllowedLanguages(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedLanguages(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedLanguages(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed link types on research outputs
     * A list of allowed link types
     */
    public researchoutputGetAllowedLinkTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedLinkTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedLinkTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed main research areas on research outputs
     * A list of allowed main research areas
     */
    public researchoutputGetAllowedMainResearchAreas(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedMainResearchAreas(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedMainResearchAreas(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the memorandum subtype of research outputs
     * A list of allowed contributor roles for the memorandum subtype
     */
    public researchoutputGetAllowedMemorandumContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedMemorandumContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedMemorandumContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the memorandum subtype of research outputs
     * A list of allowed description types for the memorandum subtype
     */
    public researchoutputGetAllowedMemorandumDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedMemorandumDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedMemorandumDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the non-textual subtype of research outputs
     * A list of allowed contributor roles for the non-textual subtype
     */
    public researchoutputGetAllowedNonTextualContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedNonTextualContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedNonTextualContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the non-textual subtype of research outputs
     * A list of allowed description types for the non-textual subtype
     */
    public researchoutputGetAllowedNonTextualDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedNonTextualDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedNonTextualDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed open access permissions on research outputs
     * A list of allowed open access permissions
     */
    public researchoutputGetAllowedOpenAccessPermissions(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedOpenAccessPermissions(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedOpenAccessPermissions(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the other contribution subtype of research outputs
     * A list of allowed contributor roles for the other contribution subtype
     */
    public researchoutputGetAllowedOtherContributionContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedOtherContributionContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedOtherContributionContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the other contribution subtype of research outputs
     * A list of allowed description types for the other contribution subtype
     */
    public researchoutputGetAllowedOtherContributionDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedOtherContributionDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedOtherContributionDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed output medias for the non-textual subtype of research outputs
     * A list of allowed output medias
     */
    public researchoutputGetAllowedOutputMedias(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedOutputMedias(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedOutputMedias(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the patent subtype of research outputs
     * A list of allowed contributor roles for the patent subtype
     */
    public researchoutputGetAllowedPatentContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedPatentContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedPatentContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the patent subtype of research outputs
     * A list of allowed description types for the patent subtype
     */
    public researchoutputGetAllowedPatentDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedPatentDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedPatentDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed publication statuses on research output
     * A list of allowed publication statuses
     */
    public researchoutputGetAllowedPublicationStatuses(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedPublicationStatuses(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedPublicationStatuses(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed qualifications for the thesis subtype of research outputs
     * A list of allowed qualifications
     */
    public researchoutputGetAllowedQualifications(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedQualifications(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedQualifications(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed supervisors roles for the thesis subtype of research outputs
     * A list of allowed supervisor roles
     */
    public researchoutputGetAllowedSupervisorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedSupervisorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedSupervisorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the thesis subtype of research outputs
     * A list of allowed contributor roles for the thesis subtype
     */
    public researchoutputGetAllowedThesisContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedThesisContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedThesisContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the thesis subtype of research outputs
     * A list of allowed description types for the thesis subtype
     */
    public researchoutputGetAllowedThesisDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedThesisDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedThesisDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed roles for contributors on the working paper subtype of research outputs
     * A list of allowed contributor roles for the working paper subtype
     */
    public researchoutputGetAllowedWorkingPaperContributorRoles(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedWorkingPaperContributorRoles(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedWorkingPaperContributorRoles(rsp)));
            }));
    }
 
    /**
     * Get a list of allowed description types on the working paper subtype of research outputs
     * A list of allowed description types for the working paper subtype
     */
    public researchoutputGetAllowedWorkingPaperDescriptionTypes(options?: Configuration): Observable<ClassificationRefList> {
        const requestContextPromise = this.requestFactory.researchoutputGetAllowedWorkingPaperDescriptionTypes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetAllowedWorkingPaperDescriptionTypes(rsp)));
            }));
    }
 
    /**
     * Get disciplines from the discipline scheme associated with the research output with specific UUID.
     * Get disciplinesfrom the discipline scheme associated with the research output
     * @param uuid UUID of the desired research output
     * @param disciplineScheme Identifier for the discipline scheme
     */
    public researchoutputGetDisciplineAssociation(uuid: string, disciplineScheme: string, options?: Configuration): Observable<DisciplinesAssociation> {
        const requestContextPromise = this.requestFactory.researchoutputGetDisciplineAssociation(uuid, disciplineScheme, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.researchoutputGetDisciplineAssociation(rsp)));
            }));
    }
 
}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Create user
     * Create user
     * @param user The content to create
     */
    public userCreate(user: User, options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.userCreate(user, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userCreate(rsp)));
            }));
    }
 
    /**
     * Delete user with specific UUID.
     * Delete user
     * @param uuid UUID of the user
     */
    public userDelete(uuid: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.userDelete(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userDelete(rsp)));
            }));
    }
 
    /**
     * Get user UUID.
     * Get user
     * @param uuid UUID of the desired user
     */
    public userGet(uuid: string, options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.userGet(uuid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGet(rsp)));
            }));
    }
 
    /**
     * Lists all users in the Pure instance. If you need to filter the users returned, see the POST version which supports additional filtering.
     * Lists all users
     * @param size Number of returned users per request.
     * @param offset The offset for the returned list. 0 or null value is from the start
     * @param order The order of the list, must be a value from user_getOrderings
     */
    public userList(size?: number, offset?: number, order?: string, options?: Configuration): Observable<UserListResult> {
        const requestContextPromise = this.requestFactory.userList(size, offset, order, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userList(rsp)));
            }));
    }
 
    /**
     * Update user with specific UUID.
     * Update user
     * @param uuid UUID of the user to update
     * @param user The content to update
     */
    public userUpdate(uuid: string, user: User, options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.userUpdate(uuid, user, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userUpdate(rsp)));
            }));
    }
 
}
