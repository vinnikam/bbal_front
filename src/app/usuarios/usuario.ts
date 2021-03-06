export class Usuario {
  id: number;
  tipoidentificacion: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  estado: string;
  rol: string;
  clave: string;
  constructor(id: number, tipoidentificacion: string, identificacion: string, rol: string, clave: string, nombre: string,
              apellido: string, estado: string) {
    this.id = id;
    this.tipoidentificacion = tipoidentificacion;
    this.identificacion = identificacion;
    this.rol = rol;
    this.clave = clave;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado = estado;
  }
}
