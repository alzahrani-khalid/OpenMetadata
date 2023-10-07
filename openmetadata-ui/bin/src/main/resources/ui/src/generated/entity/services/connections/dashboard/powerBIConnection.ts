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
 * PowerBI Connection Config
 */
export interface PowerBIConnection {
    /**
     * Authority URI for the PowerBI service.
     */
    authorityURI?: string;
    /**
     * client_id for PowerBI.
     */
    clientId: string;
    /**
     * clientSecret for PowerBI.
     */
    clientSecret: string;
    /**
     * Dashboard URL for PowerBI service.
     */
    hostPort?: string;
    /**
     * Entity Limit set here will be used to paginate the PowerBi APIs
     */
    pagination_entity_per_page?: number;
    /**
     * PowerBI secrets.
     */
    scope?:                      string[];
    supportsMetadataExtraction?: boolean;
    /**
     * Tenant ID for PowerBI.
     */
    tenantId: string;
    /**
     * Service Type
     */
    type?: PowerBIType;
    /**
     * Fetch the PowerBI metadata using admin APIs
     */
    useAdminApis?: boolean;
}

/**
 * Service Type
 *
 * PowerBI service type
 */
export enum PowerBIType {
    PowerBI = "PowerBI",
}
