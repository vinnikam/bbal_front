import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoGeneralComponent} from './usuarios/info-general/info-general.component';
import {AutenticadorComponent} from './usuarios/autenticador/autenticador.component';
import {ListarJugadorComponent} from './jugadores/listar-jugador/listar-jugador.component';



const routes: Routes = [
  { path: '', component: AutenticadorComponent },
  { path: 'usuario', component: InfoGeneralComponent },
  { path: 'jugador', component: ListarJugadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
