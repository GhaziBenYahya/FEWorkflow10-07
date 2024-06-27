import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkflowModelerComponent } from './create-workflow-modeler.component';

describe('CreateWorkflowModelerComponent', () => {
  let component: CreateWorkflowModelerComponent;
  let fixture: ComponentFixture<CreateWorkflowModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWorkflowModelerComponent]
    });
    fixture = TestBed.createComponent(CreateWorkflowModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
