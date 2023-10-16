import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InformacionCliente } from '../models/informacion-cliente';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ClientDataService {

  //estado inicial
  datosVacios = {
    saldos: {datosSaldos: []},
    equipo: {datosEquipo: []},
    cliente: {contactos: []},
    recomendaciones: {recomendaciones:[]}
  };

  private subject = new BehaviorSubject<InformacionCliente>(this.datosVacios);
  private current = this.subject.asObservable();

  constructor() { }

  public getInformacionCliente(): Observable<InformacionCliente> {
    return this.current;
  }

  public clear(): void {
    this.subject.next(this.datosVacios);
  }
  public updateCliente(nuevoCliente: InformacionCliente): void {
    this.subject.next(nuevoCliente);
  }
}