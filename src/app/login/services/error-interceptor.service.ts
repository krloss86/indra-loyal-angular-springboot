import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/commons/services/alert.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(
    private authService:AuthService, 
    private alertService:AlertService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // debugger;
    console.log('ErrorInterceptorService');

    return next.handle(req)
      .pipe(
        catchError(
          err => {
            if(err.status == 401)  {//no está autorizado
              //this.authService.logout();
              location.reload();
            }

            //logica para evaluar los demas http status code (400, 500)
            const error = err.error.error || err.statusText;
            this.alertService.error(error);
            throw throwError(error);
          }
        )
      )

  }

}
