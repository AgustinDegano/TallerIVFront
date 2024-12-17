import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { CommonModule } from '@angular/common'; // Para *ngIf y *ngFor
import { Empresa, EmpresasService } from '../../service/empresas/empresas.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule, CommonModule], // Importa CommonModule aquí
  templateUrl: './login-admins.component.html',
  styleUrl: './login-admins.component.css',
})
export class LoginAdminsComponent implements OnInit {
  empresas: Empresa[] = [];
  editingEmpresa: Empresa | null = null;

  constructor(private empresaService: EmpresasService) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.empresaService.getData().subscribe({
      next: (data) => (this.empresas = data),
      error: (err) => console.error('Error al cargar empresas:', err),
    });
  }

  editEmpresa(empresa: Empresa): void {
    this.editingEmpresa = { ...empresa };
  }

  saveEmpresa(): void {
    if (this.editingEmpresa) {
      this.empresaService.updateEmpresa(this.editingEmpresa.id, this.editingEmpresa).subscribe({
        next: () => {
          this.loadEmpresas();
          this.editingEmpresa = null;
        },
        error: (err) => console.error('Error al actualizar la empresa:', err),
      });
    }
  }

  cancelEdit(): void {
    this.editingEmpresa = null;
  }

  deleteEmpresa(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta empresa?')) {
      this.empresaService.deleteEmpresa(id).subscribe({
        next: () => this.loadEmpresas(),
        error: (err) => console.error('Error al eliminar la empresa:', err),
      });
    }
  }

  newEmpresa: Empresa = { id: 0 , nombre: '', telefono: '', direccion: '' }; // Objeto para la nueva empresa

  addEmpresa(): void {
    this.empresaService.createEmpresa(this.newEmpresa).subscribe({
      next: () => {
        this.loadEmpresas(); // Recargar la lista
        this.newEmpresa = { id: 0 , nombre: '', telefono: '', direccion: '' }; // Resetear formulario
      },
      error: (err) => console.error('Error al agregar empresa:', err),
    });
  }

}
