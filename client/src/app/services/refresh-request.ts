export interface RefreshRequest {
    id: string;
    environment: string;
    status: string;
    requestor: string;
    scheduleDate: Date;
    scheduledBy: string;
    completionDate: Date;
    totalDuration: string;
    systems?: RefreshRequestSystem[];
    log?: string[];
}

export interface RefreshRequestSystem {
    systemName: string;
    databaseName: string;
    stage: string;
    size: number;
    restoreStartTime: Date;
    stageCompleteTime: Date;
    restoreCompleteTime: Date;
    elapsedTime: string;
    duration: string;
    resource: string;
    selected: boolean;
}
