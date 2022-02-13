import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _is_admin;
  constructor(private router: Router) {}
  get is_admin() {
    return this._is_admin;
  }

  set is_admin(value) {
    this._is_admin = value;
  }

  login(user: string, pass: string) {
    if(user === "admin" && pass === "admin") {
      this.is_admin = true;
      this.router.navigateByUrl("/viaje");
    }
    else {
      this.is_admin = false;
    }
  }
}
