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
 * PipelineService Metadata Pipeline Configuration.
 */
export interface PipelineServiceMetadataPipeline {
    /**
     * List of Database Service Names for creation of lineage
     */
    dbServiceNames?: string[];
    /**
     * Optional configuration to turn off fetching lineage from pipelines.
     */
    includeLineage?: boolean;
    /**
     * Set the 'Include Owners' toggle to control whether to include owners to the ingested
     * entity if the owner email matches with a user stored in the OM server as part of metadata
     * ingestion. If the ingested entity already exists and has an owner, the owner will not be
     * overwritten.
     */
    includeOwners?: boolean;
    /**
     * Optional configuration to toggle the tags ingestion.
     */
    includeTags?: boolean;
    /**
     * Optional configuration to soft delete Pipelines in OpenMetadata if the source Pipelines
     * are deleted. Also, if the Pipeline is deleted, all the associated entities like lineage,
     * etc., with that Pipeline will be deleted
     */
    markDeletedPipelines?: boolean;
    /**
     * Regex exclude pipelines.
     */
    pipelineFilterPattern?: FilterPattern;
    /**
     * Pipeline type
     */
    type?: PipelineMetadataConfigType;
}

/**
 * Regex exclude pipelines.
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
 * Pipeline type
 *
 * Pipeline Source Config Metadata Pipeline type
 */
export enum PipelineMetadataConfigType {
    PipelineMetadata = "PipelineMetadata",
}
