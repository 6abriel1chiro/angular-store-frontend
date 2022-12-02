import { Component,OnInit, Input } from '@angular/core';
import { Accessory } from '../interfaces/accessory';
import { AccessoryService } from '../services/accessory.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-accessory',
  templateUrl: './update-accessory.component.html',
  styleUrls: ['./update-accessory.component.css']
})
export class UpdateAccessoryComponent implements OnInit {
  @Input() accessoryToUpdate?:Accessory
  constructor(private coreService:AccessoryService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    this.loadAccessory();
  }

  loadAccessory()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.coreService.getAccessorybyID(id).subscribe((acc)=>{this.accessoryToUpdate=acc;
    console.log(acc);
    })
  }
  save()
  {
    if(this.accessoryToUpdate)
      this.coreService.updateAccessory(this.accessoryToUpdate).subscribe(()=>{alert("done")})
  }
  deleteCore()
  {
    if(this.accessoryToUpdate)
    {
      this.coreService.deleteAccessoryUpdated(this.accessoryToUpdate).subscribe(()=>{alert("deleted");this.ngOnInit();})
    }
  }
  
  goBack(): void {
    this.location.back();
  }
}
