import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //login(email:string , password: string): Observable<any> {
    //return this.http.post("https://reqres.in/api/login", email,password);
 // }


  register(name:string,email:string , password: string, userPermissions:string): Observable<any> {
    return this.http.post("https://localhost:3000/auth/register", {Name:name, Email:email, Password:password, UserPermissons:userPermissions });
  }
}