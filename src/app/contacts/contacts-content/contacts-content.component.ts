import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from '../interfaces/contact.interface';

import { ContactsService } from '../interfaces/contacts.service';
import { contactComparison } from '../../helpers/contact-comparison/contact-comparison';

@Component({
  selector: 'app-contacts-content',
  templateUrl: './contacts-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsContentComponent implements OnInit {
  public contacts: Observable<Contact[]>;

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.contacts = this.sortContacts(this.service.get());
  }

  public sortContacts(data: Observable<Contact[]>): Observable<Contact[]> {
    return data
      .pipe(
        map(contacts => contacts.sort(contactComparison))
      );
  }

  public handleAddition(contact: Contact): void {
    if (!contact) {
      throw Error('incoming contact parameter should be defined/not null');
    }
    this.service.add(contact);
  }

  public deleteContact(contactId: number): void {
    this.service.delete(contactId);
  }

  public markContactFavourite(contactId: number): void {
    this.service.markFavourite(contactId);
  }

  public markContactCommon(contactId: number): void {
    this.service.markCommon(contactId);
  }
}
