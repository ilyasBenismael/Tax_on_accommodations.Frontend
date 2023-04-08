import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxeTrimCreateComponent } from './taxeTrim/taxe-trim-create/taxe-trim-create.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TaxeTrimListComponent } from './taxeTrim/taxe-trim-list/taxe-trim-list.component';
import { EarthComponent } from './earth/earth.component';



@NgModule({
  declarations: [
    AppComponent,
    TaxeTrimCreateComponent,
    TaxeTrimListComponent,
    EarthComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
