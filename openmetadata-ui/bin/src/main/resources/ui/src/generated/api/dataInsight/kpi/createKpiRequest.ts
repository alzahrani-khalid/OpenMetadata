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
 * Schema corresponding to a Kpi.
 */
export interface CreateKpiRequest {
    /**
     * Fully qualified name of the Chart this kpi refers to
     */
    dataInsightChart: string;
    /**
     * Description of the Kpi.
     */
    description: string;
    /**
     * Display Name that identifies this Kpi.
     */
    displayName?: string;
    /**
     * End Date for the KPIs
     */
    endDate:    number;
    metricType: KpiTargetType;
    /**
     * Name that identifies this Kpi.
     */
    name: string;
    /**
     * Owner of this Kpi
     */
    owner?: EntityReference;
    /**
     * Start Date for the KPIs
     */
    startDate: number;
    /**
     * Metrics from the chart and the target to achieve the result.
     */
    targetDefinition: KpiTarget[];
}

/**
 * This enum defines the type of key Result
 */
export enum KpiTargetType {
    Number = "NUMBER",
    Percentage = "PERCENTAGE",
}

/**
 * Owner of this Kpi
 *
 * This schema defines the EntityReference type used for referencing an entity.
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
 * This schema defines the parameter values that can be passed for a Kpi Parameter.
 */
export interface KpiTarget {
    /**
     * name of the parameter. Must match the parameter names in metrics of the chart this
     * objective refers
     */
    name: string;
    /**
     * whether the target value was met or not.
     */
    targetMet?: boolean;
    /**
     * value to be passed for the Parameters. These are input from Users. We capture this in
     * string and convert during the runtime.
     */
    value: string;
}
