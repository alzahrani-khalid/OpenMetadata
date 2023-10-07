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
 * Create Database service entity request
 */
export interface CreateDatabaseService {
    connection?: DatabaseConnection;
    /**
     * Description of Database entity.
     */
    description?: string;
    /**
     * Display Name that identifies this database service.
     */
    displayName?: string;
    /**
     * Fully qualified name of the domain the Database Service belongs to.
     */
    domain?: string;
    /**
     * Name that identifies the this entity instance uniquely
     */
    name: string;
    /**
     * Owner of this database service.
     */
    owner?:      EntityReference;
    serviceType: DatabaseServiceType;
    /**
     * Tags for this Database Service.
     */
    tags?: TagLabel[];
}

/**
 * Database Connection.
 */
export interface DatabaseConnection {
    config?: Connection;
}

/**
 * Google BigQuery Connection Config
 *
 * AWS Athena Connection Config
 *
 * Azure SQL Connection Config
 *
 * Clickhouse Connection Config
 *
 * Databricks Connection Config
 *
 * Db2 Connection Config
 *
 * DeltaLake Database Connection Config
 *
 * Druid Connection Config
 *
 * DynamoDB Connection Config
 *
 * Glue Connection Config
 *
 * Hive SQL Connection Config
 *
 * Impala SQL Connection Config
 *
 * MariaDB Database Connection Config
 *
 * Mssql Database Connection Config
 *
 * Mysql Database Connection Config
 *
 * SQLite Database Connection Config
 *
 * Oracle Database Connection Config
 *
 * Postgres Database Connection Config
 *
 * Presto Database Connection Config
 *
 * Redshift  Connection Config
 *
 * Salesforce Connection Config
 *
 * SingleStore Database Connection Config
 *
 * Snowflake Connection Config
 *
 * Trino Connection Config
 *
 * Vertica Connection Config
 *
 * PinotDB Database Connection Config
 *
 * Datalake Connection Config
 *
 * Domo Database Connection Config
 *
 * Custom Database Service connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Sap Hana Database Connection Config
 *
 * MongoDB Connection Config
 *
 * Couchbase Connection Config
 *
 * Greenplum Database Connection Config
 */
export interface Connection {
    /**
     * Key-Value pairs that will be used to add configs to the SparkSession.
     */
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * GCP Credentials
     */
    credentials?: GCPCredentials;
    /**
     * BigQuery APIs URL.
     *
     * Host and port of the AzureSQL service.
     *
     * Host and port of the Clickhouse service.
     *
     * Host and port of the Databricks service.
     *
     * Host and port of the DB2 service.
     *
     * Host and port of the Druid service.
     *
     * Host and port of the Hive service.
     *
     * Host and port of the Impala service.
     *
     * Host and port of the MariaDB service.
     *
     * Host and port of the MSSQL service.
     *
     * Host and port of the MySQL service.
     *
     * Host and port of the SQLite service. Blank for in-memory database.
     *
     * Host and port of the Oracle service.
     *
     * Host and port of the source service.
     *
     * Host and port of the Presto service.
     *
     * Host and port of the Redshift service.
     *
     * Host and port of the SingleStore service.
     *
     * Host and port of the Trino service.
     *
     * Host and port of the Vertica service.
     *
     * Host and port of the PinotDB service.
     */
    hostPort?: string;
    /**
     * SQLAlchemy driver scheme options.
     *
     * Couchbase driver scheme options.
     */
    scheme?:                ConfigScheme;
    supportsDatabase?:      boolean;
    supportsDBTExtraction?: boolean;
    /**
     * Supports Lineage Extraction.
     */
    supportsLineageExtraction?:  boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    /**
     * Supports Usage Extraction.
     */
    supportsUsageExtraction?: boolean;
    /**
     * Taxonomy location used to fetch policy tags
     */
    taxonomyLocation?: string;
    /**
     * Project IDs used to fetch policy tags
     */
    taxonomyProjectID?: string[];
    /**
     * Service Type
     *
     * Custom database service type
     */
    type?: ConfigType;
    /**
     * Location used to query INFORMATION_SCHEMA.JOBS_BY_PROJECT to fetch usage data. You can
     * pass multi-regions, such as `us` or `eu`, or you specific region. Australia and Asia
     * multi-regions are not yet in GA.
     */
    usageLocation?: string;
    awsConfig?:     AWSCredentials;
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?: string;
    /**
     * S3 Staging Directory. Example: s3://postgres/input/
     */
    s3StagingDir?: string;
    /**
     * Athena workgroup.
     */
    workgroup?: string;
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     *
     * Database of the data source.
     *
     * Initial Redshift database to connect to. If you want to ingest all databases, set
     * ingestAllDatabases to true.
     */
    database?: string;
    /**
     * SQLAlchemy driver for AzureSQL.
     *
     * ODBC driver version in case of pyodbc connection.
     */
    driver?: string;
    /**
     * Ingest data from all databases in Azuresql. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Mssql. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Postgres. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Redshift. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Greenplum. You can use databaseFilterPattern on top of
     * this.
     */
    ingestAllDatabases?: boolean;
    /**
     * Password to connect to AzureSQL.
     *
     * Password to connect to Clickhouse.
     *
     * Password to connect to DB2.
     *
     * Password to connect to Druid.
     *
     * Password to connect to Hive.
     *
     * Password to connect to Impala.
     *
     * Password to connect to MariaDB.
     *
     * Password to connect to MSSQL.
     *
     * Password to connect to SQLite. Blank for in-memory database.
     *
     * Password to connect to Oracle.
     *
     * Password to connect to Presto.
     *
     * Password to connect to Redshift.
     *
     * Password to connect to the Salesforce.
     *
     * Password to connect to SingleStore.
     *
     * Password to connect to Snowflake.
     *
     * Password to connect to Vertica.
     *
     * password to connect  to the PinotDB.
     *
     * Password to connect to Couchbase.
     */
    password?: string;
    /**
     * Username to connect to AzureSQL. This user should have privileges to read the metadata.
     *
     * Username to connect to Clickhouse. This user should have privileges to read all the
     * metadata in Clickhouse.
     *
     * Username to connect to DB2. This user should have privileges to read all the metadata in
     * DB2.
     *
     * Username to connect to Druid. This user should have privileges to read all the metadata
     * in Druid.
     *
     * Username to connect to Hive. This user should have privileges to read all the metadata in
     * Hive.
     *
     * Username to connect to Impala. This user should have privileges to read all the metadata
     * in Impala.
     *
     * Username to connect to MariaDB. This user should have privileges to read all the metadata
     * in MariaDB.
     *
     * Username to connect to MSSQL. This user should have privileges to read all the metadata
     * in MsSQL.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     *
     * Username to connect to SQLite. Blank for in-memory database.
     *
     * Username to connect to Oracle. This user should have privileges to read all the metadata
     * in Oracle.
     *
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to Presto. This user should have privileges to read all the metadata
     * in Postgres.
     *
     * Username to connect to Redshift. This user should have privileges to read all the
     * metadata in Redshift.
     *
     * Username to connect to the Salesforce. This user should have privileges to read all the
     * metadata in Redshift.
     *
     * Username to connect to SingleStore. This user should have privileges to read all the
     * metadata in MySQL.
     *
     * Username to connect to Snowflake. This user should have privileges to read all the
     * metadata in Snowflake.
     *
     * Username to connect to Trino. This user should have privileges to read all the metadata
     * in Trino.
     *
     * Username to connect to Vertica. This user should have privileges to read all the metadata
     * in Vertica.
     *
     * username to connect  to the PinotDB. This user should have privileges to read all the
     * metadata in PinotDB.
     *
     * Username to connect to Couchbase. This user should have privileges to read all the
     * metadata in Couchbase.
     *
     * Username to connect to Greenplum. This user should have privileges to read all the
     * metadata in Greenplum.
     */
    username?: string;
    /**
     * Database Schema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     *
     * databaseSchema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single databaseSchema. When left blank, OpenMetadata
     * Ingestion attempts to scan all the databaseSchema.
     */
    databaseSchema?: string;
    /**
     * Clickhouse SQL connection duration.
     */
    duration?: number;
    /**
     * Use HTTPS Protocol for connection with clickhouse
     */
    https?: boolean;
    /**
     * Path to key file for establishing secure connection
     */
    keyfile?: string;
    /**
     * Establish secure connection with clickhouse
     */
    secure?: boolean;
    /**
     * Catalog of the data source(Example: hive_metastore). This is optional parameter, if you
     * would like to restrict the metadata reading to a single catalog. When left blank,
     * OpenMetadata Ingestion attempts to scan all the catalog.
     *
     * Presto catalog
     *
     * Catalog of the data source.
     */
    catalog?: string;
    /**
     * The maximum amount of time (in seconds) to wait for a successful connection to the data
     * source. If the connection attempt takes longer than this timeout period, an error will be
     * returned.
     */
    connectionTimeout?: number;
    /**
     * Databricks compute resources URL.
     */
    httpPath?: string;
    /**
     * Generated Token to connect to Databricks.
     */
    token?: string;
    /**
     * Use unity catalog for fetching the metadata instead of using the hive metastore
     */
    useUnityCatalog?: boolean;
    /**
     * pySpark App Name.
     */
    appName?: string;
    /**
     * Hive metastore service, local file path or metastore db.
     *
     * Hive Metastore Connection Details
     */
    metastoreConnection?: HiveMetastoreConnection;
    /**
     * Authentication mode to connect to hive.
     */
    auth?: AuthEnum;
    /**
     * Authentication options to pass to Hive connector. These options are based on SQLAlchemy.
     *
     * Authentication options to pass to Impala connector. These options are based on SQLAlchemy.
     */
    authOptions?: string;
    /**
     * If authenticating with Kerberos specify the Kerberos service name
     */
    kerberosServiceName?: string;
    /**
     * Authentication mode to connect to Impala.
     */
    authMechanism?: AuthMechanismEnum;
    /**
     * Establish secure connection with Impala
     */
    useSSL?: boolean;
    /**
     * Choose Auth Config Type.
     */
    authType?: AuthTypeClass;
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
    /**
     * How to run the SQLite database. :memory: by default.
     */
    databaseMode?: string;
    /**
     * This directory will be used to set the LD_LIBRARY_PATH env variable. It is required if
     * you need to enable thick connection mode. By default, we bring instant client 19 and
     * point to /instantclient.
     */
    instantClientDirectory?: string;
    /**
     * Connect with oracle by either passing service name or database schema name.
     */
    oracleConnectionType?: OracleConnectionType;
    /**
     * Custom OpenMetadata Classification name for Postgres policy tags.
     */
    classificationName?: string;
    sslConfig?:          Config;
    /**
     * SSL Mode to connect to postgres database.
     *
     * SSL Mode to connect to redshift database.
     *
     * SSL Mode to connect to Greenplum database.
     */
    sslMode?: SSLMode;
    /**
     * API version of the Salesforce instance
     */
    salesforceApiVersion?: string;
    /**
     * Domain of Salesforce instance
     */
    salesforceDomain?: string;
    /**
     * Salesforce Security Token.
     */
    securityToken?: string;
    /**
     * Salesforce Object Name.
     */
    sobjectName?: string;
    /**
     * If the Snowflake URL is https://xyz1234.us-east-1.gcp.snowflakecomputing.com, then the
     * account is xyz1234.us-east-1.gcp
     */
    account?: string;
    /**
     * Optional configuration for ingestion to keep the client session active in case the
     * ingestion process runs for longer durations.
     */
    clientSessionKeepAlive?: boolean;
    /**
     * Optional configuration for ingestion of TRANSIENT tables, By default, it will skip the
     * TRANSIENT tables.
     */
    includeTransientTables?: boolean;
    /**
     * Connection to Snowflake instance via Private Key
     */
    privateKey?: string;
    /**
     * Session query tag used to monitor usage on snowflake. To use a query tag snowflake user
     * should have enough privileges to alter the session.
     */
    queryTag?: string;
    /**
     * Snowflake Role.
     */
    role?: string;
    /**
     * Snowflake Passphrase Key used with Private Key
     */
    snowflakePrivatekeyPassphrase?: string;
    /**
     * Snowflake warehouse.
     */
    warehouse?: string;
    /**
     * Proxies for the connection to Trino data source
     */
    proxies?: { [key: string]: string };
    /**
     * Pinot Broker Host and Port of the data source.
     */
    pinotControllerHost?: string;
    /**
     * Bucket Name of the data source.
     */
    bucketName?: string;
    /**
     * Available sources to fetch files.
     */
    configSource?: DataLakeConfigurationSource;
    /**
     * Prefix of the data source.
     */
    prefix?: string;
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
     * Secret Token to connect DOMO
     */
    secretToken?: string;
    /**
     * Source Python Class Name to instantiated by the ingestion workflow
     */
    sourcePythonClass?: string;
    /**
     * Choose between Database connection or HDB User Store connection.
     */
    connection?: SAPHanaConnection;
    /**
     * MongoDB Connection Details.
     */
    connectionDetails?: MongoDBConnectionDetails;
    /**
     * Couchbase connection Bucket options.
     */
    bucket?: string;
    /**
     * Hostname of the Couchbase service.
     */
    hostport?: string;
}

/**
 * Authentication mode to connect to hive.
 */
export enum AuthEnum {
    Basic = "BASIC",
    Custom = "CUSTOM",
    Gssapi = "GSSAPI",
    Jwt = "JWT",
    Kerberos = "KERBEROS",
    LDAP = "LDAP",
    None = "NONE",
    Nosasl = "NOSASL",
    Plain = "PLAIN",
}

/**
 * Authentication mode to connect to Impala.
 */
export enum AuthMechanismEnum {
    Gssapi = "GSSAPI",
    Jwt = "JWT",
    LDAP = "LDAP",
    Nosasl = "NOSASL",
    Plain = "PLAIN",
}

/**
 * Choose Auth Config Type.
 *
 * Common Database Connection Config
 *
 * IAM Auth Database Connection Config
 */
export interface AuthTypeClass {
    /**
     * Password to connect to source.
     */
    password?:  string;
    awsConfig?: AWSCredentials;
    /**
     * JWT to connect to source.
     */
    jwt?: string;
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
 * Available sources to fetch files.
 *
 * Local config source where no extra information needs to be sent.
 *
 * Azure Datalake Storage will ingest files in container
 *
 * DataLake GCS storage will ingest metadata of files
 *
 * DataLake S3 bucket will ingest metadata of files in bucket
 */
export interface DataLakeConfigurationSource {
    securityConfig?: Credentials;
}

/**
 * Azure Datalake Credentials
 *
 * GCP Credentials
 *
 * GCP credentials configs.
 *
 * AWS credentials configs.
 */
export interface Credentials {
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
 * Choose between Database connection or HDB User Store connection.
 *
 * Options to connect to SAP Hana by passing the database information
 *
 * Use HDB User Store to avoid entering connection-related information manually. This store
 * needs to be present on the client running the ingestion.
 */
export interface SAPHanaConnection {
    /**
     * Database of the data source.
     */
    database?: string;
    /**
     * Database Schema of the data source. This is an optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     */
    databaseSchema?: string;
    /**
     * Host and port of the Hana service.
     */
    hostPort?: string;
    /**
     * Password to connect to Hana.
     */
    password?: string;
    /**
     * Username to connect to Hana. This user should have privileges to read all the metadata.
     */
    username?: string;
    /**
     * HDB Store User Key generated from the command `hdbuserstore SET <KEY> <host:port>
     * <USERNAME> <PASSWORD>`
     */
    userKey?: string;
}

/**
 * MongoDB Connection Details.
 *
 * Azure Datalake Storage will ingest files in container
 */
export interface MongoDBConnectionDetails {
    connectionOptions?: { [key: string]: string };
    /**
     * Host and port of the MongoDB service.
     */
    hostPort?: string;
    /**
     * Password to connect to MongoDB.
     */
    password?: string;
    /**
     * Mongo connection scheme options.
     */
    scheme?: MongoDBScheme;
    /**
     * Username to connect to MongoDB. This user should have privileges to read all the metadata
     * in MongoDB.
     */
    username?: string;
    /**
     * Connection URI to connect to your MongoDB cluster
     */
    connectionURI?: string;
    [property: string]: any;
}

/**
 * Mongo connection scheme options.
 */
export enum MongoDBScheme {
    Mongodb = "mongodb",
    MongodbSrv = "mongodb+srv",
}

/**
 * GCP Credentials
 *
 * GCP credentials configs.
 */
export interface GCPCredentials {
    /**
     * We support two ways of authenticating to GCP i.e via GCP Credentials Values or GCP
     * Credentials Path
     */
    gcpConfig: GCPCredentialsValues | string;
    /**
     * we enable the authenticated service account to impersonate another service account
     */
    gcpImpersonateServiceAccount?: GCPImpersonateServiceAccountValues;
}

/**
 * Hive metastore service, local file path or metastore db.
 *
 * Hive Metastore Connection Details
 *
 * Postgres Database Connection Config
 *
 * Mysql Database Connection Config
 */
export interface HiveMetastoreConnection {
    /**
     * Thrift connection to the metastore service. E.g., localhost:9083
     */
    metastoreHostPort?: string;
    /**
     * Driver class name for JDBC metastore. The value will be mapped as
     * spark.hadoop.javax.jdo.option.ConnectionDriverName sparks property. E.g.,
     * org.mariadb.jdbc.Driver
     */
    driverName?: string;
    /**
     * Class path to JDBC driver required for JDBC connection. The value will be mapped as
     * sparks.driver.extraClassPath sparks property.
     */
    jdbcDriverClassPath?: string;
    /**
     * JDBC connection to the metastore database. E.g., jdbc:mysql://localhost:3306/demo_hive
     */
    metastoreDb?: string;
    /**
     * Password to use against metastore database. The value will be mapped as
     * spark.hadoop.javax.jdo.option.ConnectionPassword sparks property.
     */
    password?: string;
    /**
     * Username to use against metastore database. The value will be mapped as
     * spark.hadoop.javax.jdo.option.ConnectionUserName sparks property.
     *
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     */
    username?: string;
    /**
     * Local path for the local file with metastore data. E.g., /tmp/metastore.db
     */
    metastoreFilePath?: string;
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
    scheme?:    MetastoreConnectionScheme;
    sslConfig?: Config;
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
    type?: MetastoreConnectionType;
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
    [property: string]: any;
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
export enum MetastoreConnectionScheme {
    MysqlPymysql = "mysql+pymysql",
    PgspiderPsycopg2 = "pgspider+psycopg2",
    PostgresqlPsycopg2 = "postgresql+psycopg2",
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
 *
 * SSL Mode to connect to redshift database.
 *
 * SSL Mode to connect to Greenplum database.
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
export enum MetastoreConnectionType {
    Mysql = "Mysql",
    Postgres = "Postgres",
}

/**
 * Connect with oracle by either passing service name or database schema name.
 */
export interface OracleConnectionType {
    /**
     * databaseSchema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single databaseSchema. When left blank, OpenMetadata
     * Ingestion attempts to scan all the databaseSchema.
     */
    databaseSchema?: string;
    /**
     * The Oracle Service name is the TNS alias that you give when you remotely connect to your
     * database.
     */
    oracleServiceName?: string;
    /**
     * Pass the full constructed TNS string, e.g.,
     * (DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=myhost)(PORT=1530)))(CONNECT_DATA=(SID=MYSERVICENAME))).
     */
    oracleTNSConnection?: string;
    [property: string]: any;
}

/**
 * SQLAlchemy driver scheme options.
 *
 * Couchbase driver scheme options.
 */
export enum ConfigScheme {
    AwsathenaREST = "awsathena+rest",
    Bigquery = "bigquery",
    ClickhouseHTTP = "clickhouse+http",
    ClickhouseNative = "clickhouse+native",
    Couchbase = "couchbase",
    DatabricksConnector = "databricks+connector",
    Db2IBMDB = "db2+ibm_db",
    Druid = "druid",
    Hana = "hana",
    Hive = "hive",
    HiveHTTP = "hive+http",
    HiveHTTPS = "hive+https",
    Impala = "impala",
    Impala4 = "impala4",
    MssqlPymssql = "mssql+pymssql",
    MssqlPyodbc = "mssql+pyodbc",
    MssqlPytds = "mssql+pytds",
    MysqlPymysql = "mysql+pymysql",
    OracleCxOracle = "oracle+cx_oracle",
    PgspiderPsycopg2 = "pgspider+psycopg2",
    Pinot = "pinot",
    PinotHTTP = "pinot+http",
    PinotHTTPS = "pinot+https",
    PostgresqlPsycopg2 = "postgresql+psycopg2",
    Presto = "presto",
    RedshiftPsycopg2 = "redshift+psycopg2",
    Snowflake = "snowflake",
    SqlitePysqlite = "sqlite+pysqlite",
    Trino = "trino",
    VerticaVerticaPython = "vertica+vertica_python",
}

/**
 * Service Type
 *
 * Service type.
 *
 * service type
 *
 * Custom database service type
 */
export enum ConfigType {
    Athena = "Athena",
    AzureSQL = "AzureSQL",
    BigQuery = "BigQuery",
    Clickhouse = "Clickhouse",
    Couchbase = "Couchbase",
    CustomDatabase = "CustomDatabase",
    Databricks = "Databricks",
    Datalake = "Datalake",
    Db2 = "Db2",
    DeltaLake = "DeltaLake",
    DomoDatabase = "DomoDatabase",
    Druid = "Druid",
    DynamoDB = "DynamoDB",
    Glue = "Glue",
    Greenplum = "Greenplum",
    Hive = "Hive",
    Impala = "Impala",
    MariaDB = "MariaDB",
    MongoDB = "MongoDB",
    Mssql = "Mssql",
    Mysql = "Mysql",
    Oracle = "Oracle",
    PinotDB = "PinotDB",
    Postgres = "Postgres",
    Presto = "Presto",
    Redshift = "Redshift",
    SQLite = "SQLite",
    Salesforce = "Salesforce",
    SapHana = "SapHana",
    SingleStore = "SingleStore",
    Snowflake = "Snowflake",
    Trino = "Trino",
    Vertica = "Vertica",
}

/**
 * Owner of this database service.
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
 * Type of database service such as MySQL, BigQuery, Snowflake, Redshift, Postgres...
 */
export enum DatabaseServiceType {
    Athena = "Athena",
    AzureSQL = "AzureSQL",
    BigQuery = "BigQuery",
    Clickhouse = "Clickhouse",
    Couchbase = "Couchbase",
    CustomDatabase = "CustomDatabase",
    Databricks = "Databricks",
    Datalake = "Datalake",
    Db2 = "Db2",
    Dbt = "Dbt",
    DeltaLake = "DeltaLake",
    DomoDatabase = "DomoDatabase",
    Druid = "Druid",
    DynamoDB = "DynamoDB",
    Glue = "Glue",
    Greenplum = "Greenplum",
    Hive = "Hive",
    Impala = "Impala",
    MariaDB = "MariaDB",
    MongoDB = "MongoDB",
    Mssql = "Mssql",
    Mysql = "Mysql",
    Oracle = "Oracle",
    PinotDB = "PinotDB",
    Postgres = "Postgres",
    Presto = "Presto",
    QueryLog = "QueryLog",
    Redshift = "Redshift",
    SQLite = "SQLite",
    Salesforce = "Salesforce",
    SapHana = "SapHana",
    SingleStore = "SingleStore",
    Snowflake = "Snowflake",
    Trino = "Trino",
    Vertica = "Vertica",
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
