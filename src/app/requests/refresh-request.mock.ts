import { RefreshRequest } from './refresh-request'

export const RefreshRequestsListData: RefreshRequest[] = [
  {
    'id': '5931f3cced6ffb2540cff1eb',
    'environment': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': new Date('2017-06-02T19:26:05.261-04:00'),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': new Date('2017-06-02T19:26:55.527-04:00'),
    'totalDuration': '27 seconds and 48ms'
  },
  {
    'id': '5931f3cced6ffb2540cff1eb',
    'environment': 'ASQA',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': new Date('2017-06-02T19:26:05.261-04:00'),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': new Date('2017-06-02T19:26:55.527-04:00'),
    'totalDuration': '42 seconds and 21ms'
  }
];


export const RefreshRequestsData: RefreshRequest[] = [
  {
    'id': '5931f3cced6ffb2540cff1eb',
    'environment': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': new Date('2017-06-02T19:26:05.261-04:00'),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': new Date('2017-06-02T19:26:55.527-04:00'),
    'databases': [
      {
        'databaseName': 'Foundation',
        'stage': 'Complete',
        'size': 1544,
        'restoreStartTime': new Date('2017-06-02T19:26:27.089-04:00'),
        'stageCompleteTime': new Date('2017-06-02T19:26:54.137-04:00'),
        'restoreCompleteTime': new Date('2017-06-02T19:26:54.137-04:00'),
        'elapsedTime': '00:00:27.0480000',
        'duration': '27 seconds and 48ms',
        'resource': 'http://localhost/api/EnvironmentRefreshConfigurations/MAIN/Foundation'
      }
    ],
    'logs': [
      {
        'database': null,
        'status': 'In Progress',
        'message': 'Starting environment refresh',
        'logTime': new Date('2017-06-02T19:26:21.574-04:00')
      },
      {
        'database': 'Foundation',
        'status': 'Preparing',
        'message': 'Setting database offline',
        'logTime': new Date('2017-06-02T19:26:27.089-04:00')
      },
      {
        'database': 'Foundation',
        'status': 'Restoring',
        'message': 'Restoring database over existing database',
        'logTime': new Date('2017-06-02T19:26:29.449-04:00')
      },
      {
        'database': 'Foundation',
        'status': 'Restoring',
        'message': 'Setting recovery model and database options',
        'logTime': new Date('2017-06-02T19:26:51.543-04:00')
      },
      {
        'database': 'Foundation',
        'status': 'PostRefresh',
        'message': 'Repairing broken logins',
        'logTime': new Date('2017-06-02T19:26:53.637-04:00')
      },
      {
        'database': 'Foundation',
        'status': 'Complete',
        'message': null,
        'logTime': new Date('2017-06-02T19:26:54.137-04:00')
      },
      {
        'database': null,
        'status': 'Complete',
        'message': null,
        'logTime': new Date('2017-06-02T19:26:55.527-04:00')
      }
    ],
    'totalDuration': '27 seconds and 48ms'
  }
];
