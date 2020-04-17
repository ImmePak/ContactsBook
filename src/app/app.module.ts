import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask';

import { ContactsModule } from './contacts/contacts.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    NgxMaskModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
