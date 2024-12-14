import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginAdminsComponent } from './components/login-admins/login-admins.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'inicio', component: InicioComponent },
    {path: 'empresas', component: EmpresasComponent, canActivate: [AuthGuard]},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login-admins', component: LoginAdminsComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '**', redirectTo: 'inicio' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }