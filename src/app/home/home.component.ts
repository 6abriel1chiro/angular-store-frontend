import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public cookies:CookieService, private router:Router) { }

  ngOnInit(): void {
  }

  logOut()
  {
    this.cookies.deleteAll()
    this.router.navigate(['/login']);
  }
}
