import { NgModule } from "@angular/core";
import {MyComp2Component} from './mycomp2.component';
import {ChildComponent as ShortName} from './child.component';
@NgModule(
  {
    declarations:[MyComp2Component,ShortName],
    exports:[MyComp2Component,ShortName]
  }
)
export class AdminModule{

}
