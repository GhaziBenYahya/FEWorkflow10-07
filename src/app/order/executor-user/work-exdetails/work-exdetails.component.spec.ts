import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExdetailsComponent } from './work-exdetails.component';

describe('WorkExdetailsComponent', () => {
  let component: WorkExdetailsComponent;
  let fixture: ComponentFixture<WorkExdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExdetailsComponent]
    });
    fixture = TestBed.createComponent(WorkExdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
