import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullListingComponent } from './full-listing.component';

describe('FullListingComponent', () => {
  let component: FullListingComponent;
  let fixture: ComponentFixture<FullListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
