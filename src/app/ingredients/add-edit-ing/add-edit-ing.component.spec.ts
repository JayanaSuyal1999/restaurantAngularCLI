import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIngComponent } from './add-edit-ing.component';

describe('AddEditIngComponent', () => {
  let component: AddEditIngComponent;
  let fixture: ComponentFixture<AddEditIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
