import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateLeadComponent } from './pages/create-lead/create-lead.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'relacionamentos', component: MainComponent },
  { path: 'novo-relacionamento', component: CreateLeadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
