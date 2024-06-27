import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkflowModelerComponent } from './editworkflow-modeler.component';

describe('EditworkflowModelerComponent', () => {
  let component: EditworkflowModelerComponent;
  let fixture: ComponentFixture<EditworkflowModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditworkflowModelerComponent]
    });
    fixture = TestBed.createComponent(EditworkflowModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
