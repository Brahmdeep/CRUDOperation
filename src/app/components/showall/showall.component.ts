import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../tasks.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  users:any=[];
  constructor(private tasks:TasksService,
  private router:Router) { }

  ngOnInit() {
    this.tasks.showPeople().then(data=>{
      this.users=data;
    },err=>{
      console.log(err);
    })
  }
  onsubmitDelete(user){
    this.tasks.deletePeople(user.emailid).then(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
    this.router.navigate(['/']); 
  }
}
