import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeComparisonComponent } from './shade-comparison.component';

describe('ShadeComparisonComponent', () => {
  let component: ShadeComparisonComponent;
  let fixture: ComponentFixture<ShadeComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
