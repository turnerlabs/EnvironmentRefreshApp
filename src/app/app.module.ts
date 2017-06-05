import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule, ButtonModule, DropdownModule, DataTableModule, PanelModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RefreshRequestService } from './requests/refresh-request.service';
import { EnvironmentService } from './environment/environment.service';
import { ConfigService } from './config/config.service';

import { RequestsComponent } from './requests/requests.component';
import { NewRequestComponent } from './requests/new-request.component';
import { ConfigComponent } from './config/config.component';
import { ConfigEnvironmentComponent } from './config/config-environment.component';
import { DatabaseNamesPipe } from './requests/database-names.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    DataTableModule,
    PanelModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RequestsComponent,
    ConfigComponent,
    NewRequestComponent,
    ConfigEnvironmentComponent,
    DatabaseNamesPipe
  ],
  providers: [
    EnvironmentService,
    ConfigService,
    RefreshRequestService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
