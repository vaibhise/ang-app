import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { ProductsortingComponent } from './productsorting/productsorting.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ShopcartComponent,
    ContentareaComponent,
    ProductsortingComponent,
    ProductlistingComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
