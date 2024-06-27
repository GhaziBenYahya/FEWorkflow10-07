import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkflowExComponent } from './list-workflow-ex.component';

describe('ListWorkflowExComponent', () => {
  let component: ListWorkflowExComponent;
  let fixture: ComponentFixture<ListWorkflowExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWorkflowExComponent]
    });
    fixture = TestBed.createComponent(ListWorkflowExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
