export declare enum PermissionAction {
    CREATE = "CREATE",
    READ = "READ",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
export declare class CreatePermissionDto {
    name: string;
    description: string;
    action: PermissionAction;
    resource: string;
}
