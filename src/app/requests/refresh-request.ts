export interface RefreshRequest {
    id: string;
    environmentId: string;
    status: string;
    requestor: string;
    scheduleDate: Date;
    scheduledBy: string;
    completionDate: Date;
    totalDuration: string;
    databases?: DatabaseLog[];
    logs?: LogEntry[];
}

interface DatabaseLog {
  databaseName: string;
  stage: string;
  size: number;
  restoreStartTime: Date;
  stageCompleteTime: Date;
  restoreCompleteTime: Date;
  elapsedTime: string;
  duration: string;
  resource: string;
}

export interface LogEntry {
  database: string;
  status: string;
  message: string;
  logTime: Date;
}
