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
 * Azure Datalake Storage will ingest files in container
 */
export interface MongoDBValues {
    connectionOptions?: { [key: string]: string };
    /**
     * Host and port of the MongoDB service.
     */
    hostPort: string;
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
}

/**
 * Mongo connection scheme options.
 */
export enum MongoDBScheme {
    Mongodb = "mongodb",
    MongodbSrv = "mongodb+srv",
}
