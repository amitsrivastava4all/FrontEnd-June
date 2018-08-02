import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './productservice';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
