import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  Login(data:any):Observable<any>{
    return this.httpclient.post("https://reqres.in/api/login",data)
  }
}
