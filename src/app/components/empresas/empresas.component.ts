import { Component } from '@angular/core';
import { Empresa, EmpresasService } from '../../service/empresas/empresas.service';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {
  empresas: Empresa[] = []

  constructor(private empresaService: EmpresasService){}

  ngOnInit(){
    this.empresaService.getData().subscribe(data => {
      this.empresas = data;
    });
  }
}