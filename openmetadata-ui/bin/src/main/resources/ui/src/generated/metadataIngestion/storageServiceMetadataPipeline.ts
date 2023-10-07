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
 * StorageService Metadata Pipeline Configuration.
 */
export interface StorageServiceMetadataPipeline {
    /**
     * Regex to only fetch containers that matches the pattern.
     */
    containerFilterPattern?:      FilterPattern;
    storageMetadataConfigSource?: StorageMetadataConfigurationSource;
    /**
     * Pipeline type
     */
    type?: StorageMetadataConfigType;
}

/**
 * Regex to only fetch containers that matches the pattern.
 *
 * Regex to only fetch dashboards or charts that matches the pattern.
 */
export interface FilterPattern {
    /**
     * List of strings/regex patterns to match and exclude only database entities that match.
     */
    excludes?: string[];
    /**
     * List of strings/regex patterns to match and include only database entities that match.
     */
    includes?: string[];
}

/**
 * No manifest file available. Ingestion would look for bucket-level metadata file instead
 *
 * Storage Metadata Manifest file path config.
 *
 * Storage Metadata Manifest file HTTP path config.
 *
 * Storage Metadata Manifest file S3 path config.
 *
 * Storage Metadata Manifest file ADLS path config.
 */
export interface StorageMetadataConfigurationSource {
    /**
     * Storage Metadata manifest file path to extract locations to ingest from.
     */
    manifestFilePath?: string;
    /**
     * Storage Metadata manifest http file path to extract locations to ingest from.
     */
    manifestHttpPath?: string;
    prefixConfig?:     StorageMetadataBucketDetails;
    securityConfig?:   Credentials;
}

/**
 * Details of the bucket where the storage metadata manifest file is stored
 */
export interface StorageMetadataBucketDetails {
    /**
     * Name of the top level container where the storage metadata file is stored
     */
    containerName: string;
    /**
     * Path of the folder where the storage metadata file is stored. If the file is at the root,
     * you can keep it empty.
     */
    objectPrefix?: string;
}

/**
 * AWS credentials configs.
 *
 * Azure Datalake Credentials
 */
export interface Credentials {
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
    awsRegion?: string;
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
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
}

/**
 * Pipeline type
 *
 * Object Store Source Config Metadata Pipeline type
 */
export enum StorageMetadataConfigType {
    StorageMetadata = "StorageMetadata",
}
