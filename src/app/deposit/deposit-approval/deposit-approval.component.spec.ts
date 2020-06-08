import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositApprovalComponent } from './deposit-approval.component';

describe('DepositApprovalComponent', () => {
  let component: DepositApprovalComponent;
  let fixture: ComponentFixture<DepositApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
