import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhoneComponent } from './create-phone.component';

describe('CreatePhoneComponent', () => {
  let component: CreatePhoneComponent;
  let fixture: ComponentFixture<CreatePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
