export class Billete {
  constructor(
    private _id: string,
    private _dni: string,
    private _idTrenPasajeros:string,
    private _asiento: string,
    private _precio: number,
    private _origen: string,
    private _destino: string,
    private _fecha: Date
  ) {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get dni(): string {
    return this._dni;
  }

  set dni(value: string) {
    this._dni = value;
  }

  get idTrenPasajeros(): string {
    return this._idTrenPasajeros;
  }

  set idTrenPasajeros(value: string) {
    this._idTrenPasajeros = value;
  }

  get asiento(): string {
    return this._asiento;
  }

  set asiento(value: string) {
    this._asiento = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
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
