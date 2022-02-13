import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tren} from "../models/tren";

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private url_api = "https://proyecto-trenes-alv.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  getViajes() {
    const url = `${this.url_api}/viajes`;
    return this.http.get<any[]>(url);
  }
  getViaje(id: string) {
    const url = `${this.url_api}/viaje/${id}`;
    return this.http.get<any>(url);
  }

  crearTrenPasajeros(tren: Tren) {
    const url = `${this.url_api}/crearTrenPasajeros`;
    return this.http.post(url, tren, {responseType: 'text'});
  }

  crearTrenMercancias(tren: Tren) {
    const url = `${this.url_api}/crearTrenMercancias`;
    return this.http.post(url, tren, {responseType: 'text'});
  }

  deleteTrenes(id: string) {
    const url = `${this.url_api}/deleteTrenes/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }

  actualizarOrigenViaje(id: string, origen: string) {
    const url = `${this.url_api}/actualizarOrigenViaje/${id}/${origen}`;
    return this.http.put(url, JSON.stringify({"id": id, "origen": origen}), {responseType: 'text'});
  }
  actualizarDestinoViaje(id: string, destino: string) {
    const url = `${this.url_api}/actualizarDestinoViaje/${id}/${destino}`;
    return this.http.put(url, JSON.stringify({"id": id, "destino": destino}), {responseType: 'text'});
  }
  actualizarCarga(id: string, tipocarga: string, cantidad: number) {
    const url = `${this.url_api}/actualizarCarga/${id}/${tipocarga}/${cantidad}`;
    return this.http.put(url, JSON.stringify({"id": id, "tipocarga": tipocarga, "cantidad": cantidad}), {responseType: 'text'});
  }
  actualizarPrecio(id: string, precio: number) {
    const url = `${this.url_api}/actualizarPrecio/${id}/${precio}`;
    return this.http.put(url, JSON.stringify({"id": id, "precio": precio}), {responseType: 'text'});
  }

}
