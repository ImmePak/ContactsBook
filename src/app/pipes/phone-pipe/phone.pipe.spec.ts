import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
    const pipe = new PhonePipe();

    it('should not transform any sting wich length not equal 11', () => {
        const short = '663399';
        expect(pipe.transform(short)).toBe(short);

        const long = '+712345567890123';
        expect(pipe.transform(long)).toBe(long);
    });

    it('should not transform any sting wich contains extra symbols', () => {
        const wrong = '+7909wer1234';
        expect(pipe.transform(wrong)).toBe(wrong);
    });

    it('should perform proper transformation', () => {
        const incoming = '+79097775037';
        const expected = '+7(909) 777 50 37';

        expect(pipe.transform(incoming)).toBe(expected);
    });
});
