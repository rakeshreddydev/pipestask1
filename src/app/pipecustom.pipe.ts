import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecustom'
})
export class PipecustomPipe implements PipeTransform {

  revstr : string ='';
  transform(value: string, ...args: unknown[]): unknown {
    this.revstr=value.split('').reverse().join('');
    return this.revstr;
  }

}
