import { Component, OnInit } from '@angular/core';
import { Phone } from '../Phone';
import { PhonesService } from '../services/phones.service';
@Component({
  selector: 'app-create-phone',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.css']
})
export class CreatePhoneComponent implements OnInit {
  phones: Phone[] = [];


  constructor(private phonesService:PhonesService) { }

  ngOnInit(): void {

    this.getPhones();
  }
  getPhones():void{
    this.phonesService.getPhones()
    .subscribe(phones => this.phones = phones);
  }

  add(marca:string,modelo:string,gbalmacenamiento:string,gbram: string): void{
    let phone= {} as Phone;
    phone.marca=marca.trim();
    phone.modelo=modelo.trim();
    phone.gbalmacenamiento= +(gbalmacenamiento).trim();
    phone.gbram= +(gbram).trim();
    let mod =phone.modelo.trim();
    if(!mod){return}
    this.phonesService.addPhone(phone)
      .subscribe(veg => {
        this.phones.push(veg);
    });
  }
  delete(phone: Phone): void{
    this.phones = this.phones.filter(p => p !== phone);
    this.phonesService.deletePhone(phone.id).subscribe();
  }


}