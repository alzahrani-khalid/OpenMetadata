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
 * Mssql Database Connection Config
 */
export interface MssqlConnection {
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     */
    database: string;
    /**
     * ODBC driver version in case of pyodbc connection.
     */
    driver?: string;
    /**
     * Host and port of the MSSQL service.
     */
    hostPort?: string;
    /**
     * Ingest data from all databases in Mssql. You can use databaseFilterPattern on top of this.
     */
    ingestAllDatabases?: boolean;
    /**
     * Password to connect to MSSQL.
     */
    password?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:                     MssqlScheme;
    supportsDatabase?:           boolean;
    supportsDBTExtraction?:      boolean;
    supportsLineageExtraction?:  boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsUsageExtraction?:    boolean;
    /**
     * Service Type
     */
    type?: MssqlType;
    /**
     * Username to connect to MSSQL. This user should have privileges to read all the metadata
     * in MsSQL.
     */
    username?: string;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum MssqlScheme {
    MssqlPymssql = "mssql+pymssql",
    MssqlPyodbc = "mssql+pyodbc",
    MssqlPytds = "mssql+pytds",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum MssqlType {
    Mssql = "Mssql",
}
