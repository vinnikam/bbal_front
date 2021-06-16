import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutenticadorComponent} from './autenticador/autenticador.component';
import {InfoGeneralComponent} from './info-general/info-general.component';
import {ListarUsuariosComponent} from './listar-usuarios/listar-usuarios.component';
import {CrearUsuariosComponent} from './crear-usuarios/crear-usuarios.component';




const routes: Routes = [{
  path: 'usuario',
  children: [
    {
      path: 'info',
      component: InfoGeneralComponent
     },
    {
      path: 'autenticar',
      component: AutenticadorComponent
    },
    {
      path: 'listar',
      component: ListarUsuariosComponent
    },
    {
      path: 'crear',
      component: CrearUsuariosComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
