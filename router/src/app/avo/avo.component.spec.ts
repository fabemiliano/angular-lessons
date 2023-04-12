import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoComponent } from './avo.component';

describe('AvoComponent', () => {
  let component: AvoComponent;
  let fixture: ComponentFixture<AvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
