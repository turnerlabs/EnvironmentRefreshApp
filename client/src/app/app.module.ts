import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule, ButtonModule, InputTextModule, DropdownModule, MessageModule, DataTableModule, PanelModule, OverlayPanelModule, FieldsetModule } from 'primeng/primeng';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ConfigService, EnvironmentService, RefreshRequestService, NewRequestService } from './services';
import { SystemNamesPipe } from './pipes';
import { NavMenuComponent, ConfigComponent, ConfigEnvironmentComponent, RequestsComponent, NewRequestComponent, TopMenuComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ConfigComponent,
    ConfigEnvironmentComponent,
    RequestsComponent,
    NewRequestComponent,
    TopMenuComponent,
    SystemNamesPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    MessageModule,
    DataTableModule,
    PanelModule,
    OverlayPanelModule,
    FieldsetModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    EnvironmentService,
    RefreshRequestService,
    NewRequestService
],
  bootstrap: [AppComponent]
})
export class AppModule {}
