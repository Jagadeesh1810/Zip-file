import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  signed(){
this.newItemEvent.emit('done')
  }

  name: string='';
  email: string='';
  password:string =''

  submitForm() {
    if (!this.name || !this.email||!this.password) {
      alert('Please fill out all required fields.');
      return;
    }else{
      this.signed()
    }}

  
   validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (name?.innerHTML == "") {
      alert("Name must be filled out");
      return false;
    }

    if (email?.innerHTML == "") {
      alert("Email must be filled out");
      return false;
    }

    if (password?.innerHTML == "") {
      alert("Password must be filled out");
      return false;
    }

    
    this.signed()
    return true;
  }
}
