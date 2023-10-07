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
 * Qlik Sense Connection Config
 */
export interface QlikSenseConnection {
    certificates: QlikCertificatesBy;
    /**
     * Qlik Sense Base URL, used for genrating dashboard & chat url
     */
    displayUrl?: string;
    /**
     * URL for the superset instance.
     */
    hostPort:                    string;
    supportsMetadataExtraction?: boolean;
    /**
     * Service Type
     */
    type?: QlikSenseType;
    /**
     * User Directory.
     */
    userDirectory?: string;
    /**
     * User ID.
     */
    userId?: string;
}

/**
 * Qlik Authentication Certificate By Values
 *
 * Qlik Authentication Certificate File Path
 */
export interface QlikCertificatesBy {
    /**
     * Client Certificate
     */
    clientCertificateData?: string;
    /**
     * Client Key Certificate.
     */
    clientKeyCertificateData?: string;
    /**
     * Root Certificate.
     */
    rootCertificateData?: string;
    /**
     * Staging Directory Path
     */
    stagingDir?: string;
    /**
     * Client Certificate
     */
    clientCertificate?: string;
    /**
     * Client Key Certificate.
     */
    clientKeyCertificate?: string;
    /**
     * Root Certificate.
     */
    rootCertificate?: string;
    [property: string]: any;
}

/**
 * Service Type
 *
 * Qlik sense service type
 */
export enum QlikSenseType {
    QlikSense = "QlikSense",
}
