import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresFormComponent } from './cores-form.component';

describe('CoresFormComponent', () => {
  let component: CoresFormComponent;
  let fixture: ComponentFixture<CoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
