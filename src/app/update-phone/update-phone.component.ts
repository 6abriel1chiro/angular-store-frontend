import { Component , OnInit,Input } from '@angular/core';

import { Phone } from '../Phone';
import { PhonesService } from '../services/phones.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent implements OnInit {
  @Input() phoneToUpdate?:Phone
  accessory_ids_input=""
  constructor(private phoneService:PhonesService,private router:Router,private route: ActivatedRoute,private location: Location) {}

  ngOnInit(): void {
    if(this.phoneToUpdate)
    {
      this.accessory_ids_input=this.phoneToUpdate.accessory_ids.toString();
    }
    this.getPhone()
    //this.loadCore();
  }

  getPhone()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.phoneService.getPhone(id).subscribe((phone)=>
    {
      
      this.phoneToUpdate=phone;
      this.phoneToUpdate.core_id=phone.core.id;
      this.phoneToUpdate.accessories.forEach((accessorie:any)=>{
        this.accessory_ids_input+=accessorie.id+", "
      })
    }
    )

  }
  save()
  {
    
    if(this.phoneToUpdate && this.phoneToUpdate.id)
    {
      let accessories_str = this.accessory_ids_input.split(", ")
      this.phoneToUpdate.accessory_ids=[]
      for(let i = 0; i<accessories_str.length; i++)
      {
        this.phoneToUpdate.accessory_ids.push(parseInt(accessories_str[i])) 
      }
      console.log(this.phoneToUpdate);
      
      this.phoneService.updatePhone(this.phoneToUpdate).subscribe(()=>{alert("done")})
    }
  }
  deleteCore()
  {
    if(this.phoneToUpdate && this.phoneToUpdate.id)
    {
      this.phoneService.deletePhone(this.phoneToUpdate.id).subscribe(()=>{alert("deleted");this.location.replaceState('/phones');})
    }
  }
  
  goBack(): void {
    this.router.navigate(['/phones']);
    
  }
}