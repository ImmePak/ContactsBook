import { Contact } from '../../contacts/interfaces/contact.interface';
import { stringComparison } from '../string-comparison/string-comparison';

export function contactComparison(a: Contact, b: Contact): 0 | 1 | -1 {
    return a.favourite === b.favourite ? stringComparison(a.surname, b.surname) : a.favourite ? -1 : 1;
}
