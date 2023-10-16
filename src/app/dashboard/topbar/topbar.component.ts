import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { ClientDataService } from './../services/client-data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClientService,//http
    private clienteDataService: ClientDataService, //servicio contenedor de datos
    ) { }

  searchForm = this.formBuilder.group(
    {
      numeroTelefono: ['', Validators.required],
    }
  );
  ngOnInit(): void {
  }

  executeSearch(): void {
    //usar un observable para hacer .next({})
    this.clienteService.search(Number(this.searchForm.controls.numeroTelefono.value))
    .subscribe(
      data =>  this.clienteDataService.updateCliente(data)
    );

    //el componente hijo escucha los cambios 
  }

  resetSearch(): void {
    this.searchForm.reset();
  }
}
