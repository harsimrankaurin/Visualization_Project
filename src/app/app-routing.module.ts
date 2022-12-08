import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { CoverComponent } from './cover/cover.component';
import { HomeComponent } from './home/home.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { Dashboard4Component } from './dashboard4/dashboard4.component';
const routes: Routes = [
  {path: 'dashboard1', component: Dashboard1Component},
  {path: 'cover', component: CoverComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard2', component: Dashboard2Component},
  {path: 'dashboard4', component: Dashboard4Component},
  {path: 'dashboard3', component: Dashboard3Component},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [Dashboard1Component, Dashboard2Component,Dashboard3Component,Dashboard2Component]