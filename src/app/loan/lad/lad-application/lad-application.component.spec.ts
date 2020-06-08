import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadApplicationComponent } from './lad-application.component';

describe('LadApplicationComponent', () => {
  let component: LadApplicationComponent;
  let fixture: ComponentFixture<LadApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
