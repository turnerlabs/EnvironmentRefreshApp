import { RefreshRequest } from './refresh-request'

export const RefreshRequestsListData: RefreshRequest[] = [
  {
    'id': '5931f3cced6ffb2540cff1eb',
    'environmentId': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': '2017-06-02T19:26:05.261-04:00',
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': '2017-06-02T19:26:55.527-04:00',
    'totalDuration': '27 seconds and 48ms'
  },
  {
    'id': '5931f3cced6ffb2540cff1eb',
    'environmentId': 'ASQA',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': '2017-06-02T19:26:05.261-04:00',
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': '2017-06-02T19:26:55.527-04:00',
    'totalDuration': '42 seconds and 21ms'
  }
];


export const RefreshRequestsData: RefreshRequest[] = [
  {
    'id': '5931f3cced6ffb2540cff1eb',
    'environmentId': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': '2017-06-02T19:26:05.261-04:00',
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': '2017-06-02T19:26:55.527-04:00',
    'databases': [
      {
        'databaseName': 'Foundation',
        'stage': 'Complete',
        'size': 1544,
        'restoreStartTime': '2017-06-02T19:26:27.089-04:00',
        'stageCompleteTime': '2017-06-02T19:26:54.137-04:00',
        'restoreCompleteTime': '2017-06-02T19:26:54.137-04:00',
        'elapsedTime': '00:00:27.0480000',
        'duration': '27 seconds and 48ms',
        'resource': 'http://foundation.turner.com/EnvironmentRefresh/api/EnvironmentRefreshConfigurations/MAIN/Foundation'
      }
    ],
    'logs': [
      {
        'database': null,
        'status': 'In Progress',
        'message': 'Starting environment refresh',
        'logTime': '2017-06-02T19:26:21.574-04:00'
      },
      {
        'database': 'Foundation',
        'status': 'Preparing',
        'message': 'Setting database offline',
        'logTime': '2017-06-02T19:26:27.089-04:00'
      },
      {
        'database': 'Foundation',
        'status': 'Restoring',
        'message': 'Restoring database over existing database',
        'logTime': '2017-06-02T19:26:29.449-04:00'
      },
      {
        'database': 'Foundation',
        'status': 'Restoring',
        'message': 'Setting recovery model and database options',
        'logTime': '2017-06-02T19:26:51.543-04:00'
      },
      {
        'database': 'Foundation',
        'status': 'PostRefresh',
        'message': 'Repairing broken logins',
        'logTime': '2017-06-02T19:26:53.637-04:00'
      },
      {
        'database': 'Foundation',
        'status': 'Complete',
        'message': null,
        'logTime': '2017-06-02T19:26:54.137-04:00'
      },
      {
        'database': null,
        'status': 'Complete',
        'message': null,
        'logTime': '2017-06-02T19:26:55.527-04:00'
      }
    ],
    'totalDuration': '27 seconds and 48ms'
  }
];
