import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedulesService } from '../../service/schedules/schedules.service';

export interface ScheduleResponse {
  id: number;
  horaSalida: string;
  horaLlegada: string;
  ruta: {
    id: number;
    ciudadOrigen: {
      id: number;
      nombre: string;
    };
    ciudadDestino: {
      id: number;
      nombre: string;
    };
  };
  empresa: {
    id: number;
    nombre: string;
    telefono: string;
    direccion: string;
  };
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  timeSalida = { hour: 13, minute: 30 };
  timeLlegada = { hour: 15, minute: 45 };
  selectedCiudadOrigen: string = 'Ciudad Origen';
  selectedCiudadDestino: string = 'Ciudad Destino';

  schedules: ScheduleResponse[] = [];

  constructor(private scheduleService: SchedulesService) {}

  onSelectCiudadOrigen(ciudad: string): void {
    this.selectedCiudadOrigen = ciudad;
  }

  onSelectCiudadDestino(ciudad: string): void {
    this.selectedCiudadDestino = ciudad;
  }

  searchSchedule(): void {
    this.scheduleService
      .getSchdeules(
        this.selectedCiudadOrigen,
        this.selectedCiudadDestino,
        `${this.timeSalida.hour}:${this.timeSalida.minute}`,
        `${this.timeLlegada.hour}:${this.timeLlegada.minute}`
      )
      .subscribe(
        (response) => {
          this.schedules = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
