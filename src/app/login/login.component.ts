import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";

  constructor(public userService: UsersService) { }

  ngOnInit(): void {

  }
  login():void {
    this.userService.login(this.email,this.password ).subscribe((token:string) => {
      console.log(token);
    });
  }
}
