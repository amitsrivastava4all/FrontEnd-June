import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registerForm:FormGroup;
  title = 'app';
  message = "Userid is Blank....";
blackListedUsers:string[] = ["tim","kim","rim","sim"];
  ngOnInit(){
    this.registerForm = new FormGroup({
    'userinfo':new FormGroup({
    //'userlbl':new FormControl(null),
    //  FormControl(fielddefault, [synch validator (predefine + custom)],Asynch Custom Validator)
    'name':new FormControl(null,[Validators.required,Validators.pattern('[a-z]{3,10}')]),
    'username':new FormControl(null,[Validators.required,this.checkBlackListed.bind(this)]),
    'email':new FormControl(null,[Validators.required,Validators.email],this.checkUsersAsynch.bind(this)),

    })
    ,
    'remarks':new FormControl(null),
    'address':new FormArray([])  // For Dynamic Field Generation
    });
  }

  // Define Custom Asynch Validator
   checkUsersAsynch(control:FormControl):Promise<any>|Observable<any>{
      const promise = new Promise<any>((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Inside timeout ",control.value);
          if(control.value=='tim@yahoo.com'){
            console.log("Inside If ",control.value);
            resolve({'emailBlackListed':true});
          }
          else{
            resolve(null);
          }
        },4000);
      })
      return promise;  // if validation is pass , return null
   }

  // Define Custom Validator
  checkBlackListed(control:FormControl):{[key:string]:boolean}{
       if(this.blackListedUsers.indexOf(control.value)!==-1){
        return {'blackListed':true};
      }
      return null;  // if validation is pass , return null

  }


  doRegister(){
    console.log("Register Call ", this.registerForm);
  }

  // this function will call on add button click
  addAddress(){
    const addressField = new FormControl(null,Validators.required);
  /*const addressFormGroup = new FormGroup({
     'city':new FormControl(null),
     'address':new FormControl(null,Validators.required)
  }) ; */
    (<FormArray>this.registerForm.get('address')).push(addressField);
   }

}
