import { Component, OnInit } from '@angular/core';
import { Accessory } from '../interfaces/accessory';
import { AccessoryService } from '../services/accessory.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-accessory',
  templateUrl: './create-accessory.component.html',
  styleUrls: ['./create-accessory.component.css']
})
export class CreateAccessoryComponent implements OnInit{

  accessoryToCreate:Accessory={

    accessory_name: "",
    price: 0,
    brand: "",
    description: ""
}
  constructor(private accessoryService:AccessoryService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
  }

  save()
  {
    if(this.accessoryToCreate)
      this.accessoryService.createAccessory(this.accessoryToCreate).subscribe(()=>{alert("done")})
  }
  
  goBack(): void {
    this.location.back();
  }

}