import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaCComponent } from './rota-c.component';

describe('RotaCComponent', () => {
  let component: RotaCComponent;
  let fixture: ComponentFixture<RotaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
