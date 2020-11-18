import { NavigationStart, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
private subject=new Subject<any>();
private keepAfterRouteChange=false;

  constructor(private router:Router) {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationStart){
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
      } else {
          // clear alert message
          // this.clear();
      }
      }
    })
   }
   getAlert():Observable<any>{
     return this.subject.asObservable();
   }
   sucess(message:string, keepAfterRouteChange=false){}
}
