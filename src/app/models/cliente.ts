export class Cliente {
  constructor(
    private _dni: string,
    private _nombre: string,
    private _telefono: number | string,
    private _email: string
  ) {
  }

  get dni(): string {
    return this._dni;
  }

  get nombre(): string {
    return this._nombre;
  }

  get telefono(): number | string {
    return this._telefono;
  }

  get email(): string {
    return this._email;
  }

  set dni(value: string) {
    this._dni = value;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  set telefono(value: number | string) {
    this._telefono = value;
  }

  set email(value: string) {
    this._email = value;
  }
}
