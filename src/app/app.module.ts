import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import{ValidateService} from './validate.service'
import{FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import { CommonModule } from '@angular/common';
import {IsLoginService} from './is-login.service';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ShowallComponent } from './components/showall/showall.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UpdateComponent,
    DeleteComponent,
    ShowallComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'showall',component:ShowallComponent},
      {path:'delete',component:DeleteComponent},
      {path:'signup',component:SignupComponent,},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'update',component:UpdateComponent}
    ]),
    HttpClientModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    CommonModule
  ],
  providers: [ValidateService,FlashMessagesService,IsLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
