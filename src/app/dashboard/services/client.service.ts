import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionCliente } from '../models/informacion-cliente';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ClientService {
  private clientData = environment.CLIENT_DATA;

  constructor(
    private httpClient: HttpClient, 
  ) { }

  public search(numeroTelefono: number): Observable<InformacionCliente> {
    console.log('numeroTelefono:', numeroTelefono);
    return this.httpClient.get<InformacionCliente>(
      `${environment.CLIENT_ENDPOINT}${this.clientData}`
    );
    
    //http://localhost:4200/assets/datos.json
    //http://localhost:8080/api/client/123456789 GET
  }
}
