import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEnvironmentComponent } from './config-environment.component';

describe('ConfigEnvironmentComponent', () => {
  let component: ConfigEnvironmentComponent;
  let fixture: ComponentFixture<ConfigEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
