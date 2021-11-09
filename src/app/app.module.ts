import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { CurrencyPipe } from './Pipe/currency.pipe';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule,ButtonModule,ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
