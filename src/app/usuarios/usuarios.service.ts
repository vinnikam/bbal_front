import { Injectable } from '@angular/core';
import {Usuario} from './usuario';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlAutentic: string = environment.urlAutenticar;
  urlUsuarios: string = environment.urlUsuarios;
  urlUsuarioCrear: string = environment.urlUsuarioCrear;
  urlUsuariovalidar: string = environment.urlUsuarios + 'validar';

  usuarioActivo = new BehaviorSubject<Usuario>(null);

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlAutentic, usuario).pipe();
  }
  consultarAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuarios).pipe();
  }
  crear(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.urlUsuarioCrear, usuario).pipe();
  }
  validar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlUsuariovalidar, usuario).pipe();
  }
}
