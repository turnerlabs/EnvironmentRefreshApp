import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent, ConfigEnvironmentComponent, RequestsComponent, NewRequestComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'requests', pathMatch: 'full' },
  { path: 'config', component: ConfigComponent },
  { path: 'config/:environment', component: ConfigEnvironmentComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'requests/_new', component: NewRequestComponent },
  { path: '**', redirectTo: 'requests' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
