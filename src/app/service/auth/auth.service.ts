import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http-service';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {
  login(username: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.buildUrl("auth/login"), { mail: username, password });
  }

  register(username: string, password: string, mail: string) {
    return this.httpClient.post(this.buildUrl("auth/register"), { nombre: username, password, mail });
  }
}
