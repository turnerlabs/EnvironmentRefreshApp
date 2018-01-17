import { Pipe, PipeTransform } from '@angular/core';
import { RefreshRequestSystem } from '../services';

@Pipe({
    name: 'systemNames'
})
export class SystemNamesPipe implements PipeTransform {
    transform(value: RefreshRequestSystem[]): string {
        return value.map(x => x.systemName).join(', ');
    }
}
