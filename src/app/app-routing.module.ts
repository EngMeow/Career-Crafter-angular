import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/User/dashboard/dashboard.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { ViewProfileComponent } from './Components/Profile/view-profile/view-profile.component';
import { EditProfileComponent } from './Components/Profile/edit-profile/edit-profile.component';
import { ApplicationsComponent } from './Components/User/applications/applications.component';
import { JobsComponent } from './Components/User/jobs/jobs.component';
import { NotfoundComponent } from './Components/Layout/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'dashboard' , component:DashboardComponent },
  {path:'applications' , component:ApplicationsComponent },
  {path:'jobs' , component:JobsComponent },
  {path:'dashboard' , component:DashboardComponent },
  {path:'login' , component:LoginComponent },
  {path:'register' , component:RegisterComponent },
  {path:':id/profile' , component:ViewProfileComponent },
  {path:':id/profile/edit' , component:EditProfileComponent },
  {path:'**' , component:NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
