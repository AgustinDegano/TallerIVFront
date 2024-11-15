import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpresasComponent } from './empresas/empresas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginAdminsComponent } from './login-admins/login-admins.component';
import { AbmHorariosComponent } from './abm-horarios/abm-horarios.component';


export const routes: Routes = [
    {path: 'empresas', component: EmpresasComponent },
    {path: 'inicio', component: InicioComponent },
    {path: 'contacto', component: ContactoComponent},
    {path: 'login-admins', component: LoginAdminsComponent},
    {path: 'abm-horarios', component: AbmHorariosComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full' },
    // { path: '**', redirectTo: 'inicio' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }