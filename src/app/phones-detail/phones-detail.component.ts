import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Phone } from '../Phone';
import { PhonesService } from '../services/phones.service';
@Component({
  selector: 'app-phones-detail',
  templateUrl: './phones-detail.component.html',
  styleUrls: ['./phones-detail.component.css']
})
export class PhonesDetailComponent implements OnInit {

  phone: Phone | undefined;
  constructor(
    private route: ActivatedRoute,
    private phonesService: PhonesService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getPhone()
  }

  getPhone():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.phonesService.getPhone(id)
    .subscribe(phone => this.phone = phone);
  }

  goBack():void{
    this.location.back();
  }

}
