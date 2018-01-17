// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
// import { InputTextModule, ButtonModule, DropdownModule, DataTableModule, PanelModule, SharedModule } from 'primeng/primeng';

// import { ConfigComponent } from './config.component';
// import { Environment } from '../environment/environment';
// import { EnvironmentService } from '../environment/environment.service';

// import { RouterLinkStubDirective, RouterOutletStubComponent } from '../../../testing/router-stubs';

// describe('ConfigComponent', () => {
//     let component: ConfigComponent;
//     let fixture: ComponentFixture<ConfigComponent>;
//     const environmentsServiceStub = {
//         getEnvironments(): Promise<Environment[]> {
//             return Promise.resolve([<Environment>{ environment: 'MAIN'}]);
//         }
//     };

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 FormsModule,
//                 PanelModule,
//                 DropdownModule,
//                 DataTableModule,
//                 NoopAnimationsModule
//             ],
//             declarations: [
//                 ConfigComponent,
//                 RouterLinkStubDirective,
//                 RouterOutletStubComponent
//             ],
//             providers: [
//                 { provide: EnvironmentService, useValue: environmentsServiceStub }
//             ]
//         }).compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(ConfigComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should be created', () => {
//         expect(component).toBeTruthy();
//     });
// });
