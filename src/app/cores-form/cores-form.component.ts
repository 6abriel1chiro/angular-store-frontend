import { Component, Input, OnInit } from '@angular/core';
import { Core } from '../interfaces/core';

@Component({
  selector: 'app-cores-form',
  templateUrl: './cores-form.component.html',
  styleUrls: ['./cores-form.component.css']
})
export class CoresFormComponent implements OnInit {

  @Input() currentCore?:Core

  constructor() { 
  }
  ngOnInit(): void {
  }
  
  
}