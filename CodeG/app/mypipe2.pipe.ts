import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe2'
})
export class Mypipe2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
