import {Pipe,PipeTransform} from '@angular/core';
import {Product} from './product';
@Pipe(
  {name:'orderby'}
)
export class SortPipe implements PipeTransform{
  transform(value:Product[],order:string):Product[]{
    if(value){
    return value.sort((a,b)=>a.id-b.id);
    }
    else{
      return value;
    }
  }
}
