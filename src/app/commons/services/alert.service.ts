import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IMensaje {
  type: string,
  text: string
}

@Injectable(/*{
  providedIn: 'root'
}*/)
export class AlertService {

  private subject = new Subject<IMensaje>();//emitir mensajes

  constructor() { }

  error(mensaje: string): void {
    //emiti un mensaje de error
    this.subject.next({
      type: 'error',
      text: mensaje
    });
  }  
  success(mensaje: string): void {
    //emiti un mensaje de error
    this.subject.next({
      type: 'success',
      text: mensaje
    });
  } 

  getAlert() : Observable<IMensaje> {
    return this.subject.asObservable();
  }
}
