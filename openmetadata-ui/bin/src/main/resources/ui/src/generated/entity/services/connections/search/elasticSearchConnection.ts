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
 * ElasticSearch Connection.
 */
export interface ElasticSearchConnection {
    /**
     * Choose Auth Config Type.
     */
    authType?: AuthConfigurationType;
    /**
     * Path to CA Cert File
     */
    caCert?:              string;
    connectionArguments?: { [key: string]: any };
    /**
     * Connection Timeout in Seconds
     */
    connectionTimeoutSecs?: number;
    /**
     * Host and port of the ElasticSearch service.
     */
    hostPort?:                   string;
    supportsMetadataExtraction?: boolean;
    /**
     * ElasticSearch Type
     */
    type?: ElasticSearchType;
}

/**
 * Choose Auth Config Type.
 */
export interface AuthConfigurationType {
    /**
     * Elastic Search Password for Login
     */
    password?: string;
    /**
     * Elastic Search Username for Login
     */
    username?: string;
    /**
     * Elastic Search API Key for API Authentication
     */
    apiKey?: string;
    /**
     * Elastic Search API Key ID for API Authentication
     */
    apiKeyId?: string;
    [property: string]: any;
}

/**
 * ElasticSearch Type
 *
 * ElasticSearch service type
 */
export enum ElasticSearchType {
    ElasticSearch = "ElasticSearch",
}
