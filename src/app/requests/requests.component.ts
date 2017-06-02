import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { RefreshRequest } from './refresh-request';
import { RefreshRequestService } from './refresh-request.service';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

    requests: RefreshRequest[];

    constructor(private refreshRequestService: RefreshRequestService) { }

    ngOnInit() {
        this.refreshRequestService.getRequests().then(requests => this.requests = requests);
    }

}
