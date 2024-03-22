import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
  standalone: true,
})
export class CreditcardPipe implements PipeTransform {
  transform(value: string) {
    let cr = value;

    let x = cr.split('');
    x.splice(4, 0, '-');
    x.splice(9, 0, '-');
    x.splice(14, 0, '-');

    let d = x.join('');
    console.log(d);
    return d;
  }
}
