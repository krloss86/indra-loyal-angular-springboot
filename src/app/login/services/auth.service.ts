import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioEnum } from 'src/app/dashboard/models/informacion-cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string | null, password: string | null) {
    //aca mismo una vez "logueados" guardemos los datos del usuario en localstorage
    return this.httpClient.post(`${environment.BASE_PATH_URL}/login`,
      {
        username: username || '',
        password: password || ''
      }
    ).pipe(
      map((user) => {
        //convierto el user objeto a texto, porque solo puedo guardar texto en el localStorage
        const userAsText = JSON.stringify(user)
        //guardarlo en localstorage
        localStorage.setItem(UsuarioEnum.LOGGED_USER,userAsText);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(UsuarioEnum.LOGGED_USER);
  }
}
