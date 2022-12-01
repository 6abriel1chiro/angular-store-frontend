import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesSearchComponent } from './phones-search.component';

describe('PhonesSearchComponent', () => {
  let component: PhonesSearchComponent;
  let fixture: ComponentFixture<PhonesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
