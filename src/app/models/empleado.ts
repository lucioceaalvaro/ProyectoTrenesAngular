export class Empleado {
  constructor(
    private _tipoObjeto: string,
    private _dni: string,
    private _nombre: string,
    private _telefono: number,
    private _sueldo: number
  ) {
  }

  get tipoObjeto(): string {
    return this._tipoObjeto;
  }

  set tipoObjeto(value: string) {
    this._tipoObjeto = value;
  }

  get dni(): string {
    return this._dni;
  }

  set dni(value: string) {
    this._dni = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get telefono(): number {
    return this._telefono;
  }

  set telefono(value: number) {
    this._telefono = value;
  }

  get sueldo(): number {
    return this._sueldo;
  }

  set sueldo(value: number) {
    this._sueldo = value;
  }
}
