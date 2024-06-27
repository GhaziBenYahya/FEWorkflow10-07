import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkflowModelerComponent } from './addworkflow-modeler.component';

describe('AddworkflowModelerComponent', () => {
  let component: AddworkflowModelerComponent;
  let fixture: ComponentFixture<AddworkflowModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddworkflowModelerComponent]
    });
    fixture = TestBed.createComponent(AddworkflowModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
