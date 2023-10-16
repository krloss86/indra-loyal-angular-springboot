import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioEnum } from '../models/informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //mirar el localstorage y saber si el usuario esta "logueado"
    const usuario = localStorage.getItem(UsuarioEnum.LOGGED_USER);
    if(!usuario) {
      //que vaya al /login!
      this.router.navigate(['/login']);
    }
    return true;
  }

}
