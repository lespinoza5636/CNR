
import { firstValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
declare var google: any;
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment.development';
import { appsettings } from './security/Settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private http = inject(HttpClient);

  private apiUrl:string = appsettings.url + "login";
  private token: string = environment.token;

  
  getToken() {
    //const user = sessionStorage.getItem("uncsm_token");
    const token = this.token;
    //const token: string | null =  user ? JSON.parse(user) : null;
    return token;
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
  logout() {
    sessionStorage.removeItem("token");
    window.location.href = '/';
  }

}
