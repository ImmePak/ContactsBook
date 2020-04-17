import { Contact } from '../interfaces/contact.interface';

export const defaultContacts: Contact[] = [
    { id: 1, surname: 'Bradbury', phoneNumber: '+79091230101', favourite: true, firstname: 'Ray', patronymic: '' },
    { id: 2, surname: 'Marks', phoneNumber: '+79091230102', favourite: true, firstname: 'Karl', patronymic: '' },
    { id: 3, surname: 'Kanneman', phoneNumber: '+79091230103', favourite: false, firstname: 'Daniel', patronymic: '' },
    { id: 4, surname: 'Asimov', phoneNumber: '+79091230104', favourite: false, firstname: 'Isaac', patronymic: '' },
    { id: 5, surname: 'Zamyatin', phoneNumber: '+79091230105', favourite: false, firstname: 'Fedor', patronymic: '' },
];
