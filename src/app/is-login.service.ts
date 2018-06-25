import { Injectable } from '@angular/core';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {
  logged:any;
  constructor(
    private router:Router
  ) { }
  isLogin(status){
      this.logged= status;
      console.log(this.logged)
  }
  islogged(){
    if(this.logged==undefined){
      return false;
    }
    return this.logged;
  }
  logout(){
    this.logged=false;
  }
  takeback(){
    this.router.navigate(['/']);
  }
}
