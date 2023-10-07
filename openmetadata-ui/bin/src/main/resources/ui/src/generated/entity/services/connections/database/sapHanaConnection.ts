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
 * Sap Hana Database Connection Config
 */
export interface SapHanaConnection {
    /**
     * Choose between Database connection or HDB User Store connection.
     */
    connection:           SAPHanaConnection;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:                     SapHanaScheme;
    supportsDBTExtraction?:      boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    /**
     * Service Type
     */
    type?: SapHanaType;
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
 * SQLAlchemy driver scheme options.
 */
export enum SapHanaScheme {
    Hana = "hana",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum SapHanaType {
    SapHana = "SapHana",
}
