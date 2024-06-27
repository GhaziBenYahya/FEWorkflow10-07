import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInfoModelerComponent } from './step-info-modeler.component';

describe('StepInfoModelerComponent', () => {
  let component: StepInfoModelerComponent;
  let fixture: ComponentFixture<StepInfoModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepInfoModelerComponent]
    });
    fixture = TestBed.createComponent(StepInfoModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
