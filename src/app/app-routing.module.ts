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
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'' , component:HomeComponent },
  {path:'dashboard' ,canActivate:[authGuard] , component:DashboardComponent },
  {path:'applications' ,canActivate:[authGuard], component:ApplicationsComponent },
  {path:'jobs' ,canActivate:[authGuard], component:JobsComponent },
  {path:'dashboard' ,canActivate:[authGuard], component:DashboardComponent },
  {path:':id/profile' ,canActivate:[authGuard], component:ViewProfileComponent },
  {path:':id/profile/edit' ,canActivate:[authGuard], component:EditProfileComponent },
  {path:'login' , component:LoginComponent },
  {path:'register' , component:RegisterComponent },
  {path:'**' , component:NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
