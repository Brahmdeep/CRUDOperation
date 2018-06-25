import { Component, OnInit } from '@angular/core';
import{TasksService} from '../../tasks.service';
import {FlashMessagesService} from 'angular2-flash-messages'
import {ValidateService} from '../../validate.service'
import{IsLoginService} from '../../is-login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  pass:string;
 
  personVal:any;

  constructor(private tasksService:TasksService,
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private isLoginService:IsLoginService) { }
  
  ngOnInit() {
  }


  onloginSubmit(){
    var i:number;
    var flag=false;
    
    const person={
    email:this.email,
    pass:this.pass,
    }
    if(!this.validateService.validateEmail(person.email)){
      this.flashMessage.show('Please fill email in proper email format',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    this.tasksService.getPerson(this.email).then(data=>{
      this.personVal=person;
      if(data[0].emailid!=undefined){
        if(data[0].password==this.personVal.pass){
          this.flashMessage.show('successfull login',{cssClass:'alert-success',timeout:3000});
          this.isLoginService.isLogin(true);
          this.isLoginService.takeback();    
      console.log(this.isLoginService.islogged());
          
         }else{
         this.flashMessage.show('enter correct password',{cssClass:'alert-danger',timeout:3000});
        }
      }else{
          this.flashMessage.show('enter correct email',{cssClass:'alert-danger',timeout:3000});
      }    
    },err=>{
      console.log(err);
    })
  }

}
