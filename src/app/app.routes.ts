import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas/empresas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
    {path: 'empresas', component: EmpresasComponent },
    {path: 'inicio', component: InicioComponent },
    {path: 'contacto', component: ContactoComponent},
    {path: '', component: InicioComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }