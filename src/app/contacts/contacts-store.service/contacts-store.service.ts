import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { Contact } from '../interfaces/contact.interface';

import { ContactsService } from '../interfaces/contacts.service';
import { defaultContacts } from './default.contacts';

@Injectable()
export class ContactsStoreService extends ContactsService {
  private state = defaultContacts;
  private subj = new BehaviorSubject(defaultContacts);

  public add(contact: Contact) {
    if (!contact) {
      throw new Error('incoming contact parameter should be defined/not null');
    }
    contact.id = this.getNextId();
    this.pushState([
      ...this.state,
      contact,
    ]);
  }

  public get(): Observable<Contact[]> {
    return this.subj.asObservable();
  }

  public markFavourite(contactId: number): void {
    const [newState, selectedItem] = this.methodHelper(contactId);
    if (selectedItem.favourite === true) {
      throw Error('contact with specified id is already favourite');
    }

    selectedItem.favourite = true;
    this.pushState(newState);
  }

  public markCommon(contactId: number): void {
    const [newState, selectedItem] = this.methodHelper(contactId);
    if (selectedItem.favourite === false) {
      throw Error('contact with specified id is already common');
    }

    selectedItem.favourite = false;
    this.pushState(newState);
  }

  public delete(contactId: number): void {
    const [newState, selectedItem] = this.methodHelper(contactId);
    this.pushState(newState.filter(item => item !== selectedItem));
  }

  private methodHelper(contactId: number): [Contact[], Contact] {
    const newState = [...this.state];
    const selectedItem = newState.find(item => item.id === contactId);
    if (!selectedItem) {
      throw Error('contact with specified id wasn`t found');
    }
    return [newState, selectedItem];
  }

  private pushState(newState: Contact[]): void {
    this.state = newState;
    this.subj.next(this.state);
  }

  private getNextId(): number {
    return this.state.reduce((maxId, contact) => {
      if (contact.id > maxId) {
        return contact.id;
      }
      return maxId;
    }, this.state[0].id) + 1;
  }
}
