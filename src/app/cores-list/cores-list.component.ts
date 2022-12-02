import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';
import { Core } from '../interfaces/core';

@Component({
  selector: 'app-cores-list',
  templateUrl: './cores-list.component.html',
  styleUrls: ['./cores-list.component.css']
})
export class CoresListComponent implements OnInit {

  constructor(private coreService:CoreService) { }
  coresList?:Core[];
  selectedCore?:Core;
  ngOnInit(): void {
    this.loadCores()
  }
  loadCores():void{
    this.coreService.getCores().subscribe((cores)=>{this.coresList=cores;})

  }
  selectCore(selectedCore:Core):void{
    this.selectedCore=selectedCore
  }

}