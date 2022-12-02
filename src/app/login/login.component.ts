import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";

  constructor(public userService: UsersService, private router:Router, private CookieService: CookieService) { }

  ngOnInit(): void {

  }
  login():void {
    this.userService.login(this.email,this.password ).subscribe((data) => {
      this.router.navigate(['']);
      this.CookieService.set('token', data.token)
    });
  }


goRegister():void {
  this.router.navigate(['/register']);


}


}
