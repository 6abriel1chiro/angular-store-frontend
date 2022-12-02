import { Component, OnInit } from '@angular/core';
import { Accessory } from '../interfaces/accessory';
import { AccessoryService } from '../services/accessory.service';
@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit {

  constructor(private coreService:AccessoryService) { }
  accList?:Accessory[];
  selectedAcc?:Accessory;
  ngOnInit(): void {
    this.loadCores()
  }
  loadCores():void{
    this.coreService.getAccessorys().subscribe((acc)=>{this.accList=acc;})

  }
  selectCore(selectedAcc:Accessory):void{
    this.selectedAcc=selectedAcc
  }

}
