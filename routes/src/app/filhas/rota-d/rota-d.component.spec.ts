import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaDComponent } from './rota-d.component';

describe('RotaDComponent', () => {
  let component: RotaDComponent;
  let fixture: ComponentFixture<RotaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
