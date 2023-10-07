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
 * Redshift  Connection Config
 */
export interface RedshiftConnection {
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Initial Redshift database to connect to. If you want to ingest all databases, set
     * ingestAllDatabases to true.
     */
    database: string;
    /**
     * Host and port of the Redshift service.
     */
    hostPort: string;
    /**
     * Ingest data from all databases in Redshift. You can use databaseFilterPattern on top of
     * this.
     */
    ingestAllDatabases?: boolean;
    /**
     * Password to connect to Redshift.
     */
    password?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:    RedshiftScheme;
    sslConfig?: Config;
    /**
     * SSL Mode to connect to redshift database.
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
    type?: RedshiftType;
    /**
     * Username to connect to Redshift. This user should have privileges to read all the
     * metadata in Redshift.
     */
    username: string;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum RedshiftScheme {
    RedshiftPsycopg2 = "redshift+psycopg2",
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
 * SSL Mode to connect to redshift database.
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
export enum RedshiftType {
    Redshift = "Redshift",
}
