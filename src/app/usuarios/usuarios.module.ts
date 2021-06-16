import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticadorComponent } from './autenticador/autenticador.component';
import {UsuarioRoutingModule} from './usuario-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { BarranavComponent } from './barranav/barranav.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';




@NgModule({
  declarations: [AutenticadorComponent, InfoGeneralComponent, BarranavComponent, ListarUsuariosComponent, CrearUsuariosComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ],
    exports: [AutenticadorComponent, InfoGeneralComponent, BarranavComponent, ListarUsuariosComponent, CrearUsuariosComponent]
})
export class UsuariosModule { }
