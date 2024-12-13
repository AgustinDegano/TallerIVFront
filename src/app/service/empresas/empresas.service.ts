import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Empresa {
  id: number;
  nombre: string;
  telefono: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  private apiUrl = 'http://localhost:8080/empresas';
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.apiUrl);
  }
}
