import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DatosEquipoComponent } from './datos-equipo/datos-equipo.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { SaldoComponent } from './saldo/saldo.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientDataService } from './services/client-data.service';
import { ClientService } from './services/client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { ProfileResolveService } from './services/profile-resolve.service';


@NgModule({
  declarations: [
    HomeComponent,
    DatosEquipoComponent,
    FooterComponent,
    ContactoComponent,
    NavbarComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  exports:[
    HomeComponent,
    DatosEquipoComponent,
    FooterComponent,
    ContactoComponent,
    NavbarComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent
  ],
  providers:[
    ClientService,
    ClientDataService,
    ProfileResolveService,
    {
      provide: HTTP_INTERCEPTORS,useClass: JwtInterceptorService, multi: true
    }
  ]
})
export class DashboardModule { }
