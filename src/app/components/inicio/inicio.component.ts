import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from '../buttons/buttons.component';
import { SchedulesService } from '../../service/schedules/schedules.service';
import { DatePipe } from '@angular/common';


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
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  timeSalida = { hour: 13, minute: 30 };
  timeLlegada = { hour: 15, minute: 45 };
  ciudadOrigen: string = '';
  ciudadDestino: string = '';

  schedules: ScheduleResponse[] = [];

  constructor(private scheduleService: SchedulesService) {}

  searchSchedule(): void {
    this.scheduleService
      .getSchdeules(
        this.ciudadOrigen,
        this.ciudadDestino,
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
