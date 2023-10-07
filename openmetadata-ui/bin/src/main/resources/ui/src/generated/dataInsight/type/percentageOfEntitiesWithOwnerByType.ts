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
 * percentageOfEntitiesWithOwnerByType data blob
 */
export interface PercentageOfEntitiesWithOwnerByType {
    /**
     * Decimal fraction of entity with an owner.
     */
    entityCount?: number;
    /**
     * Type of entity. Derived from the entity class.
     */
    entityType?: string;
    /**
     * Decimal fraction of entity with an owner.
     */
    hasOwner?: number;
    /**
     * Decimal fraction of entity with an owner.
     */
    hasOwnerFraction?: number;
    /**
     * timestamp
     */
    timestamp?: number;
}
