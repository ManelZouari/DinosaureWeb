import { Injectable } from '@angular/core';
import {Dinosaure} from '../model/dinosaure.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DinosaureService {

  selectedDinosaure: Dinosaure = {
    login: '',
    password: '',
    age: '',
    famille: '',
    race: '',
    nourriture: '',
  };


  constructor(private http: HttpClient) { }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  postUser(dinosaure: Dinosaure) {
    return this.http.post(environment.apiBaseUrl + '/signup', dinosaure);
  }

  postEditUser(dinosaure: Dinosaure){
   // const login = localStorage.getItem('login');

    return this.http.put(environment.apiBaseUrl + '/modifyProfile/' + dinosaure.login, dinosaure);
  }

getDinosaureProfile() {
  const login = localStorage.getItem('login');
  return this.http.get(environment.apiBaseUrl + '/dinosaureProfile/' + login);
}

  login(login:string,password:string){
    return this.http.post(environment.apiBaseUrl + '/login', { login: login, password: password });
}

setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  deleteStorage() {
    localStorage.clear();
  }


  getDinosaurePayload() {
    const token = this.getToken();
    if (token) {
      const dinosaurePayload = atob(token.split('.')[1]);
      return JSON.parse(dinosaurePayload);
    } else {
      return null;
    }
  }
  isLoggedIn() {
    const dinosaurePayload = this.getDinosaurePayload();
    if ( dinosaurePayload ) {
      return dinosaurePayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

}
