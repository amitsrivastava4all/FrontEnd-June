import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpLoaderFactory} from './loaderfactory';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
