import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent, ConfigEnvironmentComponent, RequestsComponent, NewRequestComponent,LoginComponent, DashboardComponent } from './components';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
          children: [
            { path: '', component: RequestsComponent },
            { path: 'config', component: ConfigComponent },
            { path: 'config/:environment', component: ConfigEnvironmentComponent },
            { path: 'requests', component: RequestsComponent },
            { path: 'requests/_new', component: NewRequestComponent }
          ]
}, 
  
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
