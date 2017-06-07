import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, DropdownModule, DataTableModule, PanelModule, SharedModule } from 'primeng/primeng';

import { NewRequestComponent } from './new-request.component';

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../../../testing/router-stubs';

describe('NewRequestComponent', () => {
    let component: NewRequestComponent;
    let fixture: ComponentFixture<NewRequestComponent>;

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
                NewRequestComponent,
                RouterLinkStubDirective,
                RouterOutletStubComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
