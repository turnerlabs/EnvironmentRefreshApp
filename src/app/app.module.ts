import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule, ButtonModule, DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { ConfigComponent } from './config/config.component';
import { NewRequestComponent } from './newrequest/newrequest.component';
import { RefreshRequestService } from './requests/refresh-request.service';

@NgModule({
    declarations: [
        AppComponent,
        RequestsComponent,
        ConfigComponent,
        NewRequestComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        InputTextModule,
        ButtonModule,
        DataTableModule,
        SharedModule,
        RouterModule.forRoot([
            {
                path: '',
                component: RequestsComponent
            },
            {
                path: 'newrequest',
                component: NewRequestComponent
            },
            {
                path: 'config',
                component: ConfigComponent
            }

        ])
    ],
    providers: [
        RefreshRequestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
