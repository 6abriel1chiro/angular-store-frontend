import { Injectable } from '@angular/core';
import { getLocaleCurrencySymbol } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Accessory } from '../interfaces/accessory';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {

  constructor(private http:HttpClient)  {
   }

   getAccessorys():Observable<Accessory[]>{
    return this.http.get<Accessory[]>('/api/accessories');
  }
  getAccessorybyID(id:number):Observable<Accessory>{
    return this.http.get<Accessory>('/api/accessories/'+id);
  }
  updateAccessory(modifiedAccessory:Accessory):Observable<Accessory>{
    return this.http.patch<Accessory>('/api/accessories/'+modifiedAccessory.id,modifiedAccessory);
  }
  createAccessory(newAccessory:Accessory):Observable<Accessory>{
    return this.http.post<Accessory>('/api/accessories',newAccessory);
  }
  deleteAccessory(id:number):Observable<Accessory>{
    return this.http.delete<Accessory>('/api/accessories/'+id);
  }
  deleteAccessoryUpdated(modifiedAccessory:Accessory):Observable<Accessory>{
    return this.http.delete<Accessory>('/api/accessories/'+modifiedAccessory.id);
  }
}
