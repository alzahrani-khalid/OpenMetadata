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
 * Create a SearchIndex entity request
 */
export interface CreateSearchIndex {
    /**
     * List of fully qualified names of data products this entity is part of.
     */
    dataProducts?: string[];
    /**
     * Description of the SearchIndex instance. What it has and how to use it.
     */
    description?: string;
    /**
     * Display Name that identifies this SearchIndex.
     */
    displayName?: string;
    /**
     * Fully qualified name of the domain the SearchIndex belongs to.
     */
    domain?: string;
    /**
     * Entity extension data with custom attributes added to the entity.
     */
    extension?: any;
    /**
     * Fields in this SearchIndex.
     */
    fields: SearchIndexField[];
    /**
     * Life Cycle of the entity
     */
    lifeCycle?: LifeCycle;
    /**
     * Name that identifies this SearchIndex instance uniquely.
     */
    name: string;
    /**
     * Owner of this SearchIndex
     */
    owner?: EntityReference;
    /**
     * Contains key/value pair of searchIndex settings.
     */
    searchIndexSettings?: { [key: string]: any };
    /**
     * Fully qualified name of the search service where this searchIndex is hosted in
     */
    service: string;
    /**
     * Tags for this SearchIndex
     */
    tags?: CreateSearchIndexTag[];
}

/**
 * This schema defines the type for a field in a searchIndex.
 */
export interface SearchIndexField {
    /**
     * Child columns if dataType has properties.
     */
    children?: SearchIndexField[];
    /**
     * Data type of the searchIndex (int, date etc.).
     */
    dataType: DataType;
    /**
     * Display name used for dataType.
     */
    dataTypeDisplay?: string;
    /**
     * Description of the field.
     */
    description?: string;
    /**
     * Display Name that identifies this searchIndexField name.
     */
    displayName?:        string;
    fullyQualifiedName?: string;
    name:                string;
    /**
     * Tags associated with the column.
     */
    tags?: FieldTag[];
}

/**
 * Data type of the searchIndex (int, date etc.).
 *
 * This enum defines the type of data stored in a searchIndex.
 */
export enum DataType {
    AggregateMetricDouble = "AGGREGATE_METRIC_DOUBLE",
    AnnotatedText = "ANNOTATED-TEXT",
    Array = "ARRAY",
    Binary = "BINARY",
    Completion = "COMPLETION",
    Date = "DATE",
    Datetime = "DATETIME",
    DenseVector = "DENSE_VECTOR",
    Flattened = "FLATTENED",
    GeoPoint = "GEO_POINT",
    GeoShape = "GEO_SHAPE",
    Histogram = "HISTOGRAM",
    IP = "IP",
    Join = "JOIN",
    Keyword = "KEYWORD",
    Murmur3 = "MURMUR3",
    Nested = "NESTED",
    Number = "NUMBER",
    Object = "OBJECT",
    Percolator = "PERCOLATOR",
    Point = "POINT",
    Range = "RANGE",
    RankFeature = "RANK_FEATURE",
    RankFeatures = "RANK_FEATURES",
    SearchAsYouType = "SEARCH_AS_YOU_TYPE",
    Shape = "SHAPE",
    Text = "TEXT",
    Time = "TIME",
    Timestamp = "TIMESTAMP",
    Timestampz = "TIMESTAMPZ",
    Unknown = "UNKNOWN",
    Version = "VERSION",
}

/**
 * This schema defines the type for labeling an entity with a Tag.
 */
export interface FieldTag {
    /**
     * Description for the tag label.
     */
    description?: string;
    /**
     * Display Name that identifies this tag.
     */
    displayName?: string;
    /**
     * Link to the tag resource.
     */
    href?: string;
    /**
     * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
     * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
     * relationship (see Classification.json for more details). 'Propagated` indicates a tag
     * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
     * used to determine the tag label.
     */
    labelType: LabelType;
    /**
     * Name of the tag or glossary term.
     */
    name?: string;
    /**
     * Label is from Tags or Glossary.
     */
    source: TagSource;
    /**
     * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
     * entity must confirm the suggested labels before it is marked as 'Confirmed'.
     */
    state:  State;
    style?: Style;
    tagFQN: string;
}

/**
 * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
 * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
 * relationship (see Classification.json for more details). 'Propagated` indicates a tag
 * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
 * used to determine the tag label.
 */
export enum LabelType {
    Automated = "Automated",
    Derived = "Derived",
    Manual = "Manual",
    Propagated = "Propagated",
}

/**
 * Label is from Tags or Glossary.
 */
export enum TagSource {
    Classification = "Classification",
    Glossary = "Glossary",
}

/**
 * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
 * entity must confirm the suggested labels before it is marked as 'Confirmed'.
 */
export enum State {
    Confirmed = "Confirmed",
    Suggested = "Suggested",
}

/**
 * UI Style is used to associate a color code and/or icon to entity to customize the look of
 * that entity in UI.
 */
export interface Style {
    /**
     * Hex Color Code to mark an entity such as GlossaryTerm, Tag, Domain or Data Product.
     */
    color?: string;
    /**
     * An icon to associate with GlossaryTerm, Tag, Domain or Data Product.
     */
    iconURL?: string;
}

/**
 * Life Cycle of the entity
 *
 * This schema defines Life Cycle Properties.
 */
export interface LifeCycle {
    /**
     * Access Details about accessed aspect of the data asset
     */
    accessed?: AccessDetails;
    /**
     * Access Details about created aspect of the data asset
     */
    created?: AccessDetails;
    /**
     * Access Details about updated aspect of the data asset
     */
    updated?: AccessDetails;
}

/**
 * Access Details about accessed aspect of the data asset
 *
 * Access details of an entity
 *
 * Access Details about created aspect of the data asset
 *
 * Access Details about updated aspect of the data asset
 */
export interface AccessDetails {
    /**
     * User, Pipeline, Query that created,updated or accessed the data asset
     */
    accessedBy?: EntityReference;
    /**
     * Any process that accessed the data asset that is not captured in OpenMetadata.
     */
    accessedByAProcess?: string;
    /**
     * Timestamp of data asset accessed for creation, update, read.
     */
    timestamp: number;
}

/**
 * User, Pipeline, Query that created,updated or accessed the data asset
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Owner of this SearchIndex
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
 * This schema defines the type for labeling an entity with a Tag.
 */
export interface CreateSearchIndexTag {
    /**
     * Description for the tag label.
     */
    description?: string;
    /**
     * Display Name that identifies this tag.
     */
    displayName?: string;
    /**
     * Link to the tag resource.
     */
    href?: string;
    /**
     * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
     * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
     * relationship (see Classification.json for more details). 'Propagated` indicates a tag
     * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
     * used to determine the tag label.
     */
    labelType: LabelType;
    /**
     * Name of the tag or glossary term.
     */
    name?: string;
    /**
     * Label is from Tags or Glossary.
     */
    source: TagSource;
    /**
     * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
     * entity must confirm the suggested labels before it is marked as 'Confirmed'.
     */
    state:  State;
    style?: Style;
    tagFQN: string;
}
