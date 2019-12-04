import { Injectable } from '@angular/core';
import {Friend} from '../model/friend.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }



  postFriend(login:string, friend: string) {
    return this.http.post(environment.apiBaseUrl + '/friends/addFriend', { login: login, friend: friend });
  }

  delFriend(login:string, friend: string) {


    return this.http.delete(environment.apiBaseUrl +'/friends/deleteFriend/'+login+'/'+friend );
  }


  getFriends(login: string) {

    return this.http.get(environment.apiBaseUrl + '/friends/listFriend/' + login);
  }
}
