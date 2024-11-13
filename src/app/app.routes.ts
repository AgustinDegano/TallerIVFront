import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas/empresas.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {path: 'empresas', component: EmpresasComponent },
    {path: 'inicio', component: InicioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }