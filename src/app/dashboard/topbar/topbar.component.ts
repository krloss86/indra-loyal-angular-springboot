import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { ClientDataService } from './../services/client-data.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  profile?: Profile;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClientService,//http
    private clienteDataService: ClientDataService, //servicio contenedor de datos
    private activatRoute: ActivatedRoute,
    ) { }

  searchForm = this.formBuilder.group(
    {
      numeroTelefono: ['', Validators.required],
    }
  );
  ngOnInit(): void {
    //capturamos el datos que retorna el resolve bajo la clave profile
    this.profile = this.activatRoute.snapshot.data['profile'];
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
