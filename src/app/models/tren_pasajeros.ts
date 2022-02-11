import {Tren} from "./tren";

export class TrenPasajeros extends Tren {

  private _nPasajeros: number;
  private _nPlazas: number;
  private _precio: number;

  constructor(
    _tipoObjeto: string,
    _id: string,
    _origen: string,
    _destino: string,
    _nPasajeros: number,
    _nPlazas: number,
    _precio: number
  ) {
    super(_tipoObjeto, _id, _origen, _destino);
    this._nPasajeros = _nPasajeros;
    this._precio = _precio;
    this._nPlazas = _nPlazas;
  }

  get nPasajeros(): number {
    return this._nPasajeros;
  }

  set nPasajeros(value: number) {
    this._nPasajeros = value;
  }

  get nPlazas(): number {
    return this._nPlazas;
  }

  set nPlazas(value: number) {
    this._nPlazas = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }
}
