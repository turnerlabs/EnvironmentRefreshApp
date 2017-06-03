export interface RefreshRequest {
    id: string;
    environmentId: string;
    status: string;
    requestor: string;
    scheduleDate: string;
    scheduledBy: string;
    completionDate: string;
    totalDuration: string;
    databases?: DatabaseLog[];
    logs?: LogEntry[];
}

interface DatabaseLog {
  databaseName: string;
  stage: string;
  size: number;
  restoreStartTime: string;
  stageCompleteTime: string;
  restoreCompleteTime: string;
  elapsedTime: string;
  duration: string;
  resource: string;
}

export interface LogEntry {
  database: string;
  status: string;
  message: string;
  logTime: string;
}
