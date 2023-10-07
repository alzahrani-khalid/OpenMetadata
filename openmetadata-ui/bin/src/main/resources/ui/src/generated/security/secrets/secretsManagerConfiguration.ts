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
 * OpenMetadata server configuration for the Secrets Manager feature.
 */
export interface SecretsManagerConfiguration {
    /**
     * Extra parameters used by the Secrets Manager implementation.
     */
    parameters?: { [key: string]: any };
    /**
     * OpenMetadata Secrets Manager Provider. Make sure to configure the same secrets manager
     * providers as the ones configured on the OpenMetadata server.
     */
    secretsManager?: SecretsManagerProvider;
}

/**
 * OpenMetadata Secrets Manager Provider. Make sure to configure the same secrets manager
 * providers as the ones configured on the OpenMetadata server.
 */
export enum SecretsManagerProvider {
    Aws = "aws",
    AwsSsm = "aws-ssm",
    InMemory = "in-memory",
    ManagedAws = "managed-aws",
    ManagedAwsSsm = "managed-aws-ssm",
    Noop = "noop",
}
