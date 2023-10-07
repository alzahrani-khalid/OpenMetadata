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
 * DatabaseService Metadata Pipeline Configuration.
 */
export interface DatabaseServiceMetadataPipeline {
    /**
     * Regex to only fetch databases that matches the pattern.
     */
    databaseFilterPattern?: FilterPattern;
    /**
     * Optional configuration to toggle the Stored Procedures ingestion.
     */
    includeStoredProcedures?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for tables.
     */
    includeTables?: boolean;
    /**
     * Optional configuration to toggle the tags ingestion.
     */
    includeTags?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for views.
     */
    includeViews?: boolean;
    /**
     * This is an optional configuration for enabling soft deletion of tables. When this option
     * is enabled, only tables that have been deleted from the source will be soft deleted, and
     * this will apply solely to the schema that is currently being ingested via the pipeline.
     * Any related entities such as test suites or lineage information that were associated with
     * those tables will also be deleted.
     */
    markDeletedTables?: boolean;
    /**
     * Configuration to tune how far we want to look back in query logs to process Stored
     * Procedures results.
     */
    queryLogDuration?: number;
    /**
     * Configuration to set the timeout for parsing the query in seconds.
     */
    queryParsingTimeoutLimit?: number;
    /**
     * Regex to only fetch tables or databases that matches the pattern.
     */
    schemaFilterPattern?: FilterPattern;
    /**
     * Regex exclude tables or databases that matches the pattern.
     */
    tableFilterPattern?: FilterPattern;
    /**
     * Pipeline type
     */
    type?: DatabaseMetadataConfigType;
    /**
     * Regex will be applied on fully qualified name (e.g
     * service_name.db_name.schema_name.table_name) instead of raw name (e.g. table_name)
     */
    useFqnForFiltering?: boolean;
}

/**
 * Regex to only fetch databases that matches the pattern.
 *
 * Regex to only fetch dashboards or charts that matches the pattern.
 *
 * Regex to only fetch tables or databases that matches the pattern.
 *
 * Regex exclude tables or databases that matches the pattern.
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
 * Database Source Config Metadata Pipeline type
 */
export enum DatabaseMetadataConfigType {
    DatabaseMetadata = "DatabaseMetadata",
}
