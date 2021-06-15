import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data : any) : Observable<any> { 
    return this.http.post<any>('auth/register' , data);
  }

  login(data : any) : Observable<any> { 
    return this.http.post<any>('auth/login' , data , { withCredentials: true });
  }
}
