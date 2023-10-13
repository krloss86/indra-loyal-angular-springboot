import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonsModule } from './commons/commons.module';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactoComponent } from './dashboard/contacto/contacto.component';
import { DatosEquipoComponent } from './dashboard/datos-equipo/datos-equipo.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { RecomendacionComponent } from './dashboard/recomendacion/recomendacion.component';
import { SaldoComponent } from './dashboard/saldo/saldo.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    DatosEquipoComponent,
    FooterComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonsModule
  ],
  providers: [],/*interceptor*/
  bootstrap: [AppComponent]
})
export class AppModule { }
