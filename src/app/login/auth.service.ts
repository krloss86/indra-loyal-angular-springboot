import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string | null, password: string | null) {
    return this.httpClient.post(environment.LOGIN_URL,
      {
        username: username || '',
        password: password || ''
      }
    );
  }
}
