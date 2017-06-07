import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, DropdownModule, DataTableModule, PanelModule, SharedModule } from 'primeng/primeng';

import { RequestsComponent } from './requests.component';
import { DatabaseNamesPipe } from './database-names.pipe';
import { RefreshRequest } from './refresh-request';
import { RefreshRequestService } from './refresh-request.service';

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../../../testing/router-stubs';

describe('RequestsComponent', () => {
    let component: RequestsComponent;
    let fixture: ComponentFixture<RequestsComponent>;
    const refreshRequestServiceStub = {
        getRequests(): Promise<RefreshRequest[]> {
            return Promise.resolve([<RefreshRequest>{ environment: 'MAIN' }]);
        },
        getRequest(environment: string): Promise<RefreshRequest> {
            return Promise.resolve(<RefreshRequest>{ environment: 'MAIN' });
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                PanelModule,
                DropdownModule,
                DataTableModule,
                NoopAnimationsModule
            ],
            declarations: [
                RequestsComponent,
                RouterLinkStubDirective,
                RouterOutletStubComponent,
                DatabaseNamesPipe
            ],
            providers: [
                { provide: RefreshRequestService, useValue: refreshRequestServiceStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RequestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
