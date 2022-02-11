export class Registro {
  constructor(
    private _id: string,
    private _tren_id: string,
    private _kilometros: Number,
    private _origen: string,
    private _destino: string,
    private _fecha:Date,
  ) {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get tren_id(): string {
    return this._tren_id;
  }

  set tren_id(value: string) {
    this._tren_id = value;
  }

  get kilometros(): Number {
    return this._kilometros;
  }

  set kilometros(value: Number) {
    this._kilometros = value;
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

  get fecha(): Date {
    return this._fecha;
  }

  set fecha(value: Date) {
    this._fecha = value;
  }
}
