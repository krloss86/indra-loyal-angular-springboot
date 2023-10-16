import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../services/client-data.service';
import { InformacionCliente } from './../models/informacion-cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informacionCliente?: InformacionCliente;//cuando no se inicializa usar ?:
  
  constructor(
    private ClientDataService: ClientDataService
  ) { 
    this.ClientDataService.getInformacionCliente()
      .subscribe( data => {
        console.log('informacionCliente > data:', data);
        this.informacionCliente = data
      })
  }

  ngOnInit(): void {

  }

}
