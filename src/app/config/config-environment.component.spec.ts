import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InputTextModule, ButtonModule, DropdownModule, DataTableModule, PanelModule, SharedModule } from 'primeng/primeng';

import { ActivatedRouteStub } from '../../../testing/router-stubs';

import { ConfigEnvironmentComponent } from './config-environment.component';
import { Config } from './config';
import { ConfigService } from './config.service';

describe('ConfigEnvironmentComponent', () => {
    let component: ConfigEnvironmentComponent;
    let fixture: ComponentFixture<ConfigEnvironmentComponent>;
    let activatedRoute: ActivatedRouteStub;
    const configServiceStub = {
        getConfig(environment: string): Promise<Config> {
            return Promise.resolve(<Config>{
                environment: 'MAIN'
            });
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
                ConfigEnvironmentComponent
            ],
            providers: [
                { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
                { provide: ConfigService, useValue: configServiceStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigEnvironmentComponent);
        component = fixture.componentInstance;
        activatedRoute = <any>(fixture.debugElement.injector.get(ActivatedRoute));
        activatedRoute.testParams = { environment: 'MAIN' };
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
