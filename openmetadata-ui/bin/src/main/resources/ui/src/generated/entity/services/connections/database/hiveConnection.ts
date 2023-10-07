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
 * Hive SQL Connection Config
 */
export interface HiveConnection {
    /**
     * Authentication mode to connect to hive.
     */
    auth?: AuthenticationMode;
    /**
     * Authentication options to pass to Hive connector. These options are based on SQLAlchemy.
     */
    authOptions?:         string;
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
     * Host and port of the Hive service.
     */
    hostPort: string;
    /**
     * If authenticating with Kerberos specify the Kerberos service name
     */
    kerberosServiceName?: string;
    /**
     * Hive Metastore Connection Details
     */
    metastoreConnection?: HiveMetastoreConnectionDetails;
    /**
     * Password to connect to Hive.
     */
    password?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:                     HiveScheme;
    supportsDBTExtraction?:      boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    /**
     * Service Type
     */
    type?: HiveType;
    /**
     * Username to connect to Hive. This user should have privileges to read all the metadata in
     * Hive.
     */
    username?: string;
}

/**
 * Authentication mode to connect to hive.
 */
export enum AuthenticationMode {
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
 * Hive Metastore Connection Details
 *
 * Postgres Database Connection Config
 *
 * Mysql Database Connection Config
 */
export interface HiveMetastoreConnectionDetails {
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
    scheme?:    Scheme;
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
    type?: Type;
    /**
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     */
    username?: string;
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
    Mysql = "Mysql",
    Postgres = "Postgres",
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum HiveScheme {
    Hive = "hive",
    HiveHTTP = "hive+http",
    HiveHTTPS = "hive+https",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum HiveType {
    Hive = "Hive",
}
