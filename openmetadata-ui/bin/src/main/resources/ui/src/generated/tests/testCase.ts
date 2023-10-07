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
 * Test case is a test definition to capture data quality tests against tables, columns, and
 * other data assets.
 */
export interface TestCase {
    /**
     * Change that lead to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Description of the testcase.
     */
    description?: string;
    /**
     * Display Name that identifies this test.
     */
    displayName?: string;
    entityFQN?:   string;
    entityLink:   string;
    /**
     * FullyQualifiedName same as `name`.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier of this table instance.
     */
    id?: string;
    /**
     * Name that identifies this test case.
     */
    name: string;
    /**
     * Owner of this Pipeline.
     */
    owner?:           EntityReference;
    parameterValues?: TestCaseParameterValue[];
    testCaseResult?:  TestCaseResult;
    testDefinition:   EntityReference;
    testSuite:        EntityReference;
    testSuites?:      TestSuite[];
    /**
     * Last update time corresponding to the new version of the entity in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
    /**
     * Metadata version of the entity.
     */
    version?: number;
}

/**
 * Change that lead to this version of the entity.
 *
 * Description of the change.
 */
export interface ChangeDescription {
    /**
     * Names of fields added during the version changes.
     */
    fieldsAdded?: FieldChange[];
    /**
     * Fields deleted during the version changes with old value before deleted.
     */
    fieldsDeleted?: FieldChange[];
    /**
     * Fields modified during the version changes with old and new values.
     */
    fieldsUpdated?: FieldChange[];
    /**
     * When a change did not result in change, this could be same as the current version.
     */
    previousVersion?: number;
}

export interface FieldChange {
    /**
     * Name of the entity field that changed.
     */
    name?: string;
    /**
     * New value of the field. Note that this is a JSON string and use the corresponding field
     * type to deserialize it.
     */
    newValue?: any;
    /**
     * Previous value of the field. Note that this is a JSON string and use the corresponding
     * field type to deserialize it.
     */
    oldValue?: any;
}

/**
 * Owner of this Pipeline.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Entity reference the test suite is executed against. Only applicable if the test suite is
 * executable.
 *
 * Owner of this TestCase definition.
 *
 * References to pipelines deployed for this database service to extract metadata, usage,
 * lineage etc..
 *
 * This schema defines the EntityReferenceList type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 */
export interface EntityReference {
    /**
     * If true the entity referred to has been soft-deleted.
     */
    deleted?: boolean;
    /**
     * Optional description of entity.
     */
    description?: string;
    /**
     * Display Name that identifies this entity.
     */
    displayName?: string;
    /**
     * Fully qualified name of the entity instance. For entities such as tables, databases
     * fullyQualifiedName is returned in this field. For entities that don't have name hierarchy
     * such as `user` and `team` this will be same as the `name` field.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the entity resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * Name of the entity instance.
     */
    name?: string;
    /**
     * Entity type/class name - Examples: `database`, `table`, `metrics`, `databaseService`,
     * `dashboardService`...
     */
    type: string;
}

/**
 * This schema defines the parameter values that can be passed for a Test Case.
 */
export interface TestCaseParameterValue {
    /**
     * name of the parameter. Must match the parameter names in testCaseParameterDefinition
     */
    name?: string;
    /**
     * value to be passed for the Parameters. These are input from Users. We capture this in
     * string and convert during the runtime.
     */
    value?: string;
    [property: string]: any;
}

/**
 * Schema to capture test case result.
 */
export interface TestCaseResult {
    /**
     * Details of test case results.
     */
    result?: string;
    /**
     * sample data to capture rows/columns that didn't match the expressed testcase.
     */
    sampleData?: string;
    /**
     * Schema to capture test case result.
     */
    testCaseFailureStatus?: TestCaseFailureStatus;
    /**
     * Status of Test Case run.
     */
    testCaseStatus?:  TestCaseStatus;
    testResultValue?: TestResultValue[];
    /**
     * Data one which test case result is taken.
     */
    timestamp?: number;
}

/**
 * Schema to capture test case result.
 */
export interface TestCaseFailureStatus {
    /**
     * Test case failure resolution comment.
     */
    testCaseFailureComment?: string;
    /**
     * Reason of Test Case resolution.
     */
    testCaseFailureReason?: TestCaseFailureReason;
    /**
     * Status of Test Case Acknowledgement.
     */
    testCaseFailureStatusType?: TestCaseFailureStatusType;
    /**
     * Time when test case failure status was updated.
     */
    updatedAt?: number;
    /**
     * User who updated the test case failure status.
     */
    updatedBy?: string;
    [property: string]: any;
}

/**
 * Reason of Test Case resolution.
 */
export enum TestCaseFailureReason {
    Duplicates = "Duplicates",
    FalsePositive = "FalsePositive",
    MissingData = "MissingData",
    Other = "Other",
    OutOfBounds = "OutOfBounds",
}

/**
 * Status of Test Case Acknowledgement.
 */
export enum TestCaseFailureStatusType {
    ACK = "Ack",
    New = "New",
    Resolved = "Resolved",
}

/**
 * Status of Test Case run.
 *
 * Status of the test case.
 */
export enum TestCaseStatus {
    Aborted = "Aborted",
    Failed = "Failed",
    Success = "Success",
}

/**
 * Schema to capture test case result values.
 */
export interface TestResultValue {
    /**
     * name of the value
     */
    name?: string;
    /**
     * test result value
     */
    value?: string;
    [property: string]: any;
}

/**
 * TestSuite is a set of test cases grouped together to capture data quality tests against
 * data entities.
 */
export interface TestSuite {
    /**
     * Change that lead to this version of the entity.
     */
    changeDescription?: ChangeDescription;
    connection?:        TestSuiteConnection;
    /**
     * When `true` indicates the entity has been soft deleted.
     */
    deleted?: boolean;
    /**
     * Description of the test suite.
     */
    description?: string;
    /**
     * Display Name that identifies this test suite.
     */
    displayName?: string;
    /**
     * Indicates if the test suite is executable. Set on the backend.
     */
    executable?: boolean;
    /**
     * Entity reference the test suite is executed against. Only applicable if the test suite is
     * executable.
     */
    executableEntityReference?: EntityReference;
    /**
     * FullyQualifiedName same as `name`.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier of this test suite instance.
     */
    id?: string;
    /**
     * Name that identifies this test suite.
     */
    name: string;
    /**
     * Owner of this TestCase definition.
     */
    owner?: EntityReference;
    /**
     * References to pipelines deployed for this database service to extract metadata, usage,
     * lineage etc..
     */
    pipelines?: EntityReference[];
    /**
     * Type of database service such as MySQL, BigQuery, Snowflake, Redshift, Postgres...
     */
    serviceType?: ServiceType;
    /**
     * Summary of the previous day test cases execution for this test suite.
     */
    summary?: TestSummary;
    /**
     * Summary of test case execution
     */
    testCaseResultSummary?: Array<any[] | boolean | number | number | null | TestCaseResultSummaryObject | string>;
    testConnectionResult?:  TestConnectionResult;
    tests?:                 EntityReference[];
    /**
     * Last update time corresponding to the new version of the entity in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
    /**
     * Metadata version of the entity.
     */
    version?: number;
}

export interface TestSuiteConnection {
    config?: null;
    [property: string]: any;
}

/**
 * Type of database service such as MySQL, BigQuery, Snowflake, Redshift, Postgres...
 */
export enum ServiceType {
    TestSuite = "TestSuite",
}

/**
 * Summary of the previous day test cases execution for this test suite.
 *
 * Schema to capture test case execution summary.
 */
export interface TestSummary {
    /**
     * Number of test cases that aborted.
     */
    aborted?: number;
    /**
     * Number of test cases that failed.
     */
    failed?: number;
    /**
     * Number of test cases that passed.
     */
    success?: number;
    /**
     * Total number of test cases.
     */
    total?: number;
    [property: string]: any;
}

export interface TestCaseResultSummaryObject {
    /**
     * Status of the test case.
     */
    status?: TestCaseStatus;
    /**
     * Name of the test case.
     */
    testCaseName?: string;
    /**
     * Timestamp of the test case execution.
     */
    timestamp?: number;
    [property: string]: any;
}

/**
 * TestConnectionResult is the definition that will encapsulate result of running the test
 * connection steps.
 */
export interface TestConnectionResult {
    /**
     * Last time that the test connection was executed
     */
    lastUpdatedAt?: number;
    /**
     * Test Connection Result computation status.
     */
    status?: StatusType;
    /**
     * Steps to test the connection. Order matters.
     */
    steps: TestConnectionStepResult[];
}

/**
 * Test Connection Result computation status.
 *
 * Enum defining possible Test Connection Result status
 */
export enum StatusType {
    Failed = "Failed",
    Running = "Running",
    Successful = "Successful",
}

/**
 * Function that tests one specific element of the service. E.g., listing schemas, lineage,
 * or tags.
 */
export interface TestConnectionStepResult {
    /**
     * In case of failed step, this field would contain the actual error faced during the step.
     */
    errorLog?: string;
    /**
     * Is this step mandatory to be passed?
     */
    mandatory: boolean;
    /**
     * Results or exceptions to be shared after running the test. This message comes from the
     * test connection definition
     */
    message?: string;
    /**
     * Name of the step being tested
     */
    name: string;
    /**
     * Did the step pass successfully?
     */
    passed: boolean;
}
