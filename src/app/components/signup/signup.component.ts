import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../validate.service'
import {TasksService} from '../../tasks.service'
import {FlashMessagesService} from 'angular2-flash-messages'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string;
  pass:string;
  Name:string;
  constructor(private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private taskService:TasksService
  ) { }

  ngOnInit() {

  }
  onRegisterSubmit(){
    let person={
      email:this.email,
      pass:this.pass,
      name:this.Name
    }
    if(!this.validateService.validateRegister(person)){
      this.flashMessage.show('Please fill all the "Fields"',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    if(!this.validateService.validateEmail(person.email)){
      this.flashMessage.show('Please fill email in proper email format',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    
    this.taskService.addPeople(person).then(data=>{
      console.log(data);
    })
    
    console.log(person.email + person.pass+ person.name);
  }
  

}
