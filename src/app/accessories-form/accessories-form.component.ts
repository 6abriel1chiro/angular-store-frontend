import { Component , Input, OnInit} from '@angular/core';
import { Accessory } from '../interfaces/accessory';
@Component({
  selector: 'app-accessories-form',
  templateUrl: './accessories-form.component.html',
  styleUrls: ['./accessories-form.component.css']
})
export class AccessoriesFormComponent implements OnInit {

  @Input() currentAcc?:Accessory
  constructor() { 

  }

  ngOnInit(): void {
    
  }
}
