import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuardService } from './services/login-guard.service';
import { ProfileResolveService } from './services/profile-resolve.service';
import { CanExitService } from './services/can-exit.service';

const routes: Routes = [
  {
    path:'dashboard', component:HomeComponent,
    resolve: {
      profile: ProfileResolveService
    },
    canActivate:[LoginGuardService],
    canDeactivate:[CanExitService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
