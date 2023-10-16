import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuardService } from './services/login-guard.service';
import { ProfileResolveService } from './services/profile-resolve.service';

const routes: Routes = [
  {
    path:'dashboard', component:HomeComponent,
    resolve: {
      profile: ProfileResolveService
    },
    canActivate:[LoginGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
