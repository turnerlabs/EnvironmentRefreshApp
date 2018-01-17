import { Component, OnInit } from '@angular/core';
import { RefreshRequestService, RefreshRequest } from '../../services';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

    requests: RefreshRequest[] = [];

    constructor(private refreshRequestService: RefreshRequestService) { }

    ngOnInit() {
        this.refreshRequestService.getRequests().subscribe(requests => {
            this.requests = requests;
        });
    }
}
