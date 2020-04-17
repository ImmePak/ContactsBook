import { ContactsStoreService } from './contacts-store.service';

describe('ContactsStoreService', () => {
    let service: ContactsStoreService;

    beforeEach(() => {
        service = new ContactsStoreService();
    });

    it('should load default contacts set', (done: DoneFn) => {
        service = new ContactsStoreService();
        service.get().subscribe(data => {
            expect(data.length).toBe(5);
            done();
        });
    });

    describe('add tests', () => {
        it('should check new contact before adding', () => {
            expect(() => service.add(null)).toThrow();
            expect(() => service.add(undefined)).toThrow();
        });

        it('should add new contact properly', (done: DoneFn) => {
            service.add({
                id: undefined,
                surname: 'new',
                phoneNumber: '10-10-10',
                patronymic: '',
                favourite: false,
                firstname: ''
            });
            service.get().subscribe(data => {
                expect(data.length).toBe(6);
                done();
            });
        });
    });

    describe('markFavourite tests', () => {
        it('markFavourite should throw error if contact wasn`t found', () => {
            expect(() => service.markFavourite(123)).toThrow();
        });

        it('markFavourite should throw error if contact is already fawourite', () => {
            expect(() => service.markFavourite(2)).toThrow();
        });

        it('markFavourite should work properly', (done: DoneFn) => {
            service.markFavourite(4);
            service.get().subscribe(data => {
                const contact = data.find(item => item.id === 4);
                expect(contact.favourite).toBeTruthy();
                done();
            });
        });
    });

    describe('markCommon tests', () => {
        it('markCommon should throw error if contact wasn`t found', () => {
            expect(() => service.markCommon(123)).toThrow();
        });

        it('markCommon should throw error if contact is already common', () => {
            expect(() => service.markCommon(5)).toThrow();
        });

        it('markCommon should work properly', (done: DoneFn) => {
            service.markCommon(1);
            service.get().subscribe(data => {
                const contact = data.find(item => item.id === 1);
                expect(contact.favourite).toBeFalsy();
                done();
            });
        });
    });

    describe('delete tests', () => {
        it('delete should throw error if contact wasn`t found', () => {
            expect(() => service.delete(123)).toThrow();
        });

        it('delete should work properly', (done: DoneFn) => {
            service.delete(1);
            service.get().subscribe(data => {
                expect(data.length).toBe(4);
                done();
            });
        });
    });
});
