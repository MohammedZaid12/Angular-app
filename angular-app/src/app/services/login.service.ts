import { User } from './../models/User';

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

  login(data:User){
    let url ='http://localhost:5000/login'
    return this.http.post<User>(url,{data}).pipe(
      map(user=>{
      localStorage.setItem('currentUser' , JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

}
