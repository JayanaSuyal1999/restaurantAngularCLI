import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIngComponent } from './show-ing.component';

describe('ShowIngComponent', () => {
  let component: ShowIngComponent;
  let fixture: ComponentFixture<ShowIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
