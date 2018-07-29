import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'prefix'
})
export class PrefixPipe implements PipeTransform{
transform(value:string,arg:string):string{
return arg+":"+value;
}
}
