import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule, ButtonModule, InputTextModule, DropdownModule, MessageModule, DataTableModule, PanelModule, OverlayPanelModule, FieldsetModule } from 'primeng/primeng';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ConfigService, EnvironmentService, RefreshRequestService } from './services';
import { SystemNamesPipe } from './pipes';
import { NavMenuComponent, ConfigComponent, ConfigEnvironmentComponent, RequestsComponent, NewRequestComponent, TopMenuComponent } from './components';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
    LoginComponent,
    DashboardComponent
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
    CookieService
],
  bootstrap: [AppComponent]
})
export class AppModule {}
