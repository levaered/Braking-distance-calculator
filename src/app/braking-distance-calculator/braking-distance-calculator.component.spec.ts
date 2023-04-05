import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakingDistanceCalculatorComponent } from './braking-distance-calculator.component';

describe('BrakingDistanceCalculatorComponent', () => {
  let component: BrakingDistanceCalculatorComponent;
  let fixture: ComponentFixture<BrakingDistanceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrakingDistanceCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrakingDistanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
