import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

//esto es un array de Roytes
const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  /*agregar ruta para dashboard */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
