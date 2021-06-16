import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearJugadorComponent } from './crear-jugador/crear-jugador.component';
import { ListarJugadorComponent } from './listar-jugador/listar-jugador.component';
import {UsuariosModule} from '../usuarios/usuarios.module';
import {JugadorRoutingModule} from './jugador-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CrearJugadorComponent, ListarJugadorComponent],
  imports: [
    CommonModule,
    UsuariosModule,
    JugadorRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CrearJugadorComponent, ListarJugadorComponent]
})
export class JugadoresModule { }
