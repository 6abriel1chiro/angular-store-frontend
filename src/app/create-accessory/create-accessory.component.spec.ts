import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccessoryComponent } from './create-accessory.component';

describe('CreateAccessoryComponent', () => {
  let component: CreateAccessoryComponent;
  let fixture: ComponentFixture<CreateAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccessoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
