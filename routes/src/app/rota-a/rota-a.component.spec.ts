import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaAComponent } from './rota-a.component';

describe('RotaAComponent', () => {
  let component: RotaAComponent;
  let fixture: ComponentFixture<RotaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
