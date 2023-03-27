import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insta';
  signed:boolean=false;
  newItemEvent(event:any){
    this.signed = true;
  }
}
