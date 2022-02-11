import {Empleado} from "./empleado";

export class Operario extends Empleado {
  private _tren: string;
  private _viajes: number;

  constructor(
    _tipoObjeto: string,
    _dni: string,
    _nombre: string,
    _telefono: number,
    _sueldo: number,
    _tren: string,
    _viajes: number,
  ) {
    super(_tipoObjeto, _dni, _nombre, _telefono, _sueldo);
    this._tren = _tren;
    this._viajes = _viajes;
  }

  get tren(): string {
    return this._tren;
  }

  set tren(value: string) {
    this._tren = value;
  }

  get viajes(): number {
    return this._viajes;
  }

  set viajes(value: number) {
    this._viajes = value;
  }
}
