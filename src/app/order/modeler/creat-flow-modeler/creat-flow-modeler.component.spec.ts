import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatFlowModelerComponent } from './creat-flow-modeler.component';

describe('CreatFlowModelerComponent', () => {
  let component: CreatFlowModelerComponent;
  let fixture: ComponentFixture<CreatFlowModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatFlowModelerComponent]
    });
    fixture = TestBed.createComponent(CreatFlowModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
