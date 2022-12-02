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
    return this.http.get<Accessory[]>('/accessory');
  }
  getAccessorybyID(id:number):Observable<Accessory>{
    return this.http.get<Accessory>('/accessory/'+id);
  }
  updateAccessory(modifiedAccessory:Accessory):Observable<Accessory>{
    return this.http.patch<Accessory>('/accessory/'+modifiedAccessory.id,modifiedAccessory);
  }
  createAccessory(newAccessory:Accessory):Observable<Accessory>{
    return this.http.post<Accessory>('/accessory',newAccessory);
  }
  deleteAccessory(id:number):Observable<Accessory>{
    return this.http.delete<Accessory>('/accessory/'+id);
  }
  deleteAccessoryUpdated(modifiedAccessory:Accessory):Observable<Accessory>{
    return this.http.delete<Accessory>('/accessory/'+modifiedAccessory.id);
  }
}
