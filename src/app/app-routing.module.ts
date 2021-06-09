import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutenticadorComponent} from './usuarios/autenticador/autenticador.component';


const routes: Routes = [
  { path: '', component: AutenticadorComponent },
  { path: 'usuario', component: AutenticadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
