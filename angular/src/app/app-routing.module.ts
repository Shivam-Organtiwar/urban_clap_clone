import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminSuccessComponent } from './components/admin-success/admin-success.component';
import { CutomersComponent } from './components/cutomers/cutomers.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListOfServicesComponent } from './components/list-of-services/list-of-services.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'login', component:LogInComponent},
  {path:'adminPanel', component:AdminPanelComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'customers', component:CutomersComponent},
  {path:'adminSuccess', component:AdminSuccessComponent},
  {path:'seeListOfServices', component:ListOfServicesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
