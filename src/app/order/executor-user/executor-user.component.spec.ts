import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorUserComponent } from './executor-user.component';

describe('ExecutorUserComponent', () => {
  let component: ExecutorUserComponent;
  let fixture: ComponentFixture<ExecutorUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutorUserComponent]
    });
    fixture = TestBed.createComponent(ExecutorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
