import { RefreshRequest } from './refresh-request'
import * as moment from 'moment';

export const RefreshRequestsData: RefreshRequest[] = [
  {
    'id': '45081fef-3d9a-402c-8437-7c142fd91e19',
    'environment': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': moment().add(-12, 'minutes').toDate(),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': moment().add(-10, 'minutes').toDate(),
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
    'totalDuration': '118 seconds and 48ms'
  },
    {
    'id': '1a22cd68-40c1-4b22-a6d9-be6019a127fa',
    'environment': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': moment().add(-180, 'minutes').toDate(),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': moment().add(-162, 'minutes').toDate(),
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
  },  {
    'id': 'ecc82d5f-ce2e-4472-8358-a0c38fa46cf6',
    'environment': 'MAIN',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': moment().add(-211, 'minutes').toDate(),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': moment().add(-200, 'minutes').toDate(),
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
  },  {
    'id': 'c91a11d1-5913-4cfd-81ce-339f9d6665f7',
    'environment': 'QA',
    'status': 'Complete',
    'requestor': 'DOMAIN\\user',
    'scheduleDate': moment().add(-327, 'minutes').toDate(),
    'scheduledBy': 'DOMAIN\\user',
    'completionDate': moment().add(-294, 'minutes').toDate(),
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
