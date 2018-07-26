import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyPipe} from './mypipe';
import { Mypipe2Pipe } from './mypipe2.pipe';
import {ChildComponent} from './child/child.component';
import { Child2Component } from './child2/child2.component';
import {Customer} from './models/Customer';


@NgModule({
  declarations: [
    AppComponent, MyPipe, Mypipe2Pipe,ChildComponent, Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [Customer],
  bootstrap: [AppComponent]
})
export class AppModule { }
