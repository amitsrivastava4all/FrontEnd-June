import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'prefix'
})
export class MyPipe implements PipeTransform{
  transform(str,arg,arg2){
    console.log("Arg ",arg," Arg2 ",arg2);
    return arg + str + arg2;
  }

}
