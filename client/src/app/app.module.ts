import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule, ButtonModule, InputTextModule, DropdownModule, MessageModule, DataTableModule, PanelModule, OverlayPanelModule, FieldsetModule, CheckboxModule, MultiSelectModule } from 'primeng/primeng';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ConfigService, EnvironmentService, RefreshRequestService } from './services';
import { SystemNamesPipe } from './pipes';
import { NavMenuComponent, ConfigComponent, ConfigEnvironmentComponent, RequestsComponent, NewRequestComponent, TopMenuComponent, RequestDetailComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ConfigComponent,
    ConfigEnvironmentComponent,
    RequestsComponent,
    NewRequestComponent,
    TopMenuComponent,
    SystemNamesPipe,
    RequestDetailComponent
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
    AppRoutingModule,
    CheckboxModule,
    MultiSelectModule
  ],
  providers: [
    ConfigService,
    EnvironmentService,
    RefreshRequestService
],
  bootstrap: [AppComponent]
})
export class AppModule {}
