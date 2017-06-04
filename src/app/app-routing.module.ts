import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestsComponent } from './requests/requests.component';
import { NewRequestComponent } from './requests/new-request.component';
import { ConfigComponent } from './config/config.component';
import { ConfigEnvironmentComponent } from './config/config-environment.component';

const routes: Routes = [
  { path: '', redirectTo: '/requests', pathMatch: 'full' },
  { path: 'requests',  component: RequestsComponent },
  { path: 'config',  component: ConfigComponent },
  { path: 'config/:environment', component: ConfigEnvironmentComponent },
  { path: 'requests/_new',     component: NewRequestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
