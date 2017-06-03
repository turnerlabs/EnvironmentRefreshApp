import { Config } from './config'

export const ConfigData: Config[] = [
  {
    'environmentId': 'MAIN',
    'serverInstance': 'MAINSQL',
    'defaultDataFilePath': 'D:\\MSSQL\\DATA',
    'defaultLogFilePath': 'L:\\MSSQL\\DATA',
    'databases': [
      {
        'databaseName': 'Customers',
        'overrideDataFilePath': null,
        'overrideLogFilePath': null,
        'impactsInsight': false,
        'replicate': false,
        'shrink': false,
        'size': 235264,
        'restoreDuration': 6208,
        'restoreDurationDescription': '1 hour and 43 minutes'
      },
      {
        'databaseName': 'Orders',
        'overrideDataFilePath': null,
        'overrideLogFilePath': null,
        'impactsInsight': false,
        'replicate': false,
        'shrink': false,
        'size': 235264,
        'restoreDuration': 6208,
        'restoreDurationDescription': '1 hour and 43 minutes'
      }
    ]
  },
  {
    'environmentId': 'PROD',
    'serverInstance': 'PRODSQL',
    'defaultDataFilePath': 'D:\\MSSQL\\DATA',
    'defaultLogFilePath': 'L:\\MSSQL\\DATA',
    'databases': [
      {
        'databaseName': 'Customers',
        'overrideDataFilePath': null,
        'overrideLogFilePath': null,
        'impactsInsight': false,
        'replicate': false,
        'shrink': false,
        'size': 235264,
        'restoreDuration': 6208,
        'restoreDurationDescription': '1 hour and 43 minutes'
      },
      {
        'databaseName': 'Orders',
        'overrideDataFilePath': null,
        'overrideLogFilePath': null,
        'impactsInsight': false,
        'replicate': false,
        'shrink': false,
        'size': 235264,
        'restoreDuration': 6208,
        'restoreDurationDescription': '1 hour and 43 minutes'
      }
    ]
  }

];
