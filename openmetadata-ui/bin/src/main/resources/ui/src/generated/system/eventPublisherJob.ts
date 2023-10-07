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
 * This schema defines Event Publisher Job.
 */
export interface EventPublisherJob {
    /**
     * Provide After in case of failure to start reindexing after the issue is solved
     */
    afterCursor?: string;
    /**
     * Maximum number of events sent in a batch (Default 10).
     */
    batchSize?: number;
    endTime?:   number;
    /**
     * List of Entities to Reindex
     */
    entities?: string[];
    /**
     * List of Failures in the Job
     */
    failure?: Failure;
    /**
     * Unique identifier of the Job.
     */
    id: string;
    /**
     * Name of the result
     */
    name?:          string;
    publisherType?: PublisherType;
    /**
     * This schema publisher run modes.
     */
    recreateIndex?: boolean;
    runMode:        RunMode;
    /**
     * Recreate Indexes with updated Language
     */
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * Job started by
     */
    startedBy?: string;
    startTime?: number;
    stats?:     Stats;
    /**
     * This schema publisher run job status.
     */
    status:    Status;
    timestamp: number;
}

/**
 * List of Failures in the Job
 */
export interface Failure {
    jobError?:       JobError;
    processorError?: ProcessorError;
    sinkError?:      SinkError;
    sourceError?:    SourceError;
}

/**
 * Failure details are set only when `status` is not `success`.
 */
export interface JobError {
    /**
     * Additional Context for Failure.
     */
    context?: string;
    /**
     * Last non-successful callback time in UNIX UTC epoch time in milliseconds.
     */
    lastFailedAt?: number;
    /**
     * Last non-successful activity response reason received during callback.
     */
    lastFailedReason?: string;
}

/**
 * Failure details are set only when `status` is not `success`.
 */
export interface ProcessorError {
    /**
     * Additional Context for Failure.
     */
    context?: string;
    /**
     * Last non-successful callback time in UNIX UTC epoch time in milliseconds.
     */
    lastFailedAt?: number;
    /**
     * Last non-successful activity response reason received during callback.
     */
    lastFailedReason?: string;
}

/**
 * Failure details are set only when `status` is not `success`.
 */
export interface SinkError {
    /**
     * Additional Context for Failure.
     */
    context?: string;
    /**
     * Last non-successful callback time in UNIX UTC epoch time in milliseconds.
     */
    lastFailedAt?: number;
    /**
     * Last non-successful activity response reason received during callback.
     */
    lastFailedReason?: string;
}

/**
 * Failure details are set only when `status` is not `success`.
 */
export interface SourceError {
    /**
     * Additional Context for Failure.
     */
    context?: string;
    /**
     * Last non-successful callback time in UNIX UTC epoch time in milliseconds.
     */
    lastFailedAt?: number;
    /**
     * Last non-successful activity response reason received during callback.
     */
    lastFailedReason?: string;
}

/**
 * This schema event Publisher Types
 */
export enum PublisherType {
    ElasticSearch = "elasticSearch",
    Kafka = "kafka",
}

/**
 * This schema publisher run modes.
 */
export enum RunMode {
    Batch = "batch",
    Stream = "stream",
}

/**
 * Recreate Indexes with updated Language
 *
 * This schema defines the language options available for search index mappings.
 */
export enum SearchIndexMappingLanguage {
    En = "EN",
    Jp = "JP",
    Zh = "ZH",
}

export interface Stats {
    jobStats?:       StepStats;
    processorStats?: StepStats;
    sinkStats?:      StepStats;
    sourceStats?:    StepStats;
}

/**
 * Stats for Different Steps Reader, Processor, Writer.
 */
export interface StepStats {
    /**
     * Count of Total Failed Records
     */
    failedRecords?: number;
    /**
     * Records that are processed in
     */
    processedRecords?: number;
    /**
     * Count of Total Successfully Records
     */
    successRecords?: number;
    /**
     * Count of Total Failed Records
     */
    totalRecords?: number;
}

/**
 * This schema publisher run job status.
 */
export enum Status {
    Active = "ACTIVE",
    ActiveWithError = "ACTIVE_WITH_ERROR",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Running = "RUNNING",
    Started = "STARTED",
    Stopped = "STOPPED",
}
