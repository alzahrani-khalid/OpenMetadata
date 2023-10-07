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
 * DBT Catalog, Manifest and Run Results files in Azure bucket. We will search for
 * catalog.json, manifest.json and run_results.json.
 */
export interface DbtAzureConfig {
    /**
     * Details of the bucket where the dbt files are stored
     */
    dbtPrefixConfig?:   DBTPrefixConfig;
    dbtSecurityConfig?: AzureCredentials;
    [property: string]: any;
}

/**
 * Details of the bucket where the dbt files are stored
 */
export interface DBTPrefixConfig {
    /**
     * Name of the bucket where the dbt files are stored
     */
    dbtBucketName?: string;
    /**
     * Path of the folder where the dbt files are stored
     */
    dbtObjectPrefix?: string;
}

/**
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
