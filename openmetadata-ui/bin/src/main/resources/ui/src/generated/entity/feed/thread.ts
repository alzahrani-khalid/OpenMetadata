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
 * This schema defines the Thread entity. A Thread is a collection of posts made by the
 * users. The first post that starts a thread is **about** a data asset **from** a user.
 * Other users can respond to this post by creating new posts in the thread. Note that bot
 * users can also interact with a thread. A post can contains links that mention Users or
 * other Data Assets.
 */
export interface Thread {
    /**
     * Data asset about which this thread is created for with format
     * <#E::{entities}::{entityName}::{field}::{fieldValue}.
     */
    about: string;
    /**
     * User or team this thread is addressed to in format
     * <#E::{entities}::{entityName}::{field}::{fieldValue}.
     */
    addressedTo?: string;
    /**
     * Details about the announcement. This is only applicable if thread is of type announcement.
     */
    announcement?: AnnouncementDetails;
    /**
     * User who created the thread.
     */
    createdBy?: string;
    /**
     * Entity Id of the entity in `about` that the thread belongs to.
     */
    entityId?: string;
    /**
     * Link to the resource corresponding to this entity.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * The main message of the thread in Markdown format.
     */
    message: string;
    posts?:  Post[];
    /**
     * The total count of posts in the thread.
     */
    postsCount?: number;
    /**
     * Reactions for the thread.
     */
    reactions?: Reaction[];
    /**
     * When `true` indicates the thread has been resolved.
     */
    resolved?: boolean;
    /**
     * Details about the task. This is only applicable if thread is of type task.
     */
    task?: TaskDetails;
    /**
     * Timestamp of the first post created the thread in Unix epoch time milliseconds.
     */
    threadTs?: number;
    type?:     ThreadType;
    /**
     * Last update time corresponding to the new version of the entity in Unix epoch time
     * milliseconds.
     */
    updatedAt?: number;
    /**
     * User who made the update.
     */
    updatedBy?: string;
}

/**
 * Details about the announcement. This is only applicable if thread is of type announcement.
 */
export interface AnnouncementDetails {
    /**
     * Announcement description in Markdown format. See markdown support for more details.
     */
    description?: string;
    /**
     * Timestamp of when the announcement should end
     */
    endTime: number;
    /**
     * Timestamp of the start time from when the announcement should be shown.
     */
    startTime: number;
}

/**
 * Post within a feed.
 */
export interface Post {
    /**
     * Name of the User posting the message.
     */
    from: string;
    /**
     * Unique identifier that identifies the post.
     */
    id: string;
    /**
     * Message in Markdown format. See Markdown support for more details.
     */
    message: string;
    /**
     * Timestamp of the post in Unix epoch time milliseconds.
     */
    postTs?: number;
    /**
     * Reactions for the post.
     */
    reactions?: Reaction[];
}

/**
 * Reactions for the post.
 *
 * This schema defines the reaction to an entity or a conversation in the activity feeds.
 */
export interface Reaction {
    reactionType: ReactionType;
    /**
     * User who reacted.
     */
    user: EntityReference;
}

/**
 * Type of reaction.
 */
export enum ReactionType {
    Confused = "confused",
    Eyes = "eyes",
    Heart = "heart",
    Hooray = "hooray",
    Laugh = "laugh",
    Rocket = "rocket",
    ThumbsDown = "thumbsDown",
    ThumbsUp = "thumbsUp",
}

/**
 * User who reacted.
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * List of users or teams the task is assigned to
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
 * Details about the task. This is only applicable if thread is of type task.
 */
export interface TaskDetails {
    /**
     * List of users or teams the task is assigned to
     */
    assignees: EntityReference[];
    /**
     * Timestamp when the task was closed in Unix epoch time milliseconds.
     */
    closedAt?: number;
    /**
     * The user that closed the task.
     */
    closedBy?: string;
    /**
     * Unique identifier that identifies the task.
     */
    id: number;
    /**
     * The new value object that was accepted to complete the task.
     */
    newValue?: string;
    /**
     * The value of old object for which the task is created.
     */
    oldValue?: string;
    status?:   ThreadTaskStatus;
    /**
     * The suggestion object to replace the old value for which the task is created.
     */
    suggestion?: string;
    type:        TaskType;
}

/**
 * Status of a task.
 */
export enum ThreadTaskStatus {
    Closed = "Closed",
    Open = "Open",
}

/**
 * Type of a task.
 */
export enum TaskType {
    Generic = "Generic",
    RequestApproval = "RequestApproval",
    RequestDescription = "RequestDescription",
    RequestTag = "RequestTag",
    UpdateDescription = "UpdateDescription",
    UpdateTag = "UpdateTag",
}

/**
 * Type of thread.
 */
export enum ThreadType {
    Announcement = "Announcement",
    Conversation = "Conversation",
    Task = "Task",
}
