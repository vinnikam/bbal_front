export class Usuario {
  id: number;
  identificacion: string;
  rol: string;
  clave: string;
  constructor(id, identificacion, rol, clave) {
    this.id = id;
    this.identificacion = identificacion;
    this.rol = rol;
    this.clave = clave;
  }
}
