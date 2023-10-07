/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

 /**
 * This schema defines the Metadata Service entity, such as Amundsen, Atlas etc.
 */
export interface MetadataService {
    /**
     * Change that lead to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    connection?:        MetadataConnection;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Description of a database service instance.
     */
    description?: string;
    /**
     * Display Name that identifies this database service.
     */
    displayName?: string;
    /**
     * FullyQualifiedName same as `name`.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this database service.
     */
    href?: string;
    /**
     * Unique identifier of this database service instance.
     */
    id: string;
    /**
     * Name that identifies this database service.
     */
    name: string;
    /**
     * Owner of this database service.
     */
    owner?: EntityReference;
    /**
     * References to pipelines deployed for this database service to extract metadata, usage,
     * lineage etc..
     */
    pipelines?: EntityReference[];
    provider?:  ProviderType;
    /**
     * Type of database service such as MySQL, BigQuery, Snowflake, Redshift, Postgres...
     */
    serviceType: MetadataServiceType;
    /**
     * Tags for this Metadata Service.
     */
    tags?: TagLabel[];
    /**
     * Last test connection results for this service
     */
    testConnectionResult?: TestConnectionResult;
    /**
     * Last update time corresponding to the new version of the entity in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
    /**
     * Metadata version of the entity.
     */
    version?: number;
}

/**
 * Change that lead to this version of the entity.
 *
 * Description of the change.
 */
export interface ChangeDescription {
    /**
     * Names of fields added during the version changes.
     */
    fieldsAdded?: FieldChange[];
    /**
     * Fields deleted during the version changes with old value before deleted.
     */
    fieldsDeleted?: FieldChange[];
    /**
     * Fields modified during the version changes with old and new values.
     */
    fieldsUpdated?: FieldChange[];
    /**
     * When a change did not result in change, this could be same as the current version.
     */
    previousVersion?: number;
}

export interface FieldChange {
    /**
     * Name of the entity field that changed.
     */
    name?: string;
    /**
     * New value of the field. Note that this is a JSON string and use the corresponding field
     * type to deserialize it.
     */
    newValue?: any;
    /**
     * Previous value of the field. Note that this is a JSON string and use the corresponding
     * field type to deserialize it.
     */
    oldValue?: any;
}

/**
 * Metadata Service Connection.
 */
export interface MetadataConnection {
    config?: Connection;
}

/**
 * Amundsen Connection Config
 *
 * Metadata to ElasticSearch Connection Config
 *
 * OpenMetadata Connection Config
 *
 * Atlas Connection Config
 */
export interface Connection {
    /**
     * Enable encryption for the Amundsen Neo4j Connection.
     */
    encrypted?: boolean;
    /**
     * Host and port of the Amundsen Neo4j Connection. This expect a URI format like:
     * bolt://localhost:7687.
     *
     * OpenMetadata Server Config. Must include API end point ex: http://localhost:8585/api
     *
     * Host and port of the Atlas service.
     */
    hostPort?: string;
    /**
     * Maximum connection lifetime for the Amundsen Neo4j Connection.
     */
    maxConnectionLifeTime?: number;
    /**
     * password to connect to the Amundsen Neo4j Connection.
     *
     * password to connect  to the Atlas.
     */
    password?:                   string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     */
    type?: MetadataServiceType;
    /**
     * username to connect to the Amundsen Neo4j Connection.
     *
     * username to connect  to the Atlas. This user should have privileges to read all the
     * metadata in Atlas.
     */
    username?: string;
    /**
     * Enable SSL validation for the Amundsen Neo4j Connection.
     */
    validateSSL?: boolean;
    /**
     * Maximum number of events sentx in a batch (Default 10).
     */
    batchSize?: number;
    /**
     * List of entities that you need to reindex
     */
    entities?:      string[];
    recreateIndex?: boolean;
    runMode?:       RunMode;
    /**
     * Recreate Indexes with updated Language
     */
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * OpenMetadata server API version to use.
     */
    apiVersion?:   string;
    authProvider?: AuthProvider;
    /**
     * Cluster name to differentiate OpenMetadata Server instance
     */
    clusterName?: string;
    /**
     * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
     */
    elasticsSearch?: ElasticsSearch;
    /**
     * Validate Openmetadata Server & Client Version.
     */
    enableVersionValidation?: boolean;
    extraHeaders?:            { [key: string]: string };
    /**
     * Force the overwriting of any entity during the ingestion.
     */
    forceEntityOverwriting?: boolean;
    /**
     * Include Dashboards for Indexing
     */
    includeDashboards?: boolean;
    /**
     * Include Database Services for Indexing
     */
    includeDatabaseServices?: boolean;
    /**
     * Include Glossary Terms for Indexing
     */
    includeGlossaryTerms?: boolean;
    /**
     * Include Messaging Services for Indexing
     */
    includeMessagingServices?: boolean;
    /**
     * Include MlModels for Indexing
     */
    includeMlModels?: boolean;
    /**
     * Include Pipelines for Indexing
     */
    includePipelines?: boolean;
    /**
     * Include Pipeline Services for Indexing
     */
    includePipelineServices?: boolean;
    /**
     * Include Tags for Policy
     */
    includePolicy?: boolean;
    /**
     * Include Tables for Indexing
     */
    includeTables?: boolean;
    /**
     * Include Tags for Indexing
     */
    includeTags?: boolean;
    /**
     * Include Teams for Indexing
     */
    includeTeams?: boolean;
    /**
     * Include Topics for Indexing
     */
    includeTopics?: boolean;
    /**
     * Include Users for Indexing
     */
    includeUsers?: boolean;
    /**
     * Limit the number of records for Indexing.
     */
    limitRecords?:           number;
    secretsManagerLoader?:   SecretsManagerClientLoader;
    secretsManagerProvider?: SecretsManagerProvider;
    /**
     * OpenMetadata Client security configuration.
     */
    securityConfig?: ClientConfig;
    sslConfig?:      Config;
    /**
     * If set to true, when creating a service during the ingestion we will store its Service
     * Connection. Otherwise, the ingestion will create a bare service without connection
     * details.
     */
    storeServiceConnection?:                    boolean;
    supportsDataInsightExtraction?:             boolean;
    supportsElasticSearchReindexingExtraction?: boolean;
    verifySSL?:                                 VerifySSL;
    connectionArguments?:                       { [key: string]: any };
    connectionOptions?:                         { [key: string]: string };
    /**
     * service type of the data source.
     */
    databaseServiceName?: string[];
    /**
     * Name of the Entity Type available in Atlas.
     */
    entity_type?: string;
    /**
     * service type of the messaging source
     */
    messagingServiceName?: string[];
}

/**
 * OpenMetadata Server Authentication Provider. Make sure configure same auth providers as
 * the one configured on OpenMetadata server.
 */
export enum AuthProvider {
    Auth0 = "auth0",
    AwsCognito = "aws-cognito",
    Azure = "azure",
    Basic = "basic",
    CustomOidc = "custom-oidc",
    Google = "google",
    LDAP = "ldap",
    NoAuth = "no-auth",
    Okta = "okta",
    Openmetadata = "openmetadata",
    Saml = "saml",
}

/**
 * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
 */
export interface ElasticsSearch {
    config?: { [key: string]: any };
    /**
     * Type of sink component ex: metadata
     */
    type: string;
}

/**
 * This schema publisher run modes.
 */
export enum RunMode {
    Batch = "batch",
    Stream = "stream",
}

/**
 * Recreate Indexes with updated Language
 *
 * This schema defines the language options available for search index mappings.
 */
export enum SearchIndexMappingLanguage {
    En = "EN",
    Jp = "JP",
    Zh = "ZH",
}

/**
 * OpenMetadata Secrets Manager Client Loader. Lets the client know how the Secrets Manager
 * Credentials should be loaded from the environment.
 */
export enum SecretsManagerClientLoader {
    Airflow = "airflow",
    Env = "env",
    Noop = "noop",
}

/**
 * OpenMetadata Secrets Manager Provider. Make sure to configure the same secrets manager
 * providers as the ones configured on the OpenMetadata server.
 */
export enum SecretsManagerProvider {
    Aws = "aws",
    AwsSsm = "aws-ssm",
    InMemory = "in-memory",
    ManagedAws = "managed-aws",
    ManagedAwsSsm = "managed-aws-ssm",
    Noop = "noop",
}

/**
 * OpenMetadata Client security configuration.
 *
 * Google SSO client security configs.
 *
 * Okta SSO client security configs.
 *
 * Auth0 SSO client security configs.
 *
 * Azure SSO Client security config to connect to OpenMetadata.
 *
 * Custom OIDC SSO client security configs.
 *
 * openMetadataJWTClientConfig security configs.
 */
export interface ClientConfig {
    /**
     * Google SSO audience URL
     */
    audience?: string;
    /**
     * Google SSO client secret key path or contents.
     *
     * Auth0 Client Secret Key.
     *
     * Custom OIDC Client Secret Key.
     */
    secretKey?: string;
    /**
     * Okta Client ID.
     *
     * Auth0 Client ID.
     *
     * Azure Client ID.
     *
     * Custom OIDC Client ID.
     */
    clientId?: string;
    /**
     * Okta Service account Email.
     */
    email?: string;
    /**
     * Okta org url.
     */
    orgURL?: string;
    /**
     * Okta Private Key.
     */
    privateKey?: string;
    /**
     * Okta client scopes.
     *
     * Azure Client ID.
     */
    scopes?: string[];
    /**
     * Auth0 Domain.
     */
    domain?: string;
    /**
     * Azure SSO Authority
     */
    authority?: string;
    /**
     * Azure SSO client secret key
     */
    clientSecret?: string;
    /**
     * Custom OIDC token endpoint.
     */
    tokenEndpoint?: string;
    /**
     * OpenMetadata generated JWT token.
     */
    jwtToken?: string;
}

/**
 * Client SSL configuration
 *
 * OpenMetadata Client configured to validate SSL certificates.
 */
export interface Config {
    /**
     * CA certificate path. E.g., /path/to/public.cert. Will be used if Verify SSL is set to
     * `validate`.
     */
    certificatePath?: string;
}

/**
 * Service Type
 *
 * Amundsen service type
 *
 * Metadata to Elastic Search type
 *
 * OpenMetadata service type
 *
 * Service type.
 *
 * Type of database service such as MySQL, BigQuery, Snowflake, Redshift, Postgres...
 *
 * Type of database service such as Amundsen, Atlas...
 */
export enum MetadataServiceType {
    Amundsen = "Amundsen",
    Atlas = "Atlas",
    MetadataES = "MetadataES",
    OpenMetadata = "OpenMetadata",
}

/**
 * Client SSL verification. Make sure to configure the SSLConfig if enabled.
 */
export enum VerifySSL {
    Ignore = "ignore",
    NoSSL = "no-ssl",
    Validate = "validate",
}

/**
 * Owner of this database service.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * References to pipelines deployed for this database service to extract metadata, usage,
 * lineage etc..
 *
 * This schema defines the EntityReferenceList type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 */
export interface EntityReference {
    /**
     * If true the entity referred to has been soft-deleted.
     */
    deleted?: boolean;
    /**
     * Optional description of entity.
     */
    description?: string;
    /**
     * Display Name that identifies this entity.
     */
    displayName?: string;
    /**
     * Fully qualified name of the entity instance. For entities such as tables, databases
     * fullyQualifiedName is returned in this field. For entities that don't have name hierarchy
     * such as `user` and `team` this will be same as the `name` field.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the entity resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * Name of the entity instance.
     */
    name?: string;
    /**
     * Entity type/class name - Examples: `database`, `table`, `metrics`, `databaseService`,
     * `dashboardService`...
     */
    type: string;
}

/**
 * Type of provider of an entity. Some entities are provided by the `system`. Some are
 * entities created and provided by the `user`. Typically `system` provide entities can't be
 * deleted and can only be disabled.
 */
export enum ProviderType {
    System = "system",
    User = "user",
}

/**
 * This schema defines the type for labeling an entity with a Tag.
 */
export interface TagLabel {
    /**
     * Description for the tag label.
     */
    description?: string;
    /**
     * Display Name that identifies this tag.
     */
    displayName?: string;
    /**
     * Link to the tag resource.
     */
    href?: string;
    /**
     * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
     * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
     * relationship (see Classification.json for more details). 'Propagated` indicates a tag
     * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
     * used to determine the tag label.
     */
    labelType: LabelType;
    /**
     * Name of the tag or glossary term.
     */
    name?: string;
    /**
     * Label is from Tags or Glossary.
     */
    source: TagSource;
    /**
     * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
     * entity must confirm the suggested labels before it is marked as 'Confirmed'.
     */
    state:  State;
    style?: Style;
    tagFQN: string;
}

/**
 * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
 * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
 * relationship (see Classification.json for more details). 'Propagated` indicates a tag
 * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
 * used to determine the tag label.
 */
export enum LabelType {
    Automated = "Automated",
    Derived = "Derived",
    Manual = "Manual",
    Propagated = "Propagated",
}

/**
 * Label is from Tags or Glossary.
 */
export enum TagSource {
    Classification = "Classification",
    Glossary = "Glossary",
}

/**
 * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
 * entity must confirm the suggested labels before it is marked as 'Confirmed'.
 */
export enum State {
    Confirmed = "Confirmed",
    Suggested = "Suggested",
}

/**
 * UI Style is used to associate a color code and/or icon to entity to customize the look of
 * that entity in UI.
 */
export interface Style {
    /**
     * Hex Color Code to mark an entity such as GlossaryTerm, Tag, Domain or Data Product.
     */
    color?: string;
    /**
     * An icon to associate with GlossaryTerm, Tag, Domain or Data Product.
     */
    iconURL?: string;
}

/**
 * Last test connection results for this service
 *
 * TestConnectionResult is the definition that will encapsulate result of running the test
 * connection steps.
 */
export interface TestConnectionResult {
    /**
     * Last time that the test connection was executed
     */
    lastUpdatedAt?: number;
    /**
     * Test Connection Result computation status.
     */
    status?: StatusType;
    /**
     * Steps to test the connection. Order matters.
     */
    steps: TestConnectionStepResult[];
}

/**
 * Test Connection Result computation status.
 *
 * Enum defining possible Test Connection Result status
 */
export enum StatusType {
    Failed = "Failed",
    Running = "Running",
    Successful = "Successful",
}

/**
 * Function that tests one specific element of the service. E.g., listing schemas, lineage,
 * or tags.
 */
export interface TestConnectionStepResult {
    /**
     * In case of failed step, this field would contain the actual error faced during the step.
     */
    errorLog?: string;
    /**
     * Is this step mandatory to be passed?
     */
    mandatory: boolean;
    /**
     * Results or exceptions to be shared after running the test. This message comes from the
     * test connection definition
     */
    message?: string;
    /**
     * Name of the step being tested
     */
    name: string;
    /**
     * Did the step pass successfully?
     */
    passed: boolean;
}
