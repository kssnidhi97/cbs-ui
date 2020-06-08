import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundShareComponent } from './refund-share.component';

describe('RefundShareComponent', () => {
  let component: RefundShareComponent;
  let fixture: ComponentFixture<RefundShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
