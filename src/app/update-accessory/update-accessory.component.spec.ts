import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccessoryComponent } from './update-accessory.component';

describe('UpdateAccessoryComponent', () => {
  let component: UpdateAccessoryComponent;
  let fixture: ComponentFixture<UpdateAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccessoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
