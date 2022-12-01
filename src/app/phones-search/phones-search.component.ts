import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged,switchMap } from 'rxjs/operators';
import { Phone } from '../Phone';
import { PhonesService } from '../services/phones.service';
@Component({
  selector: 'app-phones-search',
  templateUrl: './phones-search.component.html',
  styleUrls: ['./phones-search.component.css']
})
export class PhonesSearchComponent implements OnInit {
  phones$!: Observable<Phone[]>;
  private searchElems = new Subject<string>();

  constructor(private phonesService:PhonesService) { }

  search(elem:string):void{
    this.searchElems.next(elem);
  }

  ngOnInit(): void {
    this.phones$ = this.searchElems.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((elem:string) => this.phonesService.searchPhonees(elem))
    )
  }

}
