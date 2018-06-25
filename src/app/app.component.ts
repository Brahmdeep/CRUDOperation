import { Component } from '@angular/core';
import {IsLoginService} from './is-login.service';
import {FlashMessagesService} from 'angular2-flash-messages'

import{Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  but='home';
  constructor(private islog:IsLoginService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }
  ngOnInit() {
    console.log(this.islog.islogged());
  }
  
 onclickhome(){
   console.log(this.islog.islogged());
   if(!this.islog.islogged()){
    this.flashMessage.show('Please Login First',{cssClass:'alert-danger',timeout:3000});
   }else{
    this.router.navigate(['/home']);
   }
 }
 logout(){
   this.islog.logout();
 }
 onclickupdate(){
  console.log(this.islog.islogged());
  if(!this.islog.islogged()){
   this.flashMessage.show('Please Login First',{cssClass:'alert-danger',timeout:3000});
  }else{
   this.router.navigate(['/update']);
  }
 }
}
