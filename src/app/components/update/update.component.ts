import { Component, OnInit } from '@angular/core';
import {IsLoginService } from '../../is-login.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {TasksService} from '../../tasks.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  email:string;
  pass:string;
  constructor(
    private isLogin:IsLoginService,
    private flashMessage:FlashMessagesService,
    private tasks:TasksService
  ) { }

  ngOnInit() {
    if(!this.isLogin.islogged()){
      console.log(this.isLogin.islogged());
      this.flashMessage.show('Login First',{cssClass:'alert-danger',timeout:3000});  
      this.isLogin.takeback();    
    }else{
      console.log(this.isLogin.islogged());
      this.flashMessage.show('Welcome Home ',{cssClass:'alert-Success',timeout:3000});  
    }
  }

  onupdateSubmit(){
    console.log(this.email);
    this.tasks.updatePerson(this.email,this.pass).then(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }



}
