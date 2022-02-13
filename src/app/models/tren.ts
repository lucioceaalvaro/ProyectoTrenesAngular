export class Tren {
  constructor(
    private _tipoObjeto: string,
    private _id: string,
    private _origen: string,
    private _destino: string,
  ) {
  }

  get tipoObjeto(): string {
    return this._tipoObjeto;
  }

  set tipoObjeto(value: string) {
    this._tipoObjeto = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get origen(): string {
    return this._origen;
  }

  set origen(value: string) {
    this._origen = value;
  }

  get destino(): string {
    return this._destino;
  }

  set destino(value: string) {
    this._destino = value;
  }
}
