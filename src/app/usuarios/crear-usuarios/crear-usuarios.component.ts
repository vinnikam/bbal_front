import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from '../usuarios.service';
import {ToastrService} from 'ngx-toastr';
import {Usuario} from '../usuario';



@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.scss']
})
export class CrearUsuariosComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(private fbuilder: FormBuilder, private usuarioServ: UsuariosService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.usuarioForm = this.fbuilder.group({
      tipoidentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      rol: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
  }
  crear(usuarioN: Usuario){
    usuarioN.clave = '123456';
    usuarioN.estado = 'ACTIVO';
    usuarioN.nombre = usuarioN.nombre.toUpperCase();
    usuarioN.apellido = usuarioN.apellido.toUpperCase();
    this.usuarioServ.crear(usuarioN).subscribe(rta => {
      if (rta != null){
        this.showSuccess(rta.status);
      }else{
        this.showWarning('El usuario no se pudo crear, intenta de nuevo');
        this.usuarioServ.usuarioActivo.next(null);
      }

    });

    this.usuarioForm.reset();

  }
  validar(usuarioN: Usuario): void {
    this.usuarioServ.validar(usuarioN).subscribe(usuario => {
      if (usuario == null ){
        this.crear(usuarioN);
      }else{
        this.showWarning('El tipo y número de usuario ya esta creado. ¡ Verifique !');
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

    this.usuarioForm.reset();
  }
}
