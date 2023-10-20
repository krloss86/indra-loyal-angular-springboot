import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../services/can-exit.service';
import { ClientDataService } from '../services/client-data.service';
import { AuthService } from './../../login/services/auth.service';
import { InformacionCliente } from './../models/informacion-cliente';
declare function initJsFromTs(): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, CanComponentDeactivate {

  informacionCliente?: InformacionCliente;//cuando no se inicializa usar ?:
  hayCambios = true;//a modo ejemlo para el canDeactivate

  constructor(
    private ClientDataService: ClientDataService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.ClientDataService.getInformacionCliente()
      .subscribe( data => {
        console.log('informacionCliente > data:', data);
        this.informacionCliente = data
      })
  }

  ngOnInit(): void {
    //cargar el js que controla los efectos del menu
    initJsFromTs();//assets/js/init.js
  }

  executeLogout(): void {
    //anulo la sesion de usuario: 
    //this.authService.logout();
    //navegamos al login nuevamente
    this.router.navigate(['/login']);
  }

  //defino el metodo que "mira" el CanDeactivate para decidir que hacer
  canDeactivate(): boolean {
    let descartarCambios = true;
    if(this.hayCambios) {
      descartarCambios = confirm('Hay cambios sin guardar ¿confirma que desea descarlos?');
      if(descartarCambios) {
        //logout usando el service
        this.authService.logout();
      }
    }
    return descartarCambios;
  }
}
