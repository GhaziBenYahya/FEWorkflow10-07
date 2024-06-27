import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBranchModelerComponent } from './add-branch-modeler.component';

describe('AddBranchModelerComponent', () => {
  let component: AddBranchModelerComponent;
  let fixture: ComponentFixture<AddBranchModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBranchModelerComponent]
    });
    fixture = TestBed.createComponent(AddBranchModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
