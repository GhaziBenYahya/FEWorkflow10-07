import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchModelerComponent } from './branch-modeler.component';

describe('BranchModelerComponent', () => {
  let component: BranchModelerComponent;
  let fixture: ComponentFixture<BranchModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchModelerComponent]
    });
    fixture = TestBed.createComponent(BranchModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
