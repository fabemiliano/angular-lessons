import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaEComponent } from './rota-e.component';

describe('RotaEComponent', () => {
  let component: RotaEComponent;
  let fixture: ComponentFixture<RotaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
