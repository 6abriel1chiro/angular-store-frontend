import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesFormComponent } from './accessories-form.component';

describe('AccessoriesFormComponent', () => {
  let component: AccessoriesFormComponent;
  let fixture: ComponentFixture<AccessoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
