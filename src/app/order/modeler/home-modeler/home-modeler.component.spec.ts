import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModelerComponent } from './home-modeler.component';

describe('HomeModelerComponent', () => {
  let component: HomeModelerComponent;
  let fixture: ComponentFixture<HomeModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeModelerComponent]
    });
    fixture = TestBed.createComponent(HomeModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
