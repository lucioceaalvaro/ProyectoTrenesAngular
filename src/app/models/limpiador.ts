import {Empleado} from "./empleado";

export class Limpiador extends Empleado {
  private _horas: number;
  private _tren: number;
  constructor(
    _tipoObjeto: string,
    _dni: string,
    _nombre: string,
    _telefono: number,
    _sueldo: number,
    _horas: number,
    _tren: number
  ) {
    super(_tipoObjeto, _dni, _nombre, _telefono, _sueldo);
    this._horas = _horas;
    this._tren = _tren;
  }

  get horas(): number {
    return this._horas;
  }

  set horas(value: number) {
    this._horas = value;
  }

  get tren(): number {
    return this._tren;
  }

  set tren(value: number) {
    this._tren = value;
  }
}
