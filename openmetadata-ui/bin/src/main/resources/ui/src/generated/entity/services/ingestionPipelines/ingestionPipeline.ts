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
 * Ingestion Pipeline Config is used to set up a DAG and deploy. This entity is used to
 * setup metadata/quality pipelines on Apache Airflow.
 */
export interface IngestionPipeline {
    airflowConfig: AirflowConfig;
    /**
     * Change that led to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Indicates if the workflow has been successfully deployed to Airflow.
     */
    deployed?: boolean;
    /**
     * Description of the Pipeline.
     */
    description?: string;
    /**
     * Display Name that identifies this Pipeline.
     */
    displayName?: string;
    /**
     * True if the pipeline is ready to be run in the next schedule. False if it is paused.
     */
    enabled?: boolean;
    /**
     * Name that uniquely identifies a Pipeline.
     */
    fullyQualifiedName?: string;
    /**
     * Link to this ingestion pipeline resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies this pipeline.
     */
    id?: string;
    /**
     * Set the logging level for the workflow.
     */
    loggerLevel?: LogLevels;
    /**
     * Name that identifies this pipeline instance uniquely.
     */
    name:                          string;
    openMetadataServerConnection?: OpenMetadataConnection;
    /**
     * Owner of this Pipeline.
     */
    owner?: EntityReference;
    /**
     * Last of executions and status for the Pipeline.
     */
    pipelineStatuses?: PipelineStatus;
    pipelineType:      PipelineType;
    provider?:         ProviderType;
    /**
     * Link to the service (such as database, messaging, storage services, etc. for which this
     * ingestion pipeline ingests the metadata from.
     */
    service?:     EntityReference;
    sourceConfig: SourceConfig;
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
 * Properties to configure the Airflow pipeline that will run the workflow.
 */
export interface AirflowConfig {
    /**
     * Concurrency of the Pipeline.
     */
    concurrency?: number;
    /**
     * Email to notify workflow status.
     */
    email?: string;
    /**
     * End Date of the pipeline.
     */
    endDate?: Date;
    /**
     * Maximum Number of active runs.
     */
    maxActiveRuns?: number;
    /**
     * pause the pipeline from running once the deploy is finished successfully.
     */
    pausePipeline?: boolean;
    /**
     * Run past executions if the start date is in the past.
     */
    pipelineCatchup?: boolean;
    /**
     * Timezone in which pipeline going to be scheduled.
     */
    pipelineTimezone?: string;
    /**
     * Retry pipeline in case of failure.
     */
    retries?: number;
    /**
     * Delay between retries in seconds.
     */
    retryDelay?: number;
    /**
     * Scheduler Interval for the pipeline in cron format.
     */
    scheduleInterval?: string;
    /**
     * Start date of the pipeline.
     */
    startDate?: Date;
    /**
     * Default view in Airflow.
     */
    workflowDefaultView?: string;
    /**
     * Default view Orientation in Airflow.
     */
    workflowDefaultViewOrientation?: string;
    /**
     * Timeout for the workflow in seconds.
     */
    workflowTimeout?: number;
}

/**
 * Change that led to this version of the entity.
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
 * Set the logging level for the workflow.
 *
 * Supported logging levels
 */
export enum LogLevels {
    Debug = "DEBUG",
    Error = "ERROR",
    Info = "INFO",
    Warn = "WARN",
}

/**
 * OpenMetadata Connection Config
 */
export interface OpenMetadataConnection {
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
     * OpenMetadata Server Config. Must include API end point ex: http://localhost:8585/api
     */
    hostPort: string;
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
    /**
     * Service Type
     */
    type?:      OpenmetadataType;
    verifySSL?: VerifySSL;
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
 * OpenMetadata service type
 */
export enum OpenmetadataType {
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
 * Owner of this Pipeline.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Link to the service (such as database, messaging, storage services, etc. for which this
 * ingestion pipeline ingests the metadata from.
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
 * Last of executions and status for the Pipeline.
 *
 * This defines runtime status of Pipeline.
 */
export interface PipelineStatus {
    /**
     * endDate of the pipeline run for this particular execution.
     */
    endDate?: number;
    /**
     * Pipeline status denotes if its failed or succeeded.
     */
    pipelineState?: PipelineState;
    /**
     * Pipeline unique run ID.
     */
    runId?: string;
    /**
     * startDate of the pipeline run for this particular execution.
     */
    startDate?: number;
    /**
     * executionDate of the pipeline run for this particular execution.
     */
    timestamp?: number;
}

/**
 * Pipeline status denotes if its failed or succeeded.
 */
export enum PipelineState {
    Failed = "failed",
    PartialSuccess = "partialSuccess",
    Queued = "queued",
    Running = "running",
    Success = "success",
}

/**
 * Type of Pipeline - metadata, usage
 */
export enum PipelineType {
    DataInsight = "dataInsight",
    Dbt = "dbt",
    ElasticSearchReindex = "elasticSearchReindex",
    Lineage = "lineage",
    Metadata = "metadata",
    Profiler = "profiler",
    TestSuite = "TestSuite",
    Usage = "usage",
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
 * Additional connection configuration.
 */
export interface SourceConfig {
    config?: Pipeline;
}

/**
 * DatabaseService Metadata Pipeline Configuration.
 *
 * DatabaseService Query Usage Pipeline Configuration.
 *
 * DatabaseService Query Lineage Pipeline Configuration.
 *
 * DashboardService Metadata Pipeline Configuration.
 *
 * MessagingService Metadata Pipeline Configuration.
 *
 * DatabaseService Profiler Pipeline Configuration.
 *
 * PipelineService Metadata Pipeline Configuration.
 *
 * MlModelService Metadata Pipeline Configuration.
 *
 * StorageService Metadata Pipeline Configuration.
 *
 * SearchService Metadata Pipeline Configuration.
 *
 * TestSuite Pipeline Configuration.
 *
 * Data Insight Pipeline Configuration.
 *
 * DBT Pipeline Configuration.
 */
export interface Pipeline {
    /**
     * Regex to only fetch databases that matches the pattern.
     */
    databaseFilterPattern?: FilterPattern;
    /**
     * Optional configuration to toggle the Stored Procedures ingestion.
     */
    includeStoredProcedures?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for tables.
     */
    includeTables?: boolean;
    /**
     * Optional configuration to toggle the tags ingestion.
     */
    includeTags?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for views.
     */
    includeViews?: boolean;
    /**
     * This is an optional configuration for enabling soft deletion of tables. When this option
     * is enabled, only tables that have been deleted from the source will be soft deleted, and
     * this will apply solely to the schema that is currently being ingested via the pipeline.
     * Any related entities such as test suites or lineage information that were associated with
     * those tables will also be deleted.
     */
    markDeletedTables?: boolean;
    /**
     * Configuration to tune how far we want to look back in query logs to process Stored
     * Procedures results.
     *
     * Configuration to tune how far we want to look back in query logs to process usage data.
     *
     * Configuration to tune how far we want to look back in query logs to process lineage data.
     */
    queryLogDuration?: number;
    /**
     * Configuration to set the timeout for parsing the query in seconds.
     */
    queryParsingTimeoutLimit?: number;
    /**
     * Regex to only fetch tables or databases that matches the pattern.
     */
    schemaFilterPattern?: FilterPattern;
    /**
     * Regex exclude tables or databases that matches the pattern.
     */
    tableFilterPattern?: FilterPattern;
    /**
     * Pipeline type
     */
    type?: ConfigType;
    /**
     * Regex will be applied on fully qualified name (e.g
     * service_name.db_name.schema_name.table_name) instead of raw name (e.g. table_name)
     */
    useFqnForFiltering?: boolean;
    /**
     * Configuration the condition to filter the query history.
     */
    filterCondition?: string;
    /**
     * Configuration to set the file path for query logs
     */
    queryLogFilePath?: string;
    /**
     * Configuration to set the limit for query logs
     */
    resultLimit?: number;
    /**
     * Temporary file name to store the query logs before processing. Absolute file path
     * required.
     */
    stageFileLocation?: string;
    /**
     * Configuration to set the timeout for parsing the query in seconds.
     */
    parsingTimeoutLimit?: number;
    /**
     * Regex exclude or include charts that matches the pattern.
     */
    chartFilterPattern?: FilterPattern;
    /**
     * Regex to exclude or include dashboards that matches the pattern.
     */
    dashboardFilterPattern?: FilterPattern;
    /**
     * Regex exclude or include data models that matches the pattern.
     */
    dataModelFilterPattern?: FilterPattern;
    /**
     * List of Database Service Names for creation of lineage
     */
    dbServiceNames?: string[];
    /**
     * Optional configuration to toggle the ingestion of data models.
     */
    includeDataModels?: boolean;
    /**
     * Enabling a flag will replace the current owner with a new owner from the source during
     * metadata ingestion, if the current owner is null. It is recommended to keep the flag
     * enabled to obtain the owner information during the first metadata ingestion.
     *
     * Set the 'Include Owners' toggle to control whether to include owners to the ingested
     * entity if the owner email matches with a user stored in the OM server as part of metadata
     * ingestion. If the ingested entity already exists and has an owner, the owner will not be
     * overwritten.
     */
    includeOwners?: boolean;
    /**
     * Optional configuration to soft delete dashboards in OpenMetadata if the source dashboards
     * are deleted. Also, if the dashboard is deleted, all the associated entities like lineage,
     * etc., with that dashboard will be deleted
     */
    markDeletedDashboards?: boolean;
    /**
     * Regex to exclude or include projects that matches the pattern.
     */
    projectFilterPattern?: FilterPattern;
    /**
     * Option to turn on/off generating sample data during metadata extraction.
     *
     * Option to turn on/off generating sample data.
     */
    generateSampleData?: boolean;
    /**
     * Optional configuration to soft delete topics in OpenMetadata if the source topics are
     * deleted. Also, if the topic is deleted, all the associated entities like sample data,
     * lineage, etc., with that topic will be deleted
     */
    markDeletedTopics?: boolean;
    /**
     * Regex to only fetch topics that matches the pattern.
     */
    topicFilterPattern?: FilterPattern;
    /**
     * Set the Confidence value for which you want the column to be marked
     */
    confidence?: number;
    /**
     * Optional configuration to automatically tag columns that might contain sensitive
     * information
     */
    processPiiSensitive?: boolean;
    /**
     * Percentage of data or no. of rows we want to execute the profiler and tests on
     */
    profileSample?:     number;
    profileSampleType?: ProfileSampleType;
    /**
     * Number of threads to use during metric computations
     */
    threadCount?: number;
    /**
     * Profiler Timeout in Seconds
     */
    timeoutSeconds?: number;
    /**
     * Optional configuration to turn off fetching lineage from pipelines.
     */
    includeLineage?: boolean;
    /**
     * Optional configuration to soft delete Pipelines in OpenMetadata if the source Pipelines
     * are deleted. Also, if the Pipeline is deleted, all the associated entities like lineage,
     * etc., with that Pipeline will be deleted
     */
    markDeletedPipelines?: boolean;
    /**
     * Regex exclude pipelines.
     */
    pipelineFilterPattern?: FilterPattern;
    /**
     * Optional configuration to soft delete MlModels in OpenMetadata if the source MlModels are
     * deleted. Also, if the MlModel is deleted, all the associated entities like lineage, etc.,
     * with that MlModels will be deleted
     */
    markDeletedMlModels?: boolean;
    /**
     * Regex to only fetch MlModels with names matching the pattern.
     */
    mlModelFilterPattern?: FilterPattern;
    /**
     * Regex to only fetch containers that matches the pattern.
     */
    containerFilterPattern?:      FilterPattern;
    storageMetadataConfigSource?: StorageMetadataConfigurationSource;
    /**
     * Optional configuration to turn off fetching sample data for search index.
     */
    includeSampleData?: boolean;
    /**
     * Optional configuration to soft delete search indexes in OpenMetadata if the source search
     * indexes are deleted. Also, if the search index is deleted, all the associated entities
     * like lineage, etc., with that search index will be deleted
     */
    markDeletedSearchIndexes?: boolean;
    /**
     * No. of records of sample data we want to ingest.
     */
    sampleSize?: number;
    /**
     * Regex to only fetch search indexes that matches the pattern.
     */
    searchIndexFilterPattern?: FilterPattern;
    /**
     * Fully qualified name of the entity to be tested.
     */
    entityFullyQualifiedName?: string;
    /**
     * Maximum number of events entities in a batch (Default 1000).
     */
    batchSize?: number;
    /**
     * Certificate path to be added in configuration. The path should be local in the Ingestion
     * Container.
     */
    caCerts?:       string;
    recreateIndex?: boolean;
    /**
     * Region name. Required when using AWS Credentials.
     */
    regionName?: string;
    /**
     * Recreate Indexes with updated Language
     */
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * Connection Timeout
     */
    timeout?: number;
    /**
     * Indicates whether to use aws credentials when connecting to OpenSearch in AWS.
     */
    useAwsCredentials?: boolean;
    /**
     * Indicates whether to use SSL when connecting to ElasticSearch. By default, we will ignore
     * SSL settings.
     */
    useSSL?: boolean;
    /**
     * Indicates whether to verify certificates when using SSL connection to ElasticSearch.
     * Ignored by default. Is set to true, make sure to send the certificates in the property
     * `CA Certificates`.
     */
    verifyCerts?: boolean;
    /**
     * Custom OpenMetadata Classification name for dbt tags.
     */
    dbtClassificationName?: string;
    /**
     * Available sources to fetch DBT catalog and manifest files.
     */
    dbtConfigSource?: DBTConfigurationSource;
    /**
     * Optional configuration to update the description from DBT or not
     */
    dbtUpdateDescriptions?: boolean;
}

/**
 * Regex to only fetch databases that matches the pattern.
 *
 * Regex to only fetch dashboards or charts that matches the pattern.
 *
 * Regex to only fetch tables or databases that matches the pattern.
 *
 * Regex exclude tables or databases that matches the pattern.
 *
 * Regex exclude or include charts that matches the pattern.
 *
 * Regex to exclude or include dashboards that matches the pattern.
 *
 * Regex exclude or include data models that matches the pattern.
 *
 * Regex to exclude or include projects that matches the pattern.
 *
 * Regex to only fetch topics that matches the pattern.
 *
 * Regex exclude pipelines.
 *
 * Regex to only fetch MlModels with names matching the pattern.
 *
 * Regex to only fetch containers that matches the pattern.
 *
 * Regex to only fetch search indexes that matches the pattern.
 */
export interface FilterPattern {
    /**
     * List of strings/regex patterns to match and exclude only database entities that match.
     */
    excludes?: string[];
    /**
     * List of strings/regex patterns to match and include only database entities that match.
     */
    includes?: string[];
}

/**
 * Available sources to fetch DBT catalog and manifest files.
 *
 * dbt Cloud configuration.
 *
 * DBT Catalog, Manifest and Run Results file path config.
 *
 * DBT Catalog, Manifest and Run Results HTTP path configuration.
 *
 * DBT Catalog, Manifest and Run Results files in S3 bucket. We will search for
 * catalog.json, manifest.json and run_results.json.
 *
 * DBT Catalog, Manifest and Run Results files in GCS storage. We will search for
 * catalog.json, manifest.json and run_results.json.
 *
 * DBT Catalog, Manifest and Run Results files in Azure bucket. We will search for
 * catalog.json, manifest.json and run_results.json.
 */
export interface DBTConfigurationSource {
    /**
     * dbt cloud account Id
     */
    dbtCloudAccountId?: string;
    /**
     * dbt cloud account authentication token
     */
    dbtCloudAuthToken?: string;
    /**
     * dbt cloud job id.
     */
    dbtCloudJobId?: string;
    /**
     * In case of multiple projects in a dbt cloud account, specify the project's id from which
     * you want to extract the dbt run artifacts
     */
    dbtCloudProjectId?: string;
    /**
     * URL to connect to your dbt cloud instance. E.g., https://cloud.getdbt.com or
     * https://emea.dbt.com/
     */
    dbtCloudUrl?: string;
    /**
     * DBT catalog file path to extract dbt models with their column schemas.
     */
    dbtCatalogFilePath?: string;
    /**
     * DBT manifest file path to extract dbt models and associate with tables.
     */
    dbtManifestFilePath?: string;
    /**
     * DBT run results file path to extract the test results information.
     */
    dbtRunResultsFilePath?: string;
    /**
     * DBT catalog http file path to extract dbt models with their column schemas.
     */
    dbtCatalogHttpPath?: string;
    /**
     * DBT manifest http file path to extract dbt models and associate with tables.
     */
    dbtManifestHttpPath?: string;
    /**
     * DBT run results http file path to extract the test results information.
     */
    dbtRunResultsHttpPath?: string;
    /**
     * Details of the bucket where the dbt files are stored
     */
    dbtPrefixConfig?:   DBTPrefixConfig;
    dbtSecurityConfig?: DbtSecurityConfigClass;
    [property: string]: any;
}

/**
 * Details of the bucket where the dbt files are stored
 */
export interface DBTPrefixConfig {
    /**
     * Name of the bucket where the dbt files are stored
     */
    dbtBucketName?: string;
    /**
     * Path of the folder where the dbt files are stored
     */
    dbtObjectPrefix?: string;
}

/**
 * AWS credentials configs.
 *
 * GCP credentials configs.
 *
 * Azure Datalake Credentials
 */
export interface DbtSecurityConfigClass {
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion?: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
    /**
     * We support two ways of authenticating to GCP i.e via GCP Credentials Values or GCP
     * Credentials Path
     */
    gcpConfig?: GCPCredentialsValues | string;
    /**
     * we enable the authenticated service account to impersonate another service account
     */
    gcpImpersonateServiceAccount?: GCPImpersonateServiceAccountValues;
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
}

/**
 * Pass the raw credential values provided by GCP
 */
export interface GCPCredentialsValues {
    /**
     * Google Cloud auth provider certificate.
     */
    authProviderX509CertUrl?: string;
    /**
     * Google Cloud auth uri.
     */
    authUri?: string;
    /**
     * Google Cloud email.
     */
    clientEmail?: string;
    /**
     * Google Cloud Client ID.
     */
    clientId?: string;
    /**
     * Google Cloud client certificate uri.
     */
    clientX509CertUrl?: string;
    /**
     * Google Cloud private key.
     */
    privateKey?: string;
    /**
     * Google Cloud private key id.
     */
    privateKeyId?: string;
    /**
     * Project ID
     */
    projectId?: string[] | string;
    /**
     * Google Cloud token uri.
     */
    tokenUri?: string;
    /**
     * Google Cloud Platform account type.
     */
    type?: string;
}

/**
 * we enable the authenticated service account to impersonate another service account
 *
 * Pass the values to impersonate a service account of Google Cloud
 */
export interface GCPImpersonateServiceAccountValues {
    /**
     * The impersonated service account email
     */
    impersonateServiceAccount?: string;
    /**
     * Number of seconds the delegated credential should be valid
     */
    lifetime?: number;
    [property: string]: any;
}

/**
 * Type of Profile Sample (percentage or rows)
 */
export enum ProfileSampleType {
    Percentage = "PERCENTAGE",
    Rows = "ROWS",
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
 * No manifest file available. Ingestion would look for bucket-level metadata file instead
 *
 * Storage Metadata Manifest file path config.
 *
 * Storage Metadata Manifest file HTTP path config.
 *
 * Storage Metadata Manifest file S3 path config.
 *
 * Storage Metadata Manifest file ADLS path config.
 */
export interface StorageMetadataConfigurationSource {
    /**
     * Storage Metadata manifest file path to extract locations to ingest from.
     */
    manifestFilePath?: string;
    /**
     * Storage Metadata manifest http file path to extract locations to ingest from.
     */
    manifestHttpPath?: string;
    prefixConfig?:     StorageMetadataBucketDetails;
    securityConfig?:   SecurityConfigClass;
}

/**
 * Details of the bucket where the storage metadata manifest file is stored
 */
export interface StorageMetadataBucketDetails {
    /**
     * Name of the top level container where the storage metadata file is stored
     */
    containerName: string;
    /**
     * Path of the folder where the storage metadata file is stored. If the file is at the root,
     * you can keep it empty.
     */
    objectPrefix?: string;
}

/**
 * AWS credentials configs.
 *
 * Azure Datalake Credentials
 */
export interface SecurityConfigClass {
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion?: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
}

/**
 * Pipeline type
 *
 * Database Source Config Metadata Pipeline type
 *
 * Database Source Config Usage Pipeline type
 *
 * Dashboard Source Config Metadata Pipeline type
 *
 * Messaging Source Config Metadata Pipeline type
 *
 * Profiler Source Config Pipeline type
 *
 * Pipeline Source Config Metadata Pipeline type
 *
 * MlModel Source Config Metadata Pipeline type
 *
 * Object Store Source Config Metadata Pipeline type
 *
 * Search Source Config Metadata Pipeline type
 *
 * DBT Config Pipeline type
 */
export enum ConfigType {
    DashboardMetadata = "DashboardMetadata",
    DataInsight = "dataInsight",
    DatabaseLineage = "DatabaseLineage",
    DatabaseMetadata = "DatabaseMetadata",
    DatabaseUsage = "DatabaseUsage",
    Dbt = "DBT",
    MessagingMetadata = "MessagingMetadata",
    MetadataToElasticSearch = "MetadataToElasticSearch",
    MlModelMetadata = "MlModelMetadata",
    PipelineMetadata = "PipelineMetadata",
    Profiler = "Profiler",
    SearchMetadata = "SearchMetadata",
    StorageMetadata = "StorageMetadata",
    TestSuite = "TestSuite",
}
