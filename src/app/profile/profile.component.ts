import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
constructor(private http:HttpClient){}
ngOnInit(){
  
this.getProfilePic()
this.getImage();
}

profile:any=[];
profilePic = '';
name:any=''
getProfilePic(){
  this.http.get("https://randomuser.me/api/").subscribe((res)=>{
    console.log(res);
    let data:any = res;
    this.profilePic =data.results[0].picture.medium;  
    this.name  =data.results[0].name.first; 
    
  })
}
getImage(){

  for(let i=0;i<12;i++){
    this.http.get("https://randomuser.me/api/").subscribe((res)=>{
      console.log(res);
      let data:any = res;
      
      console.log(data.results[0].picture);
        this.profile.push({
          img:data.results[0].picture.medium
        })               
    })
  }
}
}
