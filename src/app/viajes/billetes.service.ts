import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Billete} from "../models/billete";

@Injectable({
  providedIn: 'root'
})
export class BilletesService {
  private url_api = "https://proyecto-trenes-alv.herokuapp.com";

  constructor(private http: HttpClient) {

  }

  getBilletes() {
    const url = `${this.url_api}/billetes`;
    return this.http.get<any[]>(url);
  }

  crearBillete(bill: Billete) {
    const url = `${this.url_api}/crearBilletes`;
    return this.http.post(url, bill, {responseType: "text"});
  }

  deleteBilletes(id: string) {
    const url = `${this.url_api}/deleteBilletes/${id}`;
    return this.http.delete(url, {responseType: "text"});
  }
}
