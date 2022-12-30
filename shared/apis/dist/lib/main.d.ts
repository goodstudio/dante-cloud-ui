import { Axios, HttpConfig } from './base';
import { OpenApiService, OAuth2ApiService } from './secure';
import { OAuth2ApplicationService, OAuth2ScopeService, OAuth2AuthorizationService, OAuth2ComplianceService, AssetServerService, AssetApplicationService, DatabaseAccountService, DatabaseCatalogService, DatabaseInstanceService, UaaConstantService, UpmsConstantService, SysOrganizationService, SysDepartmentService, SysEmployeeService, SysEmployeeAllocatableService, BucketService, MultipartUploadService, SysAuthorityService, SysDefaultRoleService, SysElementService, SysSecurityAttributeService, SysRoleService, SysUserService } from './modules';
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
    minioBucket(): BucketService;
    minioMultipart(): MultipartUploadService;
    sysAuthority(): SysAuthorityService;
    sysDefaultRole(): SysDefaultRoleService;
    sysElement(): SysElementService;
    sysSecurityAttribute(): SysSecurityAttributeService;
    sysRole(): SysRoleService;
    sysUser(): SysUserService;
    dialogueContact(): DialogueContactService;
    dialogueDetail(): DialogueDetailService;
    notification(): NotificationService;
    webSocketMessage(): WebSocketMessageService;
}
declare const createApi: (project: string, clientId: string, clientSecret: string, http: Axios, oidc: boolean) => ApiResources;
export { createApi };
