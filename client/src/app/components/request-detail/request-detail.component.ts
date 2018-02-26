import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { RefreshRequestService, RefreshRequest } from '../../services';

/**
 * Component that provides details view for requests
 * @export
 * @class RequestDetailComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-requestdetail',
    templateUrl: 'request-detail.component.html',
    styleUrls : ['./request-detail.component.scss']
})

export class RequestDetailComponent implements OnInit, OnDestroy {

    public request: RefreshRequest;
    private sub: any;
    private id: string;

    /**
     * Creates an instance of RequestDetailComponent.
     * @param {ActivatedRoute} route
     * @param {RefreshRequestService} refreshRequestService
     * @memberof RequestDetailComponent
     */
    constructor(private route: ActivatedRoute, private refreshRequestService: RefreshRequestService) {
    }

    /**
     * Init method
     * @memberof RequestDetailComponent
     */
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log('navigated to id:' + this.id);
            this.refreshRequestService.getRequest(this.id).subscribe(result => {
                this.request = result;
            });
        });
    }

    /**
     * Destructor
     * @memberof RequestDetailComponent
     */
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
