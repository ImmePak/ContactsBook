import { contactComparison } from './contact-comparison';

describe('contactComparison ', () => {
    describe('should compare based on .favourite property when .favourite is different', () => {
        const favourite = { id: 1, surname: 'Bradbury', phoneNumber: '+79091230101', favourite: true, firstname: 'Ray', patronymic: '' };
        const common = { id: 3, surname: 'Kanneman', phoneNumber: '+79091230103', favourite: false, firstname: 'Daniel', patronymic: '' };

        it('should return -1 if a.favourite === false and b.favourite === true', () => {
            expect(contactComparison(favourite, common)).toBe(-1);
        });

        it('should return 1 if a > b', () => {
            expect(contactComparison(common, favourite)).toBe(1);
        });

        it('should return 0 if a equal b', () => {
            const anotherFavourite = {
                id: 1,
                surname: 'Bradbury', phoneNumber: '+79091230101', favourite: true, firstname: 'Ray', patronymic: ''
            };
            expect(contactComparison(anotherFavourite, favourite)).toBe(0);
        });
    });
});
