import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  constructor(private http:HttpClient){}
ngOnInit(){
this.getnames()
}
like:any=[];
comment:any=[];
follow:any=[];
getnames(){
  let like  =Math.round(Math.random()*6)
  for(let i=0;i<like;i++){
    this.http.get("https://randomuser.me/api/").subscribe((res)=>{
      let data:any =res;
      this.like.push({
        name:data.results[0].name.first+'_'+data.results[0].name.last,
            image:data.results[0].picture.thumbnail,
            hour:Math.round(Math.random()*6)
      })
    })
  }
  let comment  =Math.round(Math.random()*7)
  for(let i=0;i<comment;i++){
    this.http.get("https://randomuser.me/api/").subscribe((res)=>{
      let data:any =res;
      this.comment.push({
        name:data.results[0].name.first+'_'+data.results[0].name.last,
            image:data.results[0].picture.thumbnail,
            hour:Math.round(Math.random()*6)
      })
    })
  }
  let follow  =Math.round(Math.random()*7)
  for(let i=0;i<follow;i++){
    this.http.get("https://randomuser.me/api/").subscribe((res)=>{
      let data:any =res;
      this.follow.push({
        name:data.results[0].name.first+'_'+data.results[0].name.last,
            image:data.results[0].picture.thumbnail,
            hour:Math.round(Math.random()*6)
      })
    })
  }
}

}
