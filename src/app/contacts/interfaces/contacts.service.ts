import { Observable } from 'rxjs';
import { Contact } from './contact.interface';

export abstract class ContactsService {
    abstract add(contact: Contact): void;
    abstract get(): Observable<Contact[]>;

    abstract markFavourite(contactId: number): void;
    abstract markCommon(contactId: number): void;

    abstract delete(contactId: number): void;
}
