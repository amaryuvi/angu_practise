import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ContactComponent} from '../contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
// import { ContactService } from '../service/contact.service';
import { RformsComponent } from '../rforms/rforms.component';

import { Loginservice } from '../service/loginservice.service';
import {  AuthGruardService} from '../service/auth-gruard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    RformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login/:id',
        component:LoginComponent
      },
      {
        path:'contact',
        component:ContactComponent
        
      },
      {
        path:'rforms',
        component:RformsComponent,
        canActivate:[AuthGruardService]
      }
    ]
    )
    
  ],
  providers: [
     AuthGruardService,Loginservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
