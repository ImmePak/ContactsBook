import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(value: string) {
        if (!value.match(/^[0-9,+]{12}$/)) {
            return value;
        }
        return this.formatNumber(value);
    }

    private formatNumber(value: string): string {
        return value.slice(0, 2)
            + `(${value.slice(2, 5)})`
            + ` ${value.slice(5, 8)} ${value.slice(8, 10)} ${value.slice(10)}`;
    }
}
