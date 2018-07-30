import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  submitIt(formId):void{
    //console.log('Form ',formId.valid);
  if(formId.invalid){
    this.title = "Can't Submit this Form Errors";
  }
  else{
    this.title = "Submit this form";
  }
  //return false;
  }
}
