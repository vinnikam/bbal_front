import { Injectable } from '@angular/core';
import {Usuario} from './usuario';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlAutentic: string = environment.urlAutenticar;

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlAutentic, usuario).pipe();
  }
}
