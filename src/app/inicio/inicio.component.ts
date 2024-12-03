import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgbTimepickerModule, FormsModule, JsonPipe],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  timeSalida = { hour: 13, minute: 30 };
  timeLlegada = { hour: 15, minute: 45 };
  ngOnInit(): void {
    // No navegar aquí de vuelta a 'inicio', podría causar recursividad
    // this.router.navigate(['/inicio']);
  }
}

