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
 * This schema defines the EventSubscription entity. An Event Subscription has trigger,
 * filters and Subscription
 */
export interface EventSubscription {
    /**
     * Type of Alert
     */
    alertType: AlertType;
    /**
     * Maximum number of events sent in a batch (Default 10).
     */
    batchSize?: number;
    /**
     * Change that led to this version of the Event Subscription.
     */
    changeDescription?: ChangeDescription;
    /**
     * A short description of the Event Subscription, comprehensible to regular users.
     */
    description?: string;
    /**
     * Display name for this Event Subscription.
     */
    displayName?: string;
    /**
     * Is the event Subscription enabled.
     */
    enabled?: boolean;
    /**
     * Set of rules that the Event Subscription Contains to allow conditional control for
     * alerting.
     */
    filteringRules?: FilteringRules;
    /**
     * FullyQualifiedName that uniquely identifies a Event Subscription.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier that identifies this Event Subscription.
     */
    id: string;
    /**
     * Name that uniquely identifies this Event Subscription.
     */
    name: string;
    /**
     * Owner of this Event Subscription.
     */
    owner?:    EntityReference;
    provider?: ProviderType;
    /**
     * Read timeout in seconds. (Default 12s).
     */
    readTimeout?:        number;
    statusDetails?:      SubscriptionStatus;
    subscriptionConfig?: SubscriptionConfig;
    subscriptionType:    SubscriptionType;
    /**
     * Connection timeout in seconds. (Default 10s).
     */
    timeout?: number;
    /**
     * Trigger information for Alert.
     */
    trigger?: Trigger;
    /**
     * Last update time corresponding to the new version of the Event Subscription in Unix epoch
     * time milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
    /**
     * Metadata version of the Event Subscription.
     */
    version?: number;
}

/**
 * Type of Alert
 *
 * Type of Alerts supported.
 */
export enum AlertType {
    ChangeEvent = "ChangeEvent",
    DataInsightReport = "DataInsightReport",
    TaskConversationAnnouncement = "Task/Conversation/Announcement",
}

/**
 * Change that led to this version of the Event Subscription.
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
 * Set of rules that the Event Subscription Contains to allow conditional control for
 * alerting.
 *
 * Filtering Rules for Event Subscription.
 */
export interface FilteringRules {
    /**
     * Defines a list of resources that triggers the Event Subscription, Eg All, User, Teams etc.
     */
    resources: string[];
    /**
     * A set of filter rules associated with the Alert.
     */
    rules?: EventFilterRule[];
}

/**
 * Describes an Event Filter Rule
 */
export interface EventFilterRule {
    /**
     * Expression in SpEL used for matching of a `Rule` based on entity, resource, and
     * environmental attributes.
     */
    condition: string;
    /**
     * Description of the Event Filter Rule.
     */
    description?: string;
    effect:       Effect;
    /**
     * FullyQualifiedName in the form `eventSubscription.eventFilterRuleName`.
     */
    fullyQualifiedName?: string;
    /**
     * Name of this Event Filter.
     */
    name?: string;
}

export enum Effect {
    Exclude = "exclude",
    Include = "include",
}

/**
 * Owner of this Event Subscription.
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
 * Type of provider of an entity. Some entities are provided by the `system`. Some are
 * entities created and provided by the `user`. Typically `system` provide entities can't be
 * deleted and can only be disabled.
 */
export enum ProviderType {
    System = "system",
    User = "user",
}

/**
 * Subscription Current Status
 */
export interface SubscriptionStatus {
    /**
     * Last non-successful callback time in UNIX UTC epoch time in milliseconds.
     */
    lastFailedAt?: number;
    /**
     * Last non-successful activity response reason received during callback.
     */
    lastFailedReason?: string;
    /**
     * Last non-successful activity response code received during callback.
     */
    lastFailedStatusCode?: number;
    /**
     * Last non-successful callback time in UNIX UTC epoch time in milliseconds.
     */
    lastSuccessfulAt?: number;
    /**
     * Next retry will be done at this time in Unix epoch time milliseconds. Only valid is
     * `status` is `awaitingRetry`.
     */
    nextAttempt?: number;
    status?:      Status;
    timestamp?:   number;
}

/**
 * Status is `disabled`, when eventSubscription was created with `enabled` set to false and
 * it never started publishing events. Status is `active` when eventSubscription is normally
 * functioning and 200 OK response was received for callback notification. Status is
 * `failed` on bad callback URL, connection failures, `1xx`, and `3xx` response was received
 * for callback notification. Status is `awaitingRetry` when previous attempt at callback
 * timed out or received `4xx`, `5xx` response. Status is `retryLimitReached` after all
 * retries fail.
 */
export enum Status {
    Active = "active",
    AwaitingRetry = "awaitingRetry",
    Disabled = "disabled",
    Failed = "failed",
    RetryLimitReached = "retryLimitReached",
}

/**
 * This schema defines webhook for receiving events from OpenMetadata.
 *
 * This schema defines email config for receiving events from OpenMetadata.
 *
 * This schema defines Data Insight config for receiving reports from OpenMetadata.
 */
export interface SubscriptionConfig {
    /**
     * Endpoint to receive the webhook events over POST requests.
     */
    endpoint?: string;
    /**
     * Secret set by the webhook client used for computing HMAC SHA256 signature of webhook
     * payload and sent in `X-OM-Signature` header in POST requests to publish the events.
     */
    secretKey?: string;
    /**
     * Send the Event to Admins
     *
     * Send the Mails to Admins
     */
    sendToAdmins?: boolean;
    /**
     * Send the Event to Followers
     *
     * Send the Mails to Followers
     */
    sendToFollowers?: boolean;
    /**
     * Send the Event to Owners
     *
     * Send the Mails to Owners
     */
    sendToOwners?: boolean;
    /**
     * List of receivers to send mail to
     */
    receivers?: string[];
    /**
     * Send the Mails to Teams
     */
    sendToTeams?: boolean;
}

/**
 * Subscription Endpoint Type.
 */
export enum SubscriptionType {
    ActivityFeed = "ActivityFeed",
    DataInsight = "DataInsight",
    Email = "Email",
    GChatWebhook = "GChatWebhook",
    GenericWebhook = "GenericWebhook",
    MSTeamsWebhook = "MsTeamsWebhook",
    SlackWebhook = "SlackWebhook",
}

/**
 * Trigger information for Alert.
 *
 * Trigger Configuration for Alerts.
 */
export interface Trigger {
    /**
     * Cron Expression in case of Custom scheduled Trigger
     */
    cronExpression?: string;
    /**
     * Schedule Info
     */
    scheduleInfo?: ScheduleInfo;
    triggerType:   TriggerType;
}

/**
 * Schedule Info
 */
export enum ScheduleInfo {
    Custom = "Custom",
    Daily = "Daily",
    Monthly = "Monthly",
    Weekly = "Weekly",
}

/**
 * Trigger Configuration for Alerts.
 */
export enum TriggerType {
    RealTime = "RealTime",
    Scheduled = "Scheduled",
}
