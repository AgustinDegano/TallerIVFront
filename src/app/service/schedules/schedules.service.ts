import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http-service';
import { ScheduleResponse } from '../../components/inicio/inicio.component';

@Injectable({
  providedIn: 'root',
})
export class SchedulesService extends BaseHttpService {
  getSchdeules(
    ciudadOrigen: string,
    ciudadDestino: string,
    horarioSalida: any,
    horarioLlegada: any
  ) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.get<ScheduleResponse[]>(
      this.buildUrlWithParams('horarios/rutas', {
        ci: ciudadOrigen,
        cf: ciudadDestino,
        hs: horarioSalida,
        hl: horarioLlegada,
      }),
      { headers }
    );
  }
}
