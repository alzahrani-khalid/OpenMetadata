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
 * GCP credentials configs.
 */
export interface GcpCredentials {
    /**
     * We support two ways of authenticating to GCP i.e via GCP Credentials Values or GCP
     * Credentials Path
     */
    gcpConfig: GCPCredentialsValues | string;
    /**
     * we enable the authenticated service account to impersonate another service account
     */
    gcpImpersonateServiceAccount?: GCPImpersonateServiceAccountValues;
}

/**
 * Pass the raw credential values provided by GCP
 */
export interface GCPCredentialsValues {
    /**
     * Google Cloud auth provider certificate.
     */
    authProviderX509CertUrl?: string;
    /**
     * Google Cloud auth uri.
     */
    authUri?: string;
    /**
     * Google Cloud email.
     */
    clientEmail?: string;
    /**
     * Google Cloud Client ID.
     */
    clientId?: string;
    /**
     * Google Cloud client certificate uri.
     */
    clientX509CertUrl?: string;
    /**
     * Google Cloud private key.
     */
    privateKey?: string;
    /**
     * Google Cloud private key id.
     */
    privateKeyId?: string;
    /**
     * Project ID
     */
    projectId?: string[] | string;
    /**
     * Google Cloud token uri.
     */
    tokenUri?: string;
    /**
     * Google Cloud Platform account type.
     */
    type?: string;
}

/**
 * we enable the authenticated service account to impersonate another service account
 *
 * Pass the values to impersonate a service account of Google Cloud
 */
export interface GCPImpersonateServiceAccountValues {
    /**
     * The impersonated service account email
     */
    impersonateServiceAccount?: string;
    /**
     * Number of seconds the delegated credential should be valid
     */
    lifetime?: number;
    [property: string]: any;
}
