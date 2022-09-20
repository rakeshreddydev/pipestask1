import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  pure: false
})
export class CustompipePipe implements PipeTransform {
  revStr: String = '';
  transform(value: String, ...args: unknown[]): any {
    this.revStr=value.split('').reverse().join('');
    console.log("changes made here");
    return this.revStr;
  }

}
