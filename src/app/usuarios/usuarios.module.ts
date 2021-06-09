import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticadorComponent } from './autenticador/autenticador.component';
import {UsuarioRoutingModule} from './usuario-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AutenticadorComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ],
  exports: [AutenticadorComponent]
})
export class UsuariosModule { }
