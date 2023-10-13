import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { HomeComponent } from './dashboard/home/home.component';

//esto es un array de Roytes
const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'/login'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard', component:HomeComponent
  },
  /*agregar ruta para dashboard */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
