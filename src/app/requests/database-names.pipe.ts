import { Pipe, PipeTransform } from '@angular/core';
import { DatabaseLog } from './refresh-request';

@Pipe({
  name: 'databaseNamesPipe'
})
export class DatabaseNamesPipe implements PipeTransform {
  transform(value: DatabaseLog[], args?: any): any {
    return value.map(x => x.databaseName).join(',');
  }
}
