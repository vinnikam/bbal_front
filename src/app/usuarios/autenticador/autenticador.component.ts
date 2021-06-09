import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from '../usuarios.service';
import {ToastrService} from 'ngx-toastr';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-autenticador',
  templateUrl: './autenticador.component.html',
  styleUrls: ['./autenticador.component.scss']
})
export class AutenticadorComponent implements OnInit {

  usuarioForm: FormGroup;
  Roles: any = ['C.C.', 'T.I.'];

  constructor(private fbuilder: FormBuilder, private usuarioServ: UsuariosService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.usuarioForm = this.fbuilder.group({
      identificacion: ['', Validators.required],
      rol: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }
  autenticar(usuarioN: Usuario){
    this.showSuccess(usuarioN);
    this.usuarioServ.autenticar(usuarioN).subscribe(usuario => {
      this.showSuccess(usuarioN);
      if (usuario != null){

      }

    });

    this.usuarioForm.reset();

  }
  showSuccess(usuarioN: Usuario): void {
    this.toastrService.success('Usuario autenticado ' + usuarioN.identificacion);
  }
  cancelar(): void {

    this.usuarioForm.reset();
  }
}
