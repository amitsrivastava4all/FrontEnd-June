import { PrefixPipe } from './productappcomp/PrefixPipe';
import {SortPipe} from './productappcomp/SortPipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductappcompComponent } from './productappcomp/productappcomp.component';
import { ProductsearchComponent } from './productappcomp/productsearch/productsearch.component';
import { ProductlistComponent } from './productappcomp/productlist/productlist.component';
import { ProductComponent } from './productappcomp/productlist/product/product.component';
import {ProductModel} from './productappcomp/productmodel';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductappcompComponent,
    ProductsearchComponent,
    ProductlistComponent,
    ProductComponent,PrefixPipe,SortPipe
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule
  ],
  providers: [ProductModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
