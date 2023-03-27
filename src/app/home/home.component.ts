import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getApiData();
  }
  storyImages:any=[];
  feedData:any=[];
  follow:any=[];
  getApiData(){
    for(let i=0;i<10;i++){
      this.http.get("https://randomuser.me/api/").subscribe((res)=>{
        console.log(res);
        let data:any = res;
        console.log(data.results[0].picture);
          this.storyImages.push({
            large:data.results[0].picture.large,
            medium:data.results[0].picture.medium,
            thumb:data.results[0].picture.thumbnail
          })               
      })
    }
    for(let i=0;i<10;i++){
      this.http.get("https://randomuser.me/api/").subscribe((res)=>{
        console.log(res);
        let data:any = res;
          this.feedData.push({
            name:data.results[0].name.first+'_'+data.results[0].name.last,
            image:data.results[0].picture.thumbnail,
            feed:data.results[0].picture.large
          })
          console.log(this.feedData);
          
        
      })
    }
    for(let i=0;i<5;i++){
      this.http.get("https://randomuser.me/api/").subscribe((res)=>{
        let data:any = res;
        this.follow.push({
          name:data.results[0].name.first+'_'+data.results[0].name.last,
            image:data.results[0].picture.thumbnail,
        })
      })
    }
  }
}
