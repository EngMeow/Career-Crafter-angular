import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { ViewProfileComponent } from './Components/Profile/view-profile/view-profile.component';
import { EditProfileComponent } from './Components/Profile/edit-profile/edit-profile.component';
import { DashboardComponent } from './Components/User/dashboard/dashboard.component';
import { JobsComponent } from './Components/User/jobs/jobs.component';
import { ApplicationsComponent } from './Components/User/applications/applications.component';
import { NavBarComponent } from './Components/Layout/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { NotfoundComponent } from './Components/Layout/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewProfileComponent,
    EditProfileComponent,
    DashboardComponent,
    JobsComponent,
    ApplicationsComponent,
    NavBarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
