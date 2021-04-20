import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/newloginpage/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmiComponent } from './Components/emi/emi.component';
import { NewloginpageComponent } from './Components/newloginpage/newloginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    EmiComponent,
    NewloginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
