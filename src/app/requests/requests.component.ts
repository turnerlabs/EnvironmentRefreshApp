import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { RefreshRequest } from './refreshrequest';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

    requests: RefreshRequest[] = [
        {
            id: 'dd5ccc36-7fdb-452e-ad08-ff6561a053f3',
            environment: 'MAIN',
            status: 'Pending',
            requestedBy: 'Cannon, Robert',
            requestedOn: 'Now',
            scheduledOn: 'Now',
            databases: 'Foundation'
        },
        {
            id: '0b8b0709-c03b-4d2a-a9ec-ec39e535f7a3',
            environment: 'ASQA',
            status: 'Pending',
            requestedBy: 'Cannon, Robert',
            requestedOn: 'Now',
            scheduledOn: 'Now',
            databases: 'EngageTV'
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
