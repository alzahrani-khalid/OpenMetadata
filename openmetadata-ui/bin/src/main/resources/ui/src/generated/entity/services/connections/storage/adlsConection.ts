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
 * ADLS Connection.
 */
export interface AdlsConection {
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Azure Credentials
     */
    credentials:                 AzureCredentials;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     */
    type?: AzureType;
}

/**
 * Azure Credentials
 *
 * Azure Datalake Credentials
 */
export interface AzureCredentials {
    /**
     * Account Name of your storage account
     */
    accountName: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId: string;
}

/**
 * Service Type
 *
 * ADLS service type
 */
export enum AzureType {
    Adls = "ADLS",
}
