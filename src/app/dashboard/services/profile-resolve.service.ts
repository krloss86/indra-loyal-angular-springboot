import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Profile } from '../models/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProfileResolveService implements Resolve<Profile> {

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpClient.get<Profile>(`${environment.BASE_PATH_URL}/users/2`);
  }
}
