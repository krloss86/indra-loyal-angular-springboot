import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioEnum } from '../models/informacion-cliente';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProfileResolveService implements Resolve<Profile> {

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userLogged = localStorage.getItem(UsuarioEnum.LOGGED_USER) || '';//string
    const user = JSON.parse(userLogged);
    return this.httpClient.get<Profile>(`${environment.BASE_PATH_URL}/api/cliente/${user.id}`);
  }
}
