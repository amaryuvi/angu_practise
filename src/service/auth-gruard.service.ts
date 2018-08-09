import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Loginservice } from './loginservice.service';

import { Router } from '@angular/router';

@Injectable()
export class AuthGruardService implements CanActivate{

  constructor(private service : Loginservice , private route: Router) { }

  canActivate(){
   if(this.service.isLogin)
    return true;

   this.route.navigate(['/login']);
  }

}
