import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CutomersComponent } from './components/cutomers/cutomers.component';
import { AdminSuccessComponent } from './components/admin-success/admin-success.component';
import { ListOfServicesComponent } from './components/list-of-services/list-of-services.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    AdminPanelComponent,
    HomePageComponent,
    CutomersComponent,
    AdminSuccessComponent,
    ListOfServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
