import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private route:Router){}
buttons=[
  {
    name:'Home',
    icon:'home'
  },{
    name:'Notification',
    icon:'favorite'
  },{
    name:'Profile',
    icon:'person'
  },{
    name:'Signup',
    icon:'fingerprint'
  },{
    name:'Analytics',
    icon:'show_chart'
  }
];
changePath(path:any){
  let routeData = '/'+path
  if(path == 'Signup'){

  }else{
    this.route.navigate([routeData])
  }
}
}
