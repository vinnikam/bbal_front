import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from '../usuarios.service';
import {ToastrService} from 'ngx-toastr';
import {Usuario} from '../usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autenticador',
  templateUrl: './autenticador.component.html',
  styleUrls: ['./autenticador.component.scss']
})
export class AutenticadorComponent implements OnInit {

  usuarioForm: FormGroup;
  Roles: any = ['C.C.', 'T.I.'];

  constructor(private fbuilder: FormBuilder, private usuarioServ: UsuariosService,
              private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.fbuilder.group({
      identificacion: ['', Validators.required],
      rol: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }
  autenticar(usuarioN: Usuario){
    this.usuarioServ.autenticar(usuarioN).subscribe(usuario => {
      if (usuario != null){
        this.showSuccess(usuarioN);
        this.usuarioServ.usuarioActivo.next(usuario);
        this.router.navigate(['/usuario/info']);
      }else{
        this.showWarning('El usuario no existe');
        this.usuarioServ.usuarioActivo.next(null);
      }

    });

    this.usuarioForm.reset();

  }
  showSuccess(usuarioN: Usuario): void {
    this.toastrService.success('Usuario autenticado ' + usuarioN.identificacion);
  }
  showWarning(mensaje: string): void {
    this.toastrService.warning(mensaje);
  }
  cancelar(): void {

    this.usuarioForm.reset();
  }
}
