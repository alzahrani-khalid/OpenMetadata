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
 * SingleStore Database Connection Config
 */
export interface SingleStoreConnection {
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
     * Host and port of the SingleStore service.
     */
    hostPort: string;
    /**
     * Password to connect to SingleStore.
     */
    password?: string;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:                     SingleStoreScheme;
    supportsDBTExtraction?:      boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    /**
     * Service Type
     */
    type?: SingleStoreType;
    /**
     * Username to connect to SingleStore. This user should have privileges to read all the
     * metadata in MySQL.
     */
    username: string;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum SingleStoreScheme {
    MysqlPymysql = "mysql+pymysql",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum SingleStoreType {
    SingleStore = "SingleStore",
}
