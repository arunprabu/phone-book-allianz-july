import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  canActivate(){
    //connect to auth service
    //check whthere the user is logged in or not
    //if logged in... send true
    //else redirect the user to login page and then send false
    return false;
  }
}
