import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultcastComponent } from './multcast.component';

describe('MultcastComponent', () => {
  let component: MultcastComponent;
  let fixture: ComponentFixture<MultcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
