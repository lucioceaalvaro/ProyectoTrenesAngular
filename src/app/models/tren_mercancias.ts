import {Tren} from "./tren";

export class TrenMercancias extends Tren {

  private _tipoCarga: string;
  private _kilosCarga: number;

  constructor(
    _tipoObjeto:string,
    _id: string,
    _origen: string,
    _destino: string,
    _tipoCarga: string,
    _kilosCarga:number
  ) {
    super(_tipoObjeto, _id, _origen, _destino);
    this._tipoCarga = _tipoCarga;
    this._kilosCarga = _kilosCarga;
  }

  get tipoCarga(): string {
    return this._tipoCarga;
  }

  set tipoCarga(value: string) {
    this._tipoCarga = value;
  }

  get kilosCarga(): number {
    return this._kilosCarga;
  }

  set kilosCarga(value: number) {
    this._kilosCarga = value;
  }
}
