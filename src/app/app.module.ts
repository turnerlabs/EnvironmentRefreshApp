import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule, DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
    declarations: [
        AppComponent,
        RequestsComponent,
        ConfigComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
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
                path: 'config',
                component: ConfigComponent
            }

        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
