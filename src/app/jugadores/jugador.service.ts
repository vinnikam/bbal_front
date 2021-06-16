import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Usuario} from '../usuarios/usuario';
import {HttpClient} from '@angular/common/http';
import {Jugador} from './jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  urlJugadores: string = environment.urlUsuarios;
  urlJugadoresCrear: string = environment.urlUsuarios + 'crear/';
  urlUsuariovalidar: string = environment.urlUsuarios + 'validar';

  constructor(private http: HttpClient) { }

  consultarAll(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.urlJugadores).pipe();
  }
  crear(usuario: Jugador): Observable<any>{
    return this.http.post<any>(this.urlJugadoresCrear, usuario).pipe();
  }
  validar(usuario: Jugador): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlUsuariovalidar, usuario).pipe();
  }
}
