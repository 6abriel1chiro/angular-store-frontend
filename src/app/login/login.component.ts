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
  errorMessage: string = '';
  loginAttempts: number = 0; // variable para contar los intentos de inicio de sesión
  timer: any; // variable para almacenar el temporizador

  constructor(public userService: UsersService, private router:Router, private CookieService: CookieService) { }

  ngOnInit(): void {

  }

  canonicalizeData(){
    let loginData={email:this.email.toString().replace(/ /g,''),password:this.password.toString().replace(/ /g,'')}
    return loginData
  }
  validateLoginData(loginData:any){
    if (loginData.email==""){
      this.errorMessage = "El campo de mail esta vacio";
      return false
    }
    if (loginData.password==""){
      this.errorMessage = "El campo de password esta vacio";
      return false
    }
    return true
  }
  login(): void {
    if (this.loginAttempts >= 4) {
      // Si ya se han hecho 4 intentos, mostrar mensaje de error y esperar 30 segundos antes de permitir otro intento
      this.errorMessage = "Demasiados intentos. Intente de nuevo en 30 segundos.";
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.loginAttempts = 0;
        this.errorMessage = '';
      }, 30000);
      return;
    }
    let loginData=this.canonicalizeData()
    if (!this.validateLoginData(this.login)){return;}
    this.userService.login(loginData.email, loginData.password).subscribe(
      (data) => {
        if (data.token) {
          // Save the token in a cookie with Secure and HttpOnly flags
          this.CookieService.set('token', data.token,  60*60*12 , '/', undefined, true, 'Strict');
          this.router.navigate(['']);
        } else {
          // Display error message if the server did not return a token
          this.errorMessage = "Authentication failed";
          this.loginAttempts++;
        }
      },
      (error) => {
        // Display error message if there was an error during the authentication process
        this.errorMessage = "Authentication failed";
        this.loginAttempts++;
      }
    );
  }

  goRegister():void {
    this.router.navigate(['/register']);
  }

}
