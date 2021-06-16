import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../usuarios/usuario';
import {Jugador} from '../jugador';
import {JugadorService} from '../jugador.service';

@Component({
  selector: 'app-listar-jugador',
  templateUrl: './listar-jugador.component.html',
  styleUrls: ['./listar-jugador.component.scss']
})
export class ListarJugadorComponent implements OnInit {

  jugadores: Array<Jugador>;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.getJugadores();
  }
  getJugadores(): void {
    this.jugadorService.consultarAll().subscribe(jugadorS => this.jugadores = jugadorS);
  }
}
