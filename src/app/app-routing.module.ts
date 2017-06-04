import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestsComponent } from './requests/requests.component';
import { NewRequestComponent } from './newrequest/newrequest.component';
import { ConfigComponent } from './config/config.component';
import { ConfigEnvironmentComponent } from './config/config-environment.component';

const routes: Routes = [
  { path: '', redirectTo: '/requests', pathMatch: 'full' },
  { path: 'requests',  component: RequestsComponent },
  { path: 'config',  component: ConfigComponent },
  { path: 'config/:environment', component: ConfigEnvironmentComponent },
  { path: 'newrequest',     component: NewRequestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
