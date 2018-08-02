import { EmpComponent } from './emp.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home.component';
import {ShoeComponent} from './shoe.component';
import {MobileComponent} from './mobile.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {SportShoeComponent} from './sports.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import {ProductService} from './productservice';




@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, ShoeComponent, MobileComponent,SportShoeComponent,
    ErrorPageComponent, EmpComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
