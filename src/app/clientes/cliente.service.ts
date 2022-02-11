import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url_api = "https://proyecto-trenes-alv.herokuapp.com";
  constructor(
    private http: HttpClient
  ) { }

  getClientes() {
    const url = `${this.url_api}/clientes`;
    return this.http.get<any[]>(url);
  }
  crearCliente(cliente: Cliente) {
    const url = `${this.url_api}/crearCliente`;
    return this.http.post(url, cliente);
  }
  deleteCliente(dni: string) {
    const url = `${this.url_api}/deleteCliente/${dni}`;
    return this.http.delete(url);
  }
  actualizarTlfCli(dni: string, telefono: number | string) {
    const url = `${this.url_api}/actualizarTlfCli/${dni}/${telefono}`;
    return this.http.put(url, JSON.stringify({_dni: dni, _telefono: telefono}));
  }
  getClienteDNI(dni: string) {
    const url = `${this.url_api}/clientes/${dni}`;
    return this.http.get<any>(url);
  }

}
