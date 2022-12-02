import { Component, OnInit } from '@angular/core';
import { Phone } from '../Phone';
import { PhonesService } from '../services/phones.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-phone',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.css']
})
export class CreatePhoneComponent implements OnInit {
  phone:Phone={
    marca: '',
    modelo: '',
    gbalmacenamiento: 0,
    gbram: 0,
    core_id:0,
    accessory_ids: []
}
accessory_ids_input = ""

  constructor(private phonesService:PhonesService, private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {

  }

  add(): void{
    let accessories_str = this.accessory_ids_input.split(", ")
    this.phone.accessory_ids=[]
    for(let i = 0; i<accessories_str.length; i++)
    {
      this.phone.accessory_ids.push(parseInt(accessories_str[i])) 
    }
     this.phonesService.addPhone(this.phone).subscribe(()=>{alert("done")});
  }

  goBack(): void {
    this.location.back();
  }

}