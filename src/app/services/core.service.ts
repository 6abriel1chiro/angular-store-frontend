import { getLocaleCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Core } from '../interfaces/core'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { 
  }
  
  getCores():Observable<Core[]>{
    return this.http.get<Core[]>('/cores');
  }
  getCorebyID(id:number):Observable<Core>{
    return this.http.get<Core>('/cores/'+id);
  }
  updateCore(modifiedCore:Core):Observable<Core>{
    return this.http.patch<Core>('/cores/'+modifiedCore.id,modifiedCore);
  }
  createCore(newCore:Core):Observable<Core>{
    return this.http.post<Core>('/cores',newCore);
  }
  deleteCore(id:number):Observable<Core>{
    return this.http.delete<Core>('/cores/'+id);
  }
  deleteCoreUpdated(modifiedCore:Core):Observable<Core>{
    return this.http.delete<Core>('/cores/'+modifiedCore.id);
  }
}