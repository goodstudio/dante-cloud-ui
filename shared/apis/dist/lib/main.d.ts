import { Axios, HttpConfig } from './base';
import { OpenApiService, OAuth2ApiService } from './secure';
import { OAuth2ApplicationService, OAuth2ScopeService, OAuth2AuthorizationService, OAuth2ComplianceService, OAuth2DeviceService, OAuth2ProductService, AssetServerService, AssetApplicationService, DatabaseAccountService, DatabaseCatalogService, DatabaseInstanceService, UaaConstantService, UpmsConstantService, OssConstantService, SysOrganizationService, SysDepartmentService, SysEmployeeService, SysEmployeeAllocatableService, SysPermissionService, SysRoleService, SysUserService, SysAttributeService, SysDefaultRoleService, SysElementService, ExtendedTaskService, SysTenantDataSourceService, ChunkUploadService, BucketService, BucketSettingService, BucketEncryptionService, BucketPolicyService, BucketTagsService, BucketQuotaService, BucketVersioningService, ObjectLockConfigurationService, ObjectService, ObjectStreamService, ObjectSettingService, ObjectTagsService, ObjectRetentionService, ObjectLegalHoldService } from './modules';
import { DialogueContactService, DialogueDetailService, NotificationService, WebSocketMessageService } from './settings';
declare class ApiResources {
    private static instance;
    private config;
    private constructor();
    static getInstance(config: HttpConfig): ApiResources;
    getConfig(): HttpConfig;
    open(): OpenApiService;
    oauth2(): OAuth2ApiService;
    oauth2Application(): OAuth2ApplicationService;
    oauth2Scope(): OAuth2ScopeService;
    oauth2Authorization(): OAuth2AuthorizationService;
    oauth2Compliance(): OAuth2ComplianceService;
    oauth2Device(): OAuth2DeviceService;
    oauth2Product(): OAuth2ProductService;
    assetServer(): AssetServerService;
    assetApplication(): AssetApplicationService;
    dbAccount(): DatabaseAccountService;
    dbCatalog(): DatabaseCatalogService;
    dbInstance(): DatabaseInstanceService;
    uaaConstant(): UaaConstantService;
    upmsConstant(): UpmsConstantService;
    sysOrganization(): SysOrganizationService;
    sysDepartment(): SysDepartmentService;
    sysEmployee(): SysEmployeeService;
    sysEmployeeAllocatable(): SysEmployeeAllocatableService;
    sysTenantDataSource(): SysTenantDataSourceService;
    sysPermission(): SysPermissionService;
    sysRole(): SysRoleService;
    sysUser(): SysUserService;
    sysAttribute(): SysAttributeService;
    sysDefaultRole(): SysDefaultRoleService;
    sysElement(): SysElementService;
    dialogueContact(): DialogueContactService;
    dialogueDetail(): DialogueDetailService;
    notification(): NotificationService;
    webSocketMessage(): WebSocketMessageService;
    task(): ExtendedTaskService;
    ossConstant(): OssConstantService;
    ossBucket(): BucketService;
    ossBucketSetting(): BucketSettingService;
    ossChunk(): ChunkUploadService;
    ossBucketEncryption(): BucketEncryptionService;
    ossBucketPolicy(): BucketPolicyService;
    ossBucketTags(): BucketTagsService;
    ossBucketQuota(): BucketQuotaService;
    ossBucketVersioning(): BucketVersioningService;
    ossObjectLock(): ObjectLockConfigurationService;
    ossObject(): ObjectService;
    ossObjectStream(): ObjectStreamService;
    ossObjectSetting(): ObjectSettingService;
    ossObjectTags(): ObjectTagsService;
    ossObjectRetention(): ObjectRetentionService;
    ossObjectLegalHold(): ObjectLegalHoldService;
}
declare const createApi: (project: string, clientId: string, clientSecret: string, http: Axios, oidc: boolean) => ApiResources;
export { createApi };
