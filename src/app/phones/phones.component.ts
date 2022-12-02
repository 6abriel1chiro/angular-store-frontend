import { Component, OnInit } from '@angular/core';
import { Phone } from '../Phone';
import { PhonesService } from '../services/phones.service';


@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones: Phone[] = [];


  constructor(private phonesService:PhonesService) { }

  ngOnInit(): void {

    this.getPhones();
  }
  getPhones():void{
    this.phonesService.getPhones()
    .subscribe(phones => this.phones = phones);
  }


  



}
