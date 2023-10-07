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
 * MongoDB Connection Config
 */
export interface MongoDBConnection {
    /**
     * MongoDB Connection Details.
     */
    connectionDetails?: MongoDBConnectionDetails;
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?:               string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     */
    type?: MongoDBType;
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
 * Service Type
 *
 * Service type.
 */
export enum MongoDBType {
    MongoDB = "MongoDB",
}
