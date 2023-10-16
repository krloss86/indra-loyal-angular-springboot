import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//esto es un array de Roytes
const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'/login'
  },
  {
    path:'**', component:NotFoundComponent
  },
  /*agregar ruta para dashboard */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
