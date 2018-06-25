import { Component, OnInit } from '@angular/core';
import {IsLoginService} from '../../is-login.service';
import {FlashMessagesService} from 'angular2-flash-messages'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private isLogin:IsLoginService,
    private flashMessage:FlashMessagesService,
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

}
