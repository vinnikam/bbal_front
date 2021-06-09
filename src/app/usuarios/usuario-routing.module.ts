import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutenticadorComponent} from './autenticador/autenticador.component';


const routes: Routes = [{
  path: 'usuario',
  children: [
    {
      path: 'autenticar',
      component: AutenticadorComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
