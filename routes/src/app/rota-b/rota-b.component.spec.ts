import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaBComponent } from './rota-b.component';

describe('RotaBComponent', () => {
  let component: RotaBComponent;
  let fixture: ComponentFixture<RotaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
