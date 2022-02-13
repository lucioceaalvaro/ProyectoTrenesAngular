import {Empleado} from "./empleado";

export class Revisor extends Empleado {
  private _horas: string;
  private _viajes: number;

  constructor(
    _tipoObjeto: string,
    _dni: string,
    _nombre: string,
    _telefono: number,
    _sueldo: number,
    _horas: string,
    _viajes: number
  ) {
    super(_tipoObjeto, _dni, _nombre, _telefono, _sueldo);
    this._horas = _horas;
    this._viajes = _viajes;
  }

  get horas(): string {
    return this._horas;
  }

  set horas(value: string) {
    this._horas = value;
  }

  get viajes(): number {
    return this._viajes;
  }

  set viajes(value: number) {
    this._viajes = value;
  }
}
