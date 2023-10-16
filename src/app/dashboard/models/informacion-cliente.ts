export const UsuarioEnum = {
  LOGGED_USER: 'LOGGED_USER',
}

export interface InformacionCliente {
  saldos: Saldos;
  equipo: Equipo;
  cliente: Cliente;
  recomendaciones: Recomendaciones;
}

export interface Recomendaciones {
  recomendaciones: Recomendacione[];
}

export interface Recomendacione {
  titulo: string;
  subTitulo: string;
  descripcion: string;
}

export interface Cliente {
  contactos: Contacto[];
}

export interface Contacto {
  fecha: string;
  empresa: string;
  descripcion: string;
}

export interface Equipo {
  datosEquipo: DatosEquipo[];
}

export interface DatosEquipo {
  titulo: string;
  dato: string;
}

export interface Saldos {
  datosSaldos: DatosSaldo[];
}

export interface DatosSaldo {
  titulo: string;
  fecha: string;
  descripcion: string;
}