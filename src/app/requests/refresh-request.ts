export interface RefreshRequest {
    id: string;
    environment: string;
    status: string;
    requestedBy: string;
    requestedOn;
    scheduledOn;
    databases: string;
}
