import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioEnum } from '../models/informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //para cada peticion al backend
    //agregamos un header Bearer <jwt>
    const user = localStorage.getItem(UsuarioEnum.LOGGED_USER);
    if(user) {
      const userObj = JSON.parse(user);
      req = req.clone(
        {
          setHeaders:{
            Authorization:`Bearer ${userObj.token}`,
            OtroHeader: `${Math.random()}`
          }
        }
      )
    }
    return next.handle(req);
  }
}
