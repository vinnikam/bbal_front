import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ToastrService} from 'ngx-toastr';
import {JugadorService} from '../jugador.service';
import {Jugador} from '../jugador';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.scss']
})
export class CrearJugadorComponent implements OnInit {

  jugadorForm: FormGroup;

  constructor(private fbuilder: FormBuilder, private jugadorServ: JugadorService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.jugadorForm = this.fbuilder.group({
      tipoidentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fnacimiento: ['', Validators.required],
      estado: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }
  crear(jugadorN: Jugador){

    jugadorN.nombre = jugadorN.nombre.toUpperCase();
    jugadorN.apellido = jugadorN.apellido.toUpperCase();
    this.jugadorServ.crear(jugadorN).subscribe(rta => {
      if (rta != null){
        this.showSuccess(rta.status);
      }else{
        this.showWarning('El jugador no se pudo crear, intenta de nuevo');
      }

    });

    this.jugadorForm.reset();

  }
  validar(usuarioN: Jugador): void {

    this.jugadorServ.validar(usuarioN).subscribe(usuario => {
      if (usuario == null ){
        this.crear(usuarioN);
      }else{
        this.showWarning('El tipo y número de jugador ya esta creado. ¡ Verifique !');
      }
    });
  }
  showSuccess(mensaje: string): void {
    this.toastrService.success(mensaje);
  }
  showWarning(mensaje: string): void {
    this.toastrService.warning(mensaje);
  }
  cancelar(): void {

    this.jugadorForm.reset();
  }
}
