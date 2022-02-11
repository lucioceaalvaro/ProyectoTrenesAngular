import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registro} from "../models/registro";

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private url_api = "https://proyecto-trenes-alv.herokuapp.com";

  constructor(private http: HttpClient) {

  }

  getRegistros() {
    const url = `${this.url_api}/registro`;
    return this.http.get<any[]>(url);
  }

  crearRegistro(reg: Registro) {
    const url = `${this.url_api}/crearRegistro`;
    return this.http.post(url, reg);
  }

  deleteRegistros(id: string) {
    const url = `${this.url_api}/deleteRegistros/${id}`;
    return this.http.delete<any>(url);
  }
}
