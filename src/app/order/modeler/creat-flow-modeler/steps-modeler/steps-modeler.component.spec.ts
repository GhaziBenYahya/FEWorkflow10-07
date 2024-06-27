import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsModelerComponent } from './steps-modeler.component';

describe('StepsModelerComponent', () => {
  let component: StepsModelerComponent;
  let fixture: ComponentFixture<StepsModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsModelerComponent]
    });
    fixture = TestBed.createComponent(StepsModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
