import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { resolve } from 'q';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apibaseurl:string='';
  constructor(public http:HttpClient) {
    this.apibaseurl='http://localhost:3000/api/'
   }
   getPeople(){
     return new Promise(resolve=>{
       this.http.get(this.apibaseurl+'People').subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
       })
     })
   }
   getPerson(email){
     return new Promise(resolve=>{
       this.http.get('http://localhost:4600/routes/getperson/'+email).subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
       })
     })
   }
  
   addPeople(person){
    return new Promise(resolve=>{
      this.http.post('http://localhost:4600/routes/addperson',person).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);
      })
    })
   }

   updatePerson(mail,pass){
     console.log(mail,pass);
     return new Promise(resolve=>{
       this.http.put('http://localhost:4600/routes/updateperson/'+mail+'/'+pass,mail).subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
       })
     })
   }
   showPeople(){
     return new Promise(resolve=>{
       this.http.get('http://localhost:4600/routes/getall').subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
       })
     })
   }
   deletePeople(email){
     return new Promise(resolve=>{
       this.http.delete('http://localhost:4600/routes/delete/'+email).subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
       })
     })
   }
}
