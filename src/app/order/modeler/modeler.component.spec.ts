import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelerComponent } from './modeler.component';

describe('ModelerComponent', () => {
  let component: ModelerComponent;
  let fixture: ComponentFixture<ModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelerComponent]
    });
    fixture = TestBed.createComponent(ModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
