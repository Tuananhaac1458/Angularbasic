import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Emploi } from './modul/emploi.component';
import {GetlistService} from './services/getlist.service';


@NgModule({
  declarations: [
    AppComponent,
    Emploi,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
    GetlistService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



