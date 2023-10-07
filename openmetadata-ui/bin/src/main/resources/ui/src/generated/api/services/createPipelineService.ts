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
 * Create Pipeline service entity request
 */
export interface CreatePipelineService {
    connection?: PipelineConnection;
    /**
     * Description of pipeline service entity.
     */
    description?: string;
    /**
     * Display Name that identifies this pipeline service.
     */
    displayName?: string;
    /**
     * Fully qualified name of the domain the Pipeline Service belongs to.
     */
    domain?: string;
    /**
     * Life Cycle of the entity
     */
    lifeCycle?: LifeCycle;
    /**
     * Name that identifies the this entity instance uniquely
     */
    name: string;
    /**
     * Owner of this pipeline service.
     */
    owner?: EntityReference;
    /**
     * Scheduler Interval for the pipeline in cron format.
     */
    scheduleInterval?: string;
    serviceType:       PipelineServiceType;
    /**
     * Tags for this Pipeline Service.
     */
    tags?: TagLabel[];
}

/**
 * Pipeline Connection.
 */
export interface PipelineConnection {
    config?: Connection;
}

/**
 * Airflow Metadata Database Connection Config
 *
 * Glue Pipeline Connection Config
 *
 * Airbyte Metadata Database Connection Config
 *
 * Fivetran Metadata Database Connection Config
 *
 * Dagster Metadata Database Connection Config
 *
 * Nifi Metadata Pipeline Connection Config
 *
 * Domo Pipeline Connection Config
 *
 * Custom Pipeline Service connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Databricks Connection Config
 *
 * Spline Metadata Database Connection Config
 */
export interface Connection {
    /**
     * Underlying database connection. See
     * https://airflow.apache.org/docs/apache-airflow/stable/howto/set-up-database.html for
     * supported backends.
     */
    connection?: MetadataDatabaseConnection;
    /**
     * Pipeline Service Management/UI URI.
     *
     * Pipeline Service Management/UI URL.
     *
     * Host and port of the Databricks service.
     *
     * Spline REST Server Host & Port.
     */
    hostPort?: string;
    /**
     * Pipeline Service Number Of Status
     */
    numberOfStatus?:             number;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     *
     * Custom pipeline service type
     */
    type?:      PipelineServiceType;
    awsConfig?: AWSCredentials;
    /**
     * Password to connect to Airbyte.
     */
    password?: string;
    /**
     * Username to connect to Airbyte.
     */
    username?: string;
    /**
     * Fivetran API Secret.
     */
    apiKey?: string;
    /**
     * Fivetran API Secret.
     */
    apiSecret?: string;
    /**
     * Fivetran API Limit For Pagination.
     */
    limit?: number;
    /**
     * URL to the Dagster instance
     */
    host?: string;
    /**
     * Connection Time Limit Between OM and Dagster Graphql API in second
     */
    timeout?: number;
    /**
     * To Connect to Dagster Cloud
     *
     * Generated Token to connect to Databricks.
     */
    token?: string;
    /**
     * We support username/password or client certificate authentication
     */
    nifiConfig?: NifiCredentialsConfiguration;
    /**
     * Access token to connect to DOMO
     */
    accessToken?: string;
    /**
     * API Host to connect to DOMO instance
     */
    apiHost?: string;
    /**
     * Client ID for DOMO
     */
    clientId?: string;
    /**
     * URL of your Domo instance, e.g., https://openmetadata.domo.com
     */
    instanceDomain?: string;
    /**
     * Secret token to connect to DOMO
     */
    secretToken?:       string;
    connectionOptions?: { [key: string]: string };
    /**
     * Source Python Class Name to instantiated by the ingestion workflow
     */
    sourcePythonClass?:   string;
    connectionArguments?: { [key: string]: any };
    /**
     * Databricks compute resources URL.
     */
    httpPath?: string;
    /**
     * Spline UI Host & Port.
     */
    uiHostPort?: string;
}

/**
 * AWS credentials configs.
 */
export interface AWSCredentials {
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
    awsRegion: string;
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
}

/**
 * Underlying database connection. See
 * https://airflow.apache.org/docs/apache-airflow/stable/howto/set-up-database.html for
 * supported backends.
 *
 * Lineage Backend Connection Config
 *
 * Mysql Database Connection Config
 *
 * Postgres Database Connection Config
 *
 * Mssql Database Connection Config
 *
 * SQLite Database Connection Config
 */
export interface MetadataDatabaseConnection {
    /**
     * Service Type
     */
    type?: Type;
    /**
     * Choose Auth Config Type.
     */
    authType?:            AuthConfigurationType;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?: string;
    /**
     * Database Schema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     */
    databaseSchema?: string;
    /**
     * Host and port of the MySQL service.
     *
     * Host and port of the source service.
     *
     * Host and port of the MSSQL service.
     *
     * Host and port of the SQLite service. Blank for in-memory database.
     */
    hostPort?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?: Scheme;
    /**
     * Provide the path to ssl ca file
     */
    sslCA?: string;
    /**
     * Provide the path to ssl client certificate file (ssl_cert)
     */
    sslCert?: string;
    /**
     * Provide the path to ssl client certificate file (ssl_key)
     */
    sslKey?:                     string;
    supportsDBTExtraction?:      boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    /**
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     *
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to MSSQL. This user should have privileges to read all the metadata
     * in MsSQL.
     *
     * Username to connect to SQLite. Blank for in-memory database.
     */
    username?: string;
    /**
     * Custom OpenMetadata Classification name for Postgres policy tags.
     */
    classificationName?: string;
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     */
    database?: string;
    /**
     * Ingest data from all databases in Postgres. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Mssql. You can use databaseFilterPattern on top of this.
     */
    ingestAllDatabases?: boolean;
    sslConfig?:          Config;
    /**
     * SSL Mode to connect to postgres database.
     */
    sslMode?:                   SSLMode;
    supportsDatabase?:          boolean;
    supportsLineageExtraction?: boolean;
    supportsUsageExtraction?:   boolean;
    /**
     * ODBC driver version in case of pyodbc connection.
     */
    driver?: string;
    /**
     * Password to connect to MSSQL.
     *
     * Password to connect to SQLite. Blank for in-memory database.
     */
    password?: string;
    /**
     * How to run the SQLite database. :memory: by default.
     */
    databaseMode?: string;
}

/**
 * Choose Auth Config Type.
 *
 * Common Database Connection Config
 *
 * IAM Auth Database Connection Config
 */
export interface AuthConfigurationType {
    /**
     * Password to connect to source.
     */
    password?:  string;
    awsConfig?: AWSCredentials;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum Scheme {
    MssqlPymssql = "mssql+pymssql",
    MssqlPyodbc = "mssql+pyodbc",
    MssqlPytds = "mssql+pytds",
    MysqlPymysql = "mysql+pymysql",
    PgspiderPsycopg2 = "pgspider+psycopg2",
    PostgresqlPsycopg2 = "postgresql+psycopg2",
    SqlitePysqlite = "sqlite+pysqlite",
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
 * SSL Mode to connect to postgres database.
 */
export enum SSLMode {
    Allow = "allow",
    Disable = "disable",
    Prefer = "prefer",
    Require = "require",
    VerifyCA = "verify-ca",
    VerifyFull = "verify-full",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum Type {
    Backend = "Backend",
    Mssql = "Mssql",
    Mysql = "Mysql",
    Postgres = "Postgres",
    SQLite = "SQLite",
}

/**
 * We support username/password or client certificate authentication
 *
 * username/password auth
 *
 * client certificate auth
 */
export interface NifiCredentialsConfiguration {
    /**
     * Nifi password to authenticate to the API.
     */
    password?: string;
    /**
     * Nifi user to authenticate to the API.
     */
    username?: string;
    /**
     * Boolean marking if we need to verify the SSL certs for Nifi. False by default.
     */
    verifySSL?: boolean;
    /**
     * Path to the root CA certificate
     */
    certificateAuthorityPath?: string;
    /**
     * Path to the client certificate
     */
    clientCertificatePath?: string;
    /**
     * Path to the client key
     */
    clientkeyPath?: string;
}

/**
 * Service Type
 *
 * Service type.
 *
 * Custom pipeline service type
 *
 * Type of pipeline service - Airflow or Prefect.
 */
export enum PipelineServiceType {
    Airbyte = "Airbyte",
    Airflow = "Airflow",
    CustomPipeline = "CustomPipeline",
    Dagster = "Dagster",
    DatabricksPipeline = "DatabricksPipeline",
    DomoPipeline = "DomoPipeline",
    Fivetran = "Fivetran",
    GluePipeline = "GluePipeline",
    Nifi = "Nifi",
    Spline = "Spline",
}

/**
 * Life Cycle of the entity
 *
 * This schema defines Life Cycle Properties.
 */
export interface LifeCycle {
    /**
     * Access Details about accessed aspect of the data asset
     */
    accessed?: AccessDetails;
    /**
     * Access Details about created aspect of the data asset
     */
    created?: AccessDetails;
    /**
     * Access Details about updated aspect of the data asset
     */
    updated?: AccessDetails;
}

/**
 * Access Details about accessed aspect of the data asset
 *
 * Access details of an entity
 *
 * Access Details about created aspect of the data asset
 *
 * Access Details about updated aspect of the data asset
 */
export interface AccessDetails {
    /**
     * User, Pipeline, Query that created,updated or accessed the data asset
     */
    accessedBy?: EntityReference;
    /**
     * Any process that accessed the data asset that is not captured in OpenMetadata.
     */
    accessedByAProcess?: string;
    /**
     * Timestamp of data asset accessed for creation, update, read.
     */
    timestamp: number;
}

/**
 * User, Pipeline, Query that created,updated or accessed the data asset
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Owner of this pipeline service.
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
