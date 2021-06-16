import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrearJugadorComponent} from './crear-jugador/crear-jugador.component';
import {ListarJugadorComponent} from './listar-jugador/listar-jugador.component';


const routes: Routes = [{
  path: 'jugador',
  children: [

    {
      path: 'crear',
      component: CrearJugadorComponent
    },
    {
      path: 'listar',
      component: ListarJugadorComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadorRoutingModule { }
