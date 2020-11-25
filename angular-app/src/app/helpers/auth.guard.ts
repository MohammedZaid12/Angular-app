import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private service:LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      const currentUser = this.service.currentUserValue;
      if(currentUser){
        //user is authorized so return true
        return true;
      }
      // user is not login so return to login screen
      this.router.navigate(['/'] , {queryParams:{returnUrl:state.url}});
    return false;
  }
  
}
