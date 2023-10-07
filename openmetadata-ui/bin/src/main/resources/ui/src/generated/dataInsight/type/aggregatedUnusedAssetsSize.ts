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
 * AggregatedUnusedAssetsSize data blob
 */
export interface AggregatedUnusedAssetsSize {
    /**
     * Size of unused assets in the last 14 days
     */
    fourteenDays?: number;
    /**
     * Size of unused assets in the last 7 days
     */
    sevenDays?: number;
    /**
     * Size of unused assets in the last 60 days
     */
    sixtyDays?: number;
    /**
     * Size of unused assets in the last 30 days
     */
    thirtyDays?: number;
    /**
     * Size of unused assets in the last 3 days
     */
    threeDays?: number;
    /**
     * timestamp
     */
    timestamp?: number;
    /**
     * Total size of unused assets
     */
    total?: number;
}
