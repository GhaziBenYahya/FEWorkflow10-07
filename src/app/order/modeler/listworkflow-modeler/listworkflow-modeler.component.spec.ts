import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListworkflowModelerComponent } from './listworkflow-modeler.component';

describe('ListworkflowModelerComponent', () => {
  let component: ListworkflowModelerComponent;
  let fixture: ComponentFixture<ListworkflowModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListworkflowModelerComponent]
    });
    fixture = TestBed.createComponent(ListworkflowModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
