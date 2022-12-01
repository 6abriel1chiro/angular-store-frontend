import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesDetailComponent } from './phones-detail.component';

describe('PhonesDetailComponent', () => {
  let component: PhonesDetailComponent;
  let fixture: ComponentFixture<PhonesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
