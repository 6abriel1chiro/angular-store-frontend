import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoreComponent } from './update-core.component';

describe('UpdateCoreComponent', () => {
  let component: UpdateCoreComponent;
  let fixture: ComponentFixture<UpdateCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
