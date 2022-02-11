import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Operario} from "../models/operario";
import {Limpiador} from "../models/limpiador";
import {Revisor} from "../models/revisor";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url_api = "https://proyecto-trenes-alv.herokuapp.com";
  constructor(
    private http: HttpClient
  ) { }

  getEmpleados() {
    const url = `${this.url_api}/empleados`;
    return this.http.get<any[]>(url);
  }
  deleteEmpleado(dni: string) {
    const url = `${this.url_api}/deleteEmpleado/${dni}`;
    return this.http.delete(url);
  }
  crearOperario(operario: Operario) {
    const url = `${this.url_api}/crearOperario`;
    return this.http.post(url, operario);
  }
  crearLimpiador(limpiador: Limpiador) {
    const url = `${this.url_api}/crearLimpiador`;
    return this.http.post(url, limpiador);
  }
  crearRevisor(revisor: Revisor) {
    const url = `${this.url_api}/crearRevisor`;
    return this.http.post(url, revisor);
  }
  getEmpleadoDNI(dni: string) {
    const url = `${this.url_api}/empleado/${dni}`;
    return this.http.get<any>(url);
  }

  calcularSalario(dni: string) {
    const url = `${this.url_api}/salarios/${dni}`;
    return this.http.get<string>(url);
  }
  actualizarSalarioEmpleado(dni: string, salario: number) {
    const url = `${this.url_api}/actualizarSalEmp/${dni}/${salario}`;
    return this.http.put<any>(url, JSON.stringify({"dni": dni, "salario": salario}));
  }

  //OPERARIO
  actualizarTrenOperario(dni: string, idTren: string) {
    const url = `${this.url_api}/actualizarTrenOpe/${dni}/${idTren}`;
    return this.http.put<any>(url, JSON.stringify({"dni": dni, "idTren": idTren}));
  }
  actualizarViajesOperario(dni: string, nViajes: number) {
    const url = `${this.url_api}/actualizarViajesOpe/${dni}/${nViajes}`;
    return this.http.put<any>(url, JSON.stringify({"dni": dni, "nViajes": nViajes}));
  }

  //REVISOR
  actualizarViajeHoras(dni: string, nViajes: number, horas: number) {
    const url = `${this.url_api}/actualizarViajeHoras/${dni}/${nViajes}/${horas}`;
    return this.http.put<any>(url, JSON.stringify({"dni": dni, "nViajes": nViajes, "horas": horas}));
  }

  //LIMPIADOR
  actualizarHorasTren(dni: string, horas: number, idTren: string) {
    const url = `${this.url_api}/actualizarHorasTren/${dni}/${horas}/${idTren}`;
    return this.http.put<any>(url, JSON.stringify({"dni": dni, "horas": horas, "idTren": idTren}));
  }

}
