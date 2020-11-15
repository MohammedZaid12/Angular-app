import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username,password){
    let url ='https:/reqres.in/api/login'
    return this.http.post<User>(url,{username,password}).pipe(
      map(user=>{
      localStorage.setItem('currentUser' , JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

}
