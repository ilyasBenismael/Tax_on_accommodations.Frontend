import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxeTrimCreateComponent } from './taxeTrim/taxe-trim-create/taxe-trim-create.component';
import { NotificationLocaleCreateComponent } from './notificationLocale/notification-locale-create/notification-locale-create.component';
import { TaxeAnnuelleCreateComponent } from './taxeAnnuelle/taxe-annuelle-create/taxe-annuelle-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxeTrimCreateComponent,
    NotificationLocaleCreateComponent,
    TaxeAnnuelleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
