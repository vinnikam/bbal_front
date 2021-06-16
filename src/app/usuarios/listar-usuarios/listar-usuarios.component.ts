import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Array<Usuario>;

  constructor(private usuarioServ: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  private getUsuarios() {
    this.usuarioServ.consultarAll().subscribe(usuarios => this.usuarios = usuarios);
  }
}
