export class Jugador {
  id: number;
  tipoidentificacion: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  fnacimiento: Date;
  estado: string;
  foto: Blob;

  constructor(id: number, tipoidentificacion: string, identificacion: string, nombre: string, apellido: string,
              fnacimiento: Date, estado: string, foto: Blob) {
    this.id = id;
    this.tipoidentificacion = tipoidentificacion;
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fnacimiento = fnacimiento;
    this.estado = estado;
    this.foto = foto;
  }
}
