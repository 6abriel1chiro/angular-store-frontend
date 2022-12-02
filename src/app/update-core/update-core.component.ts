import { Component, OnInit,Input } from '@angular/core';
import { Core } from '../interfaces/core';
import { CoreService } from '../services/core.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-core',
  templateUrl: './update-core.component.html',
  styleUrls: ['./update-core.component.scss']
})
export class UpdateCoreComponent implements OnInit {
  @Input() coreToUpdate?:Core
  constructor(private coreService:CoreService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    this.loadCore();
  }

  loadCore()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.coreService.getCorebyID(id).subscribe((core)=>{this.coreToUpdate=core;
    console.log(core);
    })
  }
  save()
  {
    if(this.coreToUpdate)
      this.coreService.updateCore(this.coreToUpdate).subscribe(()=>{alert("done")})
  }
  deleteCore()
  {
    if(this.coreToUpdate)
    {
      this.coreService.deleteCoreUpdated(this.coreToUpdate).subscribe(()=>{alert("deleted");this.ngOnInit();})
    }
  }
  
  goBack(): void {
    this.location.back();
  }
}