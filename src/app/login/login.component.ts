import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username="";
password="";

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addButton1(){
    if(this.username==this.password)
    {
      this.router.navigate(['/employees']);
 
    }
    else{
      alert("no login");
    }
  }
}
