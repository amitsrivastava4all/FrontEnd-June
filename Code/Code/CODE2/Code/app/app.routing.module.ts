

import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {ShoeComponent} from './shoe.component';
import {MobileComponent} from './mobile.component';

import {SportShoeComponent} from './sports.component';
import { AuthGuard } from './auth-guard.service';

import { ErrorPageComponent } from './error-page/error-page.component';



const routes = [
  {path: 'shoes', canActivate: [AuthGuard], component: ShoeComponent, children: [
     {path: 'sports', component: SportShoeComponent}
      ]},
  {path: 'mobiles/:price/:brand', component: MobileComponent},
  {path: '', component: HomeComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
 // {path:'**',redirectTo:'/'}
 ];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]


})
export class AppRoutingModule { }
