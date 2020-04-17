import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { PipesModule } from '../pipes/pipes.module';

import { ContactsStoreService } from './contacts-store.service/contacts-store.service';
import { ContactsService } from './interfaces/contacts.service';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsContentComponent } from './contacts-content/contacts-content.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { RemoveSvgComponent } from './contacts-table/svg-components/remove-svg/remove-svg.component';
import { FavouriteSvgComponent } from './contacts-table/svg-components/favourite-svg/favourite-svg.component';
import { CommonSvgComponent } from './contacts-table/svg-components/common-svg/common-svg.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule,
    PipesModule,
  ],
  declarations: [
    ContactFormComponent,
    ContactsContentComponent,
    ContactsTableComponent,
    RemoveSvgComponent,
    FavouriteSvgComponent,
    CommonSvgComponent,
  ],
  exports: [
    ContactFormComponent,
    ContactsContentComponent,
    ContactsTableComponent,
    RemoveSvgComponent,
    FavouriteSvgComponent,
    CommonSvgComponent,
  ],
  providers: [
    { provide: ContactsService, useClass: ContactsStoreService }
  ]
})
export class ContactsModule { }
