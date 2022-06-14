import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterinComponent } from './filterin.component';

describe('FilterinComponent', () => {
  let component: FilterinComponent;
  let fixture: ComponentFixture<FilterinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
