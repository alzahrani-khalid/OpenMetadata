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
 * This schema defines the Settings. A Settings represents a generic Setting.
 */
export interface Settings {
    /**
     * Unique identifier that identifies an entity instance.
     */
    config_type:   SettingType;
    config_value?: PipelineServiceClientConfiguration;
    [property: string]: any;
}

/**
 * Unique identifier that identifies an entity instance.
 *
 * This schema defines all possible filters enum in OpenMetadata.
 */
export enum SettingType {
    AirflowConfiguration = "airflowConfiguration",
    AuthenticationConfiguration = "authenticationConfiguration",
    AuthorizerConfiguration = "authorizerConfiguration",
    CustomLogoConfiguration = "customLogoConfiguration",
    Elasticsearch = "elasticsearch",
    EmailConfiguration = "emailConfiguration",
    EventHandlerConfiguration = "eventHandlerConfiguration",
    FernetConfiguration = "fernetConfiguration",
    JwtTokenConfiguration = "jwtTokenConfiguration",
    SandboxModeEnabled = "sandboxModeEnabled",
    SecretsManagerConfiguration = "secretsManagerConfiguration",
    SlackAppConfiguration = "slackAppConfiguration",
    SlackBot = "slackBot",
    SlackChat = "slackChat",
    SlackEventPublishers = "slackEventPublishers",
    SlackInstaller = "slackInstaller",
}

/**
 * This schema defines the Pipeline Service Client Configuration
 *
 * This schema defines the Authentication Configuration.
 *
 * This schema defines the Authorization Configuration.
 *
 * This schema defines the Elastic Search Configuration.
 *
 * This schema defines the Event Handler Configuration.
 *
 * This schema defines the Fernet Configuration.
 *
 * This schema defines the JWT Configuration.
 *
 * This schema defines the SSL Config.
 *
 * This schema defines the SMTP Settings for sending Email
 *
 * This schema defines the Slack App Information
 */
export interface PipelineServiceClientConfiguration {
    /**
     * External API root to interact with the Pipeline Service Client
     */
    apiEndpoint?: string;
    /**
     * Auth Provider Configuration.
     */
    authConfig?: AuthConfiguration;
    /**
     * Auth Provider with which OpenMetadata service configured with.
     */
    authProvider?: AuthProvider;
    /**
     * Class Name for the Pipeline Service Client.
     *
     * Class Name for authorizer.
     */
    className?: string;
    /**
     * Interval in seconds that the server will use to check the /status of the
     * pipelineServiceClient and flag any errors in a Prometheus metric
     * `pipelineServiceClientStatus.counter`.
     */
    healthCheckInterval?: number;
    /**
     * Pipeline Service Client host IP that will be used to connect to the sources.
     */
    hostIp?: string;
    /**
     * Enable or disable the API that fetches the public IP running the ingestion process.
     */
    ingestionIpInfoEnabled?: boolean;
    /**
     * Metadata api endpoint, e.g., `http://localhost:8585/api`
     */
    metadataApiEndpoint?: string;
    /**
     * Additional parameters to initialize the PipelineServiceClient.
     */
    parameters?:           { [key: string]: any };
    secretsManagerLoader?: SecretsManagerClientLoader;
    /**
     * OpenMetadata Client SSL configuration. This SSL information is about the OpenMetadata
     * server. It will be picked up from the pipelineServiceClient to use/ignore SSL when
     * connecting to the OpenMetadata server.
     */
    sslConfig?: Config;
    /**
     * Client SSL verification policy when connecting to the OpenMetadata server: no-ssl,
     * ignore, validate.
     */
    verifySSL?: VerifySSL;
    /**
     * Authentication Authority
     */
    authority?: string;
    /**
     * Callback URL
     */
    callbackUrl?: string;
    /**
     * Client ID
     *
     * Client Id of the Application
     */
    clientId?: string;
    /**
     * Enable Self Sign Up
     */
    enableSelfSignup?: boolean;
    /**
     * Jwt Principal Claim
     */
    jwtPrincipalClaims?: string[];
    /**
     * LDAP Configuration in case the Provider is LDAP
     */
    ldapConfiguration?: LDAPConfiguration;
    provider?:          AuthProvider;
    /**
     * Custom OIDC Authentication Provider Name
     */
    providerName?: string;
    /**
     * List of Public Key URLs
     */
    publicKeyUrls?: string[];
    /**
     * Saml Configuration that is applicable only when the provider is Saml
     */
    samlConfiguration?: SamlSSOClientConfig;
    /**
     * List of unique admin principals.
     */
    adminPrincipals?: string[];
    /**
     * List of unique email domains that are allowed to signup on the platforms
     */
    allowedEmailRegistrationDomains?: string[];
    /**
     * **@Deprecated** List of unique bot principals
     */
    botPrincipals?: string[];
    /**
     * Filter for the request authorization.
     */
    containerRequestFilter?: string;
    /**
     * Enable Secure Socket Connection.
     */
    enableSecureSocketConnection?: boolean;
    /**
     * Enable Enforce Principal Domain
     */
    enforcePrincipalDomain?: boolean;
    /**
     * Principal Domain
     */
    principalDomain?: string;
    /**
     * List of unique principals used as test users. **NOTE THIS IS ONLY FOR TEST SETUP AND NOT
     * TO BE USED IN PRODUCTION SETUP**
     */
    testPrincipals?: string[];
    /**
     * Batch Size for Requests
     */
    batchSize?: number;
    /**
     * Connection Timeout in Seconds
     */
    connectionTimeoutSecs?: number;
    /**
     * Elastic Search Host
     */
    host?: string;
    /**
     * Keep Alive Timeout in Seconds
     */
    keepAliveTimeoutSecs?: number;
    /**
     * Elastic Search Password for Login
     *
     * Smtp Server Password
     */
    password?: string;
    /**
     * Elastic Search port
     */
    port?: number;
    /**
     * Http/Https connection scheme
     */
    scheme?:                     string;
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * This enum defines the search Type elastic/open search.
     */
    searchType?: SearchType;
    /**
     * Socket Timeout in Seconds
     */
    socketTimeoutSecs?: number;
    /**
     * Truststore Password
     */
    truststorePassword?: string;
    /**
     * Truststore Path
     */
    truststorePath?: string;
    /**
     * Elastic Search Username for Login
     *
     * Smtp Server Username
     */
    username?: string;
    /**
     * Event Handler Class Names
     */
    eventHandlerClassNames?: string[];
    /**
     * Fernet Key
     */
    fernetKey?: string;
    /**
     * JWT Issuer
     */
    jwtissuer?: string;
    /**
     * Key ID
     */
    keyId?: string;
    /**
     * RSA Private Key File Path
     */
    rsaprivateKeyFilePath?: string;
    /**
     * RSA Public Key File Path
     */
    rsapublicKeyFilePath?: string;
    /**
     * Is Task Notification Enabled?
     */
    enabled?: boolean;
    /**
     * Emailing Entity
     */
    emailingEntity?: string;
    /**
     * If this is enable password will details will be shared on mail
     */
    enableSmtpServer?: boolean;
    /**
     * Openmetadata Server Endpoint
     */
    openMetadataUrl?: string;
    /**
     * Mail of the sender
     */
    senderMail?: string;
    /**
     * Smtp Server Endpoint
     */
    serverEndpoint?: string;
    /**
     * Smtp Server Port
     */
    serverPort?: number;
    /**
     * Support Url
     */
    supportUrl?:             string;
    transportationStrategy?: TransportationStrategy;
    /**
     * Client Secret of the Application.
     */
    clientSecret?: string;
    /**
     * Scopes to Request in OAuth
     */
    scopes?: string;
    /**
     * Signing Certificate of the Application.
     */
    signingCertificate?: string;
}

/**
 * Auth Provider Configuration.
 *
 * This schema defines the Auth Config.
 */
export interface AuthConfiguration {
    /**
     * Auth0 SSO Configuration
     */
    auth0?: Auth0SSOClientConfig;
    /**
     * Azure SSO Configuration
     */
    azure?: AzureSSOClientConfig;
    /**
     * Custom OIDC SSO Configuration
     */
    customOidc?: CustomOIDCSSOClientConfig;
    /**
     * Google SSO Configuration
     */
    google?: GoogleSSOClientConfig;
    /**
     * Okta SSO Configuration
     */
    okta?: OktaSSOClientConfig;
    /**
     * OpenMetadata SSO Configuration
     */
    openmetadata?: OpenMetadataJWTClientConfig;
}

/**
 * Auth0 SSO Configuration
 *
 * Auth0 SSO client security configs.
 */
export interface Auth0SSOClientConfig {
    /**
     * Auth0 Client ID.
     */
    clientId: string;
    /**
     * Auth0 Domain.
     */
    domain: string;
    /**
     * Auth0 Client Secret Key.
     */
    secretKey: string;
}

/**
 * Azure SSO Configuration
 *
 * Azure SSO Client security config to connect to OpenMetadata.
 */
export interface AzureSSOClientConfig {
    /**
     * Azure SSO Authority
     */
    authority: string;
    /**
     * Azure Client ID.
     */
    clientId: string;
    /**
     * Azure SSO client secret key
     */
    clientSecret: string;
    /**
     * Azure Client ID.
     */
    scopes: string[];
}

/**
 * Custom OIDC SSO Configuration
 *
 * Custom OIDC SSO client security configs.
 */
export interface CustomOIDCSSOClientConfig {
    /**
     * Custom OIDC Client ID.
     */
    clientId: string;
    /**
     * Custom OIDC Client Secret Key.
     */
    secretKey: string;
    /**
     * Custom OIDC token endpoint.
     */
    tokenEndpoint: string;
}

/**
 * Google SSO Configuration
 *
 * Google SSO client security configs.
 */
export interface GoogleSSOClientConfig {
    /**
     * Google SSO audience URL
     */
    audience?: string;
    /**
     * Google SSO client secret key path or contents.
     */
    secretKey: string;
}

/**
 * Okta SSO Configuration
 *
 * Okta SSO client security configs.
 */
export interface OktaSSOClientConfig {
    /**
     * Okta Client ID.
     */
    clientId: string;
    /**
     * Okta Service account Email.
     */
    email: string;
    /**
     * Okta org url.
     */
    orgURL: string;
    /**
     * Okta Private Key.
     */
    privateKey: string;
    /**
     * Okta client scopes.
     */
    scopes?: string[];
}

/**
 * OpenMetadata SSO Configuration
 *
 * openMetadataJWTClientConfig security configs.
 */
export interface OpenMetadataJWTClientConfig {
    /**
     * OpenMetadata generated JWT token.
     */
    jwtToken: string;
}

/**
 * Auth Provider with which OpenMetadata service configured with.
 *
 * OpenMetadata Server Authentication Provider. Make sure configure same auth providers as
 * the one configured on OpenMetadata server.
 */
export enum AuthProvider {
    Auth0 = "auth0",
    AwsCognito = "aws-cognito",
    Azure = "azure",
    Basic = "basic",
    CustomOidc = "custom-oidc",
    Google = "google",
    LDAP = "ldap",
    NoAuth = "no-auth",
    Okta = "okta",
    Openmetadata = "openmetadata",
    Saml = "saml",
}

/**
 * LDAP Configuration in case the Provider is LDAP
 *
 * LDAP Configuration
 */
export interface LDAPConfiguration {
    /**
     * Password for LDAP Admin
     */
    dnAdminPassword: string;
    /**
     * Distinguished Admin name with search capabilities
     */
    dnAdminPrincipal: string;
    /**
     * LDAP server address without scheme(Example :- localhost)
     */
    host: string;
    /**
     * If enable need to give full dn to login
     */
    isFullDn?: boolean;
    /**
     * Email attribute name
     */
    mailAttributeName: string;
    /**
     * No of connection to create the pool with
     */
    maxPoolSize?: number;
    /**
     * Port of the server
     */
    port: number;
    /**
     * LDAPS (secure LDAP) or LDAP
     */
    sslEnabled?: boolean;
    /**
     * Truststore Configuration
     */
    trustStoreConfig?: TruststoreConfig;
    /**
     * Truststore Type e.g. TrustAll, HostName, JVMDefault, CustomTrustStore.
     */
    truststoreConfigType?: TruststoreConfigType;
    /**
     * Truststore format e.g. PKCS12, JKS.
     */
    truststoreFormat?: string;
    /**
     * User base distinguished name
     */
    userBaseDN: string;
}

/**
 * Truststore Configuration
 */
export interface TruststoreConfig {
    /**
     * CustomTrust Configuration
     */
    customTrustManagerConfig?: CustomTrustManagerConfig;
    /**
     * HostName Configuration
     */
    hostNameConfig?: HostNameConfig;
    /**
     * JVMDefault Configuration
     */
    jvmDefaultConfig?: JVMDefaultConfig;
    /**
     * TrustAll Configuration
     */
    trustAllConfig?: TrustAllConfig;
}

/**
 * CustomTrust Configuration
 */
export interface CustomTrustManagerConfig {
    /**
     * Examine validity dates of certificate
     */
    examineValidityDates?: boolean;
    /**
     * Truststore file format
     */
    trustStoreFileFormat?: string;
    /**
     * Truststore file password
     */
    trustStoreFilePassword?: string;
    /**
     * Truststore file path
     */
    trustStoreFilePath?: string;
    /**
     * list of host names to verify
     */
    verifyHostname?: boolean;
}

/**
 * HostName Configuration
 */
export interface HostNameConfig {
    /**
     * list of acceptable host names
     */
    acceptableHostNames?: string[];
    /**
     * Allow wildcards
     */
    allowWildCards?: boolean;
}

/**
 * JVMDefault Configuration
 */
export interface JVMDefaultConfig {
    /**
     * list of host names to verify
     */
    verifyHostname?: boolean;
}

/**
 * TrustAll Configuration
 */
export interface TrustAllConfig {
    /**
     * Examine validity dates of certificate
     */
    examineValidityDates?: boolean;
}

/**
 * Truststore Type e.g. TrustAll, HostName, JVMDefault, CustomTrustStore.
 */
export enum TruststoreConfigType {
    CustomTrustStore = "CustomTrustStore",
    HostName = "HostName",
    JVMDefault = "JVMDefault",
    TrustAll = "TrustAll",
}

/**
 * Saml Configuration that is applicable only when the provider is Saml
 *
 * SAML SSO client security configs.
 */
export interface SamlSSOClientConfig {
    /**
     * Get logs from the Library in debug mode
     */
    debugMode?: boolean;
    idp:        Idp;
    security?:  Security;
    sp:         SP;
}

/**
 * This schema defines defines the identity provider config.
 */
export interface Idp {
    /**
     * Authority URL to redirect the users on Sign In page
     */
    authorityUrl?: string;
    /**
     * Identity Provider Entity ID usually same as the SSO login URL.
     */
    entityId: string;
    /**
     * X509 Certificate
     */
    idpX509Certificate?: string;
    /**
     * Authority URL to redirect the users on Sign In page
     */
    nameId?: string;
    /**
     * SSO Login URL.
     */
    ssoLoginUrl: string;
}

/**
 * This schema defines defines the security config for SAML.
 */
export interface Security {
    /**
     * KeyStore Alias
     */
    keyStoreAlias?: string;
    /**
     * KeyStore File Path
     */
    keyStoreFilePath?: string;
    /**
     * KeyStore Password
     */
    keyStorePassword?: string;
    /**
     * Encrypt Name Id while sending requests from SP.
     */
    sendEncryptedNameId?: boolean;
    /**
     * Sign the Authn Request while sending.
     */
    sendSignedAuthRequest?: boolean;
    /**
     * Want the Metadata of this SP to be signed.
     */
    signSpMetadata?: boolean;
    /**
     * Only accept valid signed and encrypted assertions if the relevant flags are set
     */
    strictMode?: boolean;
    /**
     * Validity for the JWT Token created from SAML Response
     */
    tokenValidity?: number;
    /**
     * SP requires the assertion received to be encrypted.
     */
    wantAssertionEncrypted?: boolean;
    /**
     * SP requires the assertions received to be signed.
     */
    wantAssertionsSigned?: boolean;
    /**
     * SP requires the messages received to be signed.
     */
    wantMessagesSigned?: boolean;
    /**
     * SP requires the Name Id received to be encrypted.
     */
    wantNameIdEncrypted?: boolean;
}

/**
 * This schema defines defines the identity provider config.
 */
export interface SP {
    /**
     * Assertion Consumer URL.
     */
    acs: string;
    /**
     * Service Provider Entity ID usually same as the SSO login URL.
     */
    callback: string;
    /**
     * Service Provider Entity ID.
     */
    entityId: string;
    /**
     * Sp Private Key for Signing and Encryption Only
     */
    spPrivateKey?: string;
    /**
     * X509 Certificate
     */
    spX509Certificate?: string;
}

/**
 * This schema defines the language options available for search index mappings.
 */
export enum SearchIndexMappingLanguage {
    En = "EN",
    Jp = "JP",
    Zh = "ZH",
}

/**
 * This enum defines the search Type elastic/open search.
 */
export enum SearchType {
    Elasticsearch = "elasticsearch",
    Opensearch = "opensearch",
}

/**
 * OpenMetadata Secrets Manager Client Loader. Lets the client know how the Secrets Manager
 * Credentials should be loaded from the environment.
 */
export enum SecretsManagerClientLoader {
    Airflow = "airflow",
    Env = "env",
    Noop = "noop",
}

/**
 * OpenMetadata Client SSL configuration. This SSL information is about the OpenMetadata
 * server. It will be picked up from the pipelineServiceClient to use/ignore SSL when
 * connecting to the OpenMetadata server.
 *
 * Client SSL configuration
 *
 * OpenMetadata Client configured to validate SSL certificates.
 */
export interface Config {
    /**
     * CA certificate path. E.g., /path/to/public.cert. Will be used if Verify SSL is set to
     * `validate`.
     */
    certificatePath?: string;
}

export enum TransportationStrategy {
    SMTP = "SMTP",
    SMTPTLS = "SMTP_TLS",
    Smtps = "SMTPS",
}

/**
 * Client SSL verification policy when connecting to the OpenMetadata server: no-ssl,
 * ignore, validate.
 *
 * Client SSL verification. Make sure to configure the SSLConfig if enabled.
 */
export enum VerifySSL {
    Ignore = "ignore",
    NoSSL = "no-ssl",
    Validate = "validate",
}
