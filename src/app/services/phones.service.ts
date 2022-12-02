import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Phone } from '../Phone';
import {Observable, of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  private phoneUrl = 'http://localhost:3000/phones';

  constructor(private httpClient:HttpClient) { }

  getPhones(): Observable<Phone[]>{
    return this.httpClient.get<Phone[]>(this.phoneUrl);
  }

  getPhone(id:number): Observable<Phone>{
    const url = `${this.phoneUrl}/${id}`;
    return this.httpClient.get<Phone>(url);  }

    addPhone(phone: Phone): Observable<Phone>
    {
      return this.httpClient.post<Phone>(this.phoneUrl,phone);
    }
    deletePhone(id: number): Observable<Phone>{
      const url = `${this.phoneUrl}/${id}`;
      return this.httpClient.delete<Phone>(url);
    }
    updatePhone(Phone: Phone): Observable<any>{
      return this.httpClient.put(this.phoneUrl,Phone);
    }
    searchPhonees(term:string): Observable<Phone[]>{
      if(!term.trim()){
        return of([]);
      }
      return this.httpClient.get<Phone[]>(`${this.phoneUrl}/?nombre=${term}`);
    }



}
