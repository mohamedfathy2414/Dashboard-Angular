import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'natlId',
  standalone: true,
})
export class NationlIdPipe implements PipeTransform {
  transform(value: string): any {
    let res = value.slice(1, 7);

    let wave: any[] = [];
    wave.unshift(res[4] + res[5], res[2] + res[3], res[0] + res[1]);
    let x = wave.join('-');
    console.log(x);
    return x;
  }
}
