import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CovidImpactComponent } from './covid-impact/covid-impact.component';
import { CtscanComponent } from './ctscan/ctscan.component';
import { DatasourceComponent } from './datasource/datasource.component';
import { HomeComponent } from './home/home.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [
  {path:'Images', component:CtscanComponent},
  {path: "", component:HomeComponent},
  {path: "Analytics", component:AnalyticsComponent},
  {path: "Covid-Impact", component:CovidImpactComponent},
  {path: "Data-Sources", component:DatasourceComponent},
  {path: "Project-Overview", component:ProjectoverviewComponent},
  {path: "Team-Members", component:TeamMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
