import { stringComparison } from './string-comparison';

describe('stringComparison', () => {
    it('should return -1 if a < b', () => {
        const a = 'aqua';
        const b = 'zoo';
        expect(stringComparison(a, b)).toBe(-1);
    });

    it('should return 1 if a > b', () => {
        const a = 'zoo';
        const b = 'aqua';
        expect(stringComparison(a, b)).toBe(1);
    });

    it('should return 0 if a equal b', () => {
        const a = 'bar';
        const b = 'bar';
        expect(stringComparison(a, b)).toBe(0);
    });

    it('should consider resgister', () => {
        let a = 'z';
        let b = 'Za';
        expect(stringComparison(a, b)).toBe(-1);

        a = 'za';
        b = 'ZA';
        expect(stringComparison(a, b)).toBe(0);

        a = 'zc';
        b = 'Z';
        expect(stringComparison(a, b)).toBe(1);
    });
});
