import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email: string = "";
  password: string= "";
  name: string = "";
  userPermissions: string = "";

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }
  register() {

    this.userService.register(this.name, this.email,this.password , this.userPermissions ).subscribe((token:string) => {
      console.log(token);
    });
    //console.log(this.name, this.email,this.password , this.userPermissions )

  }

}
