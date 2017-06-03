export interface Config {
  environmentId: string;
  serverInstance: string;
  defaultDataFilePath: string;
  defaultLogFilePath: string;
  databases: Database[];
}

export interface Database {
  databaseName: string;
  overrideDataFilePath?: boolean;
  overrideLogFilePath?: boolean;
  impactsInsight: boolean;
  replicate: boolean;
  shrink: boolean;
  size?: number;
  restoreDuration?: number;
  restoreDurationDescription: string;
}
