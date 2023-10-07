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
 * Create Dashboard service entity request
 */
export interface CreateDashboardService {
    connection?: DashboardConnection;
    /**
     * Description of dashboard service entity.
     */
    description?: string;
    /**
     * Display Name that identifies this dashboard service.
     */
    displayName?: string;
    /**
     * Fully qualified name of the domain the Dashboard Service belongs to.
     */
    domain?: string;
    /**
     * Name that identifies the this entity instance uniquely
     */
    name: string;
    /**
     * Owner of this dashboard service.
     */
    owner?:      EntityReference;
    serviceType: DashboardServiceType;
    /**
     * Tags for this Dashboard Service.
     */
    tags?: TagLabel[];
}

/**
 * Dashboard Connection.
 */
export interface DashboardConnection {
    config?: Connection;
}

/**
 * Looker Connection Config
 *
 * Metabase Connection Config
 *
 * PowerBI Connection Config
 *
 * Redash Connection Config
 *
 * Superset Connection Config
 *
 * Tableau Connection Config
 *
 * Mode Connection Config
 *
 * Custom Dashboard Service connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Domo Dashboard Connection Config
 *
 * QuickSight Connection Config
 *
 * Qlik Sense Connection Config
 *
 * Lightdash Connection Config
 */
export interface Connection {
    /**
     * User's Client ID. This user should have privileges to read all the metadata in Looker.
     *
     * client_id for PowerBI.
     *
     * Client ID for DOMO
     */
    clientId?: string;
    /**
     * User's Client Secret.
     *
     * clientSecret for PowerBI.
     */
    clientSecret?: string;
    /**
     * Credentials to extract the .lkml files from a repository. This is required to get all the
     * lineage and definitions.
     */
    gitCredentials?: GitHubCredentials;
    /**
     * URL to the Looker instance.
     *
     * Host and Port of the Metabase instance.
     *
     * Dashboard URL for PowerBI service.
     *
     * URL for the Redash instance
     *
     * URL for the superset instance.
     *
     * Tableau Server.
     *
     * URL for the mode instance.
     *
     * Address for your running Lightdash instance
     */
    hostPort?:                   string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     *
     * Custom dashboard service type
     */
    type?: DashboardServiceType;
    /**
     * Password to connect to Metabase.
     */
    password?: string;
    /**
     * Username to connect to Metabase. This user should have privileges to read all the
     * metadata in Metabase.
     *
     * Username for Redash
     */
    username?: string;
    /**
     * Authority URI for the PowerBI service.
     */
    authorityURI?: string;
    /**
     * Entity Limit set here will be used to paginate the PowerBi APIs
     */
    pagination_entity_per_page?: number;
    /**
     * PowerBI secrets.
     */
    scope?: string[];
    /**
     * Tenant ID for PowerBI.
     */
    tenantId?: string;
    /**
     * Fetch the PowerBI metadata using admin APIs
     */
    useAdminApis?: boolean;
    /**
     * API key of the redash instance to access.
     *
     * The personal access token you can generate in the Lightdash app under the user settings
     */
    apiKey?: string;
    /**
     * Version of the Redash instance
     */
    redashVersion?: string;
    /**
     * Choose between API or database connection fetch metadata from superset.
     */
    connection?: SupersetConnection;
    /**
     * Tableau API version.
     */
    apiVersion?: string;
    /**
     * Types of methods used to authenticate to the tableau instance
     */
    authType?: AuthenticationTypeForTableau;
    /**
     * Tableau Environment Name.
     */
    env?: string;
    /**
     * Pagination limit used while querying the tableau metadata API for getting data sources
     */
    paginationLimit?: number;
    /**
     * Tableau Site Name.
     */
    siteName?: string;
    /**
     * Tableau Site Url.
     */
    siteUrl?:   string;
    sslConfig?: ConfigSSLConfig;
    verifySSL?: VerifySSL;
    /**
     * Access Token for Mode Dashboard
     *
     * Access token to connect to DOMO
     */
    accessToken?: string;
    /**
     * Access Token Password for Mode Dashboard
     */
    accessTokenPassword?: string;
    /**
     * Mode Workspace Name
     */
    workspaceName?:     string;
    connectionOptions?: { [key: string]: string };
    /**
     * Source Python Class Name to instantiated by the ingestion workflow
     */
    sourcePythonClass?: string;
    /**
     * API Host to connect to DOMO instance
     */
    apiHost?: string;
    /**
     * URL of your Domo instance, e.g., https://openmetadata.domo.com
     */
    instanceDomain?: string;
    /**
     * Secret Token to connect DOMO
     */
    secretToken?: string;
    /**
     * AWS Account ID
     */
    awsAccountId?: string;
    awsConfig?:    AWSCredentials;
    /**
     * The authentication method that the user uses to sign in.
     */
    identityType?: IdentityType;
    /**
     * The Amazon QuickSight namespace that contains the dashboard IDs in this request ( To be
     * provided when identityType is `ANONYMOUS` )
     */
    namespace?:    string;
    certificates?: QlikCertificatesBy;
    /**
     * Qlik Sense Base URL, used for genrating dashboard & chat url
     */
    displayUrl?: string;
    /**
     * User Directory.
     */
    userDirectory?: string;
    /**
     * User ID.
     */
    userId?: string;
    /**
     * The Project UUID for your Lightdash instance
     */
    projectUUID?: string;
    /**
     * Use if your Lightdash instance is behind a proxy like (Cloud IAP)
     */
    proxyAuthentication?: string;
    /**
     * The Space UUID for your Lightdash instance
     */
    spaceUUID?: string;
}

/**
 * Types of methods used to authenticate to the tableau instance
 *
 * Basic Auth Credentials
 *
 * Access Token Auth Credentials
 */
export interface AuthenticationTypeForTableau {
    /**
     * Password to access the service.
     */
    password?: string;
    /**
     * Username to access the service.
     */
    username?: string;
    /**
     * Personal Access Token Name.
     */
    personalAccessTokenName?: string;
    /**
     * Personal Access Token Secret.
     */
    personalAccessTokenSecret?: string;
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
 * Qlik Authentication Certificate By Values
 *
 * Qlik Authentication Certificate File Path
 */
export interface QlikCertificatesBy {
    /**
     * Client Certificate
     */
    clientCertificateData?: string;
    /**
     * Client Key Certificate.
     */
    clientKeyCertificateData?: string;
    /**
     * Root Certificate.
     */
    rootCertificateData?: string;
    /**
     * Staging Directory Path
     */
    stagingDir?: string;
    /**
     * Client Certificate
     */
    clientCertificate?: string;
    /**
     * Client Key Certificate.
     */
    clientKeyCertificate?: string;
    /**
     * Root Certificate.
     */
    rootCertificate?: string;
    [property: string]: any;
}

/**
 * Choose between API or database connection fetch metadata from superset.
 *
 * Superset API Connection Config
 *
 * Postgres Database Connection Config
 *
 * Mysql Database Connection Config
 */
export interface SupersetConnection {
    /**
     * Password for Superset.
     */
    password?: string;
    /**
     * Authentication provider for the Superset service. For basic user/password authentication,
     * the default value `db` can be used. This parameter is used internally to connect to
     * Superset's REST API.
     */
    provider?:  Provider;
    sslConfig?: SupersetConnectionSSLConfig;
    /**
     * Username for Superset.
     *
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     */
    username:   string;
    verifySSL?: VerifySSL;
    /**
     * Choose Auth Config Type.
     */
    authType?: AuthConfigurationType;
    /**
     * Custom OpenMetadata Classification name for Postgres policy tags.
     */
    classificationName?:  string;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     */
    database?: string;
    /**
     * Host and port of the source service.
     *
     * Host and port of the MySQL service.
     */
    hostPort?: string;
    /**
     * Ingest data from all databases in Postgres. You can use databaseFilterPattern on top of
     * this.
     */
    ingestAllDatabases?: boolean;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?: Scheme;
    /**
     * SSL Mode to connect to postgres database.
     */
    sslMode?:                    SSLMode;
    supportsDatabase?:           boolean;
    supportsDBTExtraction?:      boolean;
    supportsLineageExtraction?:  boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    supportsUsageExtraction?:    boolean;
    /**
     * Service Type
     */
    type?: SupersetConnectionType;
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
    sslKey?: string;
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
 * Authentication provider for the Superset service. For basic user/password authentication,
 * the default value `db` can be used. This parameter is used internally to connect to
 * Superset's REST API.
 */
export enum Provider {
    DB = "db",
    LDAP = "ldap",
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum Scheme {
    MysqlPymysql = "mysql+pymysql",
    PgspiderPsycopg2 = "pgspider+psycopg2",
    PostgresqlPsycopg2 = "postgresql+psycopg2",
}

/**
 * Client SSL configuration
 *
 * OpenMetadata Client configured to validate SSL certificates.
 */
export interface SupersetConnectionSSLConfig {
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
export enum SupersetConnectionType {
    Mysql = "Mysql",
    Postgres = "Postgres",
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
 * Credentials to extract the .lkml files from a repository. This is required to get all the
 * lineage and definitions.
 *
 * Do not set any credentials. Note that credentials are required to extract .lkml views and
 * their lineage.
 *
 * Credentials for a GitHub repository
 *
 * Credentials for a BitBucket repository
 */
export interface GitHubCredentials {
    repositoryName?:  string;
    repositoryOwner?: string;
    token?:           string;
    /**
     * Credentials Type
     */
    type?: GitHubCredentialsType;
    /**
     * Main production branch of the repository. E.g., `main`
     */
    branch?: string;
}

/**
 * Credentials Type
 *
 * GitHub Credentials type
 *
 * BitBucket Credentials type
 */
export enum GitHubCredentialsType {
    BitBucket = "BitBucket",
    GitHub = "GitHub",
}

/**
 * The authentication method that the user uses to sign in.
 */
export enum IdentityType {
    Anonymous = "ANONYMOUS",
    Iam = "IAM",
    Quicksight = "QUICKSIGHT",
}

/**
 * Client SSL configuration
 *
 * OpenMetadata Client configured to validate SSL certificates.
 */
export interface ConfigSSLConfig {
    /**
     * CA certificate path. E.g., /path/to/public.cert. Will be used if Verify SSL is set to
     * `validate`.
     */
    certificatePath?: string;
}

/**
 * Service Type
 *
 * Looker service type
 *
 * Metabase service type
 *
 * PowerBI service type
 *
 * Redash service type
 *
 * Superset service type
 *
 * Tableau service type
 *
 * Mode service type
 *
 * Custom dashboard service type
 *
 * service type
 *
 * QuickSight service type
 *
 * Qlik sense service type
 *
 * Lightdash service type
 *
 * Type of Dashboard service - Superset, Looker, Redash, Tableau, Metabase, PowerBi, Mode,
 * or Lightdash
 */
export enum DashboardServiceType {
    CustomDashboard = "CustomDashboard",
    DomoDashboard = "DomoDashboard",
    Lightdash = "Lightdash",
    Looker = "Looker",
    Metabase = "Metabase",
    Mode = "Mode",
    PowerBI = "PowerBI",
    QlikSense = "QlikSense",
    QuickSight = "QuickSight",
    Redash = "Redash",
    Superset = "Superset",
    Tableau = "Tableau",
}

/**
 * Owner of this dashboard service.
 *
 * This schema defines the EntityReference type used for referencing an entity.
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
