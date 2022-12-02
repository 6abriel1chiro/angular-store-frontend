import { Component, OnInit } from '@angular/core';
import { Core } from '../interfaces/core';
import { CoreService } from '../services/core.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-core',
  templateUrl: './create-core.component.html',
  styleUrls: ['./create-core.component.css']
})

export class CreateCoreComponent implements OnInit {
  coreToCreate:Core={
    Nombre:"",
    Marca:"",
    FrecuenciaMhz:0,
    Nucleos:0,
    Hilos:0,
    Zocalo:"",
    Cache:0
}
  constructor(private coreService:CoreService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
  }

  save()
  {
    if(this.coreToCreate)
      this.coreService.createCore(this.coreToCreate).subscribe(()=>{alert("done")})
  }
  
  goBack(): void {
    this.location.back();
  }

}